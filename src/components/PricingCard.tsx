import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ANNUAL_DISCOUNT_RATE } from '../data/pricing';
import { PricingPlan } from '../domain/types';

interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: 'monthly' | 'annual';
  onSelectPlan: (plan: PricingPlan) => void;
  compact?: boolean;
}

export function PricingCard({
  plan,
  billingCycle,
  onSelectPlan,
  compact = false
}: PricingCardProps) {
  const isCustom = plan.monthlyPriceEur === null;
  const effectiveMonthly =
    plan.monthlyPriceEur !== null
      ? billingCycle === 'annual'
        ? Math.round(plan.monthlyPriceEur * (1 - ANNUAL_DISCOUNT_RATE))
        : plan.monthlyPriceEur
      : null;

  return (
    <article
      className={`flex h-full flex-col justify-between rounded-2xl border p-7 transition-colors ${
        plan.highlighted
          ? 'border-olive bg-olive text-ivory'
          : 'border-olive/12 bg-paper text-olive'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 text-xs">
          <span
            className={`font-mono font-medium tracking-wider ${
              plan.highlighted ? 'text-sand' : 'text-terracotta-accessible'
            }`}
          >
            {plan.name}
          </span>
          {plan.highlighted && (
            <span className="font-medium text-sage-muted">Referencia pymes</span>
          )}
        </div>

        <p
          className={`mt-3 text-sm leading-relaxed ${
            plan.highlighted ? 'text-ivory/82' : 'text-olive-muted'
          }`}
        >
          {plan.audience}
        </p>

        {/* Price Block */}
        <div
          className={`mt-6 border-y py-5 ${
            plan.highlighted ? 'border-ivory/15' : 'border-olive/12'
          }`}
        >
          {isCustom ? (
            <div>
              <p className="font-display text-3xl font-medium tracking-tight">
                {plan.customPricingLabel ?? 'A medida'}
              </p>
              <p
                className={`mt-1.5 text-xs ${
                  plan.highlighted ? 'text-ivory/75' : 'text-olive-subtle'
                }`}
              >
                Presupuesto tras evaluación de sedes, IoT e infraestructura
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-medium tracking-tight tabular-nums sm:text-4xl">
                  {effectiveMonthly} €
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? 'text-ivory/80' : 'text-olive-subtle'
                  }`}
                >
                  / mes
                </span>
              </div>

              {billingCycle === 'annual' && plan.monthlyPriceEur !== null && (
                <p
                  className={`mt-1.5 text-xs tabular-nums ${
                    plan.highlighted ? 'text-sand' : 'text-terracotta-accessible'
                  }`}
                >
                  Tarifa base {plan.monthlyPriceEur} €/mes · -10 % orientativo anual (condición propuesta)
                </p>
              )}

              <p
                className={`mt-1.5 text-xs tabular-nums ${
                  plan.highlighted ? 'text-ivory/75' : 'text-olive-subtle'
                }`}
              >
                Implementación desde {plan.implementationFromEur?.toLocaleString('es-ES')} € · IVA no incluido
              </p>
            </div>
          )}
        </div>

        <p
          className={`mt-4 text-xs font-semibold ${
            plan.highlighted ? 'text-sand-soft' : 'text-sage-deep'
          }`}
        >
          {plan.autonomyScope}
        </p>

        <ul className="mt-5 space-y-2.5">
          {(compact ? plan.features.slice(0, 4) : plan.features).map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2.5 text-sm leading-snug ${
                plan.highlighted ? 'text-ivory/88' : 'text-olive-muted'
              }`}
            >
              <Check
                className={`mt-0.5 h-4 w-4 shrink-0 ${
                  plan.highlighted ? 'text-sand' : 'text-terracotta-accessible'
                }`}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-2">
        <button
          type="button"
          onClick={() => onSelectPlan(plan)}
          className={`inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap ${
            plan.highlighted
              ? 'bg-terracotta-accessible text-paper hover:bg-terracotta'
              : 'border border-olive/25 bg-ivory text-olive hover:bg-sand-soft'
          }`}
        >
          {isCustom ? 'Solicitar evaluación a medida' : `Evaluar plan ${plan.name}`}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
