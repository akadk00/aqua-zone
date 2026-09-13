// ====================================================================
// Pagina di dettaglio servizio — servizio.html?s=<chiave>
// ====================================================================

// ---- Testi UI comuni ----
const UI = {
  it: {
    back: "← Tutti i servizi", kicker: "Servizi", includes: "Cosa comprende",
    other: "Altri servizi", more: "Scopri di più →",
    ctaTitle: "Interessati a questo servizio?",
    ctaText: "Raccontateci la vostra idea: veniamo da voi per un sopralluogo gratuito e senza impegno.",
    ctaBtn: "Richiedi un sopralluogo", ctaBtn2: "Guarda gli altri servizi",
    nav: { services: "Servizi", about: "Chi siamo", projects: "Realizzazioni", process: "Come lavoriamo", contact: "Contattaci" },
    footerTagline: "Usiamo l'acqua per dare vita ai vostri sogni.",
    footerCats: "Laghetti Koi · Biolaghi · Biopiscine",
  },
  de: {
    back: "← Alle Leistungen", kicker: "Leistungen", includes: "Was enthalten ist",
    other: "Weitere Leistungen", more: "Mehr erfahren →",
    ctaTitle: "Interessiert an dieser Leistung?",
    ctaText: "Erzählen Sie uns Ihre Idee: Wir kommen zu Ihnen für eine kostenlose, unverbindliche Besichtigung.",
    ctaBtn: "Besichtigung anfragen", ctaBtn2: "Weitere Leistungen ansehen",
    nav: { services: "Leistungen", about: "Über uns", projects: "Referenzen", process: "Ablauf", contact: "Kontakt" },
    footerTagline: "Mit Wasser erwecken wir Ihre Träume zum Leben.",
    footerCats: "Koiteiche · Bioteiche · Schwimmteiche",
  },
  fr: {
    back: "← Tous les services", kicker: "Services", includes: "Ce qui est compris",
    other: "Autres services", more: "En savoir plus →",
    ctaTitle: "Intéressé par ce service ?",
    ctaText: "Racontez-nous votre idée : nous venons chez vous pour une visite gratuite et sans engagement.",
    ctaBtn: "Demander une visite", ctaBtn2: "Voir les autres services",
    nav: { services: "Services", about: "À propos", projects: "Réalisations", process: "Notre méthode", contact: "Contact" },
    footerTagline: "Nous utilisons l'eau pour donner vie à vos rêves.",
    footerCats: "Bassins à koïs · Bio-étangs · Piscines naturelles",
  },
  en: {
    back: "← All services", kicker: "Services", includes: "What's included",
    other: "Other services", more: "Learn more →",
    ctaTitle: "Interested in this service?",
    ctaText: "Tell us your idea: we'll come to you for a free, no-obligation site visit.",
    ctaBtn: "Request a site visit", ctaBtn2: "See our other services",
    nav: { services: "Services", about: "About", projects: "Projects", process: "How we work", contact: "Contact" },
    footerTagline: "We use water to bring your dreams to life.",
    footerCats: "Koi ponds · Bio-ponds · Natural pools",
  },
};

