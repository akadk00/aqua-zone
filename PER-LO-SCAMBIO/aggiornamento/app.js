// ---- Year in footer ----
document.getElementById("year").textContent = new Date().getFullYear();

// ====================================================================
// Translations
// ====================================================================
const I18N = {
  it: {
    "nav.services": "Servizi", "nav.about": "Chi siamo", "nav.projects": "Realizzazioni",
    "nav.process": "Come lavoriamo", "nav.contact": "Contattaci",
    "hero.eyebrow": "Tenero · Ticino · dal 2006",
    "hero.title": "Usiamo l'acqua per dare vita ai <span class=\"accent\">vostri sogni</span>",
    "hero.lead": "Laghetti koi, biolaghi e biopiscine realizzati su misura. Oltre trent'anni di passione, dal primo laghetto a un giardino acquatico che diventa il cuore della vostra casa.",
    "hero.cta1": "Guarda le realizzazioni", "hero.cta2": "Richiedi un sopralluogo",
    "hero.stat1": "anni di esperienza", "hero.stat2": "progetti realizzati", "hero.stat3": "su misura",
    "serv.kicker": "Cosa facciamo", "serv.title": "Soluzioni su misura per voi",
    "serv.sub": "Dalla progettazione alla manutenzione, seguiamo ogni fase con la cura di chi ha trasformato una passione in mestiere.",
    "serv.koi.t": "Laghetti Koi", "serv.koi.d": "Laghetti per carpe koi con filtraggio professionale e profondità ideale per esemplari sani e longevi.",
    "serv.bio.t": "Biolaghi", "serv.bio.d": "Specchi d'acqua naturali con equilibrio biologico autosufficiente, piante acquatiche e zone di rigenerazione.",
    "serv.pool.t": "Biopiscine", "serv.pool.d": "Il piacere di nuotare in acqua pulita senza cloro, integrata nel giardino come un laghetto naturale.",
    "serv.reno.t": "Ristrutturazioni", "serv.reno.d": "Diamo nuova vita a bacini esistenti, rivedendo impermeabilizzazione, forma e impianti.",
    "serv.filter.t": "Sistemi di filtraggio", "serv.filter.d": "Aggiornamento degli impianti con tecnologie moderne per acqua limpida e bassa manutenzione.",
    "serv.maint.t": "Manutenzione", "serv.maint.d": "Assistenza stagionale e interventi su misura per mantenere il vostro laghetto al meglio tutto l'anno.",
    "serv.more": "Scopri di più →",
    "about.kicker": "Chi siamo", "about.title": "Una passione nata in giardino, cresciuta nel tempo",
    "about.p1": "Tutto è cominciato nel 2006, dal primo laghetto realizzato nel giardino di casa. Da lì, anno dopo anno, la passione per l'acqua e per le carpe koi è diventata un mestiere.",
    "about.p2": "Oggi <strong>Aqua Zone di Fabio Fontana</strong> mette oltre trent'anni di esperienza al servizio di chi vuole un giardino acquatico curato in ogni dettaglio.",
    "about.li1": "Progetti personalizzati, mai uguali", "about.li2": "Materiali e impianti di qualità", "about.li3": "Assistenza diretta dal titolare",
    "about.badge": "anni di<br>passione",
    "proj.kicker": "Realizzazioni", "proj.title": "Alcuni dei nostri progetti",
    "proj.sub": "Ogni laghetto racconta una storia diversa. Sfoglia alcune realizzazioni recenti.",
    "proj.g1t": "Laghetto Koi", "proj.g1s": "Filtraggio professionale",
    "proj.g2t": "Biolago naturale", "proj.g2s": "Equilibrio autosufficiente",
    "proj.g3t": "Biopiscina", "proj.g3s": "Acqua senza cloro",
    "proj.g4t": "Giardino acquatico", "proj.g4s": "Integrazione paesaggistica",
    "proj.g5t": "Cascata & ruscello", "proj.g5s": "Movimento e ossigenazione",
    "proj.g6t": "Illuminazione serale", "proj.g6s": "Atmosfera dopo il tramonto",
    "proc.kicker": "Come lavoriamo", "proc.title": "Dal sogno alla realtà, in quattro passi",
    "proc.s1t": "Sopralluogo", "proc.s1d": "Veniamo da voi per capire spazio, esigenze e desideri.",
    "proc.s2t": "Progetto", "proc.s2d": "Proponiamo una soluzione su misura, con materiali e tempistiche chiare.",
    "proc.s3t": "Realizzazione", "proc.s3d": "Costruiamo il vostro laghetto con cura artigianale, passo dopo passo.",
    "proc.s4t": "Manutenzione", "proc.s4d": "Vi seguiamo nel tempo perché l'acqua resti sempre limpida e sana.",
    "contact.kicker": "Contatti", "contact.title": "Parliamo del vostro progetto",
    "contact.sub": "Raccontateci la vostra idea: vi richiamiamo per fissare un sopralluogo gratuito.",
    "contact.addrLabel": "Indirizzo", "contact.phoneLabel": "Telefono", "contact.emailLabel": "Email",
    "contact.hoursLabel": "Orari", "contact.hoursVal": "Lun–Ven 08:00–17:00 · Sab 09:00–12:00",
    "form.name": "Nome e cognome", "form.email": "Email", "form.phone": "Telefono",
    "form.project": "Tipo di progetto", "form.optSelect": "Seleziona…", "form.optOther": "Altro",
    "form.message": "Messaggio", "form.msgPh": "Descrivete brevemente la vostra idea…", "form.submit": "Invia richiesta",
    "form.err": "Inserite nome ed email validi per inviare la richiesta.",
    "form.ok": "Grazie {name}! Vi ricontatteremo al più presto.",
    "form.sending": "Invio in corso…",
    "form.fail": "Invio non riuscito. Riprovate o scriveteci a <a href=\"mailto:aquazone.ch@gmail.com\">aquazone.ch@gmail.com</a>.",
    "footer.tagline": "Usiamo l'acqua per dare vita ai vostri sogni.",
    "footer.cats": "Laghetti Koi · Biolaghi · Biopiscine",
  },

  de: {
    "nav.services": "Leistungen", "nav.about": "Über uns", "nav.projects": "Referenzen",
    "nav.process": "Ablauf", "nav.contact": "Kontakt",
    "hero.eyebrow": "Tenero · Tessin · seit 2006",
    "hero.title": "Mit Wasser erwecken wir <span class=\"accent\">Ihre Träume</span> zum Leben",
    "hero.lead": "Koiteiche, Bioteiche und Schwimmteiche – massgeschneidert gebaut. Über dreissig Jahre Leidenschaft, vom ersten Teich bis zum Wassergarten, der zum Herzstück Ihres Zuhauses wird.",
    "hero.cta1": "Referenzen ansehen", "hero.cta2": "Beratung anfragen",
    "hero.stat1": "Jahre Erfahrung", "hero.stat2": "realisierte Projekte", "hero.stat3": "massgeschneidert",
    "serv.kicker": "Was wir tun", "serv.title": "Massgeschneiderte Lösungen für Sie",
    "serv.sub": "Von der Planung bis zur Pflege begleiten wir jede Phase mit der Sorgfalt von Menschen, die eine Leidenschaft zum Beruf gemacht haben.",
    "serv.koi.t": "Koiteiche", "serv.koi.d": "Teiche für Kois mit professioneller Filterung und idealer Tiefe für gesunde, langlebige Tiere.",
    "serv.bio.t": "Bioteiche", "serv.bio.d": "Natürliche Wasserflächen mit selbsttragendem biologischem Gleichgewicht, Wasserpflanzen und Regenerationszonen.",
    "serv.pool.t": "Schwimmteiche", "serv.pool.d": "Das Vergnügen, in sauberem Wasser ohne Chlor zu schwimmen – wie in einem natürlichen Teich im Garten integriert.",
    "serv.reno.t": "Sanierungen", "serv.reno.d": "Wir geben bestehenden Becken neues Leben: Abdichtung, Form und Technik überarbeitet.",
    "serv.filter.t": "Filtersysteme", "serv.filter.d": "Modernisierung der Anlagen mit moderner Technik für klares Wasser und geringen Pflegeaufwand.",
    "serv.maint.t": "Unterhalt", "serv.maint.d": "Saisonale Betreuung und massgeschneiderte Eingriffe, damit Ihr Teich das ganze Jahr in Bestform bleibt.",
    "serv.more": "Mehr erfahren →",
    "about.kicker": "Über uns", "about.title": "Eine Leidenschaft, die im Garten entstand und über die Jahre wuchs",
    "about.p1": "Alles begann 2006 mit dem ersten Teich im eigenen Garten. Jahr für Jahr wurde aus der Leidenschaft für Wasser und Kois ein Beruf.",
    "about.p2": "Heute stellt <strong>Aqua Zone von Fabio Fontana</strong> über dreissig Jahre Erfahrung in den Dienst aller, die einen bis ins Detail gepflegten Wassergarten wünschen.",
    "about.li1": "Individuelle Projekte, nie gleich", "about.li2": "Hochwertige Materialien und Technik", "about.li3": "Persönliche Betreuung durch den Inhaber",
    "about.badge": "Jahre<br>Leidenschaft",
    "proj.kicker": "Referenzen", "proj.title": "Einige unserer Projekte",
    "proj.sub": "Jeder Teich erzählt eine eigene Geschichte. Stöbern Sie durch einige aktuelle Arbeiten.",
    "proj.g1t": "Koiteich", "proj.g1s": "Professionelle Filterung",
    "proj.g2t": "Natürlicher Bioteich", "proj.g2s": "Selbsttragendes Gleichgewicht",
    "proj.g3t": "Schwimmteich", "proj.g3s": "Wasser ohne Chlor",
    "proj.g4t": "Wassergarten", "proj.g4s": "Landschaftliche Einbindung",
    "proj.g5t": "Wasserfall & Bachlauf", "proj.g5s": "Bewegung und Sauerstoff",
    "proj.g6t": "Abendbeleuchtung", "proj.g6s": "Stimmung nach Sonnenuntergang",
    "proc.kicker": "Ablauf", "proc.title": "Vom Traum zur Wirklichkeit in vier Schritten",
    "proc.s1t": "Besichtigung", "proc.s1d": "Wir kommen zu Ihnen, um Platz, Bedürfnisse und Wünsche zu verstehen.",
    "proc.s2t": "Planung", "proc.s2d": "Wir schlagen eine massgeschneiderte Lösung mit klaren Materialien und Terminen vor.",
    "proc.s3t": "Bau", "proc.s3d": "Wir bauen Ihren Teich mit handwerklicher Sorgfalt, Schritt für Schritt.",
    "proc.s4t": "Unterhalt", "proc.s4d": "Wir begleiten Sie langfristig, damit das Wasser immer klar und gesund bleibt.",
    "contact.kicker": "Kontakt", "contact.title": "Sprechen wir über Ihr Projekt",
    "contact.sub": "Erzählen Sie uns Ihre Idee: Wir rufen Sie zurück, um eine kostenlose Besichtigung zu vereinbaren.",
    "contact.addrLabel": "Adresse", "contact.phoneLabel": "Telefon", "contact.emailLabel": "E-Mail",
    "contact.hoursLabel": "Öffnungszeiten", "contact.hoursVal": "Mo–Fr 08:00–17:00 · Sa 09:00–12:00",
    "form.name": "Vor- und Nachname", "form.email": "E-Mail", "form.phone": "Telefon",
    "form.project": "Art des Projekts", "form.optSelect": "Auswählen…", "form.optOther": "Sonstiges",
    "form.message": "Nachricht", "form.msgPh": "Beschreiben Sie kurz Ihre Idee…", "form.submit": "Anfrage senden",
    "form.err": "Bitte geben Sie einen gültigen Namen und eine gültige E-Mail an.",
    "form.ok": "Danke {name}! Wir melden uns so bald wie möglich.",
    "form.sending": "Wird gesendet…",
    "form.fail": "Senden fehlgeschlagen. Bitte erneut versuchen oder schreiben Sie an <a href=\"mailto:aquazone.ch@gmail.com\">aquazone.ch@gmail.com</a>.",
    "footer.tagline": "Mit Wasser erwecken wir Ihre Träume zum Leben.",
    "footer.cats": "Koiteiche · Bioteiche · Schwimmteiche",
  },

  fr: {
    "nav.services": "Services", "nav.about": "À propos", "nav.projects": "Réalisations",
    "nav.process": "Notre méthode", "nav.contact": "Contact",
    "hero.eyebrow": "Tenero · Tessin · depuis 2006",
    "hero.title": "Nous utilisons l'eau pour donner vie à <span class=\"accent\">vos rêves</span>",
    "hero.lead": "Bassins à koïs, bio-étangs et piscines naturelles réalisés sur mesure. Plus de trente ans de passion, du premier bassin au jardin aquatique qui devient le cœur de votre maison.",
    "hero.cta1": "Voir les réalisations", "hero.cta2": "Demander une visite",
    "hero.stat1": "ans d'expérience", "hero.stat2": "projets réalisés", "hero.stat3": "sur mesure",
    "serv.kicker": "Ce que nous faisons", "serv.title": "Des solutions sur mesure pour vous",
    "serv.sub": "De la conception à l'entretien, nous suivons chaque étape avec le soin de ceux qui ont transformé une passion en métier.",
    "serv.koi.t": "Bassins à koïs", "serv.koi.d": "Bassins pour koïs avec filtration professionnelle et profondeur idéale pour des poissons sains et durables.",
    "serv.bio.t": "Bio-étangs", "serv.bio.d": "Plans d'eau naturels à l'équilibre biologique autonome, avec plantes aquatiques et zones de régénération.",
    "serv.pool.t": "Piscines naturelles", "serv.pool.d": "Le plaisir de nager dans une eau propre sans chlore, intégrée au jardin comme un étang naturel.",
    "serv.reno.t": "Rénovations", "serv.reno.d": "Nous redonnons vie aux bassins existants en revoyant l'étanchéité, la forme et les installations.",
    "serv.filter.t": "Systèmes de filtration", "serv.filter.d": "Mise à niveau des installations avec des technologies modernes pour une eau limpide et peu d'entretien.",
    "serv.maint.t": "Entretien", "serv.maint.d": "Assistance saisonnière et interventions sur mesure pour garder votre bassin au mieux toute l'année.",
    "serv.more": "En savoir plus →",
    "about.kicker": "À propos", "about.title": "Une passion née au jardin, grandie avec le temps",
    "about.p1": "Tout a commencé en 2006, avec le premier bassin réalisé dans le jardin. Année après année, la passion de l'eau et des koïs est devenue un métier.",
    "about.p2": "Aujourd'hui, <strong>Aqua Zone de Fabio Fontana</strong> met plus de trente ans d'expérience au service de ceux qui veulent un jardin aquatique soigné dans le moindre détail.",
    "about.li1": "Des projets personnalisés, jamais identiques", "about.li2": "Matériaux et installations de qualité", "about.li3": "Suivi direct par le propriétaire",
    "about.badge": "ans de<br>passion",
    "proj.kicker": "Réalisations", "proj.title": "Quelques-uns de nos projets",
    "proj.sub": "Chaque bassin raconte une histoire différente. Découvrez quelques réalisations récentes.",
    "proj.g1t": "Bassin à koïs", "proj.g1s": "Filtration professionnelle",
    "proj.g2t": "Bio-étang naturel", "proj.g2s": "Équilibre autonome",
    "proj.g3t": "Piscine naturelle", "proj.g3s": "Eau sans chlore",
    "proj.g4t": "Jardin aquatique", "proj.g4s": "Intégration paysagère",
    "proj.g5t": "Cascade & ruisseau", "proj.g5s": "Mouvement et oxygénation",
    "proj.g6t": "Éclairage du soir", "proj.g6s": "Ambiance après le coucher du soleil",
    "proc.kicker": "Notre méthode", "proc.title": "Du rêve à la réalité, en quatre étapes",
    "proc.s1t": "Visite", "proc.s1d": "Nous venons chez vous pour comprendre l'espace, les besoins et les envies.",
    "proc.s2t": "Projet", "proc.s2d": "Nous proposons une solution sur mesure, avec des matériaux et des délais clairs.",
    "proc.s3t": "Réalisation", "proc.s3d": "Nous construisons votre bassin avec un soin artisanal, étape par étape.",
    "proc.s4t": "Entretien", "proc.s4d": "Nous vous accompagnons dans la durée pour que l'eau reste toujours limpide et saine.",
    "contact.kicker": "Contact", "contact.title": "Parlons de votre projet",
    "contact.sub": "Racontez-nous votre idée : nous vous rappelons pour fixer une visite gratuite.",
    "contact.addrLabel": "Adresse", "contact.phoneLabel": "Téléphone", "contact.emailLabel": "E-mail",
    "contact.hoursLabel": "Horaires", "contact.hoursVal": "Lun–Ven 08:00–17:00 · Sam 09:00–12:00",
    "form.name": "Nom et prénom", "form.email": "E-mail", "form.phone": "Téléphone",
    "form.project": "Type de projet", "form.optSelect": "Sélectionner…", "form.optOther": "Autre",
    "form.message": "Message", "form.msgPh": "Décrivez brièvement votre idée…", "form.submit": "Envoyer la demande",
    "form.err": "Veuillez indiquer un nom et un e-mail valides pour envoyer la demande.",
    "form.ok": "Merci {name} ! Nous vous recontactons au plus vite.",
    "form.sending": "Envoi en cours…",
    "form.fail": "L'envoi a échoué. Réessayez ou écrivez-nous à <a href=\"mailto:aquazone.ch@gmail.com\">aquazone.ch@gmail.com</a>.",
    "footer.tagline": "Nous utilisons l'eau pour donner vie à vos rêves.",
    "footer.cats": "Bassins à koïs · Bio-étangs · Piscines naturelles",
  },

  en: {
    "nav.services": "Services", "nav.about": "About", "nav.projects": "Projects",
    "nav.process": "How we work", "nav.contact": "Contact",
    "hero.eyebrow": "Tenero · Ticino · since 2006",
    "hero.title": "We use water to bring <span class=\"accent\">your dreams</span> to life",
    "hero.lead": "Koi ponds, bio-ponds and natural swimming ponds built to measure. Over thirty years of passion, from the first pond to a water garden that becomes the heart of your home.",
    "hero.cta1": "See our projects", "hero.cta2": "Request a site visit",
    "hero.stat1": "years of experience", "hero.stat2": "projects completed", "hero.stat3": "fully bespoke",
    "serv.kicker": "What we do", "serv.title": "Solutions tailored to you",
    "serv.sub": "From design to maintenance, we follow every stage with the care of people who turned a passion into a craft.",
    "serv.koi.t": "Koi ponds", "serv.koi.d": "Ponds for koi with professional filtration and the ideal depth for healthy, long-lived fish.",
    "serv.bio.t": "Bio-ponds", "serv.bio.d": "Natural water features with a self-sustaining biological balance, aquatic plants and regeneration zones.",
    "serv.pool.t": "Natural pools", "serv.pool.d": "The pleasure of swimming in clean, chlorine-free water, blended into the garden like a natural pond.",
    "serv.reno.t": "Renovations", "serv.reno.d": "We bring existing basins back to life, reworking waterproofing, shape and systems.",
    "serv.filter.t": "Filtration systems", "serv.filter.d": "Upgrading installations with modern technology for clear water and low maintenance.",
    "serv.maint.t": "Maintenance", "serv.maint.d": "Seasonal care and tailored work to keep your pond at its best all year round.",
    "serv.more": "Learn more →",
    "about.kicker": "About us", "about.title": "A passion born in the garden, grown over time",
    "about.p1": "It all began in 2006, with the first pond built in the home garden. Year after year, a passion for water and koi became a profession.",
    "about.p2": "Today <strong>Aqua Zone by Fabio Fontana</strong> brings over thirty years of experience to anyone who wants a water garden cared for in every detail.",
    "about.li1": "Bespoke projects, never the same", "about.li2": "Quality materials and systems", "about.li3": "Direct support from the owner",
    "about.badge": "years of<br>passion",
    "proj.kicker": "Projects", "proj.title": "Some of our work",
    "proj.sub": "Every pond tells a different story. Browse a few recent projects.",
    "proj.g1t": "Koi pond", "proj.g1s": "Professional filtration",
    "proj.g2t": "Natural bio-pond", "proj.g2s": "Self-sustaining balance",
    "proj.g3t": "Natural pool", "proj.g3s": "Chlorine-free water",
    "proj.g4t": "Water garden", "proj.g4s": "Landscape integration",
    "proj.g5t": "Waterfall & stream", "proj.g5s": "Movement and oxygenation",
    "proj.g6t": "Evening lighting", "proj.g6s": "Atmosphere after sunset",
    "proc.kicker": "How we work", "proc.title": "From dream to reality, in four steps",
    "proc.s1t": "Site visit", "proc.s1d": "We come to you to understand the space, needs and wishes.",
    "proc.s2t": "Design", "proc.s2d": "We propose a bespoke solution with clear materials and timelines.",
    "proc.s3t": "Build", "proc.s3d": "We build your pond with craftsmanship, step by step.",
    "proc.s4t": "Maintenance", "proc.s4d": "We support you over time so the water stays clear and healthy.",
    "contact.kicker": "Contact", "contact.title": "Let's talk about your project",
    "contact.sub": "Tell us your idea: we'll call you back to arrange a free site visit.",
    "contact.addrLabel": "Address", "contact.phoneLabel": "Phone", "contact.emailLabel": "Email",
    "contact.hoursLabel": "Hours", "contact.hoursVal": "Mon–Fri 08:00–17:00 · Sat 09:00–12:00",
    "form.name": "Full name", "form.email": "Email", "form.phone": "Phone",
    "form.project": "Type of project", "form.optSelect": "Select…", "form.optOther": "Other",
    "form.message": "Message", "form.msgPh": "Briefly describe your idea…", "form.submit": "Send request",
    "form.err": "Please enter a valid name and email to send the request.",
    "form.ok": "Thank you {name}! We'll get back to you as soon as possible.",
    "form.sending": "Sending…",
    "form.fail": "Sending failed. Please try again or write to us at <a href=\"mailto:aquazone.ch@gmail.com\">aquazone.ch@gmail.com</a>.",
    "footer.tagline": "We use water to bring your dreams to life.",
    "footer.cats": "Koi ponds · Bio-ponds · Natural pools",
  },
};

