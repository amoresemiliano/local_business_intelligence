import { IoTArchitectureNode, IoTScenario } from '../domain/types';

export const IOT_ARCHITECTURE_NODES: IoTArchitectureNode[] = [
  {
    id: 'sensores',
    step: '01',
    title: 'Sensores y Dispositivos',
    role: 'Captura del entorno físico',
    technicalScope:
      'Sondas de temperatura, medidores eléctricos, sensores ambientales, contadores de agua/gas o señales de estado de maquinaria industrial.',
    commercialValue:
      'Transforma variables físicas críticas en señales continuas sin depender de inspecciones manuales esporádicas.'
  },
  {
    id: 'gateway',
    step: '02',
    title: 'Gateway Local',
    role: 'Adquisición y procesamiento en borde',
    technicalScope:
      'Recibe lecturas dentro de la red local (Modbus, MQTT, OPC-UA o pasarelas compatibles), filtra ruido y mantiene operación incluso ante cortes de Internet.',
    commercialValue:
      'Garantiza continuidad en planta o establecimiento y evita enviar flujos masivos de datos brutos a la nube.'
  },
  {
    id: 'datos-operativos',
    step: '03',
    title: 'Datos Operativos',
    role: 'Contexto histórico y reglas de negocio',
    technicalScope:
      'Almacenamiento estructurado local que combina series temporales de sensores con calendarios de turnos, históricos de mantenimiento y umbrales definidos.',
    commercialValue:
      'Aporta memoria operativa para distinguir entre una variación normal de actividad y una desviación real.'
  },
  {
    id: 'ia-especializada',
    step: '04',
    title: 'IA Especializada',
    role: 'Correlación, diagnóstico y contexto',
    technicalScope:
      'Modelos locales interpretan anomalías correlacionando lecturas, manuales técnicos de equipos e historial de incidencias previas.',
    commercialValue:
      'Convierte alertas técnicas aisladas en diagnósticos comprensibles y recomendaciones accionables.'
  },
  {
    id: 'gobernanza-validacion',
    step: '05',
    title: 'Gobernanza y Validación',
    role: 'Barrera determinista de seguridad',
    technicalScope:
      'Reglas deterministas independientes verifican umbrales, permisos y límites de seguridad. Separa estrictamente la recomendación de IA de cualquier actuación física.',
    commercialValue:
      'Asegura que ninguna decisión crítica dependa únicamente de una inferencia probabilística.'
  },
  {
    id: 'acciones',
    step: '06',
    title: 'Alertas, Recomendaciones o Acciones Autorizadas',
    role: 'Respuesta operativa gobernada',
    technicalScope:
      'Emisión de alertas priorizadas al responsable, apertura de orden de mantenimiento supervisada o actuación acotada previamente validada.',
    commercialValue:
      'Reduce tiempos de reacción, evita pérdidas de producto o paradas y deja registro auditable completo.'
  }
];

