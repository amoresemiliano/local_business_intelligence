import React from 'react';
import { GOVERNANCE_PILLARS } from '../data/autonomy';

export function GovernanceFeatures() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {GOVERNANCE_PILLARS.map((pillar) => (
        <article
          key={pillar.id}
          className="rounded-2xl border border-olive/12 bg-paper p-6 sm:p-7"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs font-medium text-terracotta-accessible">
              {pillar.index}
            </span>
            <h3 className="font-display text-xl font-medium tracking-tight text-olive">
              {pillar.title}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-olive">
            {pillar.description}
          </p>
          <p className="mt-3.5 border-t border-olive/10 pt-3.5 text-xs leading-relaxed text-olive-muted">
            {pillar.practicalDetail}
          </p>
        </article>
      ))}
    </div>
  );
}
