import { SolutionFamily } from '../domain/types';

export const SOLUTION_FAMILIES: SolutionFamily[] = [
  {
    id: 'vertical',
    code: '01',
    name: 'Vegen Vertical AI',
    subtitle: 'Inteligencia especializada por sector económico',
    valueProposition:
      'Capacidades sectoriales estructuradas que se adaptan al contexto, vocabulario y operativa real de tu industria sin partir desde cero.',
    summary:
      'Desarrollamos arquitecturas sectoriales reutilizables —con taxonomías, flujos y criterios propios de cada actividad— que posteriormente se ajustan a la realidad de cada organización.',
    problemsSolved: [
      'Respuestas genéricas que desconocen la operativa, terminología y márgenes del sector.',
      'Altos tiempos de puesta en marcha cuando se intenta configurar IA desde cero.',
      'Dispersión de buenas prácticas sectoriales entre distintos responsables y centros.'
    ],
    capabilities: [
      'Bases de conocimiento estructuradas con lógica sectorial adaptable.',
      'Asistencia operativa orientada a procesos recurrentes de cada industria.',
      'Análisis de desviaciones habituales en compras, producción, demanda o servicio.',
      'Despliegue modular sobre modelos open-weight compatibles con uso comercial.'
    ],
    deploymentOptions: [
      'Servidor local en las instalaciones del cliente.',
      'Infraestructura privada dedicada bajo control de la organización.',
      'Entorno híbrido con separación estricta de datos sensibles.'
    ],
    exampleUseCases: [
      'Caso ilustrativo en gastronomía: control de escandallos, mermas y consulta de fichas técnicas.',
      'Caso ilustrativo en retail: apoyo a compras, rotación de catálogo y reposición.',
      'Caso ilustrativo en manufactura y logística: soporte de procedimientos técnicos y seguimiento de incidencias.'
    ]
  },
  {
    id: 'enterprise',
    code: '02',
    name: 'Vegen Enterprise AI',
    subtitle: 'Inteligencia privada construida sobre el conocimiento de tu empresa',
    valueProposition:
      'Convierte tus procedimientos, catálogos, documentos internos y registros operativos en un activo consultable, trazable y exclusivamente bajo tu dominio.',
    summary:
      'Integramos las fuentes aprobadas de tu organización con aislamiento estricto de datos por cliente, respetando permisos internos y manteniendo trazabilidad documental.',
    problemsSolved: [
      'Conocimiento corporativo fragmentado en carpetas, correos, hojas de cálculo y personas clave.',
      'Dependencia excesiva de la memoria informal cuando cambian equipos o turnos.',
      'Temor fundado a subir documentación confidencial a servicios públicos de terceros.'
    ],
    capabilities: [
      'Indexación gobernada de políticas, manuales, catálogos, contratos tipo y registros internos.',
      'Conexión controlada con fuentes estructuradas como ERP, CRM o bases de datos SQL.',
      'Separación estricta del entorno documental y control de acceso por roles.',
      'Actualización periódica del conocimiento sin reentrenar los parámetros del modelo base.'
    ],
    deploymentOptions: [
      'Despliegue local en oficina o sede central con ejecución mediante Ollama o llama.cpp.',
      'Servidor privado empresarial con acceso segmentado por departamento.',
      'Operación sin conexión a Internet externa cuando la arquitectura y hardware lo permiten.'
    ],
    exampleUseCases: [
      'Caso ilustrativo comercial: consultas rápidas sobre tarifas, condiciones vigentes y especificaciones técnicas.',
      'Caso ilustrativo interno: incorporación guiada de nuevos empleados sobre normativa y procesos propios.',
      'Caso ilustrativo directivo: síntesis de informes operativos y seguimiento de acuerdos internos.'
    ],
    importantNote:
      'Separación estricta garantizada a nivel de arquitectura: el conocimiento de cada cliente permanece aislado en su propia instancia y no alimenta modelos compartidos.'
  },
  {
    id: 'expert',
    code: '03',
    name: 'Vegen Expert AI',
    subtitle: 'Inteligencia temática para disciplinas y áreas especializadas',
    valueProposition:
      'Apoyo riguroso para equipos de finanzas, fiscalidad, calidad, compras, recursos humanos y sostenibilidad basado en documentación técnica y criterios aprobados.',
    summary:
      'Acompaña a profesionales cualificados en la revisión documental, estructuración de criterios internos y preparación de análisis, siempre bajo validación humana experta.',
    problemsSolved: [
      'Sobrecarga de revisión manual en expedientes, normativas internas y documentación técnica.',
      'Inconsistencia en la aplicación de protocolos de calidad, compras o cumplimiento.',
      'Dificultad para consolidar el criterio técnico acumulado por el equipo senior.'
    ],
    capabilities: [
      'Consulta estructurada de marcos documentales internos, manuales ISO y guías operativas.',
      'Preparación de borradores, listas de verificación y matrices comparativas.',
      'Clasificación y extracción controlada de información en expedientes complejos.',
      'Trazabilidad de fuentes citadas para revisión rápida del profesional responsable.'
    ],
    deploymentOptions: [
      'Entorno privado de despacho o departamento con acceso autenticado por rol.',
      'Infraestructura local aislada para documentación de alta confidencialidad.',
      'Despliegue progresivo empezando en autonomía asistida y analítica.'
    ],
    exampleUseCases: [
      'Caso ilustrativo financiero y fiscal: organización de checklists documentales y validación preliminar de expedientes.',
      'Caso ilustrativo de calidad y compras: contraste de ofertas frente a pliegos y procedimientos internos.',
      'Caso ilustrativo de sostenibilidad y RR. HH.: seguimiento de indicadores internos y políticas corporativas.'
    ],
    importantNote:
      'Vegen Expert AI actúa como sistema de apoyo al criterio profesional. No sustituye asesoramiento legal, fiscal o regulatorio cualificado ni garantiza por sí sola cumplimiento normativo autónomo.'
  },
  {
    id: 'edge-iot',
    code: '04',
    name: 'Vegen Edge & IoT Intelligence',
    subtitle: 'Inteligencia conectada al entorno físico y la operación en planta',
    valueProposition:
      'Conecta sensores, equipos y lecturas ambientales con procesamiento local e inteligencia especializada para detectar anomalías antes de que escalen.',
    summary:
      'Arquitectura diseñada para entornos físicos donde la baja latencia, la continuidad local y la separación estricta entre análisis de IA y control físico son esenciales.',
    problemsSolved: [
      'Lecturas de sensores dispersas que generan datos pero no decisiones oportunas.',
      'Fallos en equipos, pérdidas de cadena de frío o consumos energéticos anómalos detectados tarde.',
      'Riesgo operativo cuando se intenta automatizar sin reglas deterministas de seguridad.'
    ],
    capabilities: [
      'Ingesta local de lecturas de temperatura, energía, humedad y estado de maquinaria.',
      'Correlación entre datos en tiempo real, históricos operativos y manuales técnicos.',
      'Generación de alertas priorizadas y recomendaciones de mantenimiento preventivo.',
      'Capa de validación determinista que separa recomendaciones de IA de acciones físicas.'
    ],
    deploymentOptions: [
      'Gateway local en planta, local comercial o centro logístico.',
      'Arquitectura Edge + nodo central privado para operaciones multisede.',
      'Integración gradual comenzando por monitorización y alertas supervisadas.'
    ],
    exampleUseCases: [
      'Caso ilustrativo en restauración: vigilancia de cámaras frigoríficas y desviaciones de consumo eléctrico.',
      'Caso ilustrativo industrial: detección temprana de patrones anómalos en compresores o líneas auxiliares.',
      'Caso ilustrativo en sostenibilidad: seguimiento integrado de electricidad, agua, gas y combustible.'
    ],
    importantNote:
      'Las recomendaciones de IA y las acciones de control físico permanecen siempre separadas mediante comprobaciones deterministas de seguridad y supervisión humana cuando corresponde.'
  }
];

