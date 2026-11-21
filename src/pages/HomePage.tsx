import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AutonomySelector } from '../components/AutonomySelector';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { CTASection } from '../components/CTASection';
import { Hero } from '../components/Hero';
import { PricingCard } from '../components/PricingCard';
import { SectionHeading } from '../components/SectionHeading';
import { SolutionCard } from '../components/SolutionCard';
import { WorkingModelSection } from '../components/WorkingModelSection';
import { PRICING_PLANS } from '../data/pricing';
import { SOLUTION_FAMILIES } from '../data/solutions';
import { PricingPlan } from '../domain/types';
import { useRouter } from '../router/RouterContext';

const PROBLEM_ITEMS = [
  {
    index: '01',
    title: 'Dependencia de proveedores externos',
    description:
      'Operar procesos críticos exclusivamente sobre servicios de terceros expone a tu empresa a cambios unilaterales de condiciones, modelos o disponibilidad.'
  },
  {
    index: '02',
    title: 'Costes variables difíciles de prever',
    description:
      'El pago por consumo de tokens y licencias crecientes dificulta escalar el uso interno de la inteligencia artificial a toda la organización.'
  },
  {
    index: '03',
    title: 'Especialización insuficiente',
    description:
      'Las herramientas generalistas desconocen las reglas, el vocabulario, los márgenes y los procedimientos concretos de tu sector y tu empresa.'
  },
  {
    index: '04',
    title: 'Conocimiento corporativo fragmentado',
    description:
      'Manuales, tarifas, históricos y criterio acumulado quedan repartidos en carpetas, hojas de cálculo y personas clave sin aprovecharse de forma sistemática.'
  },
  {
    index: '05',
    title: 'Preocupación por la confidencialidad',
    description:
      'Contratos, datos de clientes, procesos industriales y registros internos exigen límites claros que muchas organizaciones no desean ceder a plataformas abiertas.'
  },
  {
    index: '06',
    title: 'Falta de autonomía operativa',
    description:
      'Sin gobernanza, roles ni integración con sistemas propios, la IA se queda en un chat aislado en lugar de convertirse en una capacidad real del negocio.'
  }
];

const FIVE_STEPS = [
  {
    step: '01',
    title: 'Digitalizar',
    description:
      'Inventariamos y ordenamos las fuentes documentales y registros operativos que contienen el saber real de tu empresa.'
  },
  {
    step: '02',
    title: 'Comprender',
    description:
      'Estructuramos relaciones, contexto y criterios de calidad para que la información sea consultable con precisión y trazabilidad.'
  },
  {
    step: '03',
    title: 'Especializar',
    description:
      'Adaptamos modelos open-weight a la realidad de tu sector, tus procedimientos internos y tus estándares operativos.'
  },
  {
    step: '04',
    title: 'Actuar',
    description:
      'Conectamos la inteligencia a flujos de trabajo con niveles progresivos de autonomía, aprobaciones humanas y reglas deterministas.'
  },
  {
    step: '05',
    title: 'Mejorar',
    description:
      'Evaluamos resultados de forma continua, actualizamos el conocimiento versionado y evolucionamos los modelos cuando aporta valor.'
  }
];

const KEY_BENEFITS = [
  {
    title: 'Soberanía de datos',
    description:
      'Tus documentos, registros y bases de conocimiento permanecen bajo tu propiedad y aislamiento estricto.'
  },
  {
    title: 'Especialización empresarial',
    description:
      'Respuestas y análisis fundamentados en el contexto real de tu industria y las reglas propias de tu organización.'
  },
  {
    title: 'Costes previsibles',
    description:
      'Estructura clara de implementación y cuota mensual sin facturas impredecibles por volumen de tokens en entornos locales.'
  },
  {
    title: 'Infraestructura controlada',
    description:
      'Despliegue en servidor local o entorno privado definido junto a tu equipo técnico, ejecutando runtimes como Ollama o llama.cpp.'
  },
  {
    title: 'Operación offline compatible',
    description:
      'Capacidad de funcionar sin conexión externa cuando el hardware y la arquitectura local están dimensionados para ello.'
  },
  {
    title: 'Autonomía gobernada',
    description:
      'Cuatro niveles claros —desde consulta asistida hasta operaciones delegadas— con roles, auditoría y aprobación humana.'
  },
  {
    title: 'Mejora continua',
    description:
      'Mantenimiento profesional del conocimiento sin necesidad de reentrenar los parámetros del modelo base en cada cambio.'
  },
  {
    title: 'Independencia de proveedor',
    description:
      'Arquitectura modular con modelos open-weight reemplazables para evolucionar sin quedar cautivo de un único fabricante.'
  }
];

