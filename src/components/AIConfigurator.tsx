import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, Edit3 } from 'lucide-react';
import { AUTONOMY_LEVELS } from '../data/autonomy';
import { INDUSTRIES } from '../data/industries';
import { ConfiguratorState } from '../domain/types';
import { useRouter } from '../router/RouterContext';
import {
  BUSINESS_GOAL_OPTIONS,
  DEFAULT_CONFIGURATOR_STATE,
  generateConfiguratorSummary,
  INFRASTRUCTURE_OPTIONS,
  INTELLIGENCE_TYPE_OPTIONS,
  KNOWLEDGE_SOURCE_OPTIONS
} from '../services/configuratorEngine';

const STEPS = [
  { number: 1, short: 'Tipo de IA', title: 'Tipo de inteligencia' },
  { number: 2, short: 'Sector', title: 'Sector de actividad' },
  { number: 3, short: 'Objetivos', title: 'Objetivos de negocio' },
  { number: 4, short: 'Conocimiento', title: 'Fuentes de conocimiento' },
  { number: 5, short: 'Infraestructura', title: 'Infraestructura prevista' },
  { number: 6, short: 'Autonomía', title: 'Nivel de autonomía deseado' },
  { number: 7, short: 'Resumen', title: 'Resumen de proyecto orientativo' }
] as const;