const LANG_TITLES = {
  it: "Aqua Zone — Laghetti Koi, Biolaghi e Biopiscine | Tenero",
  de: "Aqua Zone — Koiteiche, Bioteiche und Schwimmteiche | Tenero",
  fr: "Aqua Zone — Bassins à koïs, bio-étangs et piscines naturelles | Tenero",
  en: "Aqua Zone — Koi ponds, bio-ponds and natural pools | Tenero",
};

// L'header e' fisso e su schermi stretti va a capo, quindi la sua altezza
// cambia con la larghezza e con la lingua (le voci tedesche sono piu' lunghe).
// Il CSS la legge da --header-h per scroll-padding-top e per il padding della
// hero: va aggiornata a ogni cambio di lingua, di dimensione e a font caricati.
function syncHeaderHeight() {
  const el = document.getElementById("siteHeader");
  if (el) document.documentElement.style.setProperty("--header-h", el.offsetHeight + "px");
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.it;
  document.documentElement.lang = lang;
  document.title = LANG_TITLES[lang] || LANG_TITLES.it;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-placeholder")];
    if (v != null) el.setAttribute("placeholder", v);
  });

  document.querySelectorAll("#langSwitch button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );
  try { localStorage.setItem("aquazone-lang", lang); } catch (e) {}
  currentLang = lang;
  syncHeaderHeight();
}

