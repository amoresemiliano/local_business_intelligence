import React, { useState } from 'react';
import { ArrowRight, Check, ShieldAlert } from 'lucide-react';
import { AUTONOMY_LEVELS } from '../data/autonomy';
import { AutonomyLevelId } from '../domain/types';
import { useRouter } from '../router/RouterContext';

interface AutonomySelectorProps {
  compact?: boolean;
}

export function AutonomySelector({ compact = false }: AutonomySelectorProps) {
  const [selectedId, setSelectedId] = useState<AutonomyLevelId>('asistida');
  const { navigate, navigateToConfigurator } = useRouter();

  const current =
    AUTONOMY_LEVELS.find((lvl) => lvl.id === selectedId) ?? AUTONOMY_LEVELS[0];

  return (
    <div className="space-y-8">
      {/* Interactive 4-level segmented selector */}
      <div
        role="tablist"
        aria-label="Niveles de autonomía empresarial"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {AUTONOMY_LEVELS.map((level) => {
          const isSelected = level.id === selectedId;
          return (
            <button
              key={level.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`autonomy-panel-${level.id}`}
              id={`autonomy-tab-${level.id}`}
              onClick={() => setSelectedId(level.id)}
              className={`flex min-h-[82px] flex-col items-start justify-between rounded-2xl border p-5 text-left transition-colors ${
                isSelected
                  ? 'border-sand bg-paper text-olive'
                  : 'border-ivory/15 bg-olive-surface text-ivory/80 hover:border-ivory/35 hover:text-ivory'
              }`}
            >
              <span
                className={`font-mono text-xs ${
                  isSelected ? 'text-terracotta-accessible' : 'text-sand'
                }`}
              >
                Nivel {level.levelNumber}
              </span>
              <span className="mt-1.5 font-display text-xl font-medium tracking-tight">
                {level.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic detail panel */}
      <div
        role="tabpanel"
        id={`autonomy-panel-${current.id}`}
        aria-labelledby={`autonomy-tab-${current.id}`}
        className="rounded-2xl border border-ivory/15 bg-olive-surface p-6 sm:p-8 lg:p-10"
      >
        <div className="flex flex-col gap-5 border-b border-ivory/15 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-sand">
              Nivel {current.levelNumber} de 4 · {current.riskProfile}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ivory sm:text-3xl">
              Autonomía {current.name}
            </h3>
            <p className="mt-2 text-base font-medium text-sand-soft">{current.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-ivory/82 sm:text-base">
              {current.description}
            </p>
          </div>

          <div className="shrink-0">
            {compact ? (
              <button
                type="button"
                onClick={() => navigate('/autonomia-gobernanza')}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-ivory/25 bg-olive-deep/60 px-4 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-olive-deep whitespace-nowrap"
              >
                Explorar gobernanza completa
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigateToConfigurator({ autonomyLevel: current.id })}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-terracotta-accessible px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-terracotta whitespace-nowrap"
              >
                Configurar con nivel {current.name}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Example workflow flow strip */}
        <div className="mt-8">
          <h4 className="font-display text-base font-medium text-ivory">
            Ejemplo ilustrativo de flujo operativo
          </h4>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-ivory/12 bg-olive-deep/75 p-4">
              <p className="font-mono text-xs text-sage-muted">01. Origen</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/90">
                {current.exampleWorkflow.trigger}
              </p>
            </div>
            <div className="rounded-xl border border-ivory/12 bg-olive-deep/75 p-4">
              <p className="font-mono text-xs text-sand">02. Procesamiento IA</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/90">
                {current.exampleWorkflow.aiStep}
              </p>
            </div>
            <div className="rounded-xl border border-sage/35 bg-olive-deep/90 p-4">
              <p className="font-mono text-xs text-sage">03. Puerta de control</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/90">
                {current.exampleWorkflow.controlGate}
              </p>
            </div>
            <div className="rounded-xl border border-ivory/12 bg-olive-deep/75 p-4">
              <p className="font-mono text-xs text-ivory/70">04. Resultado</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/90">
                {current.exampleWorkflow.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed columns */}
        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-ivory/15 pt-8 lg:grid-cols-3">
          <div>
            <h4 className="font-display text-base font-medium text-ivory">
              Acciones permitidas
            </h4>
            <ul className="mt-3 space-y-2.5">
              {current.allowedActions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ivory/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-medium text-ivory">
              Supervisión humana y límites
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-ivory/90">
              {current.humanSupervision}
            </p>
            {!compact && (
              <ul className="mt-4 space-y-2 border-t border-ivory/12 pt-4">
                {current.restrictedActions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-ivory/75">
                    <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sand" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h4 className="font-display text-base font-medium text-ivory">
              Requisitos de gobernanza
            </h4>
            <ul className="mt-3 space-y-2.5">
              {current.governanceRequirements.map((req) => (
                <li key={req} className="text-sm leading-relaxed text-ivory/85">
                  · {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
