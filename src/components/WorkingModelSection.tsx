import React from 'react';
import { COMMERCIAL_MODEL_ITEMS, WORKING_JOURNEY_STEPS } from '../data/businessModel';
import { SectionHeading } from './SectionHeading';

export function WorkingModelSection() {
  return (
    <section className="border-t border-olive/12 bg-editorial-sage text-olive">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="Metodología y modelo de servicio"
          title="Cómo trabajamos"
          description="No vendemos acceso a un modelo genérico de IA. Implementamos y mantenemos capacidades especializadas de inteligencia adaptadas a la realidad operativa de cada organización."
        />

        {/* 8-step Customer Journey */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WORKING_JOURNEY_STEPS.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-olive/12 bg-paper p-6"
            >
              <span className="font-mono text-xs font-medium text-terracotta-accessible">
                {item.step}
              </span>
              <h3 className="mt-2.5 font-display text-lg font-medium text-olive">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-olive-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Commercial Model Structure */}
        <div className="mt-16 rounded-2xl border border-olive/12 bg-paper p-7 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-terracotta-accessible">
              Estructura comercial transparente
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-olive sm:text-3xl">
              Cómo se compone la inversión del proyecto
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-olive-muted sm:text-base">
              Separamos con claridad el servicio gestionado continuo de los elementos opcionales de
              hardware, integraciones a medida o conectividad física para que cada empresa invierta
              solo en lo que realmente necesita en cada fase.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMERCIAL_MODEL_ITEMS.map((item) => (
              <div
                key={item.title}
                className="border-t border-olive/12 pt-4"
              >
                <p className="text-xs font-medium text-sage-deep">{item.scope}</p>
                <h4 className="mt-1 font-display text-lg font-medium text-olive">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-olive-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
