import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IndustryItem } from '../domain/types';

interface IndustryCardProps {
  industry: IndustryItem;
  onSelect: (industry: IndustryItem) => void;
}

export function IndustryCard({ industry, onSelect }: IndustryCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-olive/12 bg-paper p-6 sm:p-7 transition-colors hover:border-olive/25">
      <div>
        <div className="flex items-center justify-between gap-3 text-xs text-olive-subtle">
          <span>{industry.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span className="font-medium text-sage-deep truncate">
            {industry.recommendedFamilyName}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-olive">
          {industry.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-olive-muted">{industry.shortSummary}</p>

        <div className="mt-5 border-t border-olive/10 pt-4">
          <p className="text-xs font-semibold text-olive">Capacidades ilustrativas</p>
          <ul className="mt-2 space-y-1.5 text-sm text-olive-muted">
            {industry.aiCapabilities.slice(0, 2).map((cap) => (
              <li key={cap} className="leading-snug">
                · {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-olive/10 pt-4">
        <button
          type="button"
          onClick={() => onSelect(industry)}
          className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-terracotta-accessible transition-colors hover:text-terracotta-deep"
        >
          Explorar casos de uso ilustrativos
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
