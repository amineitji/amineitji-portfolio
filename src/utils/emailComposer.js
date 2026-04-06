export const CONTACT_EMAIL = 'amineitji@gmail.com';

const INTENTS = [
  { value: 'project', fr: 'Nouveau projet', en: 'New project' },
  { value: 'quote', fr: 'Demande de devis', en: 'Quote request' },
  { value: 'order', fr: 'Commande / devis', en: 'Order / quote' },
  { value: 'mission', fr: 'Mission freelance', en: 'Freelance mission' },
  { value: 'collaboration', fr: 'Collaboration freelance', en: 'Freelance collaboration' },
];

const SERVICES = [
  { value: 'general', fr: 'Projet freelance', en: 'Freelance project' },
  { value: 'showcase', fr: 'Site vitrine', en: 'Showcase website' },
  { value: 'webapp', fr: 'Application web / SaaS', en: 'Web app / SaaS' },
  { value: 'ai', fr: 'Projet IA / LLM', en: 'AI / LLM project' },
  { value: 'data', fr: 'Data / automatisation', en: 'Data / automation' },
  { value: 'consulting', fr: 'Conseil / audit', en: 'Consulting / audit' },
  { value: 'team-extension', fr: "Renfort d'équipe / TJM", en: 'Team extension / day rate' },
];

const BUDGETS = [
  { value: 'unknown', fr: 'À définir', en: 'To be defined' },
  { value: 'lt1k', fr: 'Moins de 1 000 €', en: 'Less than €1,000' },
  { value: '1k-3k', fr: '1 000 à 3 000 €', en: '€1,000 to €3,000' },
  { value: '3k-7k', fr: '3 000 à 7 000 €', en: '€3,000 to €7,000' },
  { value: '7k-15k', fr: '7 000 à 15 000 €', en: '€7,000 to €15,000' },
  { value: '15k+', fr: '15 000 € et plus', en: '€15,000+' },
  { value: 'tjm', fr: 'Budget au TJM / mission', en: 'Day-rate / mission budget' },
];

const TIMELINES = [
  { value: 'asap', fr: 'Au plus vite', en: 'As soon as possible' },
  { value: '2weeks', fr: 'Sous 2 semaines', en: 'Within 2 weeks' },
  { value: '1month', fr: 'Sous 1 mois', en: 'Within 1 month' },
  { value: 'quarter', fr: 'Sous 2 à 3 mois', en: 'Within 2 to 3 months' },
  { value: 'flexible', fr: 'Flexible', en: 'Flexible' },
];

const PRIORITIES = [
  { value: 'design', fr: 'Design / UX', en: 'Design / UX' },
  { value: 'seo', fr: 'SEO', en: 'SEO' },
  { value: 'automation', fr: 'Automatisation', en: 'Automation' },
  { value: 'ai', fr: 'IA / LLM', en: 'AI / LLM' },
  { value: 'api', fr: 'API / integrations', en: 'API / integrations' },
  { value: 'dashboard', fr: 'Dashboard / admin', en: 'Dashboard / admin' },
  { value: 'payments', fr: 'Paiement / Stripe', en: 'Payments / Stripe' },
  { value: 'deployment', fr: 'Deploiement / AWS', en: 'Deployment / AWS' },
  { value: 'maintenance', fr: 'Maintenance', en: 'Maintenance' },
  { value: 'audit', fr: 'Audit / cadrage', en: 'Audit / scoping' },
];

