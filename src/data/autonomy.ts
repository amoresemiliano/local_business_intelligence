import { AutonomyLevel, GovernancePillar } from '../domain/types';

export const AUTONOMY_LEVELS: AutonomyLevel[] = [
  {
    id: 'asistida',
    levelNumber: 1,
    name: 'Asistida',
    tagline: 'Recupera conocimiento y responde con precisión sin modificar sistemas.',
    description:
      'La inteligencia artificial consulta únicamente las fuentes corporativas autorizadas, sintetiza respuestas trazables y apoya al equipo en tareas de información. No realiza cambios en sistemas empresariales ni dispara acciones externas.',
    exampleWorkflow: {
      trigger: 'Un responsable comercial pregunta por condiciones vigentes de devolución y garantías para una línea de producto.',
      aiStep: 'Localiza el documento vigente en la base privada, sintetiza las condiciones aplicables y cita la sección exacta.',
      controlGate: 'Solo lectura sobre conocimiento aprobado y filtrado según el rol del usuario.',
      outcome: 'El profesional obtiene respuesta verificable en segundos y decide cómo comunicarla al cliente.'
    },
    allowedActions: [
      'Búsqueda semántica y recuperación sobre documentación interna aprobada.',
      'Síntesis de manuales, contratos tipo, catálogos y procedimientos.',
      'Redacción de borradores internos sin envío automático.'
    ],
    restrictedActions: [
      'No escribe ni modifica registros en ERP, CRM o bases de datos operativas.',
      'No envía correos, pedidos ni notificaciones automáticas a terceros.',
      'No ejecuta acciones sobre dispositivos físicos o infraestructura.'
    ],
    humanSupervision:
      'Control humano total. El usuario interpreta, valida y ejecuta cualquier paso posterior fuera del sistema.',
    governanceRequirements: [
      'Control de acceso por usuario o departamento.',
      'Versionado de la base documental vigente.',
      'Registro básico de consultas y fuentes recuperadas.'
    ],
    riskProfile: 'Riesgo operativo mínimo. Punto de partida recomendado para despliegues iniciales.'
  },
  {
    id: 'analitica',
    levelNumber: 2,
    name: 'Analítica',
    tagline: 'Analiza datos operativos, detecta anomalías y propone mejoras fundamentadas.',
    description:
      'Además de responder consultas, el sistema cruza información estructurada y documental para identificar patrones, desviaciones de costes, incidencias repetitivas o riesgos operativos, presentando hallazgos estructurados para la toma de decisiones.',
    exampleWorkflow: {
      trigger: 'Cierre semanal de compras, ventas y registros operativos de varias áreas o centros.',
      aiStep: 'Compara desviaciones frente a históricos y reglas internas, detectando un incremento anómalo en costes o mermas.',
      controlGate: 'Lectura estructurada de datos autorizados con reglas de validación estadística y contexto trazable.',
      outcome: 'Genera un informe priorizado con causas probables y opciones de actuación para el responsable.'
    },
    allowedActions: [
      'Análisis periódico de registros históricos, hojas de cálculo y vistas de lectura ERP/CRM.',
      'Detección de anomalías, desviaciones de margen y patrones de incidencias.',
      'Formulación de recomendaciones priorizadas con respaldo documental.'
    ],
    restrictedActions: [
      'No altera precios, pedidos, inventario ni parámetros operativos.',
      'No toma decisiones vinculantes sin intervención del responsable de área.',
      'No modifica configuraciones de equipos ni sistemas externos.'
    ],
    humanSupervision:
      'Revisión humana en cada decisión. El sistema aporta visibilidad y criterio estructurado; la organización decide.',
    governanceRequirements: [
      'Conectores de solo lectura y segregación de vistas por perfil.',
      'Evaluación periódica de calidad y precisión analítica.',
      'Trazabilidad de fuentes de datos y versión del modelo empleado.'
    ],
    riskProfile: 'Riesgo operativo bajo. Ideal para dirección, operaciones, compras y control de gestión.'
  },
  {
    id: 'supervisada',
    levelNumber: 3,
    name: 'Supervisada',
    tagline: 'Prepara acciones concretas que requieren aprobación humana explícita antes de ejecutarse.',
    description:
      'La IA participa activamente en el flujo de trabajo preparando borradores de pedidos, respuestas, partes de mantenimiento o actualizaciones de registros. Ninguna acción tiene efecto real hasta que un usuario autorizado la revisa y aprueba explícitamente.',
    exampleWorkflow: {
      trigger: 'El stock de una referencia clave cae por debajo del umbral definido y se aproxima un periodo de alta demanda.',
      aiStep: 'Calcula la reposición sugerida según histórico y condiciones del proveedor habitual, preparando la orden borrador.',
      controlGate: 'Cola de aprobación obligatoria: solo un responsable con permiso de compras puede autorizar o rechazar.',
      outcome: 'Tras la validación explícita, el sistema registra la orden en el ERP y guarda auditoría completa del aprobador.'
    },
    allowedActions: [
      'Preparación de órdenes, comunicaciones, tickets o actualizaciones en estado borrador.',
      'Validación previa frente a políticas internas, presupuestos o umbrales definidos.',
      'Ejecución únicamente tras confirmación explícita de un aprobador autorizado.'
    ],
    restrictedActions: [
      'Prohibida la ejecución directa sin aprobación humana registrada.',
      'No puede elevar sus propios permisos ni omitir validaciones de negocio.',
      'Bloqueo automático si una solicitud excede límites definidos o carece de contexto.'
    ],
    humanSupervision:
      'Aprobación humana obligatoria en cada acción con impacto externo o transaccional (human-in-the-loop).',
    governanceRequirements: [
      'Matriz de roles, límites y flujos de aprobación explícitos.',
      'Registro auditable inmutable de propuesta, revisor, hora y resultado.',
      'Políticas de reversión y pruebas periódicas de calidad de flujo.'
    ],
    riskProfile: 'Riesgo controlado. Combina agilidad operativa con responsabilidad humana verificable.'
  },
  {
    id: 'delegada',
    levelNumber: 4,
    name: 'Delegada',
    tagline: 'Ejecuta operaciones predefinidas y autorizadas dentro de límites deterministas estrictos.',
    description:
      'Reservada para procesos maduros, repetitivos y acotados. La IA ejecuta únicamente operaciones previamente autorizadas, pasando siempre por reglas deterministas de validación, topes cuantitativos y mecanismos de detención inmediata.',
    exampleWorkflow: {
      trigger: 'Llega una incidencia clasificada como rutina o una alerta técnica dentro de parámetros previamente catalogados.',
      aiStep: 'Clasifica el evento, verifica que cumple el 100 % de las reglas autorizadas y dispara el flujo preaprobado (ej. apertura de ticket y notificación interna).',
      controlGate: 'Validación determinista obligatoria de límites; cualquier excepción escala de inmediato a nivel Supervisado.',
      outcome: 'Operación completada dentro de márgenes seguros, con registro completo y auditoría revisable.'
    },
    allowedActions: [
      'Ejecución de microprocesos repetitivos explícitamente autorizados por la empresa.',
      'Enrutamiento automático de solicitudes, clasificación documental y alertas operativas.',
      'Interacción con APIs internas acotadas bajo límites estrictos y verificables.'
    ],
    restrictedActions: [
      'Nunca opera fuera de las reglas deterministas ni supera umbrales económicos o técnicos fijados.',
      'Nunca ejecuta acciones físicas críticas sin protecciones hardware/deterministas independientes.',
      'Cualquier ambigüedad detiene la ejecución y deriva el caso a supervisión humana.'
    ],
    humanSupervision:
      'Supervisión por excepción, auditoría continua, límites estrictos y capacidad de pausa o revocación inmediata.',
    governanceRequirements: [
      'Reglas deterministas independientes del modelo de lenguaje.',
      'Auditoría detallada de cada ejecución y revisión mensual de incidencias.',
      'Mecanismos de contingencia, reversión y control de cambios versionado.'
    ],
    riskProfile: 'Requiere madurez previa, evaluación específica de riesgo y validación técnica por proceso.'
  }
];

