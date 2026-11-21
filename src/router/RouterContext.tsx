import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  ConfiguratorPreselection,
  ContactPreselection,
  RoutePath
} from '../domain/types';

const VALID_ROUTES: RoutePath[] = [
  '/',
  '/soluciones',
  '/industrias',
  '/autonomia-gobernanza',
  '/edge-iot',
  '/planes',
  '/disena-tu-ia',
  '/contacto'
];

const ROUTE_TITLES: Record<RoutePath, string> = {
  '/': 'Vegen Private Intelligence — Inteligencia Empresarial Soberana',
  '/soluciones': 'Soluciones de IA Soberana — Vegen Private Intelligence',
  '/industrias': 'Industrias y Casos de Uso — Vegen Private Intelligence',
  '/autonomia-gobernanza': 'Autonomía y Gobernanza — Vegen Private Intelligence',
  '/edge-iot': 'Edge & IoT Intelligence — Vegen Private Intelligence',
  '/planes': 'Planes y Precios Orientativos — Vegen Private Intelligence',
  '/disena-tu-ia': 'Diseña tu IA — Vegen Private Intelligence',
  '/contacto': 'Contacto y Evaluación — Vegen Private Intelligence'
};

function normalizePath(pathname: string): RoutePath {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (VALID_ROUTES.includes(clean as RoutePath)) {
    return clean as RoutePath;
  }
  return '/';
}

interface RouterContextValue {
  currentPath: RoutePath;
  navigate: (path: RoutePath) => void;
  navigateToConfigurator: (preselection?: ConfiguratorPreselection) => void;
  navigateToContact: (preselection?: ContactPreselection) => void;
  configuratorPreselection: ConfiguratorPreselection | null;
  clearConfiguratorPreselection: () => void;
  contactPreselection: ContactPreselection | null;
  clearContactPreselection: () => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname)
  );
  const [configuratorPreselection, setConfiguratorPreselection] =
    useState<ConfiguratorPreselection | null>(null);
  const [contactPreselection, setContactPreselection] =
    useState<ContactPreselection | null>(null);

  useEffect(() => {
    document.title = ROUTE_TITLES[currentPath];
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: RoutePath) => {
    const target = normalizePath(path);
    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target);
    }
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToConfigurator = useCallback(
    (preselection?: ConfiguratorPreselection) => {
      if (preselection) {
        setConfiguratorPreselection(preselection);
      }
      navigate('/disena-tu-ia');
    },
    [navigate]
  );

  const navigateToContact = useCallback(
    (preselection?: ContactPreselection) => {
      if (preselection) {
        setContactPreselection(preselection);
      }
      navigate('/contacto');
    },
    [navigate]
  );

  const clearConfiguratorPreselection = useCallback(() => {
    setConfiguratorPreselection(null);
  }, []);

  const clearContactPreselection = useCallback(() => {
    setContactPreselection(null);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        navigateToConfigurator,
        navigateToContact,
        configuratorPreselection,
        clearConfiguratorPreselection,
        contactPreselection,
        clearContactPreselection
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter debe utilizarse dentro de RouterProvider');
  }
  return ctx;
}
