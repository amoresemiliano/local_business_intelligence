import React from 'react';
import { MotionConfig } from 'motion/react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AutonomyGovernancePage } from './pages/AutonomyGovernancePage';
import { ConfiguratorPage } from './pages/ConfiguratorPage';
import { ContactPage } from './pages/ContactPage';
import { EdgeIoTPage } from './pages/EdgeIoTPage';
import { HomePage } from './pages/HomePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PricingPage } from './pages/PricingPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { RouterProvider, useRouter } from './router/RouterContext';

function PageView() {
  const { currentPath } = useRouter();

  switch (currentPath) {
    case '/soluciones':
      return <SolutionsPage />;
    case '/industrias':
      return <IndustriesPage />;
    case '/autonomia-gobernanza':
      return <AutonomyGovernancePage />;
    case '/edge-iot':
      return <EdgeIoTPage />;
    case '/planes':
      return <PricingPage />;
    case '/disena-tu-ia':
      return <ConfiguratorPage />;
    case '/contacto':
      return <ContactPage />;
    case '/':
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <div className="flex min-h-screen flex-col overflow-x-clip bg-ivory text-olive">
          <a
            href="#contenido-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-terracotta-accessible focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
          >
            Saltar al contenido principal
          </a>
          <Header />
          <main id="contenido-principal" className="flex-1">
            <PageView />
          </main>
          <Footer />
        </div>
      </RouterProvider>
    </MotionConfig>
  );
}