let currentLang = "it";
const saved = (() => { try { return localStorage.getItem("aquazone-lang"); } catch (e) { return null; } })();
applyLanguage(saved && I18N[saved] ? saved : "it");

document.getElementById("langSwitch").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (btn) applyLanguage(btn.dataset.lang);
});

// ====================================================================
// Header scroll state + progress bar
// ====================================================================
const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 30);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

window.addEventListener("resize", syncHeaderHeight);
syncHeaderHeight();
// Le voci di navigazione usano Inter: finche' non e' caricato l'header
// misura qualche pixel in meno.
if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeaderHeight);

// La navigazione e' sempre visibile, anche su schermi stretti: non serve
// piu' alcun pulsante per aprirla.

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ---- Animated counters ----
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

// ====================================================================
// Timeline del processo: step selezionabili, con avanzamento automatico
// finche' la sezione e' in vista e l'utente non interviene.
// ====================================================================
const processEl = document.getElementById("process");
if (processEl) {
  const steps = Array.from(processEl.querySelectorAll(".pstep"));
  const panels = Array.from(processEl.querySelectorAll(".ppanel"));
  const railFill = document.getElementById("railFill");
  const rail = processEl.querySelector(".process-rail");
  let current = 0;
  let auto = null;
  let userTouched = false;

  function stopAuto() { clearInterval(auto); auto = null; }
  function startAuto() {
    if (auto || userTouched) return;
    auto = setInterval(function () { setStep(current + 1); }, 4200);
  }

  function setStep(i, fromUser) {
    current = (i + steps.length) % steps.length;
    steps.forEach(function (b, n) {
      const active = n === current;
      b.classList.toggle("is-active", active);
      b.classList.toggle("is-done", n < current);
      b.setAttribute("aria-selected", String(active));
      b.tabIndex = active ? 0 : -1;
    });
    panels.forEach(function (p, n) { p.hidden = n !== current; });
    if (railFill) {
      railFill.style.width =
        (steps.length > 1 ? (current / (steps.length - 1)) * 100 : 0) + "%";
    }
    if (fromUser) { userTouched = true; stopAuto(); }
  }

  // Anteprima al passaggio del cursore: se data-img e' vuoto resta il riquadro
  // tratteggiato, pronto per la fotografia definitiva.
  steps.forEach(function (b) {
    const shot = b.querySelector(".pshot");
    if (shot) {
      const src = (b.dataset.img || "").trim();
      if (src) shot.querySelector("img").src = src;
      else shot.classList.add("is-empty");
    }
    b.addEventListener("click", function () {
      setStep(parseInt(b.dataset.step, 10), true);
    });
  });

  rail.addEventListener("keydown", function (e) {
    const k = e.key;
    if (["ArrowRight", "ArrowLeft", "Home", "End"].indexOf(k) === -1) return;
    e.preventDefault();
    let n = current;
    if (k === "ArrowRight") n = current + 1;
    if (k === "ArrowLeft") n = current - 1;
    if (k === "Home") n = 0;
    if (k === "End") n = steps.length - 1;
    setStep(n, true);
    steps[current].focus();
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !reduceMotion) startAuto();
        else stopAuto();
      });
    },
    { threshold: 0.4 }
  ).observe(processEl);

  setStep(0);
}