export const KNOWLEDGE_VS_FINETUNING = {
  eyebrow: 'Claridad técnica sin artificios',
  title: 'Actualizar tu base de conocimiento no es reentrenar un modelo',
  lead: 'Vegen utiliza modelos de inteligencia artificial open-source u open-weight existentes con licencia compatible para uso comercial, ejecutados sobre runtimes locales como Ollama o llama.cpp. No afirmamos haber creado modelos fundacionales propios: nuestro valor reside en la arquitectura, la especialización y la gobernanza.',
  columns: [
    {
      title: 'Actualización de base de conocimiento (Enfoque principal)',
      subtitle: 'Rápida, auditable, reversible y bajo tu control',
      points: [
        'Incorpora nuevos precios, procedimientos, catálogos o políticas en minutos u horas.',
        'Permite citar exactamente el documento interno en el que se apoya cada respuesta.',
        'Facilita sustituir el modelo de inferencia subyacente sin perder el conocimiento de la empresa.',
        'Mantiene el conocimiento versionado, exportable y estrictamente separado del motor base.'
      ]
    },
    {
      title: 'Ajuste de parámetros o fine-tuning (Solo cuando aporta valor real)',
      subtitle: 'Especialización de formato o estilo, no almacén de datos vivos',
      points: [
        'Requiere conjuntos de datos curados y ciclos de validación técnica más exigentes.',
        'No es el mecanismo adecuado para información cambiante como tarifas, stock o normativa vigente.',
        'Se evalúa únicamente en proyectos avanzados donde se requiere un comportamiento altamente específico.',
        'Nunca se realiza utilizando datos de un cliente para beneficiar a otros.'
      ]
    }
  ]
};
