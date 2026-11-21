import React from 'react';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { CTASection } from '../components/CTASection';
import { SectionHeading } from '../components/SectionHeading';
import { SolutionCard } from '../components/SolutionCard';
import { WorkingModelSection } from '../components/WorkingModelSection';
import { KNOWLEDGE_VS_FINETUNING, SOLUTION_FAMILIES } from '../data/solutions';

export function SolutionsPage() {
  return (
    <div>
      {/* Editorial Page Header */}
      <section className="border-b border-olive/12 bg-editorial-paper text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-terracotta-accessible">
            Soluciones · Vegen Private Intelligence
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-medium tracking-tight text-olive sm:text-5xl sm:leading-[1.1]">
            Cuatro familias de inteligencia empresarial bajo tu infraestructura y tus reglas
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-olive-muted sm:text-lg">
            Combinamos modelos open-weight compatibles con uso comercial, conocimiento estructurado
            de tu negocio y gobernanza operativa. Cada familia puede desplegarse de forma
            independiente o combinada según la madurez de tu empresa.
          </p>

          {/* Quick Jump Bar */}
          <div className="mt-8 flex flex-wrap gap-3">
            {SOLUTION_FAMILIES.map((family) => (
              <a
                key={family.id}
                href={`#familia-${family.id}`}
                className="inline-flex min-h-[42px] items-center rounded-lg border border-olive/18 bg-paper px-4 py-2 text-xs font-semibold text-olive transition-colors hover:bg-sand-soft whitespace-nowrap"
              >
                {family.code}. {family.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solution Families */}
      <section className="border-b border-olive/12 bg-editorial-sage text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-8">
            {SOLUTION_FAMILIES.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                variant="detailed"
                theme="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base Update vs Fine-Tuning */}
      <section className="border-b border-olive/12 bg-editorial-olive text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            eyebrow={KNOWLEDGE_VS_FINETUNING.eyebrow}
            title={KNOWLEDGE_VS_FINETUNING.title}
            description={KNOWLEDGE_VS_FINETUNING.lead}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {KNOWLEDGE_VS_FINETUNING.columns.map((col, idx) => (
              <article
                key={col.title}
                className={`rounded-2xl border p-7 sm:p-8 ${
                  idx === 0
                    ? 'border-sand/50 bg-olive-surface'
                    : 'border-ivory/15 bg-olive-deep/65'
                }`}
              >
                <p className="font-mono text-xs text-sand">
                  {idx === 0 ? 'Mecanismo operativo principal' : 'Complemento técnico selectivo'}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium text-ivory">{col.title}</h3>
                <p className="mt-1.5 text-sm text-sage-muted">{col.subtitle}</p>
                <ul className="mt-6 space-y-3 border-t border-ivory/14 pt-5 text-sm leading-relaxed text-ivory/85">
                  {col.points.map((point) => (
                    <li key={point}>· {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="border-b border-olive/12 bg-ivory text-olive">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="light"
            eyebrow="Posicionamiento real"
            title="Comparativa de alternativas tecnológicas"
            description="Evaluación equilibrada de qué aporta cada modelo de despliegue según tus objetivos de especialización, control y mantenimiento."
          />
          <div className="mt-12">
            <ComparisonMatrix />
          </div>
        </div>
      </section>

      <WorkingModelSection />

      <CTASection
        title="¿Qué combinación de soluciones encaja con tu empresa?"
        description="Utiliza el configurador interactivo para obtener una propuesta orientativa de familia, autonomía e infraestructura."
      />
    </div>
  );
}
