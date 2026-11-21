import React, { useEffect, useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Trash2 } from 'lucide-react';
import { INDUSTRIES } from '../data/industries';
import { LeadInput, StoredLead } from '../domain/types';
import { createLeadRepository } from '../persistence/LeadRepository';
import { useRouter } from '../router/RouterContext';

const COMPANY_SIZES = [
  '1 – 10 personas',
  '11 – 50 personas',
  '51 – 250 personas',
  'Más de 250 personas'
];

const COUNTRIES = [
  'España',
  'México',
  'Colombia',
  'Argentina',
  'Chile',
  'Perú',
  'Uruguay',
  'Ecuador',
  'Costa Rica',
  'Otro país'
];

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  country?: string;
  industry?: string;
  companySize?: string;
  message?: string;
  privacyConsent?: string;
}

export function LeadForm() {
  const repository = useMemo(() => createLeadRepository(), []);
  const { contactPreselection, clearContactPreselection } = useRouter();

  const [form, setForm] = useState<LeadInput>({
    name: '',
    company: '',
    email: '',
    country: 'España',
    industry: INDUSTRIES[0].name,
    companySize: COMPANY_SIZES[1],
    message: '',
    configuredSummary: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<StoredLead | null>(null);
  const [demoLeads, setDemoLeads] = useState<StoredLead[]>([]);
  const [showDemoHistory, setShowDemoHistory] = useState(false);

  useEffect(() => {
    void repository.listLeads().then(setDemoLeads);
  }, [repository]);

  useEffect(() => {
    if (!contactPreselection) return;
    setForm((prev) => ({
      ...prev,
      industry: contactPreselection.industry ?? prev.industry,
      configuredSummary: contactPreselection.configuredSummary ?? prev.configuredSummary,
      message:
        contactPreselection.interestNote && !prev.message
          ? contactPreselection.interestNote
          : prev.message
    }));
    clearContactPreselection();
  }, [contactPreselection, clearContactPreselection]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Introduce tu nombre completo.';
    }
    if (!form.company.trim()) {
      nextErrors.company = 'Introduce el nombre de tu empresa u organización.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Introduce un correo electrónico profesional válido.';
    }
    if (!form.country) {
      nextErrors.country = 'Selecciona un país.';
    }
    if (!form.industry) {
      nextErrors.industry = 'Selecciona un sector.';
    }
    if (!form.companySize) {
      nextErrors.companySize = 'Selecciona el tamaño aproximado de la organización.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Describe brevemente tu interés o proyecto (mínimo 10 caracteres).';
    }
    if (!form.privacyConsent) {
      nextErrors.privacyConsent = 'Debes confirmar el aviso de privacidad de esta demostración.';
    }
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const saved = await repository.saveLead({
        ...form,
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        configuredSummary: form.configuredSummary?.trim() || undefined
      });
      setSubmittedRecord(saved);
      const updatedList = await repository.listLeads();
      setDemoLeads(updatedList);
      setForm({
        name: '',
        company: '',
        email: '',
        country: 'España',
        industry: INDUSTRIES[0].name,
        companySize: COMPANY_SIZES[1],
        message: '',
        configuredSummary: '',
        privacyConsent: false
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleClearDemoLeads = async () => {
    if (repository.clearDemoLeads) {
      await repository.clearDemoLeads();
      setDemoLeads([]);
      setSubmittedRecord(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Explicit Demo Persistence Banner */}
      <div className="rounded-2xl border border-sand-deep bg-sand-soft p-5 text-sm text-olive">
        <div className="flex items-start gap-3">
          <AlertCircle
            className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-accessible"
            aria-hidden="true"
          />
          <div>
            <p className="font-display text-base font-medium text-olive">
              Entorno de demostración — Persistencia local en el navegador
            </p>
            <p className="mt-1 leading-relaxed text-olive-muted">
              En esta primera versión comercial de evaluación, el formulario guarda las solicitudes
              únicamente en el almacenamiento local (<code className="font-mono text-xs text-olive">localStorage</code>) de
              tu navegador. Los datos <strong className="text-olive">no se transmiten</strong> a servidores de Vegen. La
              arquitectura incluye la interfaz preparada para conectar posteriormente el backend
              PHP + MySQL en Bluehost.
            </p>
          </div>
        </div>
      </div>

      {/* Confirmation State */}
      {submittedRecord && (
        <div
          role="status"
          className="rounded-2xl border border-sage bg-sage-soft p-6 text-olive"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" aria-hidden="true" />
            <div className="space-y-2">
              <h3 className="font-display text-lg font-medium text-olive">
                Solicitud guardada localmente para demostración
              </h3>
              <p className="text-sm leading-relaxed text-olive-muted">
                Hemos registrado la solicitud de <strong className="text-olive">{submittedRecord.name}</strong> (
                {submittedRecord.company}) únicamente en el almacenamiento local de este navegador.
                <strong className="text-olive"> Esta solicitud NO ha sido enviada a Vegen</strong>.
              </p>
              <p className="font-mono text-xs text-olive-subtle">
                Referencia local: {submittedRecord.id} · Modo: {submittedRecord.storageMode}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-olive/12 bg-paper p-6 text-olive sm:p-8 lg:p-10"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-olive">
              Nombre completo *
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, name: e.target.value }));
                setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              placeholder="Ej.: Laura Mendoza"
              className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-3.5 py-2.5 text-sm text-olive placeholder:text-olive-subtle focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
            />
            {errors.name && (
              <p className="mt-1.5 text-xs font-medium text-terracotta-deep">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="lead-company" className="block text-sm font-medium text-olive">
              Empresa u organización *
            </label>
            <input
              id="lead-company"
              type="text"
              required
              value={form.company}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, company: e.target.value }));
                setErrors((prev) => ({ ...prev, company: undefined }));
              }}
              placeholder="Ej.: Industrias del Norte S.L."
              className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-3.5 py-2.5 text-sm text-olive placeholder:text-olive-subtle focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
            />
            {errors.company && (
              <p className="mt-1.5 text-xs font-medium text-terracotta-deep">{errors.company}</p>
            )}
          </div>

          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-olive">
              Correo profesional *
            </label>
            <input
              id="lead-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, email: e.target.value }));
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              placeholder="nombre@empresa.com"
              className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-3.5 py-2.5 text-sm text-olive placeholder:text-olive-subtle focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs font-medium text-terracotta-deep">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="lead-country" className="block text-sm font-medium text-olive">
              País *
            </label>
            <select
              id="lead-country"
              value={form.country}
              onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
              className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-3.5 py-2.5 text-sm text-olive focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
            >
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="lead-industry" className="block text-sm font-medium text-olive">
              Sector *
            </label>
            <select
              id="lead-industry"
              value={form.industry}
              onChange={(e) => setForm((prev) => ({ ...prev, industry: e.target.value }))}
              className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-3.5 py-2.5 text-sm text-olive focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
            >
              {INDUSTRIES.map((ind) => (
                <option key={ind.id} value={ind.name}>
                  {ind.name}
                </option>
              ))}
              <option value="Otro sector">Otro sector</option>
            </select>
          </div>

          <div>
            <label htmlFor="lead-size" className="block text-sm font-medium text-olive">
              Tamaño de empresa *
            </label>
            <select
              id="lead-size"
              value={form.companySize}
              onChange={(e) => setForm((prev) => ({ ...prev, companySize: e.target.value }))}
              className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-3.5 py-2.5 text-sm text-olive focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
            >
              {COMPANY_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="lead-message" className="block text-sm font-medium text-olive">
            Descripción del proyecto o necesidad *
          </label>
          <textarea
            id="lead-message"
            rows={4}
            required
            value={form.message}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, message: e.target.value }));
              setErrors((prev) => ({ ...prev, message: undefined }));
            }}
            placeholder="Cuéntanos qué procesos o fuentes de conocimiento quieres abordar, si necesitas despliegue local y cualquier requisito de seguridad."
            className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-3.5 py-2.5 text-sm text-olive placeholder:text-olive-subtle focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
          />
          {errors.message && (
            <p className="mt-1.5 text-xs font-medium text-terracotta-deep">{errors.message}</p>
          )}
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between gap-2">
            <label
              htmlFor="lead-summary"
              className="block text-sm font-medium text-olive"
            >
              Resumen de solución configurada (opcional)
            </label>
            {form.configuredSummary && (
              <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, configuredSummary: '' }))}
                className="text-xs font-medium text-olive-subtle hover:text-olive"
              >
                Quitar resumen adjunto
              </button>
            )}
          </div>
          <textarea
            id="lead-summary"
            rows={form.configuredSummary ? 7 : 3}
            value={form.configuredSummary}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, configuredSummary: e.target.value }))
            }
            placeholder="Si utilizaste el configurador 'Diseña tu IA', tu resumen aparecerá adjunto aquí automáticamente."
            className="mt-2 w-full rounded-lg border border-olive/20 bg-ivory px-3.5 py-2.5 font-mono text-xs leading-relaxed text-olive placeholder:font-sans placeholder:text-olive-subtle focus:border-terracotta-accessible focus:bg-paper focus:outline-none"
          />
        </div>

        {/* Privacy Consent */}
        <div className="mt-6">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-olive-muted">
            <input
              type="checkbox"
              checked={form.privacyConsent}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, privacyConsent: e.target.checked }));
                setErrors((prev) => ({ ...prev, privacyConsent: undefined }));
              }}
              className="mt-1 h-4 w-4 rounded border-olive/30 accent-[#9E5840]"
            />
            <span className="leading-relaxed">
              Entiendo que esta es una versión de demostración que guarda los datos únicamente en
              el almacenamiento local de mi navegador (sin envío externo) y acepto el tratamiento
              simulado de la información mínima introducida. Para producción, se habilitará el
              backend oficial junto con el aviso legal y política de privacidad definitivos. *
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1.5 text-xs font-medium text-terracotta-deep">
              {errors.privacyConsent}
            </p>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-olive/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-olive-subtle">
            No introduzcas datos personales sensibles en este prototipo de evaluación.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-terracotta-accessible px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-terracotta-deep disabled:opacity-60 whitespace-nowrap"
          >
            {submitting ? 'Guardando localmente...' : 'Guardar solicitud de evaluación (Demo)'}
          </button>
        </div>
      </form>

      {/* Local Demo Submissions Inspector */}
      <div className="rounded-2xl border border-olive/12 bg-paper p-6 text-olive">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-base font-medium text-olive">
              Registro local de pruebas ({demoLeads.length})
            </h3>
            <p className="mt-0.5 text-xs text-olive-subtle">
              Visible solo en este navegador para validar el comportamiento del adaptador{' '}
              <code className="font-mono text-olive">LocalDemoLeadRepository</code>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowDemoHistory((prev) => !prev)}
              className="min-h-[40px] rounded-lg border border-olive/20 bg-ivory px-3.5 py-1.5 text-xs font-semibold text-olive transition-colors hover:bg-parchment"
            >
              {showDemoHistory ? 'Ocultar registros' : 'Ver registros locales'}
            </button>
            {demoLeads.length > 0 && (
              <button
                type="button"
                onClick={handleClearDemoLeads}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-olive/20 bg-ivory px-3 py-1.5 text-xs font-medium text-olive-muted transition-colors hover:bg-terracotta-soft hover:text-terracotta-deep"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                Vaciar demo
              </button>
            )}
          </div>
        </div>

        {showDemoHistory && (
          <div className="mt-5 border-t border-olive/12 pt-5">
            {demoLeads.length === 0 ? (
              <p className="text-sm text-olive-subtle">
                Todavía no hay solicitudes guardadas localmente en este navegador.
              </p>
            ) : (
              <div className="space-y-3">
                {demoLeads.map((lead) => (
                  <article
                    key={lead.id}
                    className="rounded-xl border border-olive/10 bg-ivory p-4 text-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-olive-subtle">
                      <span className="font-semibold text-olive">
                        {lead.name} · {lead.company}
                      </span>
                      <span className="font-mono">
                        {new Date(lead.createdAt).toLocaleString('es-ES')} · No enviado (local)
                      </span>
                    </div>
                    <p className="mt-1.5 text-olive-muted">
                      {lead.email} · {lead.country} · {lead.industry} · {lead.companySize}
                    </p>
                    <p className="mt-2 text-olive">{lead.message}</p>
                    {lead.configuredSummary && (
                      <p className="mt-2 font-mono text-[11px] text-terracotta-accessible">
                        Incluye resumen adjunto del configurador.
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
