import { LeadInput, LeadRepository, StoredLead } from '../domain/types';

const DEMO_STORAGE_KEY = 'vegen_private_intelligence_demo_leads_v1';

/**
 * Adaptador de persistencia DEMO en navegador (localStorage).
 * Permite probar el flujo comercial de solicitud sin backend activo.
 * Los datos NO se envían a servidores de Vegen ni a terceros.
 */
export class LocalDemoLeadRepository implements LeadRepository {
  public readonly mode = 'demo-local' as const;

  public async saveLead(lead: LeadInput): Promise<StoredLead> {
    const existing = await this.listLeads();
    const record: StoredLead = {
      ...lead,
      id: `demo-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
      storageMode: 'demo-local'
    };

    const updated = [record, ...existing].slice(0, 20);
    try {
      window.localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Si el almacenamiento local está bloqueado, devolvemos igualmente el registro en memoria para la sesión actual.
    }

    return record;
  }

  public async listLeads(): Promise<StoredLead[]> {
    try {
      const raw = window.localStorage.getItem(DEMO_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed as StoredLead[];
    } catch {
      return [];
    }
  }

  public async clearDemoLeads(): Promise<void> {
    try {
      window.localStorage.removeItem(DEMO_STORAGE_KEY);
    } catch {
      // Ignorar si localStorage no está disponible.
    }
  }
}

/**
 * Frontera de integración preparada para el futuro backend PHP + MySQL en Bluehost.
 * No implementa endpoints ficticios ni simula conectividad remota en esta primera versión.
 * Cuando exista la API real (p. ej. VITE_LEADS_API_URL), bastará con activar este adaptador
 * mediante inyección en `createLeadRepository()` sin reescribir la interfaz de usuario.
 */
export interface ApiLeadRepositoryConfig {
  baseUrl: string;
}

export class ApiLeadRepository implements LeadRepository {
  public readonly mode = 'remote-api' as const;
  private readonly config: ApiLeadRepositoryConfig;

  constructor(config: ApiLeadRepositoryConfig) {
    this.config = config;
  }

  public async saveLead(_lead: LeadInput): Promise<StoredLead> {
    if (!this.config.baseUrl) {
      throw new Error(
        'ApiLeadRepository requiere configurar el endpoint real PHP/MySQL antes de usarse en producción.'
      );
    }
    throw new Error(
      `Backend remoto no implementado en esta primera versión (endpoint previsto: ${this.config.baseUrl}).`
    );
  }

  public async listLeads(): Promise<StoredLead[]> {
    throw new Error(
      'La consulta remota de solicitudes requiere autenticación administrativa en el futuro backend PHP/MySQL.'
    );
  }
}

/**
 * Factory centralizada para desacoplar la UI del adaptador de persistencia.
 */
export function createLeadRepository(): LeadRepository {
  return new LocalDemoLeadRepository();
}
