import React, { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { IndustryItem, IntelligenceTypeOption } from '../domain/types';
import { useRouter } from '../router/RouterContext';

interface IndustryDetailModalProps {
  industry: IndustryItem | null;
  onClose: () => void;
}

const RECOMMENDED_TO_TYPE: Record<IndustryItem['recommendedFamilyId'], IntelligenceTypeOption> = {
  vertical: 'sector',
  enterprise: 'empresa',
  expert: 'tematica',
  'edge-iot': 'iot'
};

export function IndustryDetailModal({ industry, onClose }: IndustryDetailModalProps) {
  const { navigateToConfigurator } = useRouter();

  useEffect(() => {
    if (!industry) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [industry, onClose]);

  if (!industry) return null;

  const handleDesignForSector = () => {
    const selectedId = industry.id;
    const selectedType = RECOMMENDED_TO_TYPE[industry.recommendedFamilyId];
    onClose();
    navigateToConfigurator({
      industryId: selectedId,
      intelligenceType: selectedType
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-olive-deep/70 p-4 backdrop-blur-xs sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="industry-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-olive/18 bg-paper text-olive shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-olive/12 bg-paper px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-medium text-olive-subtle">
              {industry.categoryLabel} · Familia recomendada:{' '}
              <span className="font-semibold text-sage-deep">{industry.recommendedFamilyName}</span>
            </p>
            <h3
              id="industry-modal-title"
              className="mt-1 font-display text-2xl font-medium tracking-tight text-olive"
            >
              {industry.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-olive/15 bg-ivory text-olive-muted transition-colors hover:bg-parchment hover:text-olive"
            aria-label="Cerrar detalle del sector"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-8 px-6 py-6 sm:px-8 sm:py-8">
          <div className="rounded-xl border border-olive/12 bg-sand-soft/75 px-4 py-3.5 text-xs leading-relaxed text-olive-muted">
            <span className="font-semibold text-olive">Nota de transparencia: </span>
            Los ejemplos y flujos mostrados a continuación son{' '}
            <span className="font-medium text-olive">casos de uso ilustrativos</span> diseñados
            para evaluar el potencial de la arquitectura en este sector. No representan despliegues
            publicados de clientes concretos.
          </div>

          <p className="text-base leading-relaxed text-olive">{industry.shortSummary}</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-display text-base font-medium text-olive">
                Problemas habituales del sector
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-olive-muted">
                {industry.typicalProblems.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base font-medium text-olive">
                Capacidades de IA relevantes
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-olive">
                {industry.aiCapabilities.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base font-medium text-olive">
                Fuentes de conocimiento de ejemplo
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-olive-muted">
                {industry.exampleKnowledgeSources.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base font-medium text-olive">
                Beneficios empresariales potenciales
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-olive">
                {industry.potentialBenefits.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-olive/12 pt-6">
            <h4 className="font-display text-base font-medium text-olive">
              Flujos de trabajo ilustrativos
            </h4>
            <div className="mt-3 space-y-3">
              {industry.exampleWorkflows.map((flow) => (
                <p
                  key={flow}
                  className="rounded-xl border border-olive/10 bg-ivory px-4 py-3.5 text-sm leading-relaxed text-olive"
                >
                  {flow}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col gap-3 border-t border-olive/12 bg-ivory px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm text-olive-muted">
            Familia recomendada:{' '}
            <span className="font-semibold text-olive">{industry.recommendedFamilyName}</span>
          </p>

          <button
            type="button"
            onClick={handleDesignForSector}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-terracotta-accessible px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-terracotta-deep whitespace-nowrap"
          >
            Diseñar IA para este sector
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
