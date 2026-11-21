import React from 'react';
import { COMPARISON_ROWS } from '../data/businessModel';

export function ComparisonMatrix() {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-2xl border border-olive/12 bg-paper">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-olive/12 bg-parchment/70">
              <th
                scope="col"
                className="w-[22%] px-6 py-4 font-display text-sm font-medium text-olive"
              >
                Criterio de evaluación
              </th>
              <th
                scope="col"
                className="w-[24%] px-6 py-4 font-display text-sm font-medium text-olive-muted"
              >
                Asistente IA genérico en la nube
              </th>
              <th
                scope="col"
                className="w-[24%] px-6 py-4 font-display text-sm font-medium text-olive-muted"
              >
                Instalación básica autoalojada
              </th>
              <th
                scope="col"
                className="w-[30%] bg-olive px-6 py-4 font-display text-sm font-medium text-ivory"
              >
                Vegen Inteligencia Empresarial Soberana
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-olive/10 text-sm">
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.criterion} className="align-top">
                <th
                  scope="row"
                  className="px-6 py-4 font-display font-medium text-olive"
                >
                  {row.criterion}
                </th>
                <td className="px-6 py-4 leading-relaxed text-olive-muted">
                  {row.genericCloud}
                </td>
                <td className="px-6 py-4 leading-relaxed text-olive-muted">
                  {row.basicSelfHosted}
                </td>
                <td className="bg-sand-soft/55 px-6 py-4 font-medium leading-relaxed text-olive">
                  {row.vegenSovereign}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs leading-relaxed text-olive-muted">
        <span className="font-semibold text-olive">Enfoque comparativo honesto: </span>
        Existen plataformas cloud corporativas con opciones avanzadas de privacidad, gobernanza o
        integración. La diferenciación de Vegen no reside en afirmaciones absolutas sobre terceros,
        sino en combinar implementación especializada en tu sector, servicio gestionado continuo,
        propiedad de la base de conocimiento y gobernanza operativa bajo infraestructura controlada
        por tu empresa.
      </p>
    </div>
  );
}
