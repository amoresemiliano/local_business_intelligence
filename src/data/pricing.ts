import { FAQItem, PricingPlan } from '../domain/types';

export const ANNUAL_DISCOUNT_RATE = 0.1; // 10% condición comercial propuesta ilustrativa

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essential',
    name: 'ESSENTIAL',
    audience: 'Para pequeñas empresas y profesionales que inician su inteligencia privada.',
    monthlyPriceEur: 149,
    implementationFromEur: 490,
    autonomyScope: 'Autonomía Nivel 1 — Asistida',
    features: [
      'Una especialización claramente definida (sectorial o documental).',
      'Evaluación de viabilidad para despliegue de IA en infraestructura local.',
      'Base de conocimiento estructurada a partir de documentación aprobada.',
      'Actualizaciones básicas programadas de la base de conocimiento.',
      'Soporte profesional básico con alcance definido.',
      'Operación en modo de autonomía asistida (solo consulta).'
    ]
  },
  {
    id: 'business',
    name: 'BUSINESS',
    audience: 'Para pymes que integran el conocimiento interno de varias áreas con control de roles.',
    monthlyPriceEur: 349,
    implementationFromEur: 990,
    highlighted: true,
    autonomyScope: 'Autonomía Nivel 1 y 2 — Asistida y Analítica',
    features: [
      'Especialización adaptada a la empresa y sus procedimientos reales.',
      'Múltiples fuentes de conocimiento aprobadas y versionadas.',
      'Actualizaciones programadas del conocimiento corporativo.',
      'Gestión de roles de usuario y segmentación de acceso.',
      'Evaluaciones periódicas de calidad y precisión de respuestas.',
      'Una integración estándar predefinida, sujeta a viabilidad técnica.'
    ]
  },
  {
    id: 'advanced',
    name: 'ADVANCED',
    audience: 'Para organizaciones con flujos operativos supervisados y exigencia de auditoría.',
    monthlyPriceEur: 699,
    implementationFromEur: 1990,
    autonomyScope: 'Hasta Nivel 3 — Supervisada con aprobaciones',
    features: [
      'Múltiples especializaciones por área, disciplina o unidad de negocio.',
      'Integraciones empresariales definidas con sistemas internos.',
      'Flujos operativos supervisados con aprobación humana obligatoria.',
      'Registros de actividad auditables y trazabilidad documental completa.',
      'Evaluación mensual de desempeño y ajuste continuo de conocimiento.',
      'Alcance ampliado de soporte técnico y acompañamiento operativo.'
    ]
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE & EDGE',
    audience: 'Para grupos multisede, entornos industriales, IoT y requisitos avanzados de gobernanza.',
    monthlyPriceEur: null,
    implementationFromEur: null,
    customPricingLabel: 'A medida',
    autonomyScope: 'Niveles 1 a 4 — Según análisis de riesgo por proceso',
    features: [
      'Despliegues multisede o arquitecturas híbridas privadas.',
      'Integración con sensores locales, gateways y entornos Edge & IoT.',
      'Requisitos específicos de gobernanza, cumplimiento y seguridad.',
      'Integraciones avanzadas y desarrollos a medida según proyecto.',
      'Evaluación detallada de infraestructura y dimensionamiento de hardware.',
      'Compromisos de nivel de servicio (SLA) definidos contractualmente.'
    ]
  }
];

export const PRICING_FAQS: FAQItem[] = [
  {
    id: 'sin-internet',
    question: '¿Puede funcionar sin conexión a Internet?',
    answer:
      'Sí, cuando la arquitectura desplegada se ejecuta íntegramente en infraestructura local del cliente y el hardware soporta los modelos seleccionados. Algunas funciones opcionales —como integraciones con sistemas en la nube o descarga de actualizaciones— requerirán conectividad controlada en el momento de sincronizarse.'
  },
  {
    id: 'pago-tokens',
    question: '¿Tengo que pagar por consumo de tokens?',
    answer:
      'En los despliegues locales o sobre infraestructura privada propia no se paga por token a proveedores externos de IA. La capacidad de respuesta depende del hardware disponible y del dimensionamiento acordado, ofreciendo costes mensuales mucho más previsibles.'
  },
  {
    id: 'propiedad-datos',
    question: '¿Mi empresa mantiene la propiedad de sus datos?',
    answer:
      'Sí. Toda la documentación, bases de conocimiento estructuradas, históricos operativos y registros pertenecen íntegramente a tu empresa. Vegen no utiliza información de clientes para entrenar modelos propios ni de terceros.'
  },
  {
    id: 'entrenamiento-modelo',
    question: '¿El modelo se entrena con los datos de mi empresa?',
    answer:
      'En la gran mayoría de los casos no es necesario reentrenar los parámetros del modelo base. Trabajamos principalmente mediante bases de conocimiento privadas, indexación estructurada y reglas de negocio, lo que permite actualizar información al instante, citar fuentes exactas y mantener total reversibilidad. El ajuste fino (fine-tuning) solo se contempla cuando existe un caso técnico justificado.'
  },
  {
    id: 'cambiar-modelo',
    question: '¿Puedo cambiar de modelo de IA en el futuro?',
    answer:
      'Sí. Precisamente porque la arquitectura separa el conocimiento de tu empresa y las reglas de gobernanza del motor de inferencia (por ejemplo, modelos open-weight compatibles con Ollama o llama.cpp), puedes actualizar o sustituir el modelo cuando aparezcan alternativas mejores sin perder tu activo de conocimiento.'
  },
  {
    id: 'hardware-necesario',
    question: '¿Qué hardware necesito para ejecutarlo en local?',
    answer:
      'Depende del número de usuarios simultáneos, del volumen documental y del tamaño de los modelos requeridos. Para casos asistidos iniciales puede bastar un equipo profesional bien dimensionado o un servidor local compacto con memoria suficiente; para varios departamentos suele recomendarse un servidor dedicado con GPU adecuada. Siempre realizamos una evaluación técnica de viabilidad antes de comprometer compatibilidad.'
  },
  {
    id: 'cancelacion',
    question: '¿Qué ocurre si decido cancelar el servicio?',
    answer:
      'Tu empresa conserva la propiedad de sus documentos y puede exportar la base de conocimiento estructurada y las configuraciones acordadas en formatos abiertos. No aplicamos retención de datos ni bloqueos artificiales sobre el conocimiento generado por tu negocio.'
  },
  {
    id: 'actualizaciones',
    question: '¿Cómo se realizan las actualizaciones de conocimiento y software?',
    answer:
      'Mediante un calendario y protocolo acordados: los documentos nuevos o modificados pasan por una fase de validación y versionado antes de activarse en la base consultable. Las actualizaciones del motor de inferencia o conectores se prueban previamente para preservar estabilidad y calidad.'
  },
  {
    id: 'automatizar-operaciones',
    question: '¿La IA puede automatizar operaciones de negocio?',
    answer:
      'Puede evolucionar de forma gradual. Recomendamos comenzar en niveles Asistido o Analítico para validar calidad y confianza. A partir de ahí, ciertos procesos pueden avanzar a nivel Supervisado (preparación con aprobación humana obligatoria) o Delegado en tareas acotadas con reglas deterministas estrictas.'
  },
  {
    id: 'iot-incluido',
    question: '¿La conectividad IoT está incluida en todos los planes?',
    answer:
      'No. La integración con sensores, gateways locales y maquinaria se plantea habitualmente dentro de proyectos Enterprise & Edge o como módulo adicional, ya que requiere evaluar protocolos industriales, seguridad de red local, hardware de captura y reglas deterministas específicas.'
  }
];
