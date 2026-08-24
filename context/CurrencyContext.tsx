'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'INR' | 'AED' | 'CHF' | 'JPY' | 'SGD' | 'AUD' | 'CAD';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  flag: string;
  rateFromUSD: number; // 1 USD = X Currency
}

export const SUPPORTED_CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸', rateFromUSD: 1 },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺', rateFromUSD: 0.92 },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧', rateFromUSD: 0.79 },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳', rateFromUSD: 86.5 },
  AED: { code: 'AED', symbol: 'AED ', name: 'UAE Dirham', flag: '🇦🇪', rateFromUSD: 3.67 },
  CHF: { code: 'CHF', symbol: 'CHF ', name: 'Swiss Franc', flag: '🇨🇭', rateFromUSD: 0.89 },
  JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵', rateFromUSD: 152.0 },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', flag: '🇸🇬', rateFromUSD: 1.34 },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺', rateFromUSD: 1.55 },
  CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦', rateFromUSD: 1.41 },
};

interface CurrencyContextType {
  currency: CurrencyInfo;
  setCurrencyCode: (code: CurrencyCode) => void;
  formatPrice: (amountInUSD: number) => string;
  convertPrice: (amountInUSD: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: SUPPORTED_CURRENCIES.USD,
  setCurrencyCode: () => {},
  formatPrice: (amountInUSD: number) => `$${amountInUSD.toLocaleString()}`,
  convertPrice: (amountInUSD: number) => amountInUSD,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currencyCode, setCurrencyCodeState] = useState<CurrencyCode>('USD');

  useEffect(() => {
    const saved = localStorage.getItem('aurelia_currency') as CurrencyCode;
    if (saved && SUPPORTED_CURRENCIES[saved]) {
      setCurrencyCodeState(saved);
    }
  }, []);

  const setCurrencyCode = (code: CurrencyCode) => {
    if (SUPPORTED_CURRENCIES[code]) {
      setCurrencyCodeState(code);
      localStorage.setItem('aurelia_currency', code);
    }
  };

  const currency = SUPPORTED_CURRENCIES[currencyCode] || SUPPORTED_CURRENCIES.USD;

  const convertPrice = (amountInUSD: number) => {
    return Math.round(amountInUSD * currency.rateFromUSD);
  };

  const formatPrice = (amountInUSD: number) => {
    const converted = convertPrice(amountInUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrencyCode, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