// ---- Contact form ----
// Le richieste vengono recapitate a aquazone.ch@gmail.com tramite FormSubmit.
// L'indirizzo va attivato una sola volta cliccando il link di conferma che
// FormSubmit invia alla casella al primo invio reale.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/aquazone.ch@gmail.com";

const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");
const submitBtn = form && form.querySelector("button[type=submit]");

if (form && feedback && submitBtn) form.addEventListener("submit", async (e) => {
  e.preventDefault();
  feedback.classList.remove("error");
  const dict = I18N[currentLang] || I18N.it;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !validEmail) {
    feedback.textContent = dict["form.err"];
    feedback.classList.add("error");
    return;
  }

  const project = form.project.value.trim();
  const restoreLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = dict["form.sending"];
  feedback.textContent = "";

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        name,
        email,
        phone: form.phone.value.trim(),
        project: project,
        message: form.message.value.trim(),
        _subject: "Richiesta dal sito — " + (project || "Contatto"),
        _template: "table",
        _captcha: "false",
        _honey: form.elements._honey.value,
      }),
    });
    clearTimeout(timeout);
    const result = await res.json().catch(() => null);
    if (!res.ok || !result || (result.success !== "true" && result.success !== true)) {
      throw new Error("FormSubmit rejected the request");
    }
    feedback.textContent = dict["form.ok"].replace("{name}", name);
    form.reset();
  } catch (err) {
    feedback.innerHTML = dict["form.fail"];
    feedback.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = restoreLabel;
  }
});
