import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { IntelligenceTypeOption, SolutionFamily } from '../domain/types';
import { useRouter } from '../router/RouterContext';

interface SolutionCardProps {
  solution: SolutionFamily;
  variant?: 'compact' | 'detailed';
  theme?: 'dark' | 'light';
}

const FAMILY_TO_CONFIG_TYPE: Record<SolutionFamily['id'], IntelligenceTypeOption> = {
  vertical: 'sector',
  enterprise: 'empresa',
  expert: 'tematica',
  'edge-iot': 'iot'
};

export function SolutionCard({
  solution,
  variant = 'compact',
  theme = 'light'
}: SolutionCardProps) {
  const { navigateToConfigurator, navigate } = useRouter();
  const isDark = theme === 'dark';

  const handleConfigure = () => {
    navigateToConfigurator({
      intelligenceType: FAMILY_TO_CONFIG_TYPE[solution.id]
    });
  };

  if (variant === 'compact') {
    return (
      <article
        className={`flex h-full flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-colors ${
          isDark
            ? 'border-ivory/15 bg-olive-surface hover:border-sand/40'
            : 'border-olive/12 bg-paper hover:border-olive/25'
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-4 text-xs font-medium">
            <span
              className={
                isDark
                  ? 'font-mono text-sand'
                  : 'font-mono text-terracotta-accessible'
              }
            >
              {solution.code}
            </span>
            <span className={isDark ? 'text-sage-muted' : 'text-olive-subtle'}>
              {solution.id === 'edge-iot' ? 'Entornos físicos y Edge' : 'Familia comercial'}
            </span>
          </div>

          <h3
            className={`mt-4 font-display text-2xl font-medium tracking-tight ${
              isDark ? 'text-ivory' : 'text-olive'
            }`}
          >
            {solution.name}
          </h3>

          <p
            className={`mt-1.5 text-sm font-medium ${
              isDark ? 'text-sand' : 'text-sage-deep'
            }`}
          >
            {solution.subtitle}
          </p>

          <p
            className={`mt-4 text-sm leading-relaxed ${
              isDark ? 'text-ivory/82' : 'text-olive-muted'
            }`}
          >
            {solution.valueProposition}
          </p>

          <ul
            className={`mt-6 space-y-2.5 border-t pt-5 ${
              isDark ? 'border-ivory/12' : 'border-olive/10'
            }`}
          >
            {solution.capabilities.slice(0, 3).map((cap) => (
              <li
                key={cap}
                className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                  isDark ? 'text-ivory/85' : 'text-olive-muted'
                }`}
              >
                <Check
                  className={`mt-0.5 h-4 w-4 shrink-0 ${
                    solution.id === 'edge-iot'
                      ? isDark
                        ? 'text-sage'
                        : 'text-sage-deep'
                      : isDark
                      ? 'text-sand'
                      : 'text-terracotta-accessible'
                  }`}
                  aria-hidden="true"
                />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`mt-8 flex items-center justify-between gap-4 border-t pt-5 ${
            isDark ? 'border-ivory/12' : 'border-olive/10'
          }`}
        >
          <button
            type="button"
            onClick={() => navigate(solution.id === 'edge-iot' ? '/edge-iot' : '/soluciones')}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
              isDark
                ? 'text-sand hover:text-ivory'
                : 'text-terracotta-accessible hover:text-terracotta-deep'
            }`}
          >
            Ver detalle
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleConfigure}
            className={`text-sm font-medium transition-colors ${
              isDark ? 'text-ivory/80 hover:text-ivory' : 'text-olive-muted hover:text-olive'
            }`}
          >
            Configurar
          </button>
        </div>
      </article>
    );
  }

  return (
    <article
      id={`familia-${solution.id}`}
      className="rounded-2xl border border-olive/12 bg-paper p-7 sm:p-10"
    >
      <div className="flex flex-col gap-6 border-b border-olive/12 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium text-terracotta-accessible">
            Familia {solution.code} · {solution.subtitle}
          </p>
          <h3 className="mt-2.5 font-display text-2xl font-medium tracking-tight text-olive sm:text-3xl">
            {solution.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-olive">
            {solution.valueProposition}
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-olive-muted">{solution.summary}</p>
        </div>

        <div className="shrink-0">
          <button
            type="button"
            onClick={handleConfigure}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-terracotta-accessible px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-terracotta-deep whitespace-nowrap"
          >
            Configurar esta solución
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h4 className="font-display text-base font-medium text-olive">
            Problemas empresariales que resuelve
          </h4>
          <ul className="mt-3 space-y-2.5">
            {solution.problemsSolved.map((problem) => (
              <li key={problem} className="text-sm leading-relaxed text-olive-muted">
                · {problem}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-medium text-olive">
            Capacidades principales
          </h4>
          <ul className="mt-3 space-y-2.5">
            {solution.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-2.5 text-sm leading-relaxed text-olive">
                <Check
                  className={`mt-0.5 h-4 w-4 shrink-0 ${
                    solution.id === 'edge-iot' ? 'text-sage-deep' : 'text-terracotta-accessible'
                  }`}
                  aria-hidden="true"
                />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-medium text-olive">
            Posibilidades de despliegue
          </h4>
          <ul className="mt-3 space-y-2.5">
            {solution.deploymentOptions.map((option) => (
              <li key={option} className="text-sm leading-relaxed text-olive-muted">
                · {option}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-medium text-olive">
            Casos de uso ilustrativos
          </h4>
          <ul className="mt-3 space-y-2.5">
            {solution.exampleUseCases.map((example) => (
              <li key={example} className="text-sm leading-relaxed text-olive-muted">
                · {example}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {solution.importantNote && (
        <div className="mt-8 rounded-xl border border-olive/12 bg-sand-soft/70 px-5 py-4 text-sm leading-relaxed text-olive">
          <span className="font-semibold">Criterio de alcance y seguridad: </span>
          {solution.importantNote}
        </div>
      )}
    </article>
  );
}
