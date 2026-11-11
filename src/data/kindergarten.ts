/**
 * «Алан» бөбекжай-балабақшасының барлық деректері осы файлда.
 * Мәтінді, байланыс деректерін, құжаттарды және картаны осы жерден өзгертіңіз —
 * компоненттерді өңдеудің қажеті жоқ.
 */

export type Accent = "teal" | "sun" | "coral" | "lav";

export const site = {
  name: "«Алан» бөбекжай-балабақшасы",
  shortName: "Алан",
  legalName: "ИП Кожекеева «Алан» бөбекжай-балабақшасы",
  tagline: "Бақытты балалық шақ мекені",
  description:
    "Әр баланың бақытты балалық шағы мен жан-жақты дамуына арналған жайлы орта.",
  /** Vercel-де өз доменіңізді NEXT_PUBLIC_SITE_URL арқылы көрсетіңіз. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alan-landing.vercel.app",
} as const;

export const contacts = {
  address: "Жансүгіров көшесі, 23А",
  phoneDisplay: "+7 747 777 14 20",
  phoneHref: "tel:+77477771420",
  whatsapp: "https://wa.me/77477771420",
  instagram: "https://www.instagram.com/alan_balabaqsha/",
  instagramHandle: "@alan_balabaqsha",
  hours: "07:20–18:00",
} as const;

/**
 * 2GIS картасы.
 * embedUrl — 2GIS «Поделиться → Виджет» арқылы алынған iframe сілтемесі.
 * linkUrl  — 2GIS-тегі мекенжай беті (жаңа бетте ашылады).
 * Бос болса, карта орнына ұқыпты орын-толтырғыш көрсетіледі.
 */
export const map = {
  embedUrl: "",
  linkUrl: "",
};

/**
 * Құжаттар.
 * driveUrl — Google Drive папкасының сілтемесі (міндетті емес).
 * files    — public/docs/ ішіндегі PDF файлдар, мысалы:
 *            { title: "Жарғы", href: "/docs/charter.pdf" }
 * Екеуі де бос болса: «Құжаттар жақын арада жарияланады.»
 */
export const documents: {
  driveUrl: string;
  files: { title: string; href: string }[];
} = {
  driveUrl: "",
  files: [],
};

export const nav = [
  { id: "home", label: "Басты бет" },
  { id: "about", label: "Біз туралы және топтар" },
  { id: "activities", label: "Үйірмелер" },
  { id: "nutrition", label: "Тамақтану" },
  { id: "gallery", label: "Галерея" },
  { id: "documents", label: "Құжаттар" },
  { id: "contacts", label: "Байланыс" },
] as const;

export type SectionId = (typeof nav)[number]["id"];

export const hero = {
  eyebrow: "Бақытты балалық шақ мекені",
  titleLead: "«Алан»",
  titleRest: "бөбекжай-балабақшасына қош келдіңіз!",
  text: "Әр баланың бақытты балалық шағы мен жан-жақты дамуына арналған жайлы орта.",
  primaryCta: "Бізбен байланысу",
  secondaryCta: "Толығырақ",
};

export const highlights: { value: string; label: string; accent: Accent; icon: "groups" | "age" | "food" | "lang" }[] = [
  { value: "6 топ", label: "Топтар саны", accent: "teal", icon: "groups" },
  { value: "1,6–6 жас", label: "Балалар жасы", accent: "sun", icon: "age" },
  { value: "4 мезгіл", label: "Тамақтану", accent: "coral", icon: "food" },
  { value: "Қазақ тілі", label: "Оқыту тілі", accent: "lav", icon: "lang" },
];

export const about = {
  title: "Біз туралы және топтар",
  subtitle: "Балаңыз үшін мейірім мен қуанышқа толы орта",
  text: "«Алан» бөбекжай-балабақшасы — 1,6 жастан 6 жасқа дейінгі балаларға арналған мектепке дейінгі тәрбие мен білім беру ортасы. Балабақшамызда балалардың танымдық, шығармашылық және әлеуметтік қабілеттерін дамытуға көңіл бөлінеді.",
  features: [
    { text: "Қазақ тіліндегі тәрбие мен білім беру", accent: "teal" as Accent, icon: "lang" as const },
    { text: "Әртүрлі жастағы балаларға арналған 6 топ", accent: "coral" as Accent, icon: "groups" as const },
    { text: "Жан-жақты дамытуға бағытталған қосымша сабақтар", accent: "lav" as Accent, icon: "spark" as const },
  ],
  groupsTitle: "Біздің топтарымыз",
  groupsText: "Әр балаға дамуға, ойнауға және жаңа білім алуға мүмкіндік беретін орта.",
  groupsNote: "Топтардың атаулары мен жас ерекшеліктері жақын арада нақтыланады.",
};

/** Топ атаулары уақытша — нақты атаулар берілгенде осы жерде ауыстырыңыз. */
export const groups: { name: string; accent: Accent; art: "sun" | "cloud" | "star" | "flower" | "rainbow" | "bird" }[] = [
  { name: "1-топ", accent: "sun", art: "sun" },
  { name: "2-топ", accent: "teal", art: "cloud" },
  { name: "3-топ", accent: "coral", art: "flower" },
  { name: "4-топ", accent: "lav", art: "star" },
  { name: "5-топ", accent: "teal", art: "rainbow" },
  { name: "6-топ", accent: "sun", art: "bird" },
];

export type ActivityIcon = "english" | "speech" | "taekwondo" | "dance" | "music" | "salt" | "bus";

export const activities: { title: string; text: string; accent: Accent; icon: ActivityIcon }[] = [
  { title: "Ағылшын тілі", text: "Ағылшын тілін ойын арқылы үйренуге алғашқы қадам.", accent: "teal", icon: "english" },
  { title: "Логопед", text: "Балалардың сөйлеу дағдыларын дамытуға бағытталған сабақтар.", accent: "coral", icon: "speech" },
  { title: "Тхэквондо", text: "Қимыл-қозғалысты, тәртіпті және дене үйлесімділігін дамыту.", accent: "sun", icon: "taekwondo" },
  { title: "Хореография", text: "Би арқылы ырғақ сезімін және шығармашылық қабілетті дамыту.", accent: "lav", icon: "dance" },
  { title: "Музыка", text: "Ән мен әуен әлеміне қызығушылықты арттыру.", accent: "coral", icon: "music" },
  { title: "Тұзды бөлме", text: "Балаларға арналған қосымша жайлы кеңістік.", accent: "teal", icon: "salt" },
  {
    title: "Балаларды тасымалдау",
    text: "Балаларды тасымалдау қызметі туралы ақпарат алу үшін бізбен байланысыңыз.",
    accent: "sun",
    icon: "bus",
  },
];

export const activitiesSection = {
  title: "Қосымша сабақтар мен қызметтер",
  subtitle: "Балалардың қабілетін дамытуға арналған мүмкіндіктер",
};

export type MealIcon = "breakfast" | "lunch" | "snack" | "dinner";

export const nutrition = {
  title: "Дұрыс тамақтану — денсаулық кепілі",
  text: "Балабақшамызда балаларға күніне 4 мезгіл тамақтану қарастырылған.",
  meals: [
    { title: "Таңғы ас", accent: "sun" as Accent, icon: "breakfast" as MealIcon },
    { title: "Түскі ас", accent: "coral" as Accent, icon: "lunch" as MealIcon },
    { title: "Бесін ас", accent: "teal" as Accent, icon: "snack" as MealIcon },
    { title: "Кешкі ас", accent: "lav" as Accent, icon: "dinner" as MealIcon },
  ],
};

export const gallerySection = {
  title: "Біздің балабақша өмірі",
  subtitle: "Күнделікті қуанышты сәттер",
  more: "Тағы көрсету",
  less: "Жасыру",
  emptyTitle: "Фотосуреттер жақын арада қосылады",
  emptyText: "Балабақшамыздың өмірінен алынған суреттер осы жерде жарияланады.",
  initialCount: 6,
};

export const documentsSection = {
  title: "Құжаттар",
  subtitle: "Балабақшаның ресми құжаттары",
  empty: "Құжаттар жақын арада жарияланады.",
  driveLabel: "Google Drive-та ашу",
};

export const contactsSection = {
  title: "Бізбен байланысыңыз",
  subtitle: "Сұрақтарыңыз болса, жазыңыз немесе қоңырау шалыңыз",
  whatsapp: "WhatsApp арқылы жазу",
  instagram: "Instagram парақшасы",
  call: "Қоңырау шалу",
  mapPlaceholder: "2GIS картасы жақын арада қосылады",
  mapOpen: "2GIS-те ашу",
};

/** Палитра: фон, қою (мәтін/батырма үшін) және жұмсақ реңк. */
export const accentClasses: Record<Accent, { bg: string; soft: string; text: string; ring: string; fill: string }> = {
  teal: { bg: "bg-teal", soft: "bg-teal-soft", text: "text-teal-deep", ring: "ring-teal/30", fill: "#5CCBBC" },
  sun: { bg: "bg-sun", soft: "bg-sun-soft", text: "text-sun-deep", ring: "ring-sun/40", fill: "#FFC857" },
  coral: { bg: "bg-coral", soft: "bg-coral-soft", text: "text-coral-deep", ring: "ring-coral/30", fill: "#FF9478" },
  lav: { bg: "bg-lav", soft: "bg-lav-soft", text: "text-lav-deep", ring: "ring-lav/30", fill: "#A9A2EF" },
};
