import React from 'react';
import { AIConfigurator } from '../components/AIConfigurator';

export function ConfiguratorPage() {
  return (
    <div className="bg-ivory text-olive">
      <section className="border-b border-olive/12 bg-editorial-paper">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium text-terracotta-accessible">
            Configurador interactivo · Propuesta orientativa sin compromiso
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-medium tracking-tight text-olive sm:text-5xl sm:leading-[1.1]">
            Diseña la inteligencia de tu empresa.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-olive-muted sm:text-lg">
            Define paso a paso tu sector, objetivos, fuentes de conocimiento, infraestructura y
            nivel de autonomía deseado. Generaremos al instante un resumen estructurado que podrás
            editar, copiar o adjuntar a tu solicitud de evaluación.
          </p>
        </div>
      </section>

      <section className="bg-editorial-sage">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <AIConfigurator />
        </div>
      </section>
    </div>
  );
}
