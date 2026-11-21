import React from 'react';
import { RoutePath } from '../domain/types';
import { useRouter } from '../router/RouterContext';

const FOOTER_NAV: { label: string; path: RoutePath }[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Soluciones', path: '/soluciones' },
  { label: 'Industrias', path: '/industrias' },
  { label: 'Autonomía y Gobernanza', path: '/autonomia-gobernanza' },
  { label: 'Edge & IoT', path: '/edge-iot' },
  { label: 'Planes', path: '/planes' },
  { label: 'Diseña tu IA', path: '/disena-tu-ia' },
  { label: 'Contacto', path: '/contacto' }
];

export function Footer() {
  const { navigate } = useRouter();

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="border-t border-ivory/10 bg-olive-deep text-ivory/85">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xl font-medium tracking-tight text-ivory">
              Vegen Private Intelligence
            </p>
            <p className="mt-1.5 text-sm text-sage-muted">
              División de Inteligencia Empresarial Soberana de Vegen Digital
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/80">
              La inteligencia artificial deja de ser un servicio externo y se convierte en una
              capacidad propia de tu empresa. Tu negocio. Tu inteligencia. Tus reglas.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-sand">
              <span>España y Latinoamérica</span>
              <span aria-hidden="true">·</span>
              <span>Modelos open-weight compatibles</span>
              <span aria-hidden="true">·</span>
              <span>Soberanía de datos</span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-display text-base font-medium text-ivory">Navegación</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-ivory/75 transition-colors hover:text-sand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-base font-medium text-ivory">
              Siguiente paso
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ivory/75">
              Configura un primer borrador de tu arquitectura o solicita una sesión de
              evaluación técnica y comercial.
            </p>
            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="/disena-tu-ia"
                onClick={(e) => handleLink(e, '/disena-tu-ia')}
                className="inline-flex items-center justify-center rounded-lg bg-terracotta-accessible px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-terracotta whitespace-nowrap"
              >
                Diseña tu propia IA
              </a>
              <a
                href="/contacto"
                onClick={(e) => handleLink(e, '/contacto')}
                className="text-sm font-medium text-sand underline-offset-4 transition-colors hover:text-ivory hover:underline"
              >
                Solicitar evaluación personalizada
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/12 pt-8 text-xs leading-relaxed text-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vegen Digital — Vegen Private Intelligence.</p>
          <p className="max-w-2xl sm:text-right">
            Versión comercial de evaluación: los casos de uso sectoriales, precios orientativos y
            escenarios IoT son ilustrativos y están sujetos a validación técnica y comercial.
          </p>
        </div>
      </div>
    </footer>
  );
}
