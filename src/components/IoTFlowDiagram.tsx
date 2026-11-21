import React, { useState } from 'react';
import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { IOT_ARCHITECTURE_NODES, IOT_SCENARIOS } from '../data/iot';

export function IoTFlowDiagram() {
  const [activeNodeId, setActiveNodeId] = useState<string>(IOT_ARCHITECTURE_NODES[0].id);
  const [activeScenarioId, setActiveScenarioId] = useState<string>(IOT_SCENARIOS[0].id);

  const selectedNode =
    IOT_ARCHITECTURE_NODES.find((node) => node.id === activeNodeId) ??
    IOT_ARCHITECTURE_NODES[0];

  const selectedScenario =
    IOT_SCENARIOS.find((scenario) => scenario.id === activeScenarioId) ?? IOT_SCENARIOS[0];

  return (
    <div className="space-y-16">
      {/* Part 1: Interactive 6-Node System Architecture Diagram */}
      <div className="rounded-2xl border border-olive/12 bg-paper p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-2 border-b border-olive/12 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-sage-deep">
              Diagrama interactivo de arquitectura local
            </p>
            <h3 className="mt-1.5 font-display text-2xl font-medium tracking-tight text-olive sm:text-3xl">
              Flujo técnico y de control en entornos Edge &amp; IoT
            </h3>
          </div>
          <p className="text-xs text-olive-subtle">
            Selecciona cualquier etapa para inspeccionar su función técnica y comercial
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Interactive vertical / responsive pipeline */}
          <div className="space-y-2 lg:col-span-6" role="tablist" aria-label="Etapas de arquitectura IoT">
            {IOT_ARCHITECTURE_NODES.map((node, index) => {
              const isActive = node.id === activeNodeId;
              const isValidationGate = node.id === 'gobernanza-validacion';
              return (
                <React.Fragment key={node.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition-colors ${
                      isActive
                        ? isValidationGate
                          ? 'border-olive bg-olive text-ivory'
                          : 'border-terracotta bg-sand-soft text-olive'
                        : 'border-olive/12 bg-ivory text-olive-muted hover:border-olive/25 hover:text-olive'
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-xs ${
                          isActive && isValidationGate
                            ? 'text-sand'
                            : isValidationGate
                            ? 'text-sage-deep'
                            : 'text-terracotta-accessible'
                        }`}
                      >
                        {node.step}
                      </span>
                      <div>
                        <p className="font-display text-base font-medium">
                          {node.title}
                        </p>
                        <p
                          className={`mt-0.5 text-xs ${
                            isActive && isValidationGate ? 'text-ivory/80' : 'text-olive-subtle'
                          }`}
                        >
                          {node.role}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isActive
                          ? isValidationGate
                            ? 'translate-x-0.5 text-sand'
                            : 'translate-x-0.5 text-terracotta-accessible'
                          : 'text-olive-subtle'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {index < IOT_ARCHITECTURE_NODES.length - 1 && (
                    <div className="flex justify-center py-0.5" aria-hidden="true">
                      <ArrowDown className="h-4 w-4 text-olive/35" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Selected Node Detail Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-olive/12 bg-ivory p-6 sm:p-8 lg:col-span-6">
            <div>
              <p className="font-mono text-xs text-terracotta-accessible">
                Etapa {selectedNode.step} de 06 · {selectedNode.role}
              </p>
              <h4 className="mt-2 font-display text-2xl font-medium text-olive">
                {selectedNode.title}
              </h4>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold text-olive-subtle">
                    Alcance técnico
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-olive sm:text-base">
                    {selectedNode.technicalScope}
                  </p>
                </div>

                <div className="border-t border-olive/12 pt-6">
                  <p className="text-xs font-semibold text-olive-subtle">
                    Valor para el negocio
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-olive sm:text-base">
                    {selectedNode.commercialValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-sage/60 bg-sage-soft/75 p-4 text-xs leading-relaxed text-olive">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" aria-hidden="true" />
                <p>
                  <span className="font-semibold">Separación de seguridad: </span>
                  Las recomendaciones generadas por modelos de IA nunca actúan directamente sobre
                  equipos críticos; toda actuación pasa por comprobaciones deterministas y
                  supervisión humana según nivel de riesgo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive Conceptual Scenarios (Clearly Labeled Simulated Data) */}
      <div className="rounded-2xl border border-ivory/15 bg-olive p-6 text-ivory sm:p-8 lg:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-sand">
              Demostración conceptual · Datos simulados ilustrativos
            </p>
            <h3 className="mt-1 font-display text-2xl font-medium tracking-tight text-ivory sm:text-3xl">
              Escenarios interactivos de operación conectada
            </h3>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-ivory/75 sm:text-right">
            Esta demostración muestra datos simulados para ilustrar el flujo arquitectónico. No hay
            dispositivos físicos conectados a esta web.
          </p>
        </div>

        {/* Scenario Tabs */}
        <div
          role="tablist"
          aria-label="Escenarios ilustrativos Edge e IoT"
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {IOT_SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`flex min-h-[72px] flex-col justify-between rounded-xl border px-4 py-3.5 text-left transition-colors ${
                  isSelected
                    ? 'border-sand bg-paper text-olive'
                    : 'border-ivory/15 bg-olive-surface text-ivory/80 hover:border-ivory/35 hover:text-ivory'
                }`}
              >
                <span
                  className={`text-xs ${
                    isSelected ? 'text-olive-subtle' : 'text-sage-muted'
                  }`}
                >
                  {scenario.sector}
                </span>
                <span className="mt-1 font-display text-base font-medium">{scenario.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Panel */}
        <div className="mt-6 rounded-2xl border border-ivory/15 bg-olive-surface p-6 sm:p-8">
          <div className="flex flex-col gap-4 border-b border-ivory/12 pb-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs text-sand">
                Escenario simulado · {selectedScenario.sector}
              </p>
              <h4 className="mt-1.5 font-display text-2xl font-medium text-ivory">
                {selectedScenario.headline}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ivory/82">
                {selectedScenario.description}
              </p>
            </div>
            <div className="shrink-0 text-xs font-medium text-sage-muted">
              Lecturas simuladas sin conexión física real
            </div>
          </div>

          {/* Simulated Telemetry Readouts */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {selectedScenario.simulatedMetrics.map((metric) => {
              const stateLabel =
                metric.state === 'atencion'
                  ? 'Desviación simulada'
                  : metric.state === 'validacion'
                  ? 'En contraste'
                  : 'Dentro de rango';
              const stateTextClass =
                metric.state === 'atencion'
                  ? 'text-sand'
                  : metric.state === 'validacion'
                  ? 'text-terracotta-soft'
                  : 'text-sage';

              return (
                <div
                  key={metric.label}
                  className="rounded-xl border border-ivory/12 bg-olive-deep/75 p-4"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="text-ivory/75">{metric.label}</span>
                    <span className={`font-medium ${stateTextClass}`}>{stateLabel}</span>
                  </div>
                  <p className="mt-2 font-mono text-2xl font-medium text-ivory tabular-nums">
                    {metric.value}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ivory/65">{metric.threshold}</p>
                </div>
              );
            })}
          </div>

          {/* 5-Stage Conceptual Flow Breakdown */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl border border-ivory/12 bg-olive-deep/70 p-4">
              <p className="font-mono text-xs text-ivory/70">1. Señal simulada</p>
              <p className="mt-2 text-xs leading-relaxed text-ivory/90">
                {selectedScenario.sensorInput}
              </p>
            </div>
            <div className="rounded-xl border border-ivory/12 bg-olive-deep/70 p-4">
              <p className="font-mono text-xs text-ivory/70">2. Gateway local</p>
              <p className="mt-2 text-xs leading-relaxed text-ivory/90">
                {selectedScenario.localGatewayAction}
              </p>
            </div>
            <div className="rounded-xl border border-ivory/12 bg-olive-deep/70 p-4">
              <p className="font-mono text-xs text-sand">3. IA especializada</p>
              <p className="mt-2 text-xs leading-relaxed text-ivory/90">
                {selectedScenario.aiAnalysis}
              </p>
            </div>
            <div className="rounded-xl border border-sage/45 bg-olive-deep/95 p-4">
              <p className="font-mono text-xs text-sage">4. Validación determinista</p>
              <p className="mt-2 text-xs leading-relaxed text-ivory">
                {selectedScenario.deterministicCheck}
              </p>
            </div>
            <div className="rounded-xl border border-ivory/12 bg-olive-deep/70 p-4">
              <p className="font-mono text-xs text-terracotta-soft">5. Respuesta autorizada</p>
              <p className="mt-2 text-xs leading-relaxed text-ivory/90">
                {selectedScenario.authorizedOutput}
              </p>
            </div>
          </div>

          <p className="mt-6 border-t border-ivory/12 pt-5 text-xs leading-relaxed text-ivory/82">
            <span className="font-semibold text-sand">Supervisión humana: </span>
            {selectedScenario.humanOversightNote}
          </p>
        </div>
      </div>
    </div>
  );
}
