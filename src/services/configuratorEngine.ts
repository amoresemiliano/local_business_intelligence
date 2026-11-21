import { AUTONOMY_LEVELS } from '../data/autonomy';
import { INDUSTRIES } from '../data/industries';
import { PRICING_PLANS } from '../data/pricing';
import {
  ConfiguratorState,
  ConfiguratorSummary,
  InfrastructureOption,
  IntelligenceTypeOption,
  PlanId,
  SolutionFamilyId
} from '../domain/types';

export const INTELLIGENCE_TYPE_OPTIONS: {
  id: IntelligenceTypeOption;
  title: string;
  description: string;
}[] = [
  {
    id: 'sector',
    title: 'Específica de mi sector',
    description: 'Capacidades especializadas en la operativa, terminología y retos habituales de tu industria.'
  },
  {
    id: 'empresa',
    title: 'Específica de mi empresa',
    description: 'Inteligencia privada construida sobre tus manuales, catálogos, políticas y registros internos.'
  },
  {
    id: 'tematica',
    title: 'Especialización temática',
    description: 'Soporte para disciplinas concretas como finanzas, fiscalidad, calidad, compras, RR. HH. o sostenibilidad.'
  },
  {
    id: 'iot',
    title: 'Conectada a IoT y entorno físico',
    description: 'Integración local con sensores, maquinaria, refrigeración o medidores energéticos.'
  },
  {
    id: 'combinacion',
    title: 'Combinación de las anteriores',
    description: 'Arquitectura combinada que une conocimiento interno, especialidad sectorial y capacidades operativas.'
  }
];

export const BUSINESS_GOAL_OPTIONS = [
  { id: 'consulta-conocimiento', label: 'Consulta de conocimiento interno' },
  { id: 'analisis-documental', label: 'Análisis documental y expedientes' },
  { id: 'atencion-cliente', label: 'Soporte a atención al cliente' },
  { id: 'asistencia-ventas', label: 'Asistencia comercial y ventas' },
  { id: 'analitica-operativa', label: 'Analítica operativa y detección de desviaciones' },
  { id: 'automatizacion-interna', label: 'Automatización supervisada de procesos internos' },
  { id: 'optimizacion-costes', label: 'Optimización de costes y mermas' },
  { id: 'soporte-cumplimiento', label: 'Soporte documental a cumplimiento y calidad' },
  { id: 'monitorizacion-iot', label: 'Monitorización IoT y alertas de instalaciones' },
  { id: 'otro', label: 'Otro objetivo específico' }
] as const;

export const KNOWLEDGE_SOURCE_OPTIONS = [
  { id: 'pdfs-documentos', label: 'PDFs y documentos corporativos' },
  { id: 'hojas-calculo', label: 'Hojas de cálculo (Excel / CSV)' },
  { id: 'erp-crm', label: 'ERP / CRM' },
  { id: 'tpv', label: 'TPV / Punto de venta' },
  { id: 'bases-sql', label: 'Bases de datos SQL' },
  { id: 'catalogos-producto', label: 'Catálogos de producto y tarifas' },
  { id: 'procedimientos-internos', label: 'Procedimientos y manuales internos' },
  { id: 'sensores-iot', label: 'Sensores IoT y equipos locales' },
  { id: 'no-organizado', label: 'Aún no está organizado' }
] as const;

