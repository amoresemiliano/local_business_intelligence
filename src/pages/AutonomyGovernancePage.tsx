import React from 'react';
import { AutonomySelector } from '../components/AutonomySelector';
import { CTASection } from '../components/CTASection';
import { GovernanceFeatures } from '../components/GovernanceFeatures';
import { SectionHeading } from '../components/SectionHeading';

export function AutonomyGovernancePage() {
  return (
    <div>
      {/* Editorial Hero */}
      <section className="border-b border-olive/12 bg-editorial-paper text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-terracotta-accessible">
            Autonomía y Gobernanza · Control verificable
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-medium tracking-tight text-olive sm:text-5xl sm:leading-[1.1]">
            Autonomía inteligente. Control empresarial.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-olive-muted sm:text-lg">
            El nivel de autonomía adecuado nunca es único para toda la empresa: depende de cada
            proceso, de los permisos del sistema y del perfil de riesgo operativo. En Vegen
            diseñamos arquitecturas donde la empresa decide exactamente hasta dónde actúa la IA.
          </p>

          {/* Editorial Pull Quote */}
          <blockquote className="mt-10 border-y border-olive/18 py-7">
            <p className="font-display text-2xl font-normal italic tracking-tight text-olive sm:text-3xl">
              “La autonomía no significa perder el control. Significa delegar con reglas.”
            </p>
          </blockquote>
        </div>
      </section>

      {/* Interactive 4-Level Autonomy Explorer — Deep Olive */}
      <section className="border-b border-olive/12 bg-editorial-olive text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            eyebrow="Selector interactivo de madurez operativa"
            title="Cuatro niveles progresivos de autonomía"
            description="Explora cada nivel para examinar su alcance, ejemplo de flujo operativo, acciones permitidas, límites de seguridad, supervisión humana y requisitos de gobernanza."
          />

          <div className="mt-12">
            <AutonomySelector />
          </div>
        </div>
      </section>

      {/* Dedicated 10-Pillar Governance Architecture — Warm Ivory */}
      <section className="bg-ivory text-olive">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            theme="light"
            eyebrow="Arquitectura de gobernanza empresarial"
            title="Diez mecanismos para mantener control, trazabilidad y continuidad"
            description="La confianza en la inteligencia artificial empresarial no se basa en promesas genéricas, sino en controles concretos y verificables sobre datos, modelos, usuarios y procesos."
          />

          <div className="mt-12">
            <GovernanceFeatures />
          </div>
        </div>
      </section>

      <CTASection
        title="Define el nivel de autonomía adecuado para cada proceso de tu empresa"
        description="Nuestro configurador te ayuda a cruzar tus objetivos, fuentes de conocimiento y perfil de gobernanza en una primera guía práctica."
      />
    </div>
  );
}
