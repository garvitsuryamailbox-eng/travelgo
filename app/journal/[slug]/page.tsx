'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookOpen, Clock, ArrowRight, Sparkles, ChevronRight, CheckCircle2, Share2 } from 'lucide-react';
import AureliaNavbar from '@/components/AureliaNavbar';
import AureliaFooter from '@/components/AureliaFooter';
import { journalArticlesData, luxuryStaysData } from '@/data/aureliaData';

export default function ArticleSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const article = journalArticlesData.find((a) => a.slug === resolvedParams.slug) || journalArticlesData[0];
  const relatedStay = luxuryStaysData.find((s) => s.id === article.relatedStayId);

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f4f2ed]">
      <AureliaNavbar />

      <main className="flex-1 pt-28 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-8">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#eae6df]/50">
            <Link href="/" className="hover:text-[#c5a880] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#c5a880]/40" />
            <Link href="/journal" className="hover:text-[#c5a880] transition-colors">Journal</Link>
            <ChevronRight className="w-3 h-3 text-[#c5a880]/40" />
            <span className="text-[#c5a880] font-semibold truncate max-w-xs">{article.title}</span>
          </div>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880]/30 bg-[#12151e] text-[#c5a880] text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
            <span>{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#faf9f6] tracking-tight leading-[1.1] mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-[#c5a880] italic font-serif max-w-2xl mx-auto font-light leading-relaxed mb-6">
            &ldquo;{article.subtitle}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-[#eae6df]/60 font-light border-y border-[#c5a880]/15 py-3">
            <span>By <strong className="text-[#faf9f6]">{article.author}</strong> ({article.authorRole})</span>
            <span>•</span>
            <span>Published {article.date}</span>
          </div>
        </div>

        {/* Full-Bleed Hero Image */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-14">
          <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden bg-slate-950 border border-[#c5a880]/20 shadow-2xl">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              priority
              className="object-cover brightness-90"
            />
          </div>
        </div>

        {/* Editorial Story Body */}
        <article className="max-w-3xl mx-auto px-6 sm:px-8 space-y-8 text-base sm:text-lg text-[#eae6df]/85 font-light leading-relaxed">
          <p className="text-xl sm:text-2xl font-serif text-[#faf9f6] leading-relaxed italic border-l-2 border-[#c5a880] pl-6 py-1">
            {article.excerpt}
          </p>

          {article.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-8 rounded-3xl bg-[#12151e] border border-[#c5a880]/25 my-10 space-y-4 shadow-xl">
              <h3 className="font-serif text-2xl text-[#faf9f6] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#c5a880]" />
                <span>Curator’s Key Takeaways</span>
              </h3>
              <ul className="space-y-3 text-sm text-[#eae6df]/80 font-light">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Stay Recommendation */}
          {relatedStay && (
            <div className="p-8 rounded-3xl bg-[#12151e] border border-[#c5a880]/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                  Recommended Sanctuary
                </span>
                <h4 className="font-serif text-2xl text-[#faf9f6]">{relatedStay.name}</h4>
                <p className="text-xs text-[#eae6df]/60 font-light">{relatedStay.location} • From {relatedStay.pricePerNight} / night</p>
              </div>

              <Link
                href={`/stays/${relatedStay.id}`}
                className="shrink-0 px-6 py-3 rounded-full bg-[#c5a880] hover:bg-[#b89768] text-[#0c0e14] font-semibold text-xs tracking-widest uppercase transition-all shadow-md shadow-[#c5a880]/20 flex items-center gap-2"
              >
                <span>View Sanctuary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </article>
      </main>

      <AureliaFooter />
    </div>
  );
}