export const INFRASTRUCTURE_OPTIONS: {
  id: InfrastructureOption;
  title: string;
  description: string;
  caveat: string;
}[] = [
  {
    id: 'equipo-existente',
    title: 'Equipo existente en la empresa',
    description: 'Ordenador o estación de trabajo ya disponible en oficina o sede.',
    caveat: 'Sujeto a evaluación previa de CPU, memoria RAM, GPU y concurrencia esperada.'
  },
  {
    id: 'servidor-local',
    title: 'Servidor local dedicado',
    description: 'Servidor propio en las instalaciones de la empresa para acceso interno.',
    caveat: 'Se validará dimensionamiento, refrigeración, copias de seguridad y red local.'
  },
  {
    id: 'infraestructura-privada',
    title: 'Infraestructura privada (CPD o nube privada)',
    description: 'Entorno privado controlado por tu organización con acceso segmentado.',
    caveat: 'Se verificará conectividad segura, aislamiento de red y capacidades de cómputo.'
  },
  {
    id: 'recomendacion-vegen',
    title: 'Necesito la recomendación de Vegen',
    description: 'Preferimos evaluar la opción óptima de hardware e infraestructura junto con Vegen.',
    caveat: 'Incluimos un estudio inicial de viabilidad técnica y dimensionamiento acorde a tu caso.'
  }
];

export const DEFAULT_CONFIGURATOR_STATE: ConfiguratorState = {
  intelligenceType: 'empresa',
  industryId: 'servicios-profesionales',
  goals: ['consulta-conocimiento', 'analisis-documental'],
  otherGoalText: '',
  knowledgeSources: ['pdfs-documentos', 'procedimientos-internos'],
  infrastructure: 'recomendacion-vegen',
  autonomyLevel: 'asistida'
};