// ---- Contenuti dei servizi ----
const SERVICES = {
  koi: {
    img: "img/hero.jpg",
    card: "img/card-koi.jpg",
    it: {
      title: "Laghetti Koi",
      lead: "Laghetti su misura per le KOI, acqua limpida, pesci sani. Un angolo di Giappone nel vostro giardino.",
      heading: "Un habitat perfetto per le vostre koi",
      p1: "Un laghetto per carpe koi non è un semplice specchio d'acqua: servono profondità corretta, volumi adeguati e una filtrazione professionale per garantire ai pesci un ambiente sano e stabile in ogni stagione. Progettiamo ogni laghetto partendo dallo spazio disponibile e dal numero di esemplari che desiderate ospitare.",
      p2: "Vi seguiamo dalla progettazione alla messa in acqua, fino all'introduzione dei primi pesci: consigli su alimentazione, quarantena dei nuovi arrivi e gestione dei valori dell'acqua. Con oltre trent'anni di esperienza sulle koi, sappiamo cosa serve perché crescano sane e longeve.",
      features: [
        "Progettazione su misura di forma, profondità e volumi",
        "Impianti di filtrazione autopulenti di ultima generazione a bassissima manutenzione",
        "Studio dei flussi per una circolazione ottimale dell'acqua",
        "Sterilizzazione UV-C e ossigenazione dell'acqua",
        "Consulenza su scelta delle koi, alimentazione e quarantena",
      ],
    },
    de: {
      title: "Koiteiche",
      lead: "Massgeschneiderte Teiche für KOI: klares Wasser, gesunde Fische. Ein Stück Japan in Ihrem Garten.",
      heading: "Ein perfekter Lebensraum für Ihre Kois",
      p1: "Ein Koiteich ist mehr als eine Wasserfläche: Er braucht die richtige Tiefe, ausreichendes Volumen und eine professionelle Filterung, damit die Fische in jeder Jahreszeit ein gesundes, stabiles Umfeld haben. Wir planen jeden Teich ausgehend vom verfügbaren Platz und der gewünschten Anzahl Tiere.",
      p2: "Wir begleiten Sie von der Planung über die Befüllung bis zum Einsetzen der ersten Fische: Beratung zu Fütterung, Quarantäne neuer Tiere und Wasserwerten. Mit über dreissig Jahren Koi-Erfahrung wissen wir, was gesunde, langlebige Tiere brauchen.",
      features: [
        "Massgeschneiderte Planung von Form, Tiefe und Volumen",
        "Selbstreinigende Filteranlagen neuester Generation mit minimalem Pflegeaufwand",
        "Strömungsplanung für eine optimale Wasserzirkulation",
        "UV-C-Sterilisation und Sauerstoffversorgung",
        "Beratung zu Koi-Auswahl, Fütterung und Quarantäne",
      ],
    },
    fr: {
      title: "Bassins à koïs",
      lead: "Des bassins sur mesure pour les KOI : eau limpide, poissons sains. Un coin de Japon dans votre jardin.",
      heading: "Un habitat parfait pour vos koïs",
      p1: "Un bassin à koïs n'est pas un simple plan d'eau : il faut une profondeur correcte, des volumes adaptés et une filtration professionnelle pour offrir aux poissons un environnement sain et stable en toute saison. Nous concevons chaque bassin à partir de l'espace disponible et du nombre de poissons souhaité.",
      p2: "Nous vous accompagnons de la conception à la mise en eau, jusqu'à l'introduction des premiers poissons : conseils sur l'alimentation, la quarantaine des nouveaux arrivants et la gestion des paramètres de l'eau. Avec plus de trente ans d'expérience, nous savons ce qu'il faut pour des koïs saines et durables.",
      features: [
        "Conception sur mesure de la forme, profondeur et volumes",
        "Systèmes de filtration autonettoyants de dernière génération, à très faible entretien",
        "Étude des flux pour une circulation optimale de l'eau",
        "Stérilisation UV-C et oxygénation de l'eau",
        "Conseils sur le choix des koïs, l'alimentation et la quarantaine",
      ],
    },
    en: {
      title: "Koi ponds",
      lead: "Bespoke ponds for KOI: clear water, healthy fish. A corner of Japan in your garden.",
      heading: "A perfect habitat for your koi",
      p1: "A koi pond is more than a body of water: it needs the right depth, adequate volume and professional filtration to give the fish a healthy, stable environment in every season. We design each pond around the available space and the number of fish you wish to keep.",
      p2: "We follow you from design to filling, right up to introducing the first fish: advice on feeding, quarantining new arrivals and managing water parameters. With over thirty years of koi experience, we know what it takes for them to grow healthy and long-lived.",
      features: [
        "Bespoke design of shape, depth and volumes",
        "Self-cleaning, latest-generation filtration systems with very low maintenance",
        "Flow design for optimal water circulation",
        "UV-C sterilisation and water oxygenation",
        "Advice on koi selection, feeding and quarantine",
      ],
    },
  },

  bio: {
    img: "img/card-bio.jpg",
    card: "img/card-bio.jpg",
    it: {
      title: "Biolaghi",
      lead: "Specchi d'acqua naturali che vivono in equilibrio, senza chimica: un piccolo ecosistema nel vostro giardino.",
      heading: "Un ecosistema che si regola da solo",
      p1: "Il biolago è uno specchio d'acqua naturale in cui piante acquatiche e microrganismi mantengono l'acqua pulita senza prodotti chimici. Una zona di rigenerazione dedicata, popolata di piante ossigenanti e depurative, filtra l'acqua in modo del tutto naturale.",
      p2: "Progettiamo il biolago in armonia con il giardino: sponde morbide, pietre, piante autoctone e zone di profondità diverse che attirano libellule, rane e uccelli. Una volta raggiunto l'equilibrio biologico, la manutenzione necessaria è minima.",
      features: [
        "Zona di rigenerazione con piante acquatiche depurative",
        "Equilibrio biologico senza prodotti chimici",
        "Integrazione paesaggistica con pietre e sponde naturali",
        "Habitat per fauna utile: libellule, anfibi, uccelli",
        "Bassa manutenzione una volta a regime",
      ],
    },
    de: {
      title: "Bioteiche",
      lead: "Natürliche Wasserflächen im Gleichgewicht, ganz ohne Chemie: ein kleines Ökosystem in Ihrem Garten.",
      heading: "Ein Ökosystem, das sich selbst reguliert",
      p1: "Der Bioteich ist eine natürliche Wasserfläche, in der Wasserpflanzen und Mikroorganismen das Wasser ohne Chemie sauber halten. Eine eigene Regenerationszone mit sauerstoffspendenden und reinigenden Pflanzen filtert das Wasser auf ganz natürliche Weise.",
      p2: "Wir planen den Bioteich im Einklang mit dem Garten: sanfte Ufer, Steine, einheimische Pflanzen und unterschiedliche Tiefenzonen, die Libellen, Frösche und Vögel anziehen. Ist das biologische Gleichgewicht erreicht, ist der Pflegeaufwand minimal.",
      features: [
        "Regenerationszone mit reinigenden Wasserpflanzen",
        "Biologisches Gleichgewicht ohne Chemie",
        "Landschaftliche Einbindung mit Steinen und natürlichen Ufern",
        "Lebensraum für nützliche Tiere: Libellen, Amphibien, Vögel",
        "Geringer Unterhalt im eingespielten Zustand",
      ],
    },
    fr: {
      title: "Bio-étangs",
      lead: "Des plans d'eau naturels qui vivent en équilibre, sans chimie : un petit écosystème dans votre jardin.",
      heading: "Un écosystème qui se régule tout seul",
      p1: "Le bio-étang est un plan d'eau naturel où plantes aquatiques et micro-organismes gardent l'eau propre sans produits chimiques. Une zone de régénération dédiée, peuplée de plantes oxygénantes et épuratives, filtre l'eau de façon entièrement naturelle.",
      p2: "Nous concevons le bio-étang en harmonie avec le jardin : berges douces, pierres, plantes indigènes et zones de profondeurs variées qui attirent libellules, grenouilles et oiseaux. Une fois l'équilibre biologique atteint, l'entretien nécessaire est minime.",
      features: [
        "Zone de régénération avec plantes aquatiques épuratives",
        "Équilibre biologique sans produits chimiques",
        "Intégration paysagère avec pierres et berges naturelles",
        "Habitat pour la faune utile : libellules, amphibiens, oiseaux",
        "Entretien réduit une fois l'équilibre atteint",
      ],
    },
    en: {
      title: "Bio-ponds",
      lead: "Natural water features that live in balance, chemical-free: a small ecosystem in your garden.",
      heading: "An ecosystem that regulates itself",
      p1: "A bio-pond is a natural body of water where aquatic plants and micro-organisms keep the water clean without chemicals. A dedicated regeneration zone, planted with oxygenating and purifying species, filters the water entirely naturally.",
      p2: "We design the bio-pond in harmony with the garden: soft banks, stones, native plants and varying depth zones that attract dragonflies, frogs and birds. Once the biological balance is established, very little maintenance is needed.",
      features: [
        "Regeneration zone with purifying aquatic plants",
        "Biological balance with no chemicals",
        "Landscape integration with stones and natural banks",
        "Habitat for beneficial wildlife: dragonflies, amphibians, birds",
        "Low maintenance once established",
      ],
    },
  },

  pool: {
    img: "img/card-pool.jpg",
    card: "img/card-pool.jpg",
    it: {
      title: "Biopiscine",
      lead: "Il piacere di nuotare in acqua viva, pulita e senza cloro, in una piscina che sembra un laghetto naturale.",
      heading: "Nuotare nella natura, ogni giorno",
      p1: "La biopiscina unisce il piacere del nuoto alla bellezza di un laghetto naturale: l'acqua viene depurata dalle piante e dai substrati filtranti della zona di rigenerazione, senza cloro né altri prodotti chimici. Niente occhi arrossati, niente odori: solo acqua viva e morbida sulla pelle.",
      p2: "Lo stile lo scegliete voi: dal look completamente naturale, con sponde verdi e pietre, al design più architettonico con linee pulite e bordi netti.",
      features: [
        "Acqua depurata naturalmente dalla zona di rigenerazione",
        "Nessun prodotto chimico",
        "Design su misura, naturale o architettonico",
        "Possibilità di riscaldamento e illuminazione",
        "Servizio di manutenzione stagionale programmata",
      ],
    },
    de: {
      title: "Schwimmteiche",
      lead: "Das Vergnügen, in lebendigem, sauberem Wasser ohne Chlor zu schwimmen – in einem Pool wie ein Naturteich.",
      heading: "Jeden Tag in der Natur schwimmen",
      p1: "Der Schwimmteich verbindet Badespass mit der Schönheit eines Naturteichs: Das Wasser wird von den Pflanzen und Filtersubstraten der Regenerationszone gereinigt – ohne Chlor und andere Chemikalien. Keine geröteten Augen, keine Gerüche: nur lebendiges, weiches Wasser auf der Haut.",
      p2: "Den Stil bestimmen Sie: vom komplett natürlichen Look mit grünen Ufern und Steinen bis zum architektonischen Design mit klaren Linien und Kanten.",
      features: [
        "Natürlich gereinigtes Wasser dank Regenerationszone",
        "Keine Chemikalien",
        "Massgeschneidertes Design, natürlich oder architektonisch",
        "Möglichkeit von Heizung und Beleuchtung",
        "Geplanter saisonaler Unterhaltsservice",
      ],
    },
    fr: {
      title: "Piscines naturelles",
      lead: "Le plaisir de nager dans une eau vivante, propre et sans chlore, dans une piscine qui ressemble à un étang naturel.",
      heading: "Nager dans la nature, chaque jour",
      p1: "La piscine naturelle allie le plaisir de la nage à la beauté d'un étang : l'eau est épurée par les plantes et les substrats filtrants de la zone de régénération, sans chlore ni autres produits chimiques. Pas d'yeux rougis, pas d'odeurs : seulement une eau vivante et douce sur la peau.",
      p2: "Le style, c'est vous qui le choisissez : du look entièrement naturel, avec berges vertes et pierres, au design plus architectural aux lignes épurées.",
      features: [
        "Eau épurée naturellement par la zone de régénération",
        "Aucun produit chimique",
        "Design sur mesure, naturel ou architectural",
        "Possibilité de chauffage et d'éclairage",
        "Service d'entretien saisonnier planifié",
      ],
    },
    en: {
      title: "Natural pools",
      lead: "The pleasure of swimming in living, clean, chlorine-free water, in a pool that looks like a natural pond.",
      heading: "Swim in nature, every day",
      p1: "A natural pool combines the joy of swimming with the beauty of a pond: the water is purified by the plants and filtering substrates of the regeneration zone, with no chlorine or other chemicals. No red eyes, no smells: just living, soft water on your skin.",
      p2: "You choose the style: from a completely natural look with green banks and stones, to a more architectural design with clean lines and crisp edges.",
      features: [
        "Water purified naturally by the regeneration zone",
        "No chemicals",
        "Bespoke design, natural or architectural",
        "Optional heating and lighting",
        "Scheduled seasonal maintenance service",
      ],
    },
  },

  reno: {
    img: "img/card-reno.jpg",
    card: "img/card-reno.jpg",
    it: {
      title: "Ristrutturazioni",
      lead: "Il vostro laghetto ha perso smalto? Gli diamo nuova vita adeguando struttura e impianti di ultima generazione.",
      heading: "Nuova vita ai bacini esistenti",
      p1: "Perdite d'acqua, teli invecchiati, acqua sempre torbida o una forma che non vi convince più: sono i segnali che è ora di ristrutturare. Partiamo da un'analisi completa del bacino esistente per capire cosa tenere, cosa migliorare e cosa rifare.",
      p2: "Dalla nuova impermeabilizzazione in EPDM al ridisegno di forma, profondità e sponde, fino all'aggiornamento completo degli impianti: trasformiamo un laghetto stanco in uno specchio d'acqua di cui innamorarsi di nuovo, spesso riutilizzando quanto di buono già esiste.",
      features: [
        "Analisi completa del bacino esistente",
        "Nuova impermeabilizzazione",
        "Ridisegno di forma, profondità e bordure",
        "Aggiornamento di pompe, filtri e impianti",
        "Riqualificazione paesaggistica",
      ],
    },
    de: {
      title: "Sanierungen",
      lead: "Ihr Teich hat seinen Glanz verloren? Wir geben ihm neues Leben und bringen Struktur und Technik auf den neuesten Stand.",
      heading: "Neues Leben für bestehende Becken",
      p1: "Wasserverlust, gealterte Folien, dauerhaft trübes Wasser oder eine Form, die Ihnen nicht mehr gefällt: Das sind die Zeichen, dass eine Sanierung ansteht. Wir beginnen mit einer vollständigen Analyse des bestehenden Beckens, um zu klären, was bleibt, was verbessert und was erneuert wird.",
      p2: "Von der neuen EPDM-Abdichtung über die Neugestaltung von Form, Tiefe und Ufern bis zur kompletten Modernisierung der Technik: Wir verwandeln einen müden Teich in eine Wasserfläche, in die man sich neu verliebt – oft unter Wiederverwendung des Guten, das schon da ist.",
      features: [
        "Vollständige Analyse des bestehenden Beckens",
        "Neue Abdichtung",
        "Neugestaltung von Form, Tiefe und Einfassungen",
        "Modernisierung von Pumpen, Filtern und Technik",
        "Landschaftliche Aufwertung",
      ],
    },
    fr: {
      title: "Rénovations",
      lead: "Votre bassin a perdu de son éclat ? Nous lui redonnons vie en adaptant la structure et les installations de dernière génération.",
      heading: "Une nouvelle vie pour les bassins existants",
      p1: "Pertes d'eau, bâches vieillies, eau toujours trouble ou une forme qui ne vous plaît plus : ce sont les signes qu'il est temps de rénover. Nous commençons par une analyse complète du bassin existant pour décider ce qu'il faut garder, améliorer ou refaire.",
      p2: "De la nouvelle étanchéité en EPDM au redessin de la forme, de la profondeur et des berges, jusqu'à la mise à niveau complète des installations : nous transformons un bassin fatigué en un plan d'eau dont on retombe amoureux, souvent en réutilisant ce qui est encore bon.",
      features: [
        "Analyse complète du bassin existant",
        "Nouvelle étanchéité",
        "Redessin de la forme, de la profondeur et des bordures",
        "Mise à niveau des pompes, filtres et installations",
        "Requalification paysagère",
      ],
    },
    en: {
      title: "Renovations",
      lead: "Has your pond lost its sparkle? We bring it back to life, upgrading the structure and systems to the latest generation.",
      heading: "New life for existing basins",
      p1: "Water loss, ageing liners, permanently cloudy water or a shape you no longer love: these are the signs it's time to renovate. We start with a full analysis of the existing basin to decide what to keep, what to improve and what to rebuild.",
      p2: "From new EPDM waterproofing to redesigning shape, depth and banks, through to a complete upgrade of the systems: we turn a tired pond into a body of water to fall in love with again, often reusing what is still good.",
      features: [
        "Full analysis of the existing basin",
        "New waterproofing",
        "Redesign of shape, depth and edging",
        "Upgrade of pumps, filters and systems",
        "Landscape restyling",
      ],
    },
  },

  filter: {
    img: "img/card-filter.jpg",
    card: "img/card-filter.jpg",
    it: {
      title: "Sistemi di filtraggio",
      lead: "Il cuore invisibile di ogni laghetto: impianti moderni per acqua limpida e bassa manutenzione.",
      heading: "Acqua limpida, tutto l'anno",
      p1: "Un buon sistema di filtraggio è la differenza tra un laghetto che vive e uno che sopravvive. Filtri a tamburo autopulenti, camere biologiche, sterilizzatori UV-C e pompe a basso consumo lavorano insieme per mantenere l'acqua limpida e sana, riducendo drasticamente gli interventi manuali.",
      p2: "Analizziamo il vostro impianto attuale e proponiamo l'aggiornamento più adatto: a volte basta ottimizzare quello che c'è, altre conviene ripensare la filtrazione da zero. In ogni caso, dimensioniamo l'impianto sul volume d'acqua e sul carico biologico reale del vostro laghetto.",
      features: [
        "Filtri a tamburo autopulenti e camere biologiche",
        "Sterilizzatori UV-C contro alghe e patogeni",
        "Pompe moderne a basso consumo energetico",
        "Sistemi di ossigenazione e movimento dell'acqua",
        "Dimensionamento su volume e carico biologico reali",
      ],
    },
    de: {
      title: "Filtersysteme",
      lead: "Das unsichtbare Herz jedes Teichs: moderne Anlagen für klares Wasser und geringen Pflegeaufwand.",
      heading: "Klares Wasser, das ganze Jahr",
      p1: "Ein gutes Filtersystem macht den Unterschied zwischen einem Teich, der lebt, und einem, der überlebt. Selbstreinigende Trommelfilter, Biokammern, UV-C-Sterilisatoren und sparsame Pumpen arbeiten zusammen, um das Wasser klar und gesund zu halten – und reduzieren die Handarbeit drastisch.",
      p2: "Wir analysieren Ihre bestehende Anlage und schlagen die passende Modernisierung vor: Manchmal genügt es, das Vorhandene zu optimieren, manchmal lohnt sich ein Neuaufbau der Filterung. In jedem Fall dimensionieren wir die Anlage nach Wasservolumen und tatsächlicher biologischer Last Ihres Teichs.",
      features: [
        "Selbstreinigende Trommelfilter und Biokammern",
        "UV-C-Sterilisatoren gegen Algen und Krankheitserreger",
        "Moderne, energiesparende Pumpen",
        "Sauerstoff- und Wasserbewegungssysteme",
        "Dimensionierung nach realem Volumen und Besatz",
      ],
    },
    fr: {
      title: "Systèmes de filtration",
      lead: "Le cœur invisible de chaque bassin : des installations modernes pour une eau limpide et un faible entretien.",
      heading: "Une eau limpide, toute l'année",
      p1: "Un bon système de filtration fait la différence entre un bassin qui vit et un bassin qui survit. Filtres à tambour autonettoyants, chambres biologiques, stérilisateurs UV-C et pompes basse consommation travaillent ensemble pour garder une eau claire et saine, en réduisant fortement les interventions manuelles.",
      p2: "Nous analysons votre installation actuelle et proposons la mise à niveau la plus adaptée : parfois il suffit d'optimiser l'existant, parfois il vaut mieux repenser la filtration de zéro. Dans tous les cas, nous dimensionnons l'installation selon le volume d'eau et la charge biologique réelle de votre bassin.",
      features: [
        "Filtres à tambour autonettoyants et chambres biologiques",
        "Stérilisateurs UV-C contre algues et pathogènes",
        "Pompes modernes à basse consommation",
        "Systèmes d'oxygénation et de mouvement de l'eau",
        "Dimensionnement selon le volume et la charge réels",
      ],
    },
    en: {
      title: "Filtration systems",
      lead: "The invisible heart of every pond: modern systems for clear water and low maintenance.",
      heading: "Clear water, all year round",
      p1: "A good filtration system is the difference between a pond that thrives and one that merely survives. Self-cleaning drum filters, biological chambers, UV-C sterilisers and energy-efficient pumps work together to keep the water clear and healthy, drastically reducing manual work.",
      p2: "We analyse your current installation and propose the most suitable upgrade: sometimes optimising what's there is enough, sometimes it pays to rethink the filtration from scratch. Either way, we size the system on your pond's real water volume and biological load.",
      features: [
        "Self-cleaning drum filters and biological chambers",
        "UV-C sterilisers against algae and pathogens",
        "Modern, energy-efficient pumps",
        "Oxygenation and water-movement systems",
        "Sizing based on real volume and stocking levels",
      ],
    },
  },

  maint: {
    img: "img/card-maint.jpg",
    card: "img/card-maint.jpg",
    it: {
      title: "Manutenzione",
      lead: "Il vostro laghetto sempre al meglio, in ogni stagione: ci pensiamo noi, con interventi programmati e su misura.",
      heading: "Ci prendiamo cura del vostro laghetto, tutto l'anno",
      p1: "Ogni laghetto ha bisogno di attenzioni che cambiano con le stagioni: l'apertura in primavera, il controllo di alghe e valori dell'acqua in estate, la protezione dalle foglie in autunno e la corretta messa a riposo in inverno. Con i nostri piani di manutenzione ve ne occupate... non occupandovene.",
      p2: "Oltre agli interventi stagionali programmati, siamo a disposizione per pulizie straordinarie, controlli sulla salute dei pesci e interventi rapidi quando qualcosa non va: una pompa che si ferma, l'acqua che cambia colore, una perdita sospetta. Un problema preso in tempo resta un piccolo problema.",
      features: [
        "Apertura primaverile e messa a riposo invernale",
        "Pulizia di filtri, pompe e sterilizzatori UV",
        "Controllo periodico dei valori dell'acqua",
        "Cura di piante acquatiche e salute dei pesci",
        "Interventi rapidi in caso di guasti o anomalie",
        "Contratti di manutenzione su misura",
      ],
    },
    de: {
      title: "Unterhalt",
      lead: "Ihr Teich in jeder Jahreszeit in Bestform: Wir kümmern uns darum – mit geplanten, massgeschneiderten Einsätzen.",
      heading: "Wir kümmern uns um Ihren Teich, das ganze Jahr",
      p1: "Jeder Teich braucht Pflege, die sich mit den Jahreszeiten ändert: die Öffnung im Frühling, die Kontrolle von Algen und Wasserwerten im Sommer, der Schutz vor Laub im Herbst und die richtige Winterruhe. Mit unseren Unterhaltsplänen kümmern Sie sich darum … indem Sie sich nicht darum kümmern müssen.",
      p2: "Neben den geplanten saisonalen Einsätzen stehen wir für Sonderreinigungen, Gesundheitschecks der Fische und schnelle Einsätze bereit, wenn etwas nicht stimmt: eine Pumpe, die stehen bleibt, Wasser, das die Farbe ändert, ein verdächtiger Wasserverlust. Ein früh erkanntes Problem bleibt ein kleines Problem.",
      features: [
        "Frühlingsöffnung und Einwinterung",
        "Reinigung von Filtern, Pumpen und UV-Sterilisatoren",
        "Regelmässige Kontrolle der Wasserwerte",
        "Pflege der Wasserpflanzen und Fischgesundheit",
        "Schnelle Einsätze bei Störungen oder Auffälligkeiten",
        "Massgeschneiderte Unterhaltsverträge",
      ],
    },
    fr: {
      title: "Entretien",
      lead: "Votre bassin toujours au mieux, en toute saison : nous nous en occupons, avec des interventions planifiées et sur mesure.",
      heading: "Nous prenons soin de votre bassin, toute l'année",
      p1: "Chaque bassin demande des attentions qui changent avec les saisons : l'ouverture au printemps, le contrôle des algues et des paramètres de l'eau en été, la protection contre les feuilles en automne et la bonne mise en repos en hiver. Avec nos plans d'entretien, vous vous en occupez… sans vous en occuper.",
      p2: "Au-delà des interventions saisonnières planifiées, nous sommes disponibles pour des nettoyages exceptionnels, des contrôles de santé des poissons et des interventions rapides quand quelque chose ne va pas : une pompe qui s'arrête, une eau qui change de couleur, une fuite suspecte. Un problème pris à temps reste un petit problème.",
      features: [
        "Ouverture printanière et mise en repos hivernale",
        "Nettoyage des filtres, pompes et stérilisateurs UV",
        "Contrôle périodique des paramètres de l'eau",
        "Soin des plantes aquatiques et de la santé des poissons",
        "Interventions rapides en cas de panne ou d'anomalie",
        "Contrats d'entretien sur mesure",
      ],
    },
    en: {
      title: "Maintenance",
      lead: "Your pond at its best in every season: we take care of it, with scheduled, tailored visits.",
      heading: "We look after your pond, all year round",
      p1: "Every pond needs care that changes with the seasons: spring opening, keeping algae and water values in check in summer, protection from falling leaves in autumn and proper winterising. With our maintenance plans, you take care of it… by not having to.",
      p2: "Beyond scheduled seasonal visits, we're available for deep cleans, fish health checks and quick call-outs when something's wrong: a pump that stops, water changing colour, a suspected leak. A problem caught early stays a small problem.",
      features: [
        "Spring opening and winter shutdown",
        "Cleaning of filters, pumps and UV sterilisers",
        "Regular checks of water parameters",
        "Care of aquatic plants and fish health",
        "Rapid call-outs for faults or anomalies",
        "Bespoke maintenance contracts",
      ],
    },
  },
};