const COPY = {
  fr: {
    kicker: 'Email interactif',
    title: 'Préparer votre email',
    subtitle: 'Complétez le brief, puis ouvrez votre client mail avec un message déjà structuré.',
    preview: 'Aperçu du mail',
    subject: 'Objet',
    priorities: 'Priorités',
    reset: 'Réinitialiser',
    submit: 'Ouvrir le mail prérempli',
    note: "Aucune donnée n'est stockée : le brouillon est généré localement via un mailto.",
    emptyPriority: 'Sélectionnez quelques priorités si elles comptent pour votre projet.',
    badges: {
      source: 'Source',
      offer: 'Offre',
      price: 'Repère prix',
      timeline: 'Repère délai',
    },
    labels: {
      fullName: 'Nom',
      company: 'Société',
      senderEmail: 'Email',
      phone: 'Téléphone',
      service: 'Type de prestation',
      budget: 'Budget',
      timeline: 'Délai souhaité',
      objective: 'Objectif du projet',
      details: 'Périmètre / livrables attendus',
      constraints: 'Contexte / contraintes',
      availability: 'Disponibilités pour échanger',
    },
    placeholders: {
      fullName: 'Votre nom',
      company: 'Entreprise / organisation',
      senderEmail: 'vous@entreprise.com',
      phone: '+33 ...',
      objective: 'Quel résultat voulez-vous obtenir et pour quels utilisateurs ?',
      details: 'Fonctionnalités, pages, livrables ou périmètre attendu.',
      constraints: 'Stack existante, APIs, RGPD, SEO, environnement, contraintes business...',
      availability: 'Vos créneaux ou votre rythme souhaité.',
    },
    prompts: {
      name: '[Votre nom]',
      company: '[Votre société]',
      senderEmail: '[Votre email]',
      phone: '[Votre téléphone]',
      objective: "[Précisez l'objectif, les utilisateurs et le résultat attendu]",
      details: '[Précisez le périmètre, les livrables ou les fonctionnalités attendues]',
      constraints: '[Précisez les contraintes techniques, métier ou organisationnelles]',
      availability: '[Précisez vos disponibilités pour un échange]',
    },
    sections: {
      contact: 'CONTACT',
      need: 'BESOIN',
      reference: 'RÉFÉRENCE',
      objective: 'OBJECTIF',
      details: 'PÉRIMÈTRE / LIVRABLES',
      constraints: 'CONTEXTE / CONTRAINTES',
      availability: 'DISPONIBILITÉS',
    },
    intro: 'Je vous contacte via votre portfolio. Voici un brief structuré :',
    closing: 'Bien à vous,',
  },
  en: {
    kicker: 'Interactive email',
    title: 'Prepare your email',
    subtitle: 'Complete the brief, then open your mail client with a structured draft.',
    preview: 'Email preview',
    subject: 'Subject',
    priorities: 'Priorities',
    reset: 'Reset',
    submit: 'Open prefilled email',
    note: 'No data is stored: the draft is generated locally through a mailto link.',
    emptyPriority: 'Pick a few priorities if they matter for your project.',
    badges: {
      source: 'Source',
      offer: 'Offer',
      price: 'Price hint',
      timeline: 'Timeline hint',
    },
    labels: {
      fullName: 'Name',
      company: 'Company',
      senderEmail: 'Email',
      phone: 'Phone',
      service: 'Service type',
      budget: 'Budget',
      timeline: 'Desired timeline',
      objective: 'Project goal',
      details: 'Scope / expected deliverables',
      constraints: 'Context / constraints',
      availability: 'Availability for a call',
    },
    placeholders: {
      fullName: 'Your name',
      company: 'Company / organization',
      senderEmail: 'you@company.com',
      phone: '+44 ...',
      objective: 'What outcome do you want, and for which users?',
      details: 'Features, pages, deliverables, or expected scope.',
      constraints: 'Existing stack, APIs, compliance, SEO, hosting, business constraints...',
      availability: 'Your preferred slots or expected pace.',
    },
    prompts: {
      name: '[Your name]',
      company: '[Your company]',
      senderEmail: '[Your email]',
      phone: '[Your phone]',
      objective: '[Describe the goal, target users, and expected outcome]',
      details: '[Describe the scope, deliverables, or expected features]',
      constraints: '[Describe the technical, business, or organizational constraints]',
      availability: '[Share your availability for a call]',
    },
    sections: {
      contact: 'CONTACT',
      need: 'NEED',
      reference: 'REFERENCE',
      objective: 'GOAL',
      details: 'SCOPE / DELIVERABLES',
      constraints: 'CONTEXT / CONSTRAINTS',
      availability: 'AVAILABILITY',
    },
    intro: 'I am reaching out through your portfolio. Here is a structured brief:',
    closing: 'Best regards,',
  },
};

function localize(items, lang) {
  return items.map((item) => ({
    value: item.value,
    label: item[lang],
  }));
}

function findLabel(items, value, lang) {
  const found = items.find((item) => item.value === value);
  return found ? found[lang] : '';
}

function line(label, value) {
  return `- ${label}: ${value}`;
}

function section(title, lines) {
  return [title, ...lines, ''];
}