export function generateConfiguratorSummary(state: ConfiguratorState): ConfiguratorSummary {
  const industry = INDUSTRIES.find((item) => item.id === state.industryId) ?? INDUSTRIES[0];
  const autonomy =
    AUTONOMY_LEVELS.find((lvl) => lvl.id === state.autonomyLevel) ?? AUTONOMY_LEVELS[0];

  const hasIoT =
    state.intelligenceType === 'iot' ||
    state.goals.includes('monitorizacion-iot') ||
    state.knowledgeSources.includes('sensores-iot');

  const hasStructuredIntegrations =
    state.knowledgeSources.includes('erp-crm') ||
    state.knowledgeSources.includes('tpv') ||
    state.knowledgeSources.includes('bases-sql');

  const isUnorganized = state.knowledgeSources.includes('no-organizado');

  // 1. Determine suggested solution family
  let suggestedFamilyId: SolutionFamilyId = 'enterprise';
  let suggestedFamilyName = 'Vegen Enterprise AI';

  if (hasIoT && state.intelligenceType !== 'combinacion') {
    suggestedFamilyId = 'edge-iot';
    suggestedFamilyName = 'Vegen Edge & IoT Intelligence';
  } else if (state.intelligenceType === 'combinacion') {
    if (hasIoT) {
      suggestedFamilyId = 'edge-iot';
      suggestedFamilyName = 'Vegen Enterprise AI + Edge & IoT Intelligence';
    } else {
      suggestedFamilyId = 'enterprise';
      suggestedFamilyName = 'Vegen Vertical AI + Enterprise AI';
    }
  } else if (state.intelligenceType === 'sector') {
    suggestedFamilyId = 'vertical';
    suggestedFamilyName = 'Vegen Vertical AI';
  } else if (state.intelligenceType === 'tematica') {
    suggestedFamilyId = 'expert';
    suggestedFamilyName = 'Vegen Expert AI';
  } else {
    suggestedFamilyId = 'enterprise';
    suggestedFamilyName = 'Vegen Enterprise AI';
  }

  // 2. Determine suggested plan deterministically
  let suggestedPlanId: PlanId = 'essential';

  if (
    hasIoT ||
    state.autonomyLevel === 'delegada' ||
    (state.intelligenceType === 'combinacion' && state.knowledgeSources.length >= 5)
  ) {
    suggestedPlanId = 'enterprise';
  } else if (
    state.autonomyLevel === 'supervisada' ||
    state.intelligenceType === 'combinacion' ||
    (hasStructuredIntegrations && state.goals.length >= 4)
  ) {
    suggestedPlanId = 'advanced';
  } else if (
    state.autonomyLevel === 'analitica' ||
    hasStructuredIntegrations ||
    state.knowledgeSources.length >= 3 ||
    state.goals.length >= 3
  ) {
    suggestedPlanId = 'business';
  } else {
    suggestedPlanId = 'essential';
  }

  const planObj = PRICING_PLANS.find((p) => p.id === suggestedPlanId) ?? PRICING_PLANS[1];

  // 3. Build relevant capabilities
  const capabilities: string[] = [];
  if (state.goals.includes('consulta-conocimiento')) {
    capabilities.push('Base de conocimiento corporativa consultable con trazabilidad documental.');
  }
  if (state.goals.includes('analisis-documental')) {
    capabilities.push('Síntesis, clasificación y contraste estructurado de documentos internos.');
  }
  if (state.goals.includes('atencion-cliente') || state.goals.includes('asistencia-ventas')) {
    capabilities.push('Asistencia comercial y de soporte basada en catálogos, tarifas y políticas vigentes.');
  }
  if (state.goals.includes('analitica-operativa') || state.goals.includes('optimizacion-costes')) {
    capabilities.push('Detección analítica de desviaciones operativas, mermas y oportunidades de eficiencia.');
  }
  if (state.goals.includes('automatizacion-interna')) {
    capabilities.push('Preparación estructurada de flujos operativos con validación previa y registro.');
  }
  if (state.goals.includes('soporte-cumplimiento')) {
    capabilities.push('Apoyo documental a protocolos de calidad y cumplimiento siempre bajo validación experta.');
  }
  if (hasIoT) {
    capabilities.push('Ingesta local de sensores mediante gateway y capa determinista de validación de seguridad.');
  }
  if (state.goals.includes('otro') && state.otherGoalText.trim()) {
    capabilities.push(`Objetivo adicional indicado: ${state.otherGoalText.trim()}.`);
  }
  if (capabilities.length === 0) {
    capabilities.push('Estructuración inicial del conocimiento sectorial y documental de la organización.');
  }

  // 4. Knowledge sources labels
  const knowledgeSourcesLabels = state.knowledgeSources.map((srcId) => {
    const found = KNOWLEDGE_SOURCE_OPTIONS.find((opt) => opt.id === srcId);
    return found ? found.label : srcId;
  });

  // 5. Infrastructure considerations (never promise compatibility without assessment)
  let infrastructureConsiderations = '';
  switch (state.infrastructure) {
    case 'equipo-existente':
      infrastructureConsiderations =
        'Se requiere una auditoría técnica previa del equipo disponible (memoria RAM, GPU y concurrencia) para confirmar qué modelos open-weight puede ejecutar con tiempos de respuesta adecuados. No se asume compatibilidad sin validación previa.';
      break;
    case 'servidor-local':
      infrastructureConsiderations =
        'Un servidor local dedicado aporta autonomía operativa y control directo dentro de tu red. Evaluaremos especificaciones de hardware, copias de seguridad, aislamiento de red y ejecución sobre Ollama o llama.cpp.';
      break;
    case 'infraestructura-privada':
      infrastructureConsiderations =
        'El despliegue sobre infraestructura privada permite centralizar acceso por roles y escalar recursos según demanda, manteniendo el control de datos. Revisaremos requisitos de red, cifrado y dimensionamiento de cómputo.';
      break;
    case 'recomendacion-vegen':
    default:
      infrastructureConsiderations =
        'Vegen propondrá la arquitectura más equilibrada entre servidor local dedicado o infraestructura privada tras analizar volumen documental, usuarios concurrentes y requisitos de continuidad offline.';
      break;
  }

  if (isUnorganized) {
    infrastructureConsiderations +=
      ' Adicionalmente, se incluirá una fase previa de inventario y ordenación documental antes de indexar el conocimiento.';
  }

  // 6. Governance considerations
  const governanceConsiderations: string[] = [
    ...autonomy.governanceRequirements,
    'Separación estricta entre conocimiento de empresa y motor de inferencia reemplazable.'
  ];
  if (hasIoT) {
    governanceConsiderations.push(
      'Separación determinista obligatoria entre recomendaciones de IA y cualquier acción sobre equipos físicos.'
    );
  }
  if (
    industry.id === 'despachos-juridicos' ||
    industry.id === 'asesorias-gestorias' ||
    state.intelligenceType === 'tematica'
  ) {
    governanceConsiderations.push(
      'Supervisión profesional obligatoria: la IA apoya el análisis pero no sustituye el criterio técnico o legal cualificado.'
    );
  }

  // 7. Indicative commercial range (clearly non-binding)
  const indicativeRange =
    planObj.monthlyPriceEur !== null && planObj.implementationFromEur !== null
      ? `Referencia orientativa Plan ${planObj.name}: ${planObj.monthlyPriceEur} €/mes + implementación desde ${planObj.implementationFromEur.toLocaleString('es-ES')} € (IVA no incluido; propuesta sujeta a validación técnica y comercial).`
      : 'Referencia orientativa Plan ENTERPRISE & EDGE: presupuesto a medida tras diagnóstico de sedes, integraciones, hardware y requisitos de gobernanza (IVA no incluido).';

  // 8. Recommended next step
  let recommendedNextStep =
    'Sesión de diagnóstico de 45 minutos con Vegen para revisar tus fuentes de conocimiento, validar viabilidad técnica de infraestructura y concretar una propuesta cerrada por fases.';

  if (state.autonomyLevel === 'delegada' || hasIoT) {
    recommendedNextStep =
      'Evaluación técnica y de riesgos junto al equipo de arquitectura de Vegen para auditar infraestructura, protocolos locales y definir un despliegue gradual empezando por fase asistida/supervisada.';
  } else if (isUnorganized) {
    recommendedNextStep =
      'Diagnóstico inicial de madurez documental e infraestructura con Vegen para estructurar las fuentes prioritarias y definir un primer alcance práctico.';
  }

  // 9. Plain text summary for copy & lead attachment
  const plainTextSummary = [
    'RESUMEN DE CONFIGURACIÓN — VEGEN PRIVATE INTELLIGENCE',
    '------------------------------------------------------------',
    `Familia de solución sugerida: ${suggestedFamilyName}`,
    `Sector seleccionado: ${industry.name}`,
    `Nivel de autonomía propuesto: Nivel ${autonomy.levelNumber} — ${autonomy.name}`,
    `Plan orientativo sugerido: ${planObj.name}`,
    '',
    'Capacidades relevantes:',
    ...capabilities.map((cap) => `- ${cap}`),
    '',
    'Fuentes de conocimiento declaradas:',
    ...(knowledgeSourcesLabels.length > 0
      ? knowledgeSourcesLabels.map((src) => `- ${src}`)
      : ['- Por definir en fase de diagnóstico']),
    '',
    `Consideraciones de infraestructura: ${infrastructureConsiderations}`,
    '',
    'Requisitos clave de gobernanza:',
    ...governanceConsiderations.map((gov) => `- ${gov}`),
    '',
    `Rango comercial orientativo: ${indicativeRange}`,
    `Siguiente paso recomendado: ${recommendedNextStep}`,
    '',
    'Nota: Este resumen se genera con reglas orientativas y no constituye un presupuesto vinculante ni confirma compatibilidad de hardware sin evaluación técnica.'
  ].join('\n');

  return {
    suggestedFamilyId,
    suggestedFamilyName,
    industryName: industry.name,
    relevantCapabilities: capabilities,
    proposedAutonomyName: `Nivel ${autonomy.levelNumber} — ${autonomy.name}`,
    proposedAutonomyExplanation: autonomy.tagline,
    knowledgeSourcesLabels,
    infrastructureConsiderations,
    governanceConsiderations,
    suggestedPlanId,
    suggestedPlanName: planObj.name,
    indicativeRange,
    recommendedNextStep,
    plainTextSummary
  };
}
