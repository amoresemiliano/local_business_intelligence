export type RoutePath =
  | '/'
  | '/soluciones'
  | '/industrias'
  | '/autonomia-gobernanza'
  | '/edge-iot'
  | '/planes'
  | '/disena-tu-ia'
  | '/contacto';

export type SolutionFamilyId =
  | 'vertical'
  | 'enterprise'
  | 'expert'
  | 'edge-iot';

export interface SolutionFamily {
  id: SolutionFamilyId;
  code: string;
  name: string;
  subtitle: string;
  valueProposition: string;
  summary: string;
  problemsSolved: string[];
  capabilities: string[];
  deploymentOptions: string[];
  exampleUseCases: string[];
  importantNote?: string;
}

export type IndustryCategory =
  | 'todas'
  | 'operaciones-fisicas'
  | 'comercio-servicios'
  | 'conocimiento-profesional';

export interface IndustryItem {
  id: string;
  name: string;
  category: Exclude<IndustryCategory, 'todas'>;
  categoryLabel: string;
  shortSummary: string;
  typicalProblems: string[];
  aiCapabilities: string[];
  exampleKnowledgeSources: string[];
  exampleWorkflows: string[];
  potentialBenefits: string[];
  recommendedFamilyId: SolutionFamilyId;
  recommendedFamilyName: string;
}

export type AutonomyLevelId = 'asistida' | 'analitica' | 'supervisada' | 'delegada';

export interface AutonomyLevel {
  id: AutonomyLevelId;
  levelNumber: number;
  name: string;
  tagline: string;
  description: string;
  exampleWorkflow: {
    trigger: string;
    aiStep: string;
    controlGate: string;
    outcome: string;
  };
  allowedActions: string[];
  restrictedActions: string[];
  humanSupervision: string;
  governanceRequirements: string[];
  riskProfile: string;
}

export interface GovernancePillar {
  id: string;
  index: string;
  title: string;
  description: string;
  practicalDetail: string;
}

export interface IoTArchitectureNode {
  id: string;
  step: string;
  title: string;
  role: string;
  technicalScope: string;
  commercialValue: string;
}

export interface IoTMetricSample {
  label: string;
  value: string;
  threshold: string;
  state: 'normal' | 'atencion' | 'validacion';
}

export interface IoTScenario {
  id: string;
  name: string;
  sector: string;
  headline: string;
  description: string;
  sensorInput: string;
  localGatewayAction: string;
  aiAnalysis: string;
  deterministicCheck: string;
  authorizedOutput: string;
  humanOversightNote: string;
  simulatedMetrics: IoTMetricSample[];
}

export type PlanId = 'essential' | 'business' | 'advanced' | 'enterprise';

export interface PricingPlan {
  id: PlanId;
  name: string;
  audience: string;
  monthlyPriceEur: number | null;
  implementationFromEur: number | null;
  customPricingLabel?: string;
  highlighted?: boolean;
  features: string[];
  autonomyScope: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type IntelligenceTypeOption =
  | 'sector'
  | 'empresa'
  | 'tematica'
  | 'iot'
  | 'combinacion';

export type InfrastructureOption =
  | 'equipo-existente'
  | 'servidor-local'
  | 'infraestructura-privada'
  | 'recomendacion-vegen';

export interface ConfiguratorState {
  intelligenceType: IntelligenceTypeOption;
  industryId: string;
  goals: string[];
  otherGoalText: string;
  knowledgeSources: string[];
  infrastructure: InfrastructureOption;
  autonomyLevel: AutonomyLevelId;
}

export interface ConfiguratorSummary {
  suggestedFamilyId: SolutionFamilyId;
  suggestedFamilyName: string;
  industryName: string;
  relevantCapabilities: string[];
  proposedAutonomyName: string;
  proposedAutonomyExplanation: string;
  knowledgeSourcesLabels: string[];
  infrastructureConsiderations: string;
  governanceConsiderations: string[];
  suggestedPlanId: PlanId;
  suggestedPlanName: string;
  indicativeRange: string;
  recommendedNextStep: string;
  plainTextSummary: string;
}

export interface LeadInput {
  name: string;
  company: string;
  email: string;
  country: string;
  industry: string;
  companySize: string;
  message: string;
  configuredSummary?: string;
  privacyConsent: boolean;
}

export interface StoredLead extends LeadInput {
  id: string;
  createdAt: string;
  storageMode: 'demo-local' | 'remote-api';
}

export interface LeadRepository {
  readonly mode: 'demo-local' | 'remote-api';
  saveLead(lead: LeadInput): Promise<StoredLead>;
  listLeads(): Promise<StoredLead[]>;
  clearDemoLeads?(): Promise<void>;
}

export interface ConfiguratorPreselection {
  intelligenceType?: IntelligenceTypeOption;
  industryId?: string;
  autonomyLevel?: AutonomyLevelId;
}

export interface ContactPreselection {
  configuredSummary?: string;
  industry?: string;
  interestNote?: string;
}
