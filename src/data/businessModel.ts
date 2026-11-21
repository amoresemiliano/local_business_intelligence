export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export const WORKING_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Diagnóstico empresarial',
    description:
      'Identificamos dónde se genera fricción operativa, qué conocimiento está disperso y qué procesos ofrecen retorno práctico realista.'
  },
  {
    step: '02',
    title: 'Evaluación de infraestructura y datos',
    description:
      'Revisamos tus equipos o servidores disponibles, fuentes documentales, sistemas ERP/CRM y requisitos de confidencialidad.'
  },
  {
    step: '03',
    title: 'Selección de modelos de IA',
    description:
      'Elegimos modelos open-weight con licencia compatible para uso comercial y runtimes locales adecuados al hardware y objetivos.'
  },
  {
    step: '04',
    title: 'Especialización de conocimiento',
    description:
      'Estructuramos, depuramos y versionamos tu documentación y criterios sectoriales sin mezclar datos entre clientes.'
  },
  {
    step: '05',
    title: 'Despliegue e integración',
    description:
      'Instalamos la solución en el entorno acordado y configuramos conectores autorizados con los sistemas de tu operativa.'
  },
  {
    step: '06',
    title: 'Validación de calidad',
    description:
      'Ejecutamos baterías de pruebas con casos reales de tu negocio para verificar precisión, citas documentales y límites.'
  },
  {
    step: '07',
    title: 'Configuración de gobernanza',
    description:
      'Definimos roles, permisos, nivel de autonomía por proceso, flujos de aprobación humana y registros de auditoría.'
  },
  {
    step: '08',
    title: 'Soporte y mejora continua',
    description:
      'Acompañamos la evolución de tu base de conocimiento, revisamos calidad de forma periódica y adaptamos la solución a nuevos retos.'
  }
];

export const COMMERCIAL_MODEL_ITEMS = [
  {
    title: 'Implementación inicial',
    scope: 'Base del proyecto',
    description:
      'Diagnóstico, evaluación de viabilidad, estructuración inicial del conocimiento, despliegue y validación de arranque.'
  },
  {
    title: 'Cuota mensual previsible',
    scope: 'Servicio continuo',
    description:
      'Mantenimiento gobernado del conocimiento, evaluaciones de calidad, soporte profesional y evolución controlada de versiones.'
  },
  {
    title: 'Hardware dedicado (opcional)',
    scope: 'Bajo presupuesto separado',
    description:
      'Asesoramiento o suministro coordinado si la empresa necesita incorporar servidor local o nodos Edge específicos.'
  },
  {
    title: 'Integraciones adicionales (opcional)',
    scope: 'Según alcance técnico',
    description:
      'Conectores específicos con ERP, CRM, TPV, bases de datos SQL o herramientas internas fuera del alcance estándar.'
  },
  {
    title: 'Desarrollo especializado (opcional)',
    scope: 'Según proyecto',
    description:
      'Flujos a medida, paneles operativos internos o reglas de negocio avanzadas para casos de alta especificidad.'
  },
  {
    title: 'Implementación IoT (opcional)',
    scope: 'Entornos físicos',
    description:
      'Integración de sensores, gateways locales y validación determinista para instalaciones industriales, hostelería o retail.'
  }
];

export interface ComparisonRow {
  criterion: string;
  genericCloud: string;
  basicSelfHosted: string;
  vegenSovereign: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: 'Especialización sectorial',
    genericCloud: 'Generalista; exige prompts manuales continuos para adaptar contexto.',
    basicSelfHosted: 'Nula por defecto; depende completamente del equipo técnico interno.',
    vegenSovereign: 'Arquitecturas sectoriales reutilizables adaptadas a la operativa real de tu industria.'
  },
  {
    criterion: 'Conocimiento de empresa',
    genericCloud: 'Integración variable; requiere gestión cuidadosa de accesos y políticas en cada cuenta.',
    basicSelfHosted: 'Limitada a pruebas técnicas o cargas manuales sin gobierno documental.',
    vegenSovereign: 'Base estructurada, versionada, auditable y actualizada con tus fuentes aprobadas.'
  },
  {
    criterion: 'Control de datos',
    genericCloud: 'Depende de acuerdos, planes empresariales y políticas del proveedor externo.',
    basicSelfHosted: 'Alto en almacenamiento local, aunque a menudo sin políticas formales de acceso.',
    vegenSovereign: 'Datos en infraestructura bajo tu control con aislamiento estricto y propiedad íntegra.'
  },
  {
    criterion: 'Despliegue local',
    genericCloud: 'No habitual; diseñado principalmente como servicio remoto dependiente de conectividad.',
    basicSelfHosted: 'Posible, pero frágil en rendimiento, mantenimiento y experiencia de usuario.',
    vegenSovereign: 'Despliegue local o privado evaluado técnicamente (Ollama, llama.cpp y runtimes compatibles).'
  },
  {
    criterion: 'Gobernanza y auditoría',
    genericCloud: 'Disponible sobre todo en licencias corporativas avanzadas con gobernanza de terceros.',
    basicSelfHosted: 'Generalmente inexistente o dispersa sin aprobaciones ni trazabilidad.',
    vegenSovereign: 'Roles, permisos, niveles progresivos de autonomía, aprobaciones humanas y registros auditables.'
  },
  {
    criterion: 'Integraciones operativas',
    genericCloud: 'Suelen requerir conectores externos, suscripciones adicionales o cesión de flujos.',
    basicSelfHosted: 'Desarrollo artesanal con alto coste de mantenimiento interno.',
    vegenSovereign: 'Integración gradual y controlada con ERP, CRM, TPV o SQL según viabilidad y riesgo.'
  },
  {
    criterion: 'Mantenimiento continuo',
    genericCloud: 'El proveedor gestiona la plataforma, pero no el conocimiento ni los procesos de tu negocio.',
    basicSelfHosted: 'Recae por completo en personal interno y suele degradarse con el tiempo.',
    vegenSovereign: 'Servicio gestionado por Vegen: calidad, actualización de conocimiento y evolución ordenada.'
  },
  {
    criterion: 'Potencial Edge & IoT',
    genericCloud: 'Dependiente de latencia y conectividad externa para operar con entornos físicos.',
    basicSelfHosted: 'Requiere arquitectura industrial y capas de seguridad construidas desde cero.',
    vegenSovereign: 'Arquitectura Edge con gateway local y separación determinista entre IA y control físico.'
  },
  {
    criterion: 'Previsibilidad de costes',
    genericCloud: 'Variable según licencias por usuario, consumo de tokens o cambios de tarifa del proveedor.',
    basicSelfHosted: 'Sin coste por token, pero con costes ocultos en horas técnicas y mantenimiento.',
    vegenSovereign: 'Implementación definida + cuota mensual previsible y libertad para cambiar de modelo.'
  }
];
