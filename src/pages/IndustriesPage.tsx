import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { IndustryCard } from '../components/IndustryCard';
import { IndustryDetailModal } from '../components/IndustryDetailModal';
import { INDUSTRIES, INDUSTRY_CATEGORIES } from '../data/industries';
import { IndustryCategory, IndustryItem } from '../domain/types';

export function IndustriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<IndustryCategory>('todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeIndustry, setActiveIndustry] = useState<IndustryItem | null>(null);

  const filteredIndustries = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return INDUSTRIES.filter((item) => {
      const matchesCategory =
        selectedCategory === 'todas' || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        item.name.toLowerCase().includes(query) ||
        item.shortSummary.toLowerCase().includes(query) ||
        item.recommendedFamilyName.toLowerCase().includes(query) ||
        item.aiCapabilities.some((cap) => cap.toLowerCase().includes(query))
      );
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div>
      {/* Editorial Page Hero */}
      <section className="border-b border-olive/12 bg-editorial-paper text-olive">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-terracotta-accessible">
            Catálogo sectorial · Casos de uso ilustrativos
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-medium tracking-tight text-olive sm:text-5xl sm:leading-[1.1]">
            Inteligencia especializada para la operativa real de tu sector
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-olive-muted sm:text-lg">
            Cada sector tiene procesos, documentación, riesgos y márgenes propios. Explora los
            escenarios ilustrativos por industria y abre cualquier ficha para revisar problemas
            habituales, fuentes de conocimiento y arquitectura recomendada.
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-olive-subtle">
            Nota de transparencia: todos los ejemplos de esta sección son casos de uso ilustrativos
            orientados a evaluar oportunidades reales de implementación. No incluimos testimonios
            inventados ni afirmamos despliegues no verificados.
          </p>
        </div>
      </section>

      {/* Filter Bar + Catalog */}
      <section className="bg-editorial-sage text-olive">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col gap-4 border-b border-olive/15 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filtrar industrias por categoría"
              className="flex flex-wrap items-center gap-2"
            >
              {INDUSTRY_CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    aria-pressed={isSelected}
                    className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'bg-olive text-ivory'
                        : 'border border-olive/18 bg-paper text-olive-muted hover:bg-sand-soft hover:text-olive'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-72">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-olive-subtle"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar sector o capacidad..."
                aria-label="Buscar sector o capacidad"
                className="min-h-[42px] w-full rounded-lg border border-olive/18 bg-paper pl-9 pr-3.5 text-sm text-olive placeholder:text-olive-subtle focus:border-terracotta-accessible focus:outline-none"
              />
            </div>
          </div>

          {/* Count */}
          <p className="mt-6 text-xs font-medium text-olive-muted tabular-nums">
            Mostrando {filteredIndustries.length} de {INDUSTRIES.length} sectores
          </p>

          {/* Grid or Empty State */}
          {filteredIndustries.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-olive/12 bg-paper p-10 text-center">
              <p className="font-display text-xl font-medium text-olive">
                No se encontraron sectores con esos criterios
              </p>
              <p className="mt-2 text-sm text-olive-muted">
                Puedes restablecer los filtros o configurar una arquitectura personalizada para tu
                actividad específica.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('todas');
                  setSearchTerm('');
                }}
                className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-olive px-5 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-olive-deep"
              >
                Mostrar todos los sectores
              </button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredIndustries.map((industry) => (
                <IndustryCard
                  key={industry.id}
                  industry={industry}
                  onSelect={setActiveIndustry}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <IndustryDetailModal
        industry={activeIndustry}
        onClose={() => setActiveIndustry(null)}
      />

      <CTASection
        title="¿Tu sector tiene particularidades operativas específicas?"
        description="Configura una propuesta orientativa seleccionando tu industria, fuentes de conocimiento y nivel de control requerido."
      />
    </div>
  );
}
