import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RoutePath } from '../domain/types';
import { useRouter } from '../router/RouterContext';

interface NavLinkItem {
  label: string;
  mobileLabel: string;
  path: RoutePath;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Inicio', mobileLabel: 'Inicio', path: '/' },
  { label: 'Soluciones', mobileLabel: 'Soluciones', path: '/soluciones' },
  { label: 'Industrias', mobileLabel: 'Industrias', path: '/industrias' },
  { label: 'Autonomía', mobileLabel: 'Autonomía y Gobernanza', path: '/autonomia-gobernanza' },
  { label: 'Edge & IoT', mobileLabel: 'Edge & IoT', path: '/edge-iot' },
  { label: 'Planes', mobileLabel: 'Planes', path: '/planes' },
  { label: 'Contacto', mobileLabel: 'Contacto', path: '/contacto' }
];

export function Header() {
  const { currentPath, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-olive/12 bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line editorial serif wordmark */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="font-display text-xl font-semibold tracking-tight text-olive whitespace-nowrap shrink-0 transition-opacity hover:opacity-80"
          aria-label="Vegen Private Intelligence — Inicio"
        >
          Vegen
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-6"
        >
          {NAV_LINKS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-olive'
                    : 'text-olive-muted hover:text-olive'
                }`}
              >
                {item.path === '/autonomia-gobernanza' ? (
                  <>
                    <span className="xl:hidden">{item.label}</span>
                    <span className="hidden xl:inline">{item.mobileLabel}</span>
                  </>
                ) : (
                  item.label
                )}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[25px] h-[2px] bg-terracotta"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary terracotta action + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/disena-tu-ia"
            onClick={(e) => handleNavClick(e, '/disena-tu-ia')}
            className={`hidden sm:inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
              currentPath === '/disena-tu-ia'
                ? 'bg-terracotta-deep text-paper ring-1 ring-olive/20'
                : 'bg-terracotta-accessible text-paper hover:bg-terracotta-deep'
            }`}
          >
            Diseña tu IA
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-olive/18 bg-paper text-olive transition-colors hover:bg-parchment lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Menú móvil"
          className="border-t border-olive/12 bg-paper px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center rounded-lg px-3.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-sand-soft text-olive font-semibold'
                      : 'text-olive-muted hover:bg-ivory hover:text-olive'
                  }`}
                >
                  {item.mobileLabel}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="/disena-tu-ia"
                onClick={(e) => handleNavClick(e, '/disena-tu-ia')}
                className="flex min-h-[46px] w-full items-center justify-center rounded-lg bg-terracotta-accessible px-4 py-2.5 text-base font-semibold text-paper transition-colors hover:bg-terracotta-deep"
              >
                Diseña tu IA
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