export const IOT_SCENARIOS: IoTScenario[] = [
  {
    id: 'smart-restaurant',
    name: 'Restaurante Inteligente',
    sector: 'Gastronomía & HORECA',
    headline: 'Vigilancia de cadena de frío y eficiencia energética en cocina',
    description:
      'Demostración conceptual de cómo sensores locales en cámaras frigoríficas y cuadros eléctricos se integran con conocimiento operativo del establecimiento.',
    sensorInput:
      'Sonda de cámara de refrigeración #2 registra aumento gradual de 2,8 °C a 6,4 °C en 38 minutos fuera del horario de reposición, junto con ciclos continuos del compresor.',
    localGatewayAction:
      'El gateway local normaliza la serie temporal cada 60 segundos y confirma que el sensor opera dentro de calibración sin depender de nube externa.',
    aiAnalysis:
      'La IA correlaciona el patrón con el histórico de mantenimiento y el manual del equipo: descarta apertura puntual de puerta y señala probable fallo de burlete o saturación de condensador.',
    deterministicCheck:
      'Regla determinista APPCC activada: supera 5,0 °C durante más de 20 minutos -> severidad alta obligatoria y escalado inmediato al encargado.',
    authorizedOutput:
      'Alerta priorizada en móvil interno con protocolo de traslado preventivo de género, checklist de verificación y borrador de aviso al servicio técnico.',
    humanOversightNote:
      'El sistema no desconecta ni reconfigura cámaras automáticamente; exige verificación presencial del encargado de turno.',
    simulatedMetrics: [
      { label: 'Cámara Refrigeración #2', value: '6,4 °C', threshold: 'Límite <= 4,0 °C', state: 'atencion' },
      { label: 'Cámara Congelación #1', value: '-19,2 °C', threshold: 'Límite <= -18,0 °C', state: 'normal' },
      { label: 'Consumo Línea Cocina', value: '14,8 kW', threshold: 'Referencia 11,5 kW', state: 'validacion' }
    ]
  },
  {
    id: 'smart-factory',
    name: 'Fábrica Inteligente',
    sector: 'Industria & Manufactura',
    headline: 'Monitorización de equipos auxiliares y asistencia a mantenimiento',
    description:
      'Flujo ilustrativo para detectar desviaciones térmicas y de consumo en maquinaria antes de que deriven en una parada no planificada.',
    sensorInput:
      'Compresor principal Línea B presenta incremento sostenido de temperatura en cabezal (+11 °C sobre línea base) y ligera elevación de amperaje en carga estable.',
    localGatewayAction:
      'Adquisición en red industrial aislada (OT) con lectura unidireccional hacia el nodo local de análisis, preservando la seguridad de planta.',
    aiAnalysis:
      'Contrasta el desvío con el historial de intervenciones y el manual OEM: identifica similitud con obstrucción de filtro registrada hace 7 meses y estima ventana de revisión segura.',
    deterministicCheck:
      'Comprobación determinista de seguridad: por debajo del umbral de paro de emergencia del PLC; se autoriza únicamente flujo de mantenimiento preventivo.',
    authorizedOutput:
      'Propuesta de orden de trabajo preventiva en GMAO con referencia de repuesto y procedimiento técnico, pendiente de aprobación del jefe de mantenimiento.',
    humanOversightNote:
      'Las protecciones físicas y paradas de máquina permanecen exclusivamente en los PLC y sistemas de seguridad industrial certificados.',
    simulatedMetrics: [
      { label: 'Temp. Cabezal Compresor', value: '89,5 °C', threshold: 'Referencia 78,0 °C', state: 'atencion' },
      { label: 'Consumo Motor Línea B', value: '42,3 A', threshold: 'Nominal 38,0 A', state: 'validacion' },
      { label: 'Presión de Línea', value: '6,8 bar', threshold: 'Rango 6,5–7,2 bar', state: 'normal' }
    ]
  },
  {
    id: 'smart-retail',
    name: 'Retail Inteligente',
    sector: 'Comercio & Retail',
    headline: 'Confort ambiental, afluencia y eficiencia operativa en tienda',
    description:
      'Escenario conceptual que conecta sensores ambientales y conteo anónimo de afluencia con horarios comerciales y políticas de confort.',
    sensorInput:
      'Nivel de CO2 en planta baja alcanza 1.080 ppm durante pico de afluencia vespertina, con climatización operando en consigna de baja ventilación.',
    localGatewayAction:
      'Procesa conteo agregado anónimo (sin captura biométrica ni identificación personal) y métricas ambientales dentro de la tienda.',
    aiAnalysis:
      'Relaciona el pico de ocupación con el calendario promocional y propone adelantar la renovación de aire 30 minutos en franjas equivalentes.',
    deterministicCheck:
      'Regla determinista de confort y consumo: valida que cualquier ajuste propuesto permanezca dentro de la banda autorizada de temperatura y potencia contratada.',
    authorizedOutput:
      'Recomendación al responsable de tienda para activar perfil de ventilación reforzada y registro analítico para planificación de turnos.',
    humanOversightNote:
      'Los datos son agregados y anónimos; la modificación de consignas en equipos HVAC requiere validación o perfil preautorizado.',
    simulatedMetrics: [
      { label: 'Calidad Aire (CO2)', value: '1.080 ppm', threshold: 'Objetivo < 900 ppm', state: 'atencion' },
      { label: 'Temperatura Sala', value: '22,4 °C', threshold: 'Banda 21–23 °C', state: 'normal' },
      { label: 'Afluencia Franja Actual', value: '84 pers.', threshold: 'Media habitual 52', state: 'validacion' }
    ]
  },
  {
    id: 'smart-sustainability',
    name: 'Sostenibilidad Inteligente',
    sector: 'Energía & Sostenibilidad',
    headline: 'Control integrado de electricidad, gas, agua y combustible',
    description:
      'Ejemplo simulado de supervisión transversal de suministros para detectar consumos residuales fuera de turno y documentar eficiencia.',
    sensorInput:
      'Submedidor de agua y línea eléctrica de nave auxiliar registran consumo continuo entre las 01:00 y las 04:30 en jornada sin producción programada.',
    localGatewayAction:
      'Consolida lecturas de contadores de impulsos y analizadores de red en intervalos de 15 minutos en la base operativa local.',
    aiAnalysis:
      'Cruza las curvas con el cuadrante de producción y limpieza: descarta actividad autorizada y calcula el impacto mensual estimado si persiste la fuga o equipo encendido.',
    deterministicCheck:
      'Regla determinista de consumo base nocturno excedido (+240 % sobre referencia) activa alerta de verificación al inicio de la jornada.',
    authorizedOutput:
      'Resumen matutino para operaciones con localización del submedidor afectado y actualización del registro mensual de indicadores energéticos.',
    humanOversightNote:
      'No cierra válvulas ni corta suministros de manera autónoma; proporciona evidencia puntual para inspección técnica segura.',
    simulatedMetrics: [
      { label: 'Consumo Eléctrico Nocturno', value: '9,6 kWh/h', threshold: 'Base <= 2,8 kWh/h', state: 'atencion' },
      { label: 'Caudal Agua Auxiliar', value: '185 L/h', threshold: 'Base <= 15 L/h', state: 'atencion' },
      { label: 'Consumo Gas Caldera', value: '0,4 m3/h', threshold: 'En espera <= 0,5', state: 'normal' }
    ]
  }
];
