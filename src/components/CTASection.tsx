import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '../router/RouterContext';

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function CTASection({
  eyebrow = 'Vegen Private Intelligence',
  title = 'Convierte el conocimiento de tu empresa en una capacidad propia',
  description = 'Define en pocos minutos una arquitectura orientativa adaptada a tu sector, tus fuentes de conocimiento y el nivel de control que necesita tu organización.',
  primaryLabel = 'Diseña tu propia IA',
  secondaryLabel = 'Solicitar evaluación personalizada',
  onPrimaryClick,
  onSecondaryClick
}: CTASectionProps) {
  const { navigate } = useRouter();

  return (
    <section className="border-t border-olive/12 bg-editorial-olive text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-ivory/15 bg-olive-surface/90 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-sand">{eyebrow}</p>
            <h2 className="mt-2.5 font-display text-2xl font-medium tracking-tight text-ivory sm:text-4xl sm:leading-[1.15]">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/82">{description}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <button
              type="button"
              onClick={onPrimaryClick ?? (() => navigate('/disena-tu-ia'))}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-terracotta-accessible px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-terracotta whitespace-nowrap"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onSecondaryClick ?? (() => navigate('/contacto'))}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-ivory/25 bg-transparent px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-ivory/10 whitespace-nowrap"
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