export function getEmailComposerContent(lang = 'fr') {
  const copy = COPY[lang] || COPY.fr;

  return {
    ...copy,
    intents: localize(INTENTS, lang),
    services: localize(SERVICES, lang),
    budgets: localize(BUDGETS, lang),
    timelines: localize(TIMELINES, lang),
    prioritiesList: localize(PRIORITIES, lang),
  };
}

export function createEmailComposerForm(context = {}) {
  return {
    fullName: context.fullName || '',
    company: context.company || '',
    senderEmail: context.senderEmail || '',
    phone: context.phone || '',
    service: context.service || 'general',
    budget: context.budget || 'unknown',
    timeline: context.timeline || 'flexible',
    priorities: Array.isArray(context.priorities) ? [...context.priorities] : [],
    objective: context.prefillObjective || '',
    details: context.prefillDetails || '',
    constraints: context.prefillConstraints || '',
    availability: context.prefillAvailability || '',
  };
}

export function buildEmailDraft({ lang = 'fr', context = {}, form = {}, contactEmail = CONTACT_EMAIL }) {
  const content = getEmailComposerContent(lang);
  const prompts = content.prompts;
  const intent = context.intent || 'project';
  const serviceValue = form.service || context.service || 'general';
  const serviceLabel = findLabel(SERVICES, serviceValue, lang) || findLabel(SERVICES, 'general', lang);
  const intentLabel = findLabel(INTENTS, intent, lang) || findLabel(INTENTS, 'project', lang);
  const budgetLabel = findLabel(BUDGETS, form.budget || 'unknown', lang) || findLabel(BUDGETS, 'unknown', lang);
  const timelineLabel = findLabel(TIMELINES, form.timeline || 'flexible', lang) || findLabel(TIMELINES, 'flexible', lang);
  const priorities = Array.isArray(form.priorities)
    ? form.priorities
        .map((value) => findLabel(PRIORITIES, value, lang))
        .filter(Boolean)
    : [];

  const subjectBase = intentLabel;
  const subjectTarget = context.offerName || serviceLabel;
  const subjectCompany = form.company ? ` - ${form.company}` : '';
  const subject = `${subjectBase} - ${subjectTarget}${subjectCompany}`;

  const offerHighlights = Array.isArray(context.offerHighlights)
    ? context.offerHighlights.slice(0, 3).join(', ')
    : '';

  const referenceLines = [
    context.source ? line(content.badges.source, context.source) : '',
    context.offerName ? line(content.badges.offer, context.offerName) : '',
    context.priceHint ? line(content.badges.price, context.priceHint) : '',
    context.timelineHint ? line(content.badges.timeline, context.timelineHint) : '',
    offerHighlights ? line(lang === 'en' ? 'Highlights' : 'Points reperes', offerHighlights) : '',
  ].filter(Boolean);

  const introContext = context.offerName
    ? lang === 'en'
      ? `I am reaching out about ${context.offerName}. ${content.intro}`
      : `Je vous contacte au sujet de ${context.offerName}. ${content.intro}`
    : content.intro;

  const bodyParts = [
    lang === 'en' ? 'Hi Amine,' : 'Bonjour Amine,',
    '',
    introContext,
    '',
    ...section(content.sections.contact, [
      line(content.labels.fullName, form.fullName || prompts.name),
      line(content.labels.company, form.company || prompts.company),
      line(content.labels.senderEmail, form.senderEmail || prompts.senderEmail),
      line(content.labels.phone, form.phone || prompts.phone),
    ]),
    ...section(content.sections.need, [
      line(lang === 'en' ? 'Intent' : 'Intention', intentLabel),
      line(content.labels.service, serviceLabel),
      line(content.labels.budget, budgetLabel),
      line(content.labels.timeline, timelineLabel),
      line(
        content.priorities,
        priorities.length ? priorities.join(', ') : (lang === 'en' ? '[Not specified]' : '[Non précisé]')
      ),
    ]),
  ];

  if (referenceLines.length) {
    bodyParts.push(...section(content.sections.reference, referenceLines));
  }

  bodyParts.push(
    ...section(content.sections.objective, [form.objective || prompts.objective]),
    ...section(content.sections.details, [form.details || prompts.details]),
    ...section(content.sections.constraints, [form.constraints || prompts.constraints]),
    ...section(content.sections.availability, [form.availability || prompts.availability]),
    content.closing,
    form.fullName || prompts.name
  );

  const body = bodyParts.join('\n');
  const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return {
    subject,
    body,
    href,
  };
}