export const GOVERNANCE_PILLARS: GovernancePillar[] = [
  {
    id: 'roles-permisos',
    index: '01',
    title: 'Roles y permisos',
    description: 'Cada usuario y departamento accede únicamente a las fuentes de conocimiento y acciones coherentes con su responsabilidad.',
    practicalDetail: 'Segregación por áreas como dirección, finanzas, operaciones, comercial o soporte técnico.'
  },
  {
    id: 'versionado-modelos',
    index: '02',
    title: 'Versionado de modelos',
    description: 'Control explícito sobre qué modelo open-weight y qué versión exacta está operando en cada entorno.',
    practicalDetail: 'Permite probar nuevas versiones en paralelo antes de promover cambios a producción.'
  },
  {
    id: 'versionado-conocimiento',
    index: '03',
    title: 'Versionado de conocimiento',
    description: 'Trazabilidad sobre qué documentos, tarifas o procedimientos forman parte activa de la base de conocimiento en cada momento.',
    practicalDetail: 'Evita respuestas basadas en versiones obsoletas y permite restaurar estados anteriores.'
  },
  {
    id: 'registros-auditoria',
    index: '04',
    title: 'Registros de auditoría',
    description: 'Historial estructurado de consultas relevantes, recomendaciones emitidas, aprobaciones humanas y operaciones ejecutadas.',
    practicalDetail: 'Facilita revisiones internas, trazabilidad operativa y mejora continua basada en evidencia.'
  },
  {
    id: 'aprobaciones-humanas',
    index: '05',
    title: 'Aprobaciones humanas',
    description: 'Puntos de control explícitos donde una persona autorizada valida antes de que una propuesta produzca efectos reales.',
    practicalDetail: 'Indispensable en niveles Supervisados y en cualquier excepción detectada.'
  },
  {
    id: 'propiedad-datos',
    index: '06',
    title: 'Propiedad de los datos',
    description: 'La documentación, registros y conocimiento estructurado pertenecen íntegramente a la empresa cliente.',
    practicalDetail: 'Sin cesión de datos para entrenar modelos de terceros ni retención opaca.'
  },
  {
    id: 'control-acceso',
    index: '07',
    title: 'Control de acceso',
    description: 'Despliegue dentro de redes privadas o servidores locales con políticas alineadas a la infraestructura de seguridad del cliente.',
    practicalDetail: 'Minimiza la exposición externa de información confidencial.'
  },
  {
    id: 'politicas-actualizacion',
    index: '08',
    title: 'Políticas de actualización',
    description: 'Calendario y criterios definidos para actualizar documentación, reglas de negocio y componentes de software.',
    practicalDetail: 'Mantiene la inteligencia alineada con la evolución real de la empresa sin sobresaltos.'
  },
  {
    id: 'exportabilidad',
    index: '09',
    title: 'Exportabilidad',
    description: 'La base documental curada y las configuraciones estructuradas pueden exportarse en formatos abiertos y legibles.',
    practicalDetail: 'Evita dependencias cautivas y garantiza libertad tecnológica a largo plazo.'
  },
  {
    id: 'continuidad-operativa',
    index: '10',
    title: 'Continuidad operativa',
    description: 'Diseño pensado para respaldos locales, sustitución ordenada de modelos y operación resiliente ante cambios de proveedor.',
    practicalDetail: 'La capacidad estratégica permanece en la empresa incluso si cambia el ecosistema de modelos.'
  }
];
