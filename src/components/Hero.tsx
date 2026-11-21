import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '../router/RouterContext';

function EditorialSovereignIllustration() {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-olive/12 bg-paper p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-olive/10 pb-4 text-xs text-olive-subtle">
        <span className="font-medium text-olive">Arquitectura de soberanía</span>
        <span className="font-mono">Lámina 01</span>
      </div>

      {/* Warm conceptual editorial illustration: organic arches, flowing lines, knowledge & structure */}
      <div className="my-6 flex items-center justify-center">
        <svg
          viewBox="0 0 460 400"
          className="h-auto w-full max-w-[430px]"
          role="img"
          aria-labelledby="editorial-hero-illustration-title"
        >
          <title id="editorial-hero-illustration-title">
            Ilustración editorial conceptual: arcos arquitectónicos cálidos, círculos de conocimiento y líneas orgánicas de conexión bajo control propio
          </title>

          {/* Warm parchment backdrop card inside frame */}
          <rect x="16" y="12" width="428" height="376" rx="18" fill="#F5F0E6" />

          {/* Soft sand architectural sun-arch (foundation & continuity) */}
          <path
            d="M 86 350 L 86 184 A 144 144 0 0 1 374 184 L 374 350 Z"
            fill="#E5CFA8"
            opacity="0.62"
          />

          {/* Sage green organic interior arch (structured knowledge) */}
          <path
            d="M 132 350 L 132 204 A 98 98 0 0 1 328 204 L 328 350 Z"
            fill="#A8B59B"
            opacity="0.68"
          />

          {/* Flowing organic horizon lines representing continuous learning & calm order */}
          <path
            d="M 32 276 C 118 242, 184 306, 266 266 C 324 238, 372 254, 428 232"
            fill="none"
            stroke="#343D33"
            strokeWidth="1.25"
            opacity="0.42"
          />
          <path
            d="M 32 308 C 124 278, 206 334, 294 294 C 344 272, 386 286, 428 268"
            fill="none"
            stroke="#343D33"
            strokeWidth="1"
            opacity="0.26"
          />

          {/* Muted terracotta warm sun/core (human-centered sovereign intelligence) */}
          <circle cx="230" cy="176" r="56" fill="#B96F55" />

          {/* Delicate ivory architectural inner ring & geometric crosshairs */}
          <circle
            cx="230"
            cy="176"
            r="84"
            fill="none"
            stroke="#343D33"
            strokeWidth="1.15"
            strokeDasharray="4 6"
            opacity="0.55"
          />
          <circle
            cx="230"
            cy="176"
            r="34"
            fill="none"
            stroke="#FAF7F0"
            strokeWidth="1.25"
            opacity="0.75"
          />

          {/* Deep olive architectural pillar & balance line */}
          <line
            x1="230"
            y1="56"
            x2="230"
            y2="348"
            stroke="#343D33"
            strokeWidth="1"
            opacity="0.32"
          />
          <line
            x1="70"
            y1="176"
            x2="390"
            y2="176"
            stroke="#343D33"
            strokeWidth="1"
            opacity="0.22"
          />

          {/* Three calm satellite nodes: Conocimiento, Reglas, Infraestructura */}
          <g transform="translate(114, 128)">
            <circle cx="0" cy="0" r="14" fill="#FAF7F0" stroke="#343D33" strokeWidth="1.25" />
            <circle cx="0" cy="0" r="4.5" fill="#343D33" />
          </g>
          <g transform="translate(346, 128)">
            <circle cx="0" cy="0" r="14" fill="#FAF7F0" stroke="#343D33" strokeWidth="1.25" />
            <circle cx="0" cy="0" r="4.5" fill="#B96F55" />
          </g>
          <g transform="translate(230, 314)">
            <circle cx="0" cy="0" r="14" fill="#343D33" />
            <circle cx="0" cy="0" r="4.5" fill="#E5CFA8" />
          </g>

          {/* Subtle connecting editorial arcs between nodes */}
          <path
            d="M 126 135 Q 178 156, 186 164"
            fill="none"
            stroke="#343D33"
            strokeWidth="1.1"
            opacity="0.5"
          />
          <path
            d="M 334 135 Q 282 156, 274 164"
            fill="none"
            stroke="#343D33"
            strokeWidth="1.1"
            opacity="0.5"
          />

          {/* Minimal editorial typography inside plate */}
          <text
            x="230"
            y="180"
            textAnchor="middle"
            fill="#FAF7F0"
            fontSize="12"
            fontFamily="Fraunces, Georgia, serif"
            fontWeight="500"
            letterSpacing="0.06em"
          >
            VEGEN
          </text>

          <text
            x="64"
            y="102"
            fill="#343D33"
            fontSize="10.5"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="500"
          >
            Conocimiento propio
          </text>
          <text
            x="396"
            y="102"
            textAnchor="end"
            fill="#343D33"
            fontSize="10.5"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="500"
          >
            Autonomía con reglas
          </text>
          <text
            x="230"
            y="368"
            textAnchor="middle"
            fill="#556153"
            fontSize="10.5"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="500"
          >
            Infraestructura controlada · Modelos open-weight reemplazables
          </text>
        </svg>
      </div>

      {/* Editorial figure caption & three quiet metadata pillars */}
      <figcaption className="border-t border-olive/10 pt-4">
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <p className="text-olive-subtle">Despliegue</p>
            <p className="mt-0.5 font-semibold text-olive">Local o privado</p>
          </div>
          <div>
            <p className="text-olive-subtle">Modelos</p>
            <p className="mt-0.5 font-semibold text-olive">Open-weight</p>
          </div>
          <div>
            <p className="text-olive-subtle">Gobierno</p>
            <p className="mt-0.5 font-semibold text-olive">Reglas propias</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Hero() {
  const { navigate } = useRouter();

  return (
    <section className="relative border-b border-olive/12 bg-editorial-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Magazine Opening Spread Typography */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-sm font-medium tracking-wide text-terracotta-accessible">
              Vegen Digital presenta · Vegen Private Intelligence
            </p>

            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-olive sm:text-5xl lg:text-[3.75rem] lg:leading-[1.06]">
              Inteligencia Empresarial Soberana
            </h1>

            <p className="mt-5 font-display text-2xl font-normal italic text-olive-muted sm:text-[1.75rem]">
              Tu negocio. Tu inteligencia. Tus reglas.
            </p>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-olive-muted sm:text-lg sm:leading-8">
              Implementamos inteligencia artificial especializada en tu sector y adaptada a tu
              empresa. Bajo tu control, con tus datos y tus propias reglas. Sin depender
              permanentemente de servicios externos.
            </p>

            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate('/disena-tu-ia')}
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-terracotta-accessible px-6 py-3 text-base font-semibold text-paper transition-colors hover:bg-terracotta-deep whitespace-nowrap"
              >
                Diseña tu propia IA
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/soluciones')}
                className="inline-flex min-h-[50px] items-center justify-center rounded-lg border border-olive/25 bg-paper px-6 py-3 text-base font-medium text-olive transition-colors hover:bg-sand-soft whitespace-nowrap"
              >
                Explorar soluciones
              </button>
            </div>

            <div className="mt-12 border-t border-olive/15 pt-6">
              <p className="max-w-2xl text-sm leading-relaxed text-olive-muted">
                <span className="font-semibold text-olive">Propuesta central · </span>
                La inteligencia artificial deja de ser un servicio externo y se convierte en una
                capacidad propia de tu empresa.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Conceptual Artwork */}
          <div className="lg:col-span-5">
            <EditorialSovereignIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