export function HomePage() {
  const { navigate, navigateToContact } = useRouter();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const handleSelectPlan = (plan: PricingPlan) => {
    navigateToContact({
      interestNote: `Interés en evaluar el Plan ${plan.name} (${
        billingCycle === 'annual' ? 'modalidad anual orientativa' : 'modalidad mensual orientativa'
      }).`
    });
  };

  return (
    <div>
      <Hero />

      {/* A. THE PROBLEM — Soft Sage Wash */}
      <section className="border-b border-olive/12 bg-editorial-sage text-olive">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="light"
            eyebrow="El punto de partida"
            title="Las empresas generan conocimiento todos los días. Pero gran parte de ese conocimiento permanece disperso, aislado o desaprovechado."
            description="Adoptar inteligencia artificial mediante herramientas genéricas resuelve consultas puntuales, pero rara vez construye un activo duradero y gobernado dentro de la empresa."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROBLEM_ITEMS.map((item) => (
              <article
                key={item.index}
                className="rounded-2xl border border-olive/12 bg-paper p-6 sm:p-7"
              >
                <span className="font-mono text-xs font-medium text-terracotta-accessible">
                  {item.index}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-olive">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-olive-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* B. THE VEGEN APPROACH — Deep Olive Editorial Contrast */}
      <section className="border-b border-olive/12 bg-editorial-olive text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            eyebrow="El enfoque Vegen"
            title="De almacenar información a desarrollar inteligencia propia."
            description="Estructuramos un recorrido progresivo y medible para transformar documentación, datos operativos y experiencia acumulada en una capacidad empresarial bajo tus propias reglas."
          />

          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-5">
            {FIVE_STEPS.map((item) => (
              <li
                key={item.step}
                className="flex flex-col justify-between rounded-2xl border border-ivory/14 bg-olive-surface p-6"
              >
                <div>
                  <span className="font-mono text-xs text-sand">{item.step}</span>
                  <h3 className="mt-3 font-display text-2xl font-medium text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/82">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* C. KEY BENEFITS */}
          <div className="mt-20 border-t border-ivory/14 pt-16">
            <SectionHeading
              theme="dark"
              eyebrow="Capacidades estratégicas"
              title="Por qué elegir Inteligencia Empresarial Soberana"
              description="Utilizamos modelos open-weight compatibles con uso comercial ejecutados sobre infraestructura controlada. El valor no está en prometer modelos fundacionales propios, sino en la especialización, la gobernanza y la operación continua."
            />

            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {KEY_BENEFITS.map((benefit) => (
                <div key={benefit.title} className="border-t border-ivory/15 pt-5">
                  <h3 className="font-display text-lg font-medium text-sand-soft">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/80">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D. BUSINESS SOLUTION FAMILIES — Warm Ivory */}
      <section className="border-b border-olive/12 bg-ivory text-olive">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              theme="light"
              eyebrow="Arquitectura de producto"
              title="Cuatro familias de soluciones adaptables a tu realidad"
              description="Desde conocimiento sectorial y documental hasta entornos físicos conectados mediante Edge e IoT."
            />
            <button
              type="button"
              onClick={() => navigate('/soluciones')}
              className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-lg border border-olive/25 bg-paper px-4 py-2 text-sm font-semibold text-olive transition-colors hover:bg-sand-soft whitespace-nowrap lg:self-end"
            >
              Ver todas las soluciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SOLUTION_FAMILIES.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                variant="compact"
                theme="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* E. INTERACTIVE AUTONOMY PREVIEW — Deep Olive */}
      <section className="border-b border-olive/12 bg-editorial-olive text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            eyebrow="Autonomía inteligente. Control empresarial."
            title="La autonomía no significa perder el control. Significa delegar con reglas."
            description="Selecciona cada nivel para comprobar cómo evoluciona el alcance operativo, la supervisión humana y los requisitos de gobernanza."
          />

          <div className="mt-12">
            <AutonomySelector compact />
          </div>
        </div>
      </section>

      {/* COMPETITIVE DIFFERENTIATION — Warm Ivory */}
      <section className="border-b border-olive/12 bg-ivory text-olive">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="light"
            eyebrow="Diferenciación conceptual"
            title="Qué distingue una capacidad empresarial soberana"
            description="Comparativa conceptual entre un asistente generalista en la nube, una instalación técnica aislada y el modelo gestionado de Vegen Private Intelligence."
          />

          <div className="mt-12">
            <ComparisonMatrix />
          </div>
        </div>
      </section>

      {/* HOW WE WORK — Soft Sage */}
      <WorkingModelSection />

      {/* F. PRICING PREVIEW — Warm Ivory */}
      <section className="border-t border-olive/12 bg-ivory text-olive">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              theme="light"
              eyebrow="Planes orientativos"
              title="Inversión previsible adaptada al alcance de cada organización"
              description="Importes en euros (IVA no incluido). Propuestas orientativas sujetas a validación técnica y comercial."
            />

            {/* Monthly / Annual Toggle */}
            <div className="flex flex-col items-start gap-2 lg:items-end">
              <div
                role="group"
                aria-label="Modalidad de facturación orientativa"
                className="inline-flex rounded-xl border border-olive/15 bg-parchment p-1"
              >
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  aria-pressed={billingCycle === 'monthly'}
                  className={`min-h-[40px] rounded-lg px-4 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    billingCycle === 'monthly'
                      ? 'bg-paper text-olive shadow-xs'
                      : 'text-olive-muted hover:text-olive'
                  }`}
                >
                  Mensual
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  aria-pressed={billingCycle === 'annual'}
                  className={`min-h-[40px] rounded-lg px-4 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    billingCycle === 'annual'
                      ? 'bg-paper text-olive shadow-xs'
                      : 'text-olive-muted hover:text-olive'
                  }`}
                >
                  Anual (-10 % propuesto)
                </button>
              </div>
              {billingCycle === 'annual' && (
                <p className="text-xs text-olive-subtle">
                  Descuento anual ilustrativo como condición comercial propuesta, no oferta cerrada.
                </p>
              )}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
                onSelectPlan={handleSelectPlan}
                compact
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-olive/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xs leading-relaxed text-olive-subtle">
              Hardware, servicios de terceros, integraciones a medida y desarrollos adicionales no
              están incluidos salvo contratación expresa.
            </p>
            <button
              type="button"
              onClick={() => navigate('/planes')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-accessible hover:text-terracotta-deep whitespace-nowrap"
            >
              Ver detalle de planes y preguntas frecuentes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* G. FINAL CTA */}
      <CTASection />
    </div>
  );
}
