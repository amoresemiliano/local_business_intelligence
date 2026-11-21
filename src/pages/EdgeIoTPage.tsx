import React from 'react';
import { CTASection } from '../components/CTASection';
import { IoTFlowDiagram } from '../components/IoTFlowDiagram';
import { SectionHeading } from '../components/SectionHeading';
import { useRouter } from '../router/RouterContext';

const IOT_RELATIONSHIPS = [
  {
    index: '01',
    title: 'Dispositivos IoT y procesamiento local',
    description:
      'Los sensores capturan señales físicas continuas y un gateway local las consolida dentro de tu propia red, reduciendo dependencia de conectividad externa y latencia.'
  },
  {
    index: '02',
    title: 'Modelos de IA e históricos operativos',
    description:
      'Un dato aislado dice poco. El valor surge al cruzar la lectura en curso con históricos de turnos, manuales de equipos, incidencias pasadas y estándares del negocio.'
  },
  {
    index: '03',
    title: 'Detección de anomalías y automatización gobernada',
    description:
      'La IA ayuda a interpretar patrones y proponer actuaciones; las reglas deterministas independientes garantizan límites estrictos de seguridad y supervisión humana.'
  }
];

export function EdgeIoTPage() {
  const { navigateToConfigurator } = useRouter();

  return (
    <div>
      {/* Editorial Hero */}
      <section className="border-b border-olive/12 bg-editorial-paper text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-sage-deep">
            Vegen Edge &amp; IoT Intelligence · Operaciones conectadas
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-medium tracking-tight text-olive sm:text-5xl sm:leading-[1.1]">
            Cuando la inteligencia empresarial se conecta con el mundo físico.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-olive-muted sm:text-lg">
            Integramos lecturas de sensores, equipos e instalaciones con procesamiento local e
            inteligencia especializada para anticipar incidencias, proteger activos y mejorar la
            eficiencia energética sin comprometer la seguridad física.
          </p>
        </div>
      </section>

      {/* Conceptual Relationships */}
      <section className="border-b border-olive/12 bg-editorial-sage text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            theme="light"
            eyebrow="Arquitectura físico-digital"
            title="Cómo colaboran sensores, datos locales e inteligencia especializada"
            description="Separamos responsabilidades técnicas para que cada capa cumpla su papel con fiabilidad industrial y criterios comerciales claros."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {IOT_RELATIONSHIPS.map((item) => (
              <article
                key={item.index}
                className="rounded-2xl border border-olive/12 bg-paper p-6 sm:p-7"
              >
                <span className="font-mono text-xs font-medium text-sage-deep">
                  {item.index}
                </span>
                <h3 className="mt-2.5 font-display text-xl font-medium tracking-tight text-olive">
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

      {/* Interactive Diagram & Simulated Scenarios */}
      <section className="bg-ivory text-olive">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <IoTFlowDiagram />
        </div>
      </section>

      <CTASection
        eyebrow="Vegen Edge & IoT Intelligence"
        title="Evalúa la viabilidad de conectar tus instalaciones a inteligencia local"
        description="Define tus sensores, requisitos de continuidad local y nivel de supervisión en el configurador o solicita una revisión técnica con nuestro equipo."
        primaryLabel="Configurar solución Edge & IoT"
        onPrimaryClick={() => navigateToConfigurator({ intelligenceType: 'iot' })}
      />
    </div>
  );
}