const SERVICE_ORDER = ["koi", "bio", "pool", "reno", "filter", "maint"];

// ---- Stato ----
const params = new URLSearchParams(location.search);
// SERVICES[chiave] risulta vero anche per "constructor", "__proto__",
// "toString", "valueOf" e "hasOwnProperty": arrivano dal prototype, non sono
// servizi, superavano il controllo e mandavano render() in errore lasciando la
// pagina vuota senza nemmeno il rimando alla home. SERVICE_ORDER contiene solo
// le sei chiavi reali.
const requestedKey = params.get("s");
const serviceKey = SERVICE_ORDER.indexOf(requestedKey) !== -1 ? requestedKey : null;
if (!serviceKey) location.replace("index.html#servizi");

let currentLang = (() => {
  try {
    const saved = localStorage.getItem("aquazone-lang");
    return saved && UI[saved] ? saved : "it";
  } catch (e) { return "it"; }
})();

// ---- Render ----
// Come nella home: il CSS legge --header-h per agganciare il riquadro laterale
// sotto all'header e per lo scorrimento delle ancore.
function syncHeaderHeight() {
  const el = document.getElementById("siteHeader");
  if (el) document.documentElement.style.setProperty("--header-h", el.offsetHeight + "px");
}

function render(lang) {
  currentLang = lang;
  const ui = UI[lang];
  const svc = SERVICES[serviceKey];
  const t = svc[lang];

  document.documentElement.lang = lang;
  document.title = `Aqua Zone — ${t.title}`;

  // Nav + footer
  document.getElementById("navServices").textContent = ui.nav.services;
  document.getElementById("navAbout").textContent = ui.nav.about;
  document.getElementById("navProjects").textContent = ui.nav.projects;
  document.getElementById("navProcess").textContent = ui.nav.process;
  document.getElementById("navContact").textContent = ui.nav.contact;
  document.getElementById("fNavServices").textContent = ui.nav.services;
  document.getElementById("fNavAbout").textContent = ui.nav.about;
  document.getElementById("fNavProjects").textContent = ui.nav.projects;
  document.getElementById("fNavContact").textContent = ui.nav.contact;
  document.getElementById("footerTagline").textContent = ui.footerTagline;
  document.getElementById("footerCats").textContent = ui.footerCats;

  // Hero
  const heroImg = document.getElementById("heroImg");
  heroImg.src = svc.img;
  heroImg.alt = t.title;
  document.getElementById("backLink").textContent = ui.back;
  document.getElementById("heroKicker").textContent = ui.kicker;
  document.getElementById("heroTitle").textContent = t.title;
  document.getElementById("heroLead").textContent = t.lead;

  // Dettaglio
  document.getElementById("detailHeading").textContent = t.heading;
  document.getElementById("detailP1").textContent = t.p1;
  document.getElementById("detailP2").textContent = t.p2;
  document.getElementById("includesTitle").textContent = ui.includes;
  const list = document.getElementById("includesList");
  list.innerHTML = "";
  t.features.forEach((f) => {
    const li = document.createElement("li");
    li.textContent = f;
    list.appendChild(li);
  });

  // Altri servizi
  document.getElementById("otherTitle").textContent = ui.other;
  const cards = document.getElementById("otherCards");
  cards.innerHTML = "";
  SERVICE_ORDER.filter((k) => k !== serviceKey).forEach((k) => {
    const o = SERVICES[k][lang];
    const a = document.createElement("a");
    a.className = "card card-link";
    a.href = `servizio.html?s=${k}`;
    a.innerHTML = `
      <div class="card-photo"><img src="${SERVICES[k].card}" alt="" loading="lazy" /></div>
      <div class="card-body">
        <h3></h3>
        <p></p>
        <span class="card-more"></span>
      </div>`;
    a.querySelector("h3").textContent = o.title;
    a.querySelector("p").textContent = o.lead;
    a.querySelector(".card-more").textContent = ui.more;
    cards.appendChild(a);
  });

  // CTA
  document.getElementById("ctaTitle").textContent = ui.ctaTitle;
  document.getElementById("ctaText").textContent = ui.ctaText;
  document.getElementById("ctaBtn").textContent = ui.ctaBtn;
  document.getElementById("ctaBtn2").textContent = ui.ctaBtn2;

  document.querySelectorAll("#langSwitch button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );
  try { localStorage.setItem("aquazone-lang", lang); } catch (e) {}
  syncHeaderHeight();
}

if (serviceKey) render(currentLang);

document.getElementById("langSwitch").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (btn) render(btn.dataset.lang);
});

// ---- Anno footer ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Header progress bar ----
const progress = document.getElementById("scrollProgress");
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

window.addEventListener("resize", syncHeaderHeight);
syncHeaderHeight();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeaderHeight);

// La navigazione e' sempre visibile: nessun pulsante di apertura.

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
