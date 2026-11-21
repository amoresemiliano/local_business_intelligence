import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { PricingCard } from '../components/PricingCard';
import { SectionHeading } from '../components/SectionHeading';
import { WorkingModelSection } from '../components/WorkingModelSection';
import { PRICING_FAQS, PRICING_PLANS } from '../data/pricing';
import { PricingPlan } from '../domain/types';
import { useRouter } from '../router/RouterContext';

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [openFaqId, setOpenFaqId] = useState<string | null>(PRICING_FAQS[0].id);
  const { navigateToContact } = useRouter();

  const handleSelectPlan = (plan: PricingPlan) => {
    navigateToContact({
      interestNote: `Solicitud de evaluación para el Plan ${plan.name} (${
        billingCycle === 'annual' ? 'referencia anual propuesta' : 'referencia mensual orientativa'
      }).`
    });
  };

  return (
    <div>
      {/* Editorial Hero */}
      <section className="border-b border-olive/12 bg-editorial-paper text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-terracotta-accessible">
            Planes orientativos · EUR (IVA no incluido)
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-medium tracking-tight text-olive sm:text-5xl sm:leading-[1.1]">
            Modelo transparente para convertir la IA en capacidad propia
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-olive-muted sm:text-lg">
            Estructura pensada para ofrecer previsibilidad presupuestaria: una fase inicial de
            implementación y una cuota mensual de mantenimiento del conocimiento, gobernanza y
            soporte profesional con alcance claramente definido.
          </p>

          {/* Monthly / Annual Switcher */}
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <div
              role="group"
              aria-label="Cambiar entre referencia mensual y anual"
              className="inline-flex rounded-xl border border-olive/15 bg-parchment p-1"
            >
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                aria-pressed={billingCycle === 'monthly'}
                className={`min-h-[42px] rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-olive text-ivory'
                    : 'text-olive-muted hover:text-olive'
                }`}
              >
                Referencia mensual
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                aria-pressed={billingCycle === 'annual'}
                className={`min-h-[42px] rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                  billingCycle === 'annual'
                    ? 'bg-olive text-ivory'
                    : 'text-olive-muted hover:text-olive'
                }`}
              >
                Referencia anual (-10 % propuesto)
              </button>
            </div>

            {billingCycle === 'annual' && (
              <p className="text-xs text-terracotta-accessible">
                Descuento ilustrativo del 10 % como condición comercial propuesta, sujeto a
                confirmación en oferta formal.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="border-b border-olive/12 bg-editorial-sage text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
                onSelectPlan={handleSelectPlan}
              />
            ))}
          </div>

          {/* Mandatory Commercial Disclaimers */}
          <div className="mt-10 rounded-2xl border border-olive/12 bg-paper p-6 text-sm leading-relaxed text-olive-muted sm:p-8">
            <h2 className="font-display text-lg font-medium text-olive">
              Condiciones comerciales y alcance orientativo
            </h2>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-olive-muted sm:text-sm">
              <li>
                · Todos los importes se expresan en euros (EUR), <strong className="text-olive">IVA no incluido</strong>,
                y constituyen <strong className="text-olive">propuestas orientativas sujetas a validación comercial y
                técnica</strong>.
              </li>
              <li>
                · El hardware (servidores locales, GPUs, gateways o sensores), servicios de
                terceros, integraciones a medida y desarrollos adicionales no están incluidos salvo
                contratación expresa en propuesta aparte.
              </li>
              <li>
                · Los planes incluyen un alcance profesional definido en actualizaciones, soporte y
                concurrencia acorde a la infraestructura evaluada; no prometemos capacidad de
                hardware ilimitada, personalización ilimitada ni soporte ilimitado.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="border-b border-olive/12 bg-ivory text-olive">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="light"
            eyebrow="Preguntas frecuentes"
            title="Respuestas claras sobre despliegue, datos, hardware y modelo de servicio"
            description="Información directa y sin promesas infladas para evaluar si Vegen Private Intelligence encaja en tu empresa."
          />

          <div className="mt-12 divide-y divide-olive/15 border-y border-olive/15">
            {PRICING_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      className="flex min-h-[60px] w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-medium text-olive transition-colors hover:text-terracotta-accessible sm:text-xl"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-olive-subtle transition-transform ${
                          isOpen ? 'rotate-180 text-terracotta-accessible' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={`faq-panel-${faq.id}`}
                      className="pb-6 pr-8 text-sm leading-relaxed text-olive-muted sm:text-base"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WorkingModelSection />

      <CTASection
        title="¿Quieres estimar qué plan encaja mejor con tu realidad?"
        description="Completa el configurador en 7 pasos para obtener una orientación inicial de arquitectura, gobernanza y rango comercial."
      />
    </div>
  );
}
