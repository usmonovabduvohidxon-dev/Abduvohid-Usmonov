import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  Copy,
  Check,
  X,
  Code2,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Globe,
  Layers,
  ChevronRight,
  User,
  ShoppingBag,
  Bot,
  GraduationCap,
  Gamepad2,
  Ghost,
  Cpu,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { DeveloperLogo } from './components/DeveloperLogo';

export interface ProjectItem {
  id: string;
  name: string;
  badge: string;
  category: 'ai' | 'ecommerce' | 'edtech' | 'games' | 'tools';
  categoryLabel: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
}

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const profile = {
    name: 'Abduvohidxon Usmonov',
    shortName: 'Abduvohidxon',
    domain: 'USMONOV.DEV',
    role: 'Software Developer',
    telegramHandle: 'JS_usmnv',
    telegramUrl: 'https://t.me/JS_usmnv',
    phoneNumber: '+998 90 210 56 68',
    rawPhone: '+998902105668',
    email: 'usmonovabduvohidxon@gmail.com',
    quoteUz: "Zamonaviy veb-saytlar, AI vositalari, o'yinlar va raqamli mahsulotlar yarataman.",
    quoteEn: "I build modern web apps, AI tools, games and digital products."
  };

  const projects: ProjectItem[] = [
    {
      id: 'savdox',
      name: 'SavdoX',
      badge: 'Marketplace',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce / Savdo',
      tagline: 'Har kuni kerakli narsa — keng qamrovli zamonaviy onlayn bozor',
      description:
        'Katta assortimentdagi mahsulotlar katalogi, qulay toifalar daraxti, aqlli qidiruv mexanizmi, 1 kunda yetkazib berish filtri, aksiyalar va savatcha boshqaruviga ega to\'liq e-tijorat platformasi.',
      features: [
        'Katalog va toifalar bo\'yicha saralash',
        '1 kunda yetkazib berish va chegirmalar filtrlari',
        'Sevimlilar ro\'yxati va savatcha kalkulyatsiyasi',
        'Moslashuvchan adaptiv mobil va desktop interfeys'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'State Architecture', 'E-Commerce UX'],
      image: '/src/assets/images/project_savdox_1790447889139.jpg'
    },
    {
      id: 'usmonov-ai',
      name: 'USMONOV AI',
      badge: 'AI System',
      category: 'ai',
      categoryLabel: 'Sun\'iy Intellekt',
      tagline: 'Intelligent System — shaxsiy aqlli AI yordamchi platformasi',
      description:
        'Kontekstual tushunishga ega shaxsiy aqlli assistent. Foydalanuvchi bilan matnli va intellektual muloqot, dasturlash kodlari tahlili, matematik masalalar yechimi, PDF eksporti va real-time internet qidiruvi.',
      features: [
        'Aqlli suhbat va kontekstli xotira modeli',
        'Tezkor savol-javob (Tushuntirib ber, Matematik yechim)',
        'Internetdan qidiruv va ma\'lumot tekshiruvi',
        'PDF hujjat eksporti va suhbatlar tarixi'
      ],
      techStack: ['Generative AI', 'TypeScript', 'Modern Dark UI', 'Web APIs', 'Prompt Engine'],
      image: '/src/assets/images/project_usmonov_ai_1790445017427.jpg'
    },
    {
      id: 'adaptiq',
      name: 'AdaptIQ',
      badge: 'Curriculum Engine',
      category: 'edtech',
      categoryLabel: 'Ta\'lim & EdTech',
      tagline: 'School Grade-Bound Adaptive Assessment — adaptiv baholash tizimi',
      description:
        'Maktab darsliklari va sinflar bo\'yicha o\'quvchilar bilimini sinovdan o\'tkazish uchun mo\'ljallangan adaptiv intellektual platforma. Matematika, Fizika, Kimyo, Informatika va boshqa fanlar bo\'yicha bosqichma-bosqich baholash.',
      features: [
        'Sinf va fanlar modullari (Matematika, Fizika, Kimyo, Informatika)',
        'O\'quvchi darajasiga moslashuvchi (adaptive) test algoritmi',
        'Mavzularni chuqurlashtirilgan tarzda sozlash imkoniyati',
        'Toza va chalg\'itmaydigan o\'quv interfeysi'
      ],
      techStack: ['EdTech Framework', 'React', 'TypeScript', 'Adaptive Engine', 'Analytics'],
      image: '/src/assets/images/project_adaptiq_1790447902025.jpg'
    },
    {
      id: 'quantum-escape',
      name: 'Kvant Xonasi',
      badge: 'Sci-Fi Quest',
      category: 'games',
      categoryLabel: 'O\'yin & Boshqotirma',
      tagline: 'Kvant siri va kiber qochish — interaktiv web boshqotirma o\'yini',
      description:
        'Kiber-pank va kvant fizikasi muhitida yaratilgan interaktiv quest o\'yini. O\'yinchi xrono-taymer tugamasdan turib kvant qurilmasini faollashtirishi, kiber arxivlarni o\'rganishi va himoyalangan chiqish eshigini ochishi lozim.',
      features: [
        'Xrono devor soati (vaqt chegarasi va dinamik bosim)',
        'Interaktiv inventar tizimi va artefaktlar',
        'Bosh kompyuter (Terminal) buyruqlar paneli',
        'Neyron san\'at surati va maxfiy kodlar'
      ],
      techStack: ['Interactive Web Game', 'TypeScript', 'Audio Atmosphere', 'Game Logic', 'Canvas'],
      image: '/src/assets/images/project_quantum_escape_1790447912761.jpg'
    },
    {
      id: 'last-house',
      name: 'THE LAST HOUSE',
      badge: 'Survival Horror',
      category: 'games',
      categoryLabel: 'O\'yin & Sirli Qasr',
      tagline: 'Original Survival Horror & Architectural Mystery veb-o\'yini',
      description:
        'Blackwood qasridagi sirli va qo\'rqinchli hodisalar asosiga qurilgan survival-horror janridagi veb-o\'yin. Maxfiy xonalarni ochish, elektr quvvatini tiklash va qasrdan qochish yo\'lini topish talab qilinadi.',
      features: [
        'Ko\'p tilli lokalizatsiya (EN / UZ / RU)',
        '4 xil qiyinlik darajasi (Easy, Normal, Hard, Nightmare)',
        'Kinematik ovoz effektlari va atmosferali dizayn',
        'O\'yin boshqaruvi va batafsil yo\'riqnoma'
      ],
      techStack: ['Game Engine', 'Web Audio API', 'i18n Multi-language', 'State Machine', 'Horror UI'],
      image: '/src/assets/images/project_last_house_1790447926408.jpg'
    },
    {
      id: 'gamer-hub',
      name: 'GAMER HUB',
      badge: 'Diagnostics Hub',
      category: 'tools',
      categoryLabel: 'Geymer Vositalari',
      tagline: 'Hardware Telemetry, Ping, FPS & Diagnostics instrumenti',
      description:
        'Geymerlar va tizim unumdorligiga qiziquvchilar uchun mo\'ljallangan kompleks diagnostika paneli. CPU va kadrlar barqarorligi, tarmoq kechikishi (ping & jitter), batareya, xotira va DPI sezgirlik kalkulyatori.',
      features: [
        'Performance testi: CPU va frame stability tahlili',
        'Network testi: Real-time Ping, Jitter va tezlik ko\'rsatkichi',
        'Qurilma telemetriyasi, xotira va batareya holati',
        'DPI & Aim sezgirlik trenajyori va sinov maydoni'
      ],
      techStack: ['Telemetry APIs', 'React', 'Hardware Sensors', 'Network Ping Probe', 'Dark UI'],
      image: '/src/assets/images/project_gamer_hub_1790447938294.jpg'
    }
  ];

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2200);
  };

  const filteredProjects =
    filterCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === filterCategory);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col justify-between p-3 sm:p-6 md:p-8 relative overflow-x-hidden font-sans selection:bg-blue-500/20 selection:text-blue-900">
      {/* Subtle modern open grid background */}
      <div className="fixed inset-0 bg-open-grid pointer-events-none opacity-80" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-blue-100/60 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-4xl mx-auto pt-2 sm:pt-4 pb-6">
        <div className="dev-card-light rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-slate-200/90 relative overflow-hidden backdrop-blur-xs space-y-7">
          {/* Top Status Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-700 tracking-tight">{profile.domain}</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px]">
              <span className="text-blue-600 font-bold">&lt;/&gt;</span>
              <span>developer</span>
            </div>
          </div>

          {/* Profile Header */}
          <div className="text-center flex flex-col items-center space-y-3.5">
            <div className="mb-0.5">
              <DeveloperLogo size={80} />
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                {profile.name}
              </h1>

              <div className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                <span>&lt;</span>
                <span>{profile.role}</span>
                <span>/&gt;</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-medium">
              {profile.quoteUz}
            </p>
            <p className="text-xs font-mono text-slate-400">
              {profile.quoteEn}
            </p>
          </div>

          {/* Primary Quick Actions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto">
            <button
              onClick={() => setAboutModalOpen(true)}
              className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
            >
              <User className="w-3.5 h-3.5 text-blue-400" />
              <span>Haqimda</span>
            </button>

            <a
              href={profile.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>

            <button
              onClick={() => setCallModalOpen(true)}
              className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Qo'ng'iroq</span>
            </button>

            <button
              onClick={() => handleCopy(profile.email, 'email')}
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>{copied === 'email' ? 'Nusxalandi' : 'Email'}</span>
            </button>
          </div>

          {/* Projects Section Header & Filters */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider">
                  <span>&#123; loyihalar &#125;</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Mening Real Loyihalarim
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Veb-ilova, sun'iy intellekt, ta'lim, o'yin va foydali servislar
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 text-xs font-mono">
                {[
                  { id: 'all', label: 'Barchasi (6)' },
                  { id: 'ai', label: 'AI' },
                  { id: 'ecommerce', label: 'Savdo' },
                  { id: 'edtech', label: 'EdTech' },
                  { id: 'games', label: 'O\'yin' },
                  { id: 'tools', label: 'Tools' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilterCategory(tab.id)}
                    className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                      filterCategory === tab.id
                        ? 'bg-blue-600 text-white font-medium shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 6 Real Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((project) => {
                const getIcon = () => {
                  switch (project.category) {
                    case 'ecommerce':
                      return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
                    case 'ai':
                      return <Bot className="w-4 h-4 text-blue-600" />;
                    case 'edtech':
                      return <GraduationCap className="w-4 h-4 text-indigo-600" />;
                    case 'games':
                      return project.id === 'last-house' ? (
                        <Ghost className="w-4 h-4 text-amber-600" />
                      ) : (
                        <Gamepad2 className="w-4 h-4 text-cyan-600" />
                      );
                    default:
                      return <Cpu className="w-4 h-4 text-violet-600" />;
                  }
                };

                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group dev-card-light-hover rounded-2xl bg-white border border-slate-200 overflow-hidden cursor-pointer flex flex-col justify-between"
                  >
                    {/* Project Screenshot Banner */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img
                        src={project.image}
                        alt={project.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-slate-200/80 font-mono text-[10px] font-semibold text-slate-700 shadow-xs">
                        {project.badge}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {getIcon()}
                            <h3 className="font-bold text-slate-900 font-mono text-base group-hover:text-blue-600 transition-colors">
                              {project.name}
                            </h3>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech stack tags */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="text-[10px] font-mono px-1 py-0.5 text-slate-400">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono font-medium text-blue-600 group-hover:underline">
                          Batafsil →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Contact Footer Bar */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <a
              href={profile.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200/80 text-blue-950 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-blue-600" />
                <span className="font-semibold">Telegram profilim</span>
              </div>
              <span className="font-mono text-blue-700 font-medium">@{profile.telegramHandle}</span>
            </a>

            <button
              onClick={() => setCallModalOpen(true)}
              className="p-3 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 text-emerald-950 transition-colors flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">Telefon orqali</span>
              </div>
              <span className="font-mono text-emerald-700 font-medium">{profile.phoneNumber}</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-4xl mx-auto py-6 text-center text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <div>
          <span>&copy; 2026 {profile.name}</span>
          <span className="mx-2">·</span>
          <span>Barcha huquqlar himoyalangan</span>
        </div>
        <div className="flex items-center gap-1.5 text-blue-600 font-semibold">
          <Code2 className="w-4 h-4" />
          <span>USMONOV.DEV</span>
        </div>
      </footer>

      {/* MODAL: ABOUT ME (Haqimda) */}
      {aboutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setAboutModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Abduvohidxon Usmonov haqida
                </h3>
              </div>
              <button
                onClick={() => setAboutModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">{profile.name}</span>
                <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 font-mono text-[11px] font-semibold">
                  DEVELOPER
                </span>
              </div>
              <div className="text-slate-600">
                Vebsayt: <span className="font-mono text-blue-600 font-medium">{profile.domain}</span>
              </div>
              <div className="text-slate-600">
                Telegram: <a href={profile.telegramUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">@{profile.telegramHandle}</a>
              </div>
              <div className="text-slate-600">
                Telefon: <span className="font-mono text-slate-800">{profile.phoneNumber}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Men dasturchiman (software developer). Zamonaviy veb-texnologiyalar, sun'iy intellekt vositalari, onlayn xarid tizimlari va interaktiv veb-o'yinlar yaratish bilan shug'ullanaman.
              </p>
              <p>
                Saytda taqdim etilgan 6 ta loyiha (SavdoX, USMONOV AI, AdaptIQ, Kvant Xonasi, The Last House, Gamer Hub) mening amaliy ishlanmalarim va real loyihalarimdir.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Asosiy Texnologiyalar
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Next.js / Vite',
                  'Node.js',
                  'Generative AI & Prompts',
                  'Web Audio & Canvas',
                  'Tailwind CSS',
                  'REST APIs'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <a
                href={profile.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium text-xs flex items-center gap-1.5 hover:bg-blue-700"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram orqali bog'lanish</span>
              </a>

              <button
                onClick={() => setAboutModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PROJECT DETAIL (Batafsil ma'lumot) */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <h3 className="font-bold text-slate-900 font-mono text-base sm:text-lg">
                  {selectedProject.name}
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {selectedProject.badge}
                </span>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Screenshot preview */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] bg-slate-100 shadow-xs">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Content & Tagline */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">
                {selectedProject.categoryLabel}
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {selectedProject.tagline}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Features checklist */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Asosiy Xususiyatlar
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-1.5 pt-1">
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Texnologik Stek
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-3 flex items-center justify-between border-t border-slate-100">
              <a
                href={profile.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Loyiha bo'yicha bog'lanish</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: CALL (Qo'ng'iroq) */}
      {callModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setCallModalOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-4 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Phone className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">Bog'lanish</h3>
              <p className="text-xs text-slate-500">{profile.name}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-base font-bold text-slate-900">
              {profile.phoneNumber}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${profile.rawPhone}`}
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-emerald-600/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Qo'ng'iroq</span>
              </a>

              <button
                onClick={() => {
                  handleCopy(profile.phoneNumber, 'phone');
                  setCallModalOpen(false);
                }}
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Nusxa olish</span>
              </button>
            </div>

            <button
              onClick={() => setCallModalOpen(false)}
              className="text-xs text-slate-400 hover:text-slate-600 pt-1"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