export function AIConfigurator() {
  const {
    configuratorPreselection,
    clearConfiguratorPreselection,
    navigateToContact
  } = useRouter();

  const [step, setStep] = useState<number>(1);
  const [config, setConfig] = useState<ConfiguratorState>(DEFAULT_CONFIGURATOR_STATE);
  const [stepError, setStepError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!configuratorPreselection) return;
    setConfig((prev) => ({
      ...prev,
      intelligenceType: configuratorPreselection.intelligenceType ?? prev.intelligenceType,
      industryId: configuratorPreselection.industryId ?? prev.industryId,
      autonomyLevel: configuratorPreselection.autonomyLevel ?? prev.autonomyLevel
    }));
    clearConfiguratorPreselection();
  }, [configuratorPreselection, clearConfiguratorPreselection]);

  const summary = useMemo(() => generateConfiguratorSummary(config), [config]);

  const toggleGoal = (goalId: string) => {
    setStepError('');
    setConfig((prev) => {
      const exists = prev.goals.includes(goalId);
      const next = exists
        ? prev.goals.filter((g) => g !== goalId)
        : [...prev.goals, goalId];
      return { ...prev, goals: next };
    });
  };

  const toggleSource = (sourceId: string) => {
    setStepError('');
    setConfig((prev) => {
      const exists = prev.knowledgeSources.includes(sourceId);
      const next = exists
        ? prev.knowledgeSources.filter((s) => s !== sourceId)
        : [...prev.knowledgeSources, sourceId];
      return { ...prev, knowledgeSources: next };
    });
  };

  const validateCurrentStep = (): boolean => {
    if (step === 3 && config.goals.length === 0) {
      setStepError('Selecciona al menos un objetivo de negocio para continuar.');
      return false;
    }
    if (step === 4 && config.knowledgeSources.length === 0) {
      setStepError('Selecciona al menos una fuente de conocimiento (o indica que aún no está organizada).');
      return false;
    }
    setStepError('');
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    setStep((prev) => Math.min(7, prev + 1));
  };

  const handleBack = () => {
    setStepError('');
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleJumpToStep = (targetStep: number) => {
    if (targetStep < step) {
      setStepError('');
      setStep(targetStep);
      return;
    }
    if (targetStep === step) return;
    if (!validateCurrentStep()) return;
    setStep(targetStep);
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary.plainTextSummary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = summary.plainTextSummary;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2600);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  const handleRequestEvaluation = () => {
    navigateToContact({
      configuredSummary: summary.plainTextSummary,
      industry: summary.industryName,
      interestNote: `Evaluación personalizada para arquitectura sugerida: ${summary.suggestedFamilyName} (${summary.proposedAutonomyName}).`
    });
  };

  const currentStepMeta = STEPS[step - 1];

  return (
    <div className="space-y-8">
      {/* Stepper Bar */}
      <nav aria-label="Progreso del configurador" className="overflow-x-auto pb-2">
        <ol className="flex min-w-[680px] items-center justify-between gap-2 rounded-2xl border border-olive/12 bg-paper p-2">
          {STEPS.map((item) => {
            const isCurrent = item.number === step;
            const isDone = item.number < step;
            return (
              <li key={item.number} className="flex-1">
                <button
                  type="button"
                  onClick={() => handleJumpToStep(item.number)}
                  aria-current={isCurrent ? 'step' : undefined}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium whitespace-nowrap transition-colors ${
                    isCurrent
                      ? 'bg-olive text-ivory'
                      : isDone
                      ? 'bg-sand-soft text-olive hover:bg-sand'
                      : 'text-olive-muted hover:bg-ivory hover:text-olive'
                  }`}
                >
                  <span className="font-mono">{item.number}.</span>
                  <span>{item.short}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Main Panel */}
      <div className="rounded-2xl border border-olive/12 bg-paper p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-2 border-b border-olive/12 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-terracotta-accessible">
              Paso {currentStepMeta.number} de 7
            </p>
            <h2 className="mt-1.5 font-display text-2xl font-medium tracking-tight text-olive sm:text-3xl">
              {currentStepMeta.title}
            </h2>
          </div>
          {step < 7 && (
            <p className="text-xs text-olive-subtle">
              Puedes volver atrás y ajustar cualquier decisión en todo momento.
            </p>
          )}
        </div>

        <div className="mt-8">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {INTELLIGENCE_TYPE_OPTIONS.map((option) => {
                const selected = config.intelligenceType === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({ ...prev, intelligenceType: option.id }))
                    }
                    className={`flex flex-col items-start rounded-2xl border p-5 text-left transition-colors ${
                      selected
                        ? 'border-terracotta bg-sand-soft/75 text-olive'
                        : 'border-olive/12 bg-ivory text-olive-muted hover:border-olive/25 hover:text-olive'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="font-display text-lg font-medium text-olive">
                        {option.title}
                      </span>
                      {selected && (
                        <Check
                          className="h-4 w-4 shrink-0 text-terracotta-accessible"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-olive-muted">
                      {option.description}
                    </p>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((industry) => {
                const selected = config.industryId === industry.id;
                return (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({ ...prev, industryId: industry.id }))
                    }
                    className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-colors ${
                      selected
                        ? 'border-terracotta bg-sand-soft/75 text-olive'
                        : 'border-olive/12 bg-ivory text-olive-muted hover:border-olive/25 hover:text-olive'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="font-display text-base font-medium text-olive">
                        {industry.name}
                      </span>
                      {selected && (
                        <Check
                          className="h-4 w-4 shrink-0 text-terracotta-accessible"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p className="mt-1.5 text-xs text-olive-subtle">{industry.categoryLabel}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-5">
              <p className="text-sm text-olive-muted">
                Selecciona uno o varios objetivos prioritarios para tu organización:
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {BUSINESS_GOAL_OPTIONS.map((goal) => {
                  const selected = config.goals.includes(goal.id);
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => toggleGoal(goal.id)}
                      aria-pressed={selected}
                      className={`flex min-h-[54px] items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        selected
                          ? 'border-terracotta bg-sand-soft/75 text-olive'
                          : 'border-olive/12 bg-ivory text-olive-muted hover:border-olive/25 hover:text-olive'
                      }`}
                    >
                      <span>{goal.label}</span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          selected
                            ? 'border-terracotta-accessible bg-terracotta-accessible text-paper'
                            : 'border-olive/25 bg-paper'
                        }`}
                      >
                        {selected && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {config.goals.includes('otro') && (
                <div className="pt-2">
                  <label
                    htmlFor="config-other-goal"
                    className="block text-xs font-medium text-olive"
                  >
                    Describe brevemente tu objetivo adicional
                  </label>
                  <input
                    id="config-other-goal"
                    type="text"
                    value={config.otherGoalText}
                    onChange={(e) =>
                      setConfig((prev) => ({ ...prev, otherGoalText: e.target.value }))
                    }
                    placeholder="Ej.: apoyo documental a licitaciones públicas o control de calidad en planta"
                    className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-4 py-2.5 text-sm text-olive placeholder:text-olive-subtle focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-5">
              <p className="text-sm text-olive-muted">
                Indica dónde reside actualmente el conocimiento o los datos que te gustaría aprovechar:
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {KNOWLEDGE_SOURCE_OPTIONS.map((source) => {
                  const selected = config.knowledgeSources.includes(source.id);
                  return (
                    <button
                      key={source.id}
                      type="button"
                      onClick={() => toggleSource(source.id)}
                      aria-pressed={selected}
                      className={`flex min-h-[54px] items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        selected
                          ? 'border-terracotta bg-sand-soft/75 text-olive'
                          : 'border-olive/12 bg-ivory text-olive-muted hover:border-olive/25 hover:text-olive'
                      }`}
                    >
                      <span>{source.label}</span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          selected
                            ? 'border-terracotta-accessible bg-terracotta-accessible text-paper'
                            : 'border-olive/25 bg-paper'
                        }`}
                      >
                        {selected && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {INFRASTRUCTURE_OPTIONS.map((option) => {
                  const selected = config.infrastructure === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setConfig((prev) => ({ ...prev, infrastructure: option.id }))
                      }
                      className={`flex flex-col items-start rounded-2xl border p-5 text-left transition-colors ${
                        selected
                          ? 'border-terracotta bg-sand-soft/75 text-olive'
                          : 'border-olive/12 bg-ivory text-olive-muted hover:border-olive/25 hover:text-olive'
                      }`}
                    >
                      <div className="flex w-full items-center justify-between gap-3">
                        <span className="font-display text-lg font-medium text-olive">
                          {option.title}
                        </span>
                        {selected && (
                          <Check
                            className="h-4 w-4 shrink-0 text-terracotta-accessible"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <p className="mt-2 text-sm text-olive-muted">{option.description}</p>
                      <p className="mt-3 border-t border-olive/10 pt-3 text-xs text-olive-subtle">
                        {option.caveat}
                      </p>
                    </button>
                  );
                })}
              </div>

              <p className="rounded-xl border border-olive/12 bg-sage-soft/65 px-4 py-3.5 text-xs leading-relaxed text-olive">
                <span className="font-semibold">Criterio técnico: </span>
                La compatibilidad definitiva de hardware, tiempos de respuesta y capacidad
                concurrente se confirman siempre tras una evaluación técnica previa.
              </p>
            </div>
          )}

          {/* STEP 6 */}
          {step === 6 && (
            <div className="space-y-5">
              <p className="text-sm text-olive-muted">
                Define el grado de autonomía inicial que mejor encaja con tus procesos y perfil de riesgo:
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {AUTONOMY_LEVELS.map((level) => {
                  const selected = config.autonomyLevel === level.id;
                  return (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() =>
                        setConfig((prev) => ({ ...prev, autonomyLevel: level.id }))
                      }
                      className={`flex flex-col items-start rounded-2xl border p-5 text-left transition-colors ${
                        selected
                          ? 'border-terracotta bg-sand-soft/75 text-olive'
                          : 'border-olive/12 bg-ivory text-olive-muted hover:border-olive/25 hover:text-olive'
                      }`}
                    >
                      <div className="flex w-full items-center justify-between gap-3">
                        <span className="font-mono text-xs text-terracotta-accessible">
                          Nivel {level.levelNumber}
                        </span>
                        {selected && (
                          <Check
                            className="h-4 w-4 shrink-0 text-terracotta-accessible"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <span className="mt-1 font-display text-xl font-medium text-olive">
                        {level.name}
                      </span>
                      <p className="mt-2 text-sm text-olive-muted">{level.tagline}</p>
                      <p className="mt-3 border-t border-olive/10 pt-3 text-xs text-olive-subtle">
                        {level.riskProfile}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 7 — GENERATED SUMMARY */}
          {step === 7 && (
            <div className="space-y-8">
              {/* Top headline cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-olive/12 bg-ivory p-5">
                  <p className="text-xs text-olive-subtle">Familia sugerida</p>
                  <p className="mt-1.5 font-display text-xl font-medium text-olive">
                    {summary.suggestedFamilyName}
                  </p>
                  <p className="mt-1 text-xs font-medium text-sage-deep">
                    Sector: {summary.industryName}
                  </p>
                </div>

                <div className="rounded-xl border border-olive/12 bg-ivory p-5">
                  <p className="text-xs text-olive-subtle">Autonomía propuesta</p>
                  <p className="mt-1.5 font-display text-xl font-medium text-olive">
                    {summary.proposedAutonomyName}
                  </p>
                  <p className="mt-1 text-xs text-olive-muted">
                    {summary.proposedAutonomyExplanation}
                  </p>
                </div>

                <div className="rounded-xl border border-olive bg-olive p-5 text-ivory">
                  <p className="text-xs text-sand">Plan orientativo sugerido</p>
                  <p className="mt-1.5 font-display text-xl font-medium text-ivory">
                    Plan {summary.suggestedPlanName}
                  </p>
                  <p className="mt-1 text-xs text-ivory/75">
                    Sujeto a validación técnica y comercial
                  </p>
                </div>
              </div>

              {/* Detailed breakdown */}
              <div className="grid grid-cols-1 gap-8 border-t border-olive/12 pt-8 lg:grid-cols-2">
                <div>
                  <h3 className="font-display text-base font-medium text-olive">
                    Capacidades relevantes identificadas
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-olive-muted">
                    {summary.relevantCapabilities.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-accessible"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-base font-medium text-olive">
                    Fuentes de conocimiento declaradas
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-olive-muted">
                    {summary.knowledgeSourcesLabels.map((src) => (
                      <li key={src}>· {src}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-base font-medium text-olive">
                    Consideraciones de infraestructura
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-olive-muted">
                    {summary.infrastructureConsiderations}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-base font-medium text-olive">
                    Requisitos clave de gobernanza
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-olive-muted">
                    {summary.governanceConsiderations.map((gov) => (
                      <li key={gov}>· {gov}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Commercial range & next step */}
              <div className="space-y-4 rounded-2xl border border-olive/12 bg-sand-soft/60 p-6">
                <div>
                  <h3 className="font-display text-base font-medium text-olive">
                    Rango comercial orientativo
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-olive">
                    {summary.indicativeRange}
                  </p>
                </div>
                <div className="border-t border-olive/12 pt-4">
                  <h3 className="font-display text-base font-medium text-olive">
                    Siguiente paso recomendado
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-olive-muted">
                    {summary.recommendedNextStep}
                  </p>
                </div>
                <p className="border-t border-olive/12 pt-3 text-xs text-olive-subtle">
                  Resumen generado deterministamente según tus selecciones. No constituye un
                  presupuesto cerrado ni incluye hardware, licencias de terceros o desarrollos a
                  medida salvo contratación expresa.
                </p>
              </div>

              {/* Quick Edit Shortcuts & Actions */}
              <div className="flex flex-col gap-4 border-t border-olive/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-olive/20 bg-ivory px-4 py-2 text-sm font-medium text-olive transition-colors hover:bg-parchment"
                  >
                    <Edit3 className="h-4 w-4" aria-hidden="true" />
                    Editar selecciones
                  </button>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-olive/20 bg-ivory px-4 py-2 text-sm font-medium text-olive transition-colors hover:bg-parchment"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-sage-deep" aria-hidden="true" />
                        Resumen copiado
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        Copiar resumen
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleRequestEvaluation}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-terracotta-accessible px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-terracotta-deep whitespace-nowrap"
                >
                  Solicitar evaluación personalizada
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Validation Error */}
        {stepError && (
          <p
            role="alert"
            className="mt-6 rounded-xl border border-terracotta/50 bg-terracotta-soft px-4 py-3 text-sm font-medium text-olive"
          >
            {stepError}
          </p>
        )}

        {/* Footer navigation controls for steps 1–6 */}
        {step < 7 && (
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-olive/12 pt-6">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 1}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                step === 1
                  ? 'cursor-not-allowed border-olive/10 text-olive/35'
                  : 'border-olive/20 bg-ivory text-olive hover:bg-parchment'
              }`}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Anterior
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-terracotta-accessible px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-terracotta-deep whitespace-nowrap"
            >
              {step === 6 ? 'Generar resumen orientativo' : 'Siguiente paso'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
