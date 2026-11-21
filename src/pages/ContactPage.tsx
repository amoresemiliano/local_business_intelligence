import React from 'react';
import { LeadForm } from '../components/LeadForm';
import { useRouter } from '../router/RouterContext';

export function ContactPage() {
  const { navigate } = useRouter();

  return (
    <div>
      {/* Header */}
      <section className="border-b border-olive/12 bg-editorial-paper text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-terracotta-accessible">
            Contacto y evaluación personalizada
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-medium tracking-tight text-olive sm:text-5xl sm:leading-[1.1]">
            Hablemos sobre la inteligencia soberana de tu organización
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-olive-muted sm:text-lg">
            Comparte el contexto de tu empresa o adjunta el resumen generado en el configurador
            para preparar un diagnóstico técnico y comercial realista.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-editorial-sage text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Info Rail */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-2xl border border-olive/12 bg-paper p-6">
                <h2 className="font-display text-lg font-medium text-olive">
                  Qué ocurre en una evaluación inicial
                </h2>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-olive-muted">
                  <li>
                    <span className="font-mono text-xs font-medium text-terracotta-accessible">
                      01.{' '}
                    </span>
                    Revisión de objetivos operativos y fuentes de conocimiento prioritarias.
                  </li>
                  <li>
                    <span className="font-mono text-xs font-medium text-terracotta-accessible">
                      02.{' '}
                    </span>
                    Análisis preliminar de infraestructura local o privada disponible.
                  </li>
                  <li>
                    <span className="font-mono text-xs font-medium text-terracotta-accessible">
                      03.{' '}
                    </span>
                    Definición del nivel de autonomía inicial y controles de gobernanza.
                  </li>
                  <li>
                    <span className="font-mono text-xs font-medium text-terracotta-accessible">
                      04.{' '}
                    </span>
                    Propuesta cerrada por fases con alcance, plazos e inversión verificados.
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl border border-olive/12 bg-paper p-6">
                <h2 className="font-display text-lg font-medium text-olive">
                  Cobertura y división
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-olive-muted">
                  <strong className="text-olive">Vegen Private Intelligence</strong> es la nueva
                  división especializada de <strong className="text-olive">Vegen Digital</strong>,
                  enfocada en organizaciones de España y Latinoamérica.
                </p>
                <div className="mt-4 border-t border-olive/10 pt-4">
                  <p className="text-xs leading-relaxed text-olive-subtle">
                    ¿Aún no has definido tu alcance? Puedes empezar por el configurador
                    interactivo y traer el resumen ya estructurado.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/disena-tu-ia')}
                    className="mt-3 text-sm font-semibold text-terracotta-accessible hover:text-terracotta-deep"
                  >
                    Ir al configurador “Diseña tu IA” →
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-olive/12 bg-paper p-6 text-xs leading-relaxed text-olive-muted">
                <h2 className="font-display text-base font-medium text-olive">
                  Arquitectura de persistencia (v1)
                </h2>
                <p className="mt-2">
                  Esta interfaz desacopla el formulario del origen de datos mediante la interfaz{' '}
                  <code className="font-mono text-[11px] text-olive">LeadRepository</code>.
                  Actualmente opera con{' '}
                  <code className="font-mono text-[11px] text-olive">
                    LocalDemoLeadRepository
                  </code>{' '}
                  y cuenta con la frontera{' '}
                  <code className="font-mono text-[11px] text-olive">ApiLeadRepository</code>{' '}
                  preparada para conectar el futuro backend PHP + MySQL en Bluehost sin modificar
                  la UI.
                </p>
              </div>
            </aside>

            {/* Right Form Area */}
            <div className="lg:col-span-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
