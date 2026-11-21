import { IndustryItem } from '../domain/types';

export const INDUSTRY_CATEGORIES = [
  { id: 'todas', label: 'Todos los sectores' },
  { id: 'operaciones-fisicas', label: 'Operaciones físicas e industria' },
  { id: 'comercio-servicios', label: 'Comercio, turismo y hostelería' },
  { id: 'conocimiento-profesional', label: 'Servicios profesionales y gestión' }
] as const;

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'gastronomia-horeca',
    name: 'Gastronomía & HORECA',
    category: 'comercio-servicios',
    categoryLabel: 'Comercio, turismo y hostelería',
    shortSummary:
      'Control operativo de cocina, mermas, escandallos, proveedores y estándares de servicio en uno o varios locales.',
    typicalProblems: [
      'Variaciones de coste en materias primas que erosionan el margen sin detectarse a tiempo.',
      'Alta rotación de personal y dificultad para mantener consistencia en recetas y protocolos.',
      'Control manual de temperaturas, incidencias de equipamiento y consumos energéticos.'
    ],
    aiCapabilities: [
      'Consulta inmediata de fichas técnicas, alérgenos y protocolos de servicio por turno.',
      'Análisis ilustrativo de desviaciones de compras, mermas y rentabilidad por plato.',
      'Monitorización conectada de cámaras frigoríficas y alertas operativas locales.'
    ],
    exampleKnowledgeSources: [
      'Fichas técnicas, recetas y matrices de alérgenos.',
      'Tarifas de proveedores, albaranes y registros de TPV.',
      'Manuales de seguridad alimentaria (APPCC) y lecturas de sensores de frío.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: ante un incremento de precio en un proveedor, el sistema identifica los platos afectados y prepara una propuesta de ajuste para revisión de gerencia.',
      'Caso ilustrativo: una desviación sostenida en la cámara de refrigeración dispara una alerta local priorizada con el protocolo de actuación.'
    ],
    potentialBenefits: [
      'Mayor disciplina de márgenes y reducción de mermas evitables.',
      'Homogeneización operativa entre turnos y establecimientos.',
      'Respuesta más ágil ante incidencias técnicas y de cadena de frío.'
    ],
    recommendedFamilyId: 'vertical',
    recommendedFamilyName: 'Vegen Vertical AI + Edge & IoT'
  },
  {
    id: 'comercio-retail',
    name: 'Comercio & Retail',
    category: 'comercio-servicios',
    categoryLabel: 'Comercio, turismo y hostelería',
    shortSummary:
      'Asistencia a compras, catálogo, atención comercial coherente y análisis de rotación en tienda física y multicanal.',
    typicalProblems: [
      'Catálogos extensos con especificaciones técnicas difíciles de dominar para todo el equipo.',
      'Roturas de stock o exceso de inventario por decisiones basadas únicamente en intuición.',
      'Políticas de devoluciones, garantías y promociones dispersas entre documentos.'
    ],
    aiCapabilities: [
      'Asistente privado de producto y argumentario comercial para equipos de tienda.',
      'Análisis de históricos de venta y alertas tempranas de baja rotación o sobrestock.',
      'Preparación supervisada de borradores de reposición según reglas internas.'
    ],
    exampleKnowledgeSources: [
      'Catálogos de productos, fichas de fabricante y tablas de compatibilidad.',
      'Históricos de ventas del TPV, inventario del ERP y condiciones comerciales.',
      'Políticas internas de atención al cliente, devoluciones y campañas.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: un vendedor consulta compatibilidades y alternativas de un artículo agotado usando exclusivamente el catálogo vigente de la tienda.',
      'Caso ilustrativo: revisión semanal automatizada de referencias con rotación anómala para aprobación del responsable de compras.'
    ],
    potentialBenefits: [
      'Atención más precisa y consistente en punto de venta.',
      'Mejor visibilidad sobre capital inmovilizado en inventario.',
      'Menor tiempo de formación para nuevas incorporaciones.'
    ],
    recommendedFamilyId: 'enterprise',
    recommendedFamilyName: 'Vegen Enterprise AI'
  },
  {
    id: 'industria-manufactura',
    name: 'Industria & Manufactura',
    category: 'operaciones-fisicas',
    categoryLabel: 'Operaciones físicas e industria',
    shortSummary:
      'Soporte técnico en planta, documentación de mantenimiento, control de calidad y seguimiento de equipos.',
    typicalProblems: [
      'Manuales de maquinaria, planos y partes de avería dispersos o difíciles de consultar en planta.',
      'Paradas no planificadas por señales de desgaste no correlacionadas a tiempo.',
      'Dependencia crítica del conocimiento acumulado por técnicos veteranos.'
    ],
    aiCapabilities: [
      'Consulta estructurada de manuales de mantenimiento, procedimientos de seguridad e históricos de averías.',
      'Detección analítica de anomalías en parámetros de operación y consumos de planta.',
      'Preparación de órdenes de mantenimiento preventivo sujetas a aprobación técnica.'
    ],
    exampleKnowledgeSources: [
      'Manuales OEM, procedimientos de calidad y protocolos PRL.',
      'Históricos de mantenimiento (GMAO), partes de turno y registros de incidencias.',
      'Lecturas locales de sensores de vibración, temperatura o consumo eléctrico.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: ante un código de fallo en línea, el técnico consulta el historial de resoluciones previas y el procedimiento exacto sin salir de la red local.',
      'Caso ilustrativo: un patrón anómalo de temperatura en un motor genera un informe de diagnóstico preliminar y propone una inspección programada.'
    ],
    potentialBenefits: [
      'Preservación del conocimiento técnico crítico dentro de la empresa.',
      'Reducción de tiempos de diagnóstico ante incidencias recurrentes.',
      'Operación compatible con entornos de conectividad restringida en planta.'
    ],
    recommendedFamilyId: 'edge-iot',
    recommendedFamilyName: 'Vegen Edge & IoT Intelligence'
  },
  {
    id: 'servicios-profesionales',
    name: 'Servicios Profesionales',
    category: 'conocimiento-profesional',
    categoryLabel: 'Servicios profesionales y gestión',
    shortSummary:
      'Gestión soberana de propuestas, metodologías internas, entregables previos y conocimiento acumulado de consultoras e ingenierías.',
    typicalProblems: [
      'Tiempo elevado buscando antecedentes, propuestas previas y documentación de proyectos.',
      'Riesgo de confidencialidad al emplear herramientas públicas con información de clientes.',
      'Dificultad para estandarizar criterios de calidad entre equipos multidisciplinares.'
    ],
    aiCapabilities: [
      'Búsqueda semántica privada sobre metodologías, plantillas y documentación aprobada.',
      'Estructuración preliminar de memorias técnicas y síntesis de requerimientos.',
      'Control de acceso segmentado por práctica, proyecto o nivel de confidencialidad.'
    ],
    exampleKnowledgeSources: [
      'Metodologías internas, pliegos de referencia y entregables anonimizados.',
      'Políticas de calidad, tarifas de servicios y gestión documental corporativa.',
      'Actas de seguimiento y documentación de proyectos autorizada.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: al recibir un nuevo pliego, el equipo compara requisitos frente a capacidades internas documentadas y obtiene una lista de brechas para revisión.',
      'Caso ilustrativo: consolidación de aprendizajes de proyectos cerrados en una base interna consultable con citas exactas.'
    ],
    potentialBenefits: [
      'Reutilización ordenada del capital intelectual de la firma.',
      'Protección rigurosa de la confidencialidad de cada cliente.',
      'Reducción de trabajo repetitivo en fases de análisis documental.'
    ],
    recommendedFamilyId: 'enterprise',
    recommendedFamilyName: 'Vegen Enterprise AI'
  },
  {
    id: 'despachos-juridicos',
    name: 'Despachos Jurídicos',
    category: 'conocimiento-profesional',
    categoryLabel: 'Servicios profesionales y gestión',
    shortSummary:
      'Apoyo documental privado para clasificación de expedientes, consulta de precedentes internos y revisión estructurada.',
    typicalProblems: [
      'Volúmenes extensos de documentación contractual y procesal que exigen revisión minuciosa.',
      'Requisitos estrictos de secreto profesional que impiden compartir expedientes en plataformas abiertas.',
      'Conocimiento doctrinal y modelos internos dispersos entre socios y áreas.'
    ],
    aiCapabilities: [
      'Organización y síntesis documental estrictamente dentro de infraestructura controlada por el despacho.',
      'Contraste de cláusulas contra criterios y plantillas internas aprobadas.',
      'Extracción de fechas clave, partes y referencias con enlace al documento origen.'
    ],
    exampleKnowledgeSources: [
      'Modelos contractuales internos, guías de práctica y notas jurídicas propias.',
      'Expedientes estructurados con control de acceso por asunto y equipo.',
      'Bibliotecas documentales aprobadas por la dirección del despacho.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: preparación de una matriz comparativa entre un borrador contractual y los estándares internos del despacho, siempre para revisión del abogado responsable.',
      'Caso ilustrativo: indexación privada de documentación extensa para localizar cláusulas o anexos relevantes en segundos.'
    ],
    potentialBenefits: [
      'Confidencialidad preservada mediante despliegue local o privado.',
      'Ahorro significativo en fases iniciales de revisión y organización documental.',
      'Trazabilidad verificable sin delegar nunca el criterio jurídico a la máquina.'
    ],
    recommendedFamilyId: 'expert',
    recommendedFamilyName: 'Vegen Expert AI'
  },
  {
    id: 'asesorias-gestorias',
    name: 'Asesorías & Gestorías',
    category: 'conocimiento-profesional',
    categoryLabel: 'Servicios profesionales y gestión',
    shortSummary:
      'Soporte operativo para documentación fiscal, laboral y contable, checklists internos y atención estructurada a clientes.',
    typicalProblems: [
      'Picos estacionales de trabajo administrativo con alto volumen de consultas repetitivas.',
      'Revisión manual de documentación incompleta enviada por clientes.',
      'Necesidad de mantener procedimientos internos actualizados y homogéneos.'
    ],
    aiCapabilities: [
      'Verificación preliminar de completitud documental según listas de control internas.',
      'Consulta ágil de procedimientos internos del despacho para técnicos junior y senior.',
      'Preparación supervisada de respuestas informativas basadas en guías aprobadas.'
    ],
    exampleKnowledgeSources: [
      'Manuales operativos del despacho, calendarios de obligaciones y checklists.',
      'Plantillas de comunicaciones y documentación administrativa estructurada.',
      'Criterios técnicos internos revisados por responsables de área.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: clasificación de documentación recibida para un cierre trimestral señalando los justificantes faltantes antes de pasar al asesor.',
      'Caso ilustrativo: borrador de respuesta estandarizada a una duda administrativa frecuente, sujeto a validación del gestor.'
    ],
    potentialBenefits: [
      'Menor saturación operativa en campañas fiscales y cierres.',
      'Mayor consistencia en la recopilación documental previa.',
      'Control estricto sobre datos financieros y laborales de clientes.'
    ],
    recommendedFamilyId: 'expert',
    recommendedFamilyName: 'Vegen Expert AI'
  },
  {
    id: 'turismo-hoteleria',
    name: 'Turismo & Hotelería',
    category: 'comercio-servicios',
    categoryLabel: 'Comercio, turismo y hostelería',
    shortSummary:
      'Operación de alojamiento, estándares de recepción, eficiencia energética de instalaciones y soporte multilingüe gobernado.',
    typicalProblems: [
      'Información de tarifas, servicios, horarios y políticas dispersa entre recepción y reservas.',
      'Variabilidad en la calidad de respuesta según temporada y rotación del personal.',
      'Costes energéticos elevados en climatización y zonas comunes.'
    ],
    aiCapabilities: [
      'Base de conocimiento operativa para recepción, reservas y mantenimiento.',
      'Asistencia controlada para respuestas a huéspedes basadas exclusivamente en políticas vigentes.',
      'Análisis de patrones de consumo energético y ocupación en instalaciones.'
    ],
    exampleKnowledgeSources: [
      'Manuales de recepción, políticas de cancelación, servicios y guías locales.',
      'Históricos de ocupación, incidencias de mantenimiento y tarifas aprobadas.',
      'Lecturas de sistemas de climatización y consumo energético (opcional Edge).'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: recepción consulta protocolos de incidencias o prepara respuestas multilingües ajustadas a las condiciones reales del establecimiento.',
      'Caso ilustrativo: detección de consumos anómalos en áreas de baja ocupación para ajuste supervisado por mantenimiento.'
    ],
    potentialBenefits: [
      'Continuidad en el estándar de servicio incluso en picos de temporada.',
      'Menor tiempo de resolución de incidencias internas.',
      'Mejor visibilidad sobre eficiencia operativa y energética.'
    ],
    recommendedFamilyId: 'vertical',
    recommendedFamilyName: 'Vegen Vertical AI'
  },
  {
    id: 'agroindustria',
    name: 'Agroindustria',
    category: 'operaciones-fisicas',
    categoryLabel: 'Operaciones físicas e industria',
    shortSummary:
      'Inteligencia local para trazabilidad, control de riego y clima, gestión de campañas y operación en zonas con conectividad limitada.',
    typicalProblems: [
      'Explotaciones e instalaciones en ubicaciones con conectividad a Internet inestable.',
      'Datos agronómicos, fitosanitarios y de sensores desconectados de los registros de campaña.',
      'Dificultad para consolidar el historial técnico de parcelas, silos o cámaras.'
    ],
    aiCapabilities: [
      'Operación local con capacidad de funcionamiento desconectado según hardware desplegado.',
      'Correlación entre históricos de campaña, protocolos técnicos y datos de sensores.',
      'Alertas operativas sobre humedad, temperatura de almacenamiento o riego.'
    ],
    exampleKnowledgeSources: [
      'Cuadernos de campo, protocolos de trazabilidad y fichas de tratamientos.',
      'Históricos de rendimiento por lote, inventario de insumos y maquinaria.',
      'Sensores locales de clima, humedad, riego y almacenamiento.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: análisis de lecturas de humedad y temperatura en silos frente a umbrales de conservación con alerta temprana al responsable técnico.',
      'Caso ilustrativo: consulta de registros de campañas anteriores para planificar insumos y mantenimiento de maquinaria.'
    ],
    potentialBenefits: [
      'Independencia frente a caídas de conectividad en entorno rural o industrial.',
      'Decisiones técnicas apoyadas en el historial real de la explotación.',
      'Protección frente a pérdidas de producto almacenado.'
    ],
    recommendedFamilyId: 'edge-iot',
    recommendedFamilyName: 'Vegen Edge & IoT Intelligence'
  },
  {
    id: 'logistica',
    name: 'Logística',
    category: 'operaciones-fisicas',
    categoryLabel: 'Operaciones físicas e industria',
    shortSummary:
      'Seguimiento de incidencias, coordinación documental de almacén, control de cadena de frío y optimización de procesos internos.',
    typicalProblems: [
      'Alto volumen de albaranes, incidencias de entrega y reclamaciones que requieren trazabilidad.',
      'Protocolos diferenciados por cliente, tipo de mercancía o normativa de transporte.',
      'Desviaciones operativas en almacén y temperatura detectadas cuando ya existe impacto.'
    ],
    aiCapabilities: [
      'Clasificación y resumen de incidencias operativas con referencia a acuerdos de servicio.',
      'Consulta rápida de instrucciones de manipulación, embalaje y documentación por cliente.',
      'Monitorización analítica de almacenes refrigerados y tiempos de operativa.'
    ],
    exampleKnowledgeSources: [
      'Procedimientos de almacén, requisitos específicos por cliente y fichas de mercancía.',
      'Registros de WMS/TMS, incidencias históricas y documentación de transporte.',
      'Sensores ambientales y de temperatura en muelles o cámaras.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: ante una incidencia de entrega, el sistema recopila el protocolo del cliente afectado y prepara el borrador de comunicación y acción correctiva.',
      'Caso ilustrativo: detección de patrones repetitivos de retraso por ruta o franja horaria para análisis del equipo de operaciones.'
    ],
    potentialBenefits: [
      'Mayor agilidad en la gestión de excepciones operativas.',
      'Cumplimiento consistente de procedimientos específicos por cliente.',
      'Trazabilidad estructurada de incidencias y cadena de frío.'
    ],
    recommendedFamilyId: 'vertical',
    recommendedFamilyName: 'Vegen Vertical AI + Enterprise AI'
  },
  {
    id: 'energia-sostenibilidad',
    name: 'Energía & Sostenibilidad',
    category: 'operaciones-fisicas',
    categoryLabel: 'Operaciones físicas e industria',
    shortSummary:
      'Seguimiento de consumos energéticos, detección de ineficiencias, documentación técnica ambiental y soporte a reportes internos.',
    typicalProblems: [
      'Datos de electricidad, gas, agua y combustible fragmentados entre facturas, hojas y medidores.',
      'Dificultad para identificar consumos anómalos en horarios no productivos.',
      'Preparación laboriosa de documentación interna para auditorías y planes de eficiencia.'
    ],
    aiCapabilities: [
      'Consolidación analítica de consumos energéticos e identificación de patrones atípicos.',
      'Organización estructurada de evidencias documentales e indicadores de eficiencia.',
      'Integración con medidores locales y generación de recomendaciones priorizadas.'
    ],
    exampleKnowledgeSources: [
      'Históricos de facturación energética, contratos de suministro y curvas de carga.',
      'Planes internos de eficiencia, auditorías energéticas y procedimientos ambientales.',
      'Lecturas locales de submedidores eléctricos, térmicos o de agua.'
    ],
    exampleWorkflows: [
      'Caso ilustrativo: detección de un pico anómalo nocturno en consumo eléctrico, contrastado con el calendario de turnos, con aviso al responsable de mantenimiento.',
      'Caso ilustrativo: consolidación mensual de indicadores de consumo para revisión de dirección y comité de sostenibilidad.'
    ],
    potentialBenefits: [
      'Visibilidad continua sobre consumos y desviaciones evitables.',
      'Menor carga administrativa en la preparación de informes internos.',
      'Base rigurosa y auditable para decisiones de inversión energética.'
    ],
    recommendedFamilyId: 'edge-iot',
    recommendedFamilyName: 'Vegen Edge & IoT Intelligence + Expert AI'
  }
];
