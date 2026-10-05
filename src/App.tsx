/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import {
  Clock,
  Lock,
  Smartphone,
  Monitor,
  Check,
  Zap,
  Gift,
  Star,
  ArrowLeft,
  ArrowRight,
  CircleCheck,
  ChevronDown,
  X,
  ShieldCheck,
} from 'lucide-react';

const carouselImagesSet1 = [
  'https://i.ibb.co/1thpCVnc/07.webp',
  'https://i.ibb.co/PskgSfpq/14.webp',
  'https://i.ibb.co/tdRBPWf/02.webp',
  'https://i.ibb.co/6ct6VHyv/11.webp',
  'https://i.ibb.co/20YZNhkC/05.webp',
  'https://i.ibb.co/nqdCwnGT/16.webp',
  'https://i.ibb.co/qL2mn1PS/09.webp',
  'https://i.ibb.co/Kcw5768h/03.webp',
  'https://i.ibb.co/4g2kX5s7/12.webp',
  'https://i.ibb.co/mVtPkP0m/01.webp',
  'https://i.ibb.co/gZTLpX5p/08.webp',
  'https://i.ibb.co/fBd3Prj/15.webp',
  'https://i.ibb.co/FLr5HrLm/04.webp',
  'https://i.ibb.co/B289hkBS/10.webp',
  'https://i.ibb.co/xqkVTZVv/13.webp',
  'https://i.ibb.co/Z7Khstg/06.webp',
];

const carouselImagesSet2 = [
  'https://i.ibb.co/4g2kX5s7/12.webp',
  'https://i.ibb.co/FLr5HrLm/04.webp',
  'https://i.ibb.co/fBd3Prj/15.webp',
  'https://i.ibb.co/mVtPkP0m/01.webp',
  'https://i.ibb.co/gZTLpX5p/08.webp',
  'https://i.ibb.co/xqkVTZVv/13.webp',
  'https://i.ibb.co/Z7Khstg/06.webp',
  'https://i.ibb.co/6ct6VHyv/11.webp',
  'https://i.ibb.co/tdRBPWf/02.webp',
  'https://i.ibb.co/nqdCwnGT/16.webp',
  'https://i.ibb.co/1thpCVnc/07.webp',
  'https://i.ibb.co/Kcw5768h/03.webp',
  'https://i.ibb.co/B289hkBS/10.webp',
  'https://i.ibb.co/PskgSfpq/14.webp',
  'https://i.ibb.co/20YZNhkC/05.webp',
  'https://i.ibb.co/qL2mn1PS/09.webp',
];

const carouselClinicalImages = [
  'https://i.ibb.co/0VZ9N8N7/img3.webp',
  'https://i.ibb.co/KjGBPW4h/img6.webp',
  'https://i.ibb.co/ymfcWPfY/img-1.webp',
  'https://i.ibb.co/nN7BRbD2/img4.webp',
  'https://i.ibb.co/9krD537Y/img1.webp',
  'https://i.ibb.co/Lz5YKzC1/img5.webp',
  'https://i.ibb.co/zWtdKJ2m/img2.webp',
];

const testimonials = [
  {
    quote:
      'As atividades vieram bem organizadas e foi muito fácil escolher, imprimir e entregar para meu filho fazer.',
    name: 'Juliana Martins',
    role: 'Mãe de criança de 6 anos',
  },
  {
    quote:
      'Meus alunos adoraram os desenhos e os desafios. O material facilitou bastante o planejamento das atividades de Natal.',
    name: 'Camila Rodrigues',
    role: 'Professora da Educação Infantil',
  },
  {
    quote:
      'Finalmente encontrei atividades bonitas e variadas para entreter as crianças sem depender do celular.',
    name: 'Renata Alves',
    role: 'Mãe e responsável',
  },
];

const conditions = [
  {
    icon: '🎨',
    title: 'DESENHOS PARA COLORIR',
    desc: 'Ilustrações natalinas para estimular a criatividade e a coordenação motora.',
  },
  {
    icon: '🧩',
    title: 'LABIRINTOS DE NATAL',
    desc: 'Desafios divertidos para desenvolver atenção, concentração e raciocínio.',
  },
  {
    icon: '🔎',
    title: 'CAÇA-PALAVRAS NATALINOS',
    desc: 'Atividades educativas que trabalham leitura, atenção e vocabulário.',
  },
  {
    icon: '✏️',
    title: 'LIGUE OS PONTOS',
    desc: 'A criança completa a imagem, descobre o desenho e depois pode colorir.',
  },
  {
    icon: '👀',
    title: 'ENCONTRE AS DIFERENÇAS',
    desc: 'Exercícios divertidos para estimular a percepção visual e a atenção aos detalhes.',
  },
  {
    icon: '✂️',
    title: 'RECORTE E COLE',
    desc: 'Atividades práticas para trabalhar a coordenação motora fina e a criatividade.',
  },
  {
    icon: '🔤',
    title: 'ALFABETIZAÇÃO NATALINA',
    desc: 'Letras, palavras e sílabas apresentadas de maneira leve e divertida.',
  },
  {
    icon: '🔢',
    title: 'MATEMÁTICA DIVERTIDA',
    desc: 'Contagem, números e continhas simples com personagens e elementos de Natal.',
  },
];

const reasons = [
  {
    icon: '🎄',
    title: 'ATIVIDADES ORGANIZADAS',
    desc: 'Encontre facilmente a atividade ideal para cada momento, idade ou habilidade.',
  },
  {
    icon: '🧠',
    title: 'APRENDIZADO DIVERTIDO',
    desc: 'Trabalhe atenção, raciocínio, criatividade e coordenação enquanto as crianças se divertem.',
  },
  {
    icon: '🎨',
    title: 'MATERIAL ILUSTRADO',
    desc: 'Desperte o interesse das crianças com páginas natalinas alegres, bonitas e fáceis de entender.',
  },
  {
    icon: '🖨️',
    title: 'PRONTAS PARA IMPRIMIR',
    desc: 'Escolha as atividades, faça a impressão e comece a diversão em poucos minutos.',
  },
  {
    icon: '✅',
    title: 'TUDO EM UM ÚNICO LUGAR',
    desc: 'Pare de procurar atividades espalhadas em diferentes sites, vídeos e redes sociais.',
  },
  {
    icon: '📵',
    title: 'MENOS TELAS, MAIS CRIATIVIDADE',
    desc: 'Ofereça uma alternativa educativa para manter as crianças entretidas longe do celular e da televisão.',
  },
];

const desires = [
  {
    icon: '📵',
    title: 'DIMINUIR O TEMPO DAS CRIANÇAS NAS TELAS',
    desc: 'Ofereça atividades divertidas para manter as crianças longe do celular, tablet e televisão.',
  },
  {
    icon: '🎨',
    title: 'ESTIMULAR A CRIATIVIDADE',
    desc: 'Proporcione momentos de pintura, desenho, recorte, colagem e criação.',
  },
  {
    icon: '🧠',
    title: 'UNIR DIVERSÃO E APRENDIZADO',
    desc: 'Trabalhe atenção, raciocínio e coordenação enquanto as crianças se divertem.',
  },
  {
    icon: '⏱️',
    title: 'ECONOMIZAR TEMPO DE PREPARAÇÃO',
    desc: 'Tenha atividades organizadas e prontas para imprimir sempre que precisar.',
  },
  {
    icon: '🎅',
    title: 'CRIAR MOMENTOS ESPECIAIS NO NATAL',
    desc: 'Transforme o período natalino em uma experiência divertida e inesquecível.',
  },
  {
    icon: '👩‍🏫',
    title: 'TER ATIVIDADES PARA CASA OU SALA DE AULA',
    desc: 'Utilize o material com filhos, alunos, sobrinhos, netos ou crianças sob seus cuidados.',
  },
];

const faqs = [
  {
    q: 'Para qual idade as atividades são indicadas?',
    a: 'As atividades são indicadas principalmente para crianças de 3 a 7 anos. Como o material possui diferentes níveis de dificuldade, você poderá escolher as opções mais adequadas para cada idade.',
  },
  {
    q: 'Como receberei o material?',
    a: 'Após a confirmação do pagamento, você receberá as instruções de acesso no e-mail informado durante a compra.',
  },
  {
    q: 'O material é físico?',
    a: 'Não. Este é um produto totalmente digital. Você receberá os arquivos em PDF para baixar e imprimir. Nenhum material físico será enviado.',
  },
  {
    q: 'Posso acessar pelo celular?',
    a: 'Sim. Você poderá acessar e baixar o material pelo celular, tablet ou computador.',
  },
  {
    q: 'O acesso é vitalício?',
    a: 'Sim. Depois de adquirir o produto, você poderá acessar os materiais sempre que desejar.',
  },
  {
    q: 'Receberei o acesso imediatamente?',
    a: 'Sim. O acesso é liberado após a confirmação do pagamento. Compras realizadas por Pix ou cartão geralmente são aprovadas rapidamente.',
  },
  {
    q: 'Posso imprimir as atividades?',
    a: 'Sim. Todas as atividades foram preparadas para impressão. Você poderá escolher as páginas desejadas e imprimir conforme sua necessidade.',
  },
  {
    q: 'Preciso imprimir tudo de uma vez?',
    a: 'Não. Você pode imprimir apenas as atividades que deseja utilizar naquele momento.',
  },
  {
    q: 'Posso utilizar as atividades em sala de aula?',
    a: 'Sim. Professoras e educadoras podem utilizar o material com suas turmas, respeitando as condições da licença de uso.',
  },
  {
    q: 'Qual é a diferença entre os dois planos?',
    a: 'O Plano Básico inclui as +100 Atividades de Natal. O Plano Completo inclui as mesmas atividades e mais quatro bônus: desenhos para colorir, artesanatos, histórias infantis e lembrancinhas natalinas.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Você terá sete dias após a compra para conhecer e analisar o material. Caso não fique satisfeita, poderá solicitar o reembolso dentro desse prazo.',
  },
  {
    q: 'Posso compartilhar ou revender os arquivos?',
    a: 'Não. A compra permite o uso pessoal ou educacional conforme a licença. O compartilhamento, a distribuição e a revenda dos arquivos não são permitidos.',
  },
];

const steps = [
  {
    n: '1',
    t: 'Faça sua compra',
    d: 'Escolha o plano ideal para você e finalize o pagamento de forma rápida e segura.',
    bullets: [],
  },
  {
    n: '2',
    t: 'Receba seu acesso',
    d: 'Após a confirmação do pagamento, o acesso será enviado automaticamente para o seu e-mail.',
    bullets: [
      'Acesso ao material principal',
      'Bônus liberados no Plano Completo',
      'Entrega digital e automática',
    ],
  },
  {
    n: '3',
    t: 'Baixe os materiais',
    d: 'Acesse seus arquivos e baixe tudo pelo celular, tablet ou computador.',
    bullets: [
      '+100 Atividades de Natal para Crianças de 3 a 7 Anos',
      'Arquivos digitais em PDF',
      'Páginas ilustradas em formato A4',
      'Materiais organizados e prontos para imprimir',
      '4 bônus exclusivos no Plano Completo',
    ],
  },
  {
    n: '4',
    t: 'Escolha, imprima e divirta-se',
    d: 'Prepare momentos educativos e divertidos para as crianças neste Natal.',
    bullets: [
      'Escolha a atividade desejada',
      'Imprima quantas páginas precisar',
      'Entregue para a criança brincar e aprender',
      'Reutilize o material sempre que quiser',
    ],
  },
];

function ScrollingMarquee({
  imgs,
  priority = false,
  direction = 'left',
}: {
  imgs: string[];
  priority?: boolean;
  direction?: 'left' | 'right';
}) {
  const duplicated = [...imgs, ...imgs];
  const animClass = direction === 'right' ? 'animate-scroll-x-reverse' : 'animate-scroll-x';
  return (
    <div className="w-full overflow-hidden touch-pan-y select-none py-2">
      <div
        className={`flex gap-2 sm:gap-3 w-max items-center ${animClass}`}
        style={{ animationDuration: '30s' }}
      >
        {duplicated.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt="Exemplo de atividade de Natal para imprimir"
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            className="h-52 min-[360px]:h-60 sm:h-72 md:h-[28rem] lg:h-[34rem] w-auto max-w-none shrink-0 object-contain block transition-transform select-none pointer-events-none"
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const todayFormatted = new Date().toLocaleDateString('pt-BR');

  const btnCtaLarge =
    'w-full sm:w-auto inline-flex items-center justify-center text-center bg-[#00C853] hover:bg-[#00B248] text-white font-black uppercase rounded-full shadow-lg shadow-green-600/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-xs min-[360px]:text-sm sm:text-base md:text-xl px-4 min-[360px]:px-6 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 break-words leading-tight tracking-wide animate-pulse cursor-pointer';
  const btnCtaMedium =
    'w-full sm:w-auto inline-flex items-center justify-center text-center bg-[#00C853] hover:bg-[#00B248] text-white font-black uppercase rounded-full shadow-lg shadow-green-600/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-xs sm:text-sm md:text-lg px-4 min-[360px]:px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 break-words leading-tight tracking-wide animate-pulse cursor-pointer';

  return (
    <div className="min-h-screen bg-[#FCFCFA] text-brand-dark font-sans overflow-x-hidden selection:bg-amber-200">
      {/* Top Banner */}
      <aside aria-label="Alerta de oferta" className="bg-brand-red text-white text-center py-2 px-2.5 text-[11px] min-[360px]:text-xs sm:text-sm md:text-base font-extrabold flex items-center justify-center gap-1.5 leading-snug shadow-sm">
        <Clock className="size-4 shrink-0 animate-pulse text-amber-300" />
        <span>
          🎅 ÚLTIMA CHANCE — OFERTA ESPECIAL DE NATAL TERMINA HOJE:{' '}
          <span className="underline decoration-amber-300 underline-offset-2 font-black text-amber-200">{todayFormatted}</span>
        </span>
      </aside>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 sm:pt-6 pb-7 sm:pb-9 text-center bg-gradient-to-b from-[#FFFDF9] via-white to-[#F8FBF9] border-b border-emerald-950/10">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          {/* Security Badge */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full px-3.5 sm:px-4 py-1 text-[11px] sm:text-xs md:text-sm font-black tracking-tight shadow-xs text-center">
              <Lock className="size-3.5 sm:size-4 shrink-0 text-[#00C853]" /> COMPRA 100% SEGURA
            </span>
          </div>

          <div className="inline-block max-w-full">
            <h1
              className="text-2xl min-[360px]:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.12] sm:leading-[0.98] tracking-tight text-balance px-1 text-brand-red drop-shadow-xs"
            >
              +100 Atividades de Natal para Crianças de 3 a 7 Anos
            </h1>
            <div className="mt-2.5 sm:mt-3 mx-auto h-1.5 w-20 sm:w-36 bg-gradient-to-r from-amber-400 via-brand-red to-[#00C853] rounded-full"></div>
          </div>

          <h2 className="mt-3 sm:mt-4 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 text-balance px-1 leading-snug">
            Atividades educativas <span className="bg-amber-100 text-brand-red font-black px-2 py-0.5 rounded-md border border-amber-300/60 inline-block">prontas para imprimir</span> e usar em casa ou na sala de aula, sem perder horas procurando ou preparando materiais.
          </h2>

          <div className="relative my-3 sm:my-5 flex justify-center -mx-2 sm:mx-0">
            <img
              src="https://i.ibb.co/MK4YvCD/mockup-principal.webp"
              alt="+100 Atividades de Natal para Crianças de 3 a 7 Anos"
              fetchPriority="high"
              decoding="async"
              className="w-full max-w-full sm:max-w-4xl lg:max-w-5xl object-contain drop-shadow-xl"
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-neutral-700 max-w-2xl mx-auto px-1 leading-relaxed">
            São mais de 100 atividades com desenhos para colorir, labirintos, caça-palavras, alfabetização, matemática, recorte, colagem e muito mais.
          </p>

          <div className="mt-4 sm:mt-6 px-2">
            <a href="#oferta" className={btnCtaLarge}>
              QUERO AS +100 ATIVIDADES →
            </a>
          </div>

          <div className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-semibold text-neutral-700 flex items-center justify-center gap-1.5 flex-wrap px-2">
            <span>Você recebe <strong className="text-emerald-700 font-black">acesso imediato</strong> após a compra para consultar pelo</span>
            <span className="inline-flex items-center gap-1 text-brand-red font-black">
              <Smartphone className="size-4" /> celular, tablet
            </span>
            <span>ou</span>
            <span className="inline-flex items-center gap-1 text-brand-red font-black">
              <Monitor className="size-4" /> computador.
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Clinical Conditions */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#F0FAF4] via-[#F6FCF8] to-[#EBF6F0] border-b border-emerald-200/80">
        <div className="max-w-5xl mx-auto px-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-neutral-900 leading-tight">
            Veja algumas das <span className="text-brand-red">Atividades de Natal</span>
          </h2>
        </div>

        <ScrollingMarquee imgs={carouselImagesSet1} priority={true} />

        <div className="max-w-4xl mx-auto px-4 mt-8 sm:mt-10 text-center">
          <p className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-neutral-800">
            Mais de 100 atividades natalinas prontas para imprimir — incluindo:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4.5 mb-6 sm:mb-8">
            {conditions.map((item) => (
              <div
                key={item.title}
                className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl border border-emerald-200/80 hover:border-brand-red/50 hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-start relative group"
              >
                <div
                  className="size-12 rounded-xl bg-gradient-to-br from-emerald-50 to-amber-50 border border-emerald-200/80 shadow-2xs flex items-center justify-center text-2xl mb-2.5 group-hover:scale-110 transition-transform"
                  role="img"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <p className="text-xs sm:text-sm font-black text-brand-red uppercase mb-1 leading-snug tracking-tight">{item.title}</p>
                <p className="text-[11px] sm:text-xs text-neutral-700 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="px-2">
            <a href="#oferta" className={btnCtaMedium}>
              QUERO ACESSAR AS +100 ATIVIDADES →
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Clinical Photos Carousel */}
      <section className="py-7 sm:py-11 bg-white border-b border-neutral-200/60">
        <div className="text-center mb-4 px-4">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-900/70">
            DIVERSÃO E APRENDIZADO NA PRÁTICA
          </p>
        </div>
        <ScrollingMarquee imgs={carouselClinicalImages} priority={true} direction="left" />
      </section>

      {/* Section 4: What makes them valuable */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-[#FFFDF2] via-[#FFF9E8] to-[#FFF3D6] border-b border-amber-300/80">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12 uppercase text-neutral-900 leading-tight">
            O QUE TORNA AS <span className="text-brand-red">+100 ATIVIDADES DE NATAL</span> TÃO ESPECIAIS?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-7 rounded-3xl shadow-md hover:shadow-2xl border border-amber-300/80 hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 flex gap-4 items-start relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-amber-400 to-[#00C853]" />
                <div className="shrink-0 size-14 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50 border-2 border-red-200/70 shadow-sm flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-base sm:text-lg mb-1 text-brand-red leading-snug">{item.title}</h3>
                  <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Need Organization Notice */}
      <section className="border-b border-neutral-300/70">
        <div className="px-4 py-10 sm:py-16 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFEA] to-[#ECE5DC]">
          <div className="max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 text-center text-white shadow-2xl bg-gradient-to-br from-[#1A2E26] via-[#15251F] to-[#0E1A15] border border-emerald-900/40">
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight tracking-tight">
              PARE DE PROCURAR ATIVIDADES ESPALHADAS
            </p>
            <p className="text-xs sm:text-base md:text-lg mb-6 text-neutral-300 leading-relaxed font-normal">
              Tenha uma coleção completa de atividades natalinas organizada e pronta para usar na escola, em casa ou durante as férias.
            </p>
            <a href="#oferta" className={btnCtaLarge}>
              QUERO ACESSAR AGORA →
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Protocol Examples Scrolling Carousel */}
      <section className="py-7 sm:py-11 bg-white border-b border-neutral-200/60">
        <div className="text-center mb-3 px-4">
          <span className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
            ATIVIDADES ILUSTRADAS E PRONTAS PARA IMPRIMIR
          </span>
        </div>
        <ScrollingMarquee imgs={carouselImagesSet2} priority={false} direction="right" />
      </section>

      {/* Section 7: Ideal For You Who Wants */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-[#FFF5F5] via-[#FFF0F2] to-[#FFE8EC] border-b border-rose-200/80">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm font-black tracking-widest text-brand-red uppercase mb-2 text-center">
            PENSADO PARA FACILITAR SUA VIDA
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12 uppercase text-neutral-900 leading-tight">
            IDEAL PARA VOCÊ QUE <span className="text-brand-red">DESEJA:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {desires.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-7 rounded-3xl shadow-md hover:shadow-2xl border border-rose-200/80 hover:border-brand-red/60 hover:-translate-y-1.5 transition-all duration-300 flex gap-4 items-start relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-rose-400" />
                <div className="shrink-0 size-14 rounded-2xl bg-gradient-to-br from-rose-50 to-red-100/70 border-2 border-rose-200/80 shadow-sm flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black uppercase text-neutral-900 text-xs sm:text-sm md:text-base mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Everything You Will Receive */}
      <section className="py-12 sm:py-18 px-4 bg-gradient-to-b from-[#F2F6F4] via-[#EAF1EE] to-[#E2ECE7] border-b border-emerald-900/10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-black tracking-widest text-[#00C853] uppercase mb-2">
            CONTEÚDO COMPLETO E ESTRUTURADO
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 uppercase text-brand-red leading-tight">
            TUDO O QUE VOCÊ VAI RECEBER
          </h2>

          <div className="max-w-2xl sm:max-w-3xl mx-auto rounded-3xl p-5 sm:p-8 border border-neutral-800 bg-gradient-to-br from-[#1A2E26] via-[#15251F] to-[#0E1A15] shadow-2xl">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 bg-[#00C853] text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-black shadow-md tracking-wide">
                <Zap className="size-3.5 sm:size-4 fill-white" /> ACESSO IMEDIATO APÓS A COMPRA
              </span>
            </div>

            <img
              src="https://i.ibb.co/MK4YvCD/mockup-principal.webp"
              alt="Acesso imediato ao material"
              loading="lazy"
              className="w-full max-w-full sm:max-w-2xl mx-auto my-3 sm:my-5 object-contain drop-shadow-md"
            />

            <ul className="max-w-md mx-auto space-y-2.5 sm:space-y-3 text-left text-white border-t border-emerald-500/30 pt-4">
              {[
                '+100 Atividades de Natal para Crianças de 3 a 7 Anos',
                'Atividades educativas, alegres e envolventes',
                'Exercícios ideais para crianças de 3 a 7 anos',
                'Páginas ilustradas em formato A4 prontas para imprimir',
                'Material digital em alta resolução (PDF PREMIUM)',
                'Acesso pelo celular, tablet ou computador',
                'Desenhos Natalinos para Colorir',
                'Artesanatos Natalinos para Recortar e Montar',
                'Histórias Natalinas Infantis',
                '+35 Modelos de Lembrancinhas Natalinas para Imprimir',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-2.5 items-start border-b border-white/10 pb-2.5 text-xs sm:text-sm font-bold text-white/95"
                >
                  <Check className="size-4 sm:size-5 text-[#00C853] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-2 grid grid-cols-2 gap-2 text-xs sm:text-sm font-bold text-white/95 text-left bg-black/40 p-3.5 rounded-2xl border border-white/10">
              <p>🖍️ Desenhos para colorir</p>
              <p>🦌 Labirintos de Natal</p>
              <p>🔔 Caça-palavras natalinos</p>
              <p>⭐ Ligue os pontos</p>
              <p>❄️ Encontre as diferenças</p>
              <p>✂️ Recorte e cole</p>
              <p>🎁 Alfabetização natalina</p>
              <p>⛄ Matemática divertida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Exclusive Bonuses */}
      <section className="py-12 sm:py-18 px-4 bg-gradient-to-b from-[#FFFDF5] via-[#FFF8E6] to-[#FFF2D4] border-b border-amber-300/80 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-1 sm:mb-2 uppercase leading-tight text-neutral-900">
          E NÃO PARA POR AÍ…
        </h2>
        <p className="text-sm sm:text-lg md:text-xl font-bold mt-2 sm:mt-3 mb-4 text-brand-red">
          Garantindo sua vaga hoje, você leva 4 super bônus de presente:
        </p>

        <div className="flex justify-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 bg-[#00C853] text-white rounded-full px-5 sm:px-6 py-2 text-xs sm:text-sm md:text-base font-black shadow-md">
            🎁 4 BÔNUS EXCLUSIVOS 100% GRÁTIS
          </span>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Bonus 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl text-neutral-900 text-left shadow-md hover:shadow-2xl flex flex-col justify-between border-2 border-amber-400/90 hover:border-brand-red hover:-translate-y-2 transition-all duration-300 relative group">
            <div>
              <div className="text-center text-amber-400 text-base sm:text-lg mb-1 drop-shadow-xs">★★★★★</div>
              <img
                src="https://i.ibb.co/zTsVg7pZ/bonus-01.webp"
                alt="+50 Desenhos Natalinos para Colorir"
                loading="lazy"
                className="h-56 sm:h-64 w-full mx-auto mb-3 object-contain group-hover:scale-102 transition-transform"
              />
              <div className="flex justify-center mb-3">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 px-4 py-1 font-black text-xs sm:text-sm rounded-full shadow-md">
                  🎁 BÔNUS #1
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black mb-2 leading-snug text-brand-red">
                +50 DESENHOS NATALINOS PARA COLORIR
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mb-4 leading-relaxed font-normal">
                Uma coleção especial com mais de 50 desenhos natalinos para as crianças pintarem, desenvolverem a criatividade e entrarem no clima do Natal.
              </p>
            </div>
            <div className="border-2 border-emerald-500/50 rounded-xl py-2.5 text-center text-xs sm:text-sm font-bold bg-emerald-50/90 shadow-2xs">
              Valor: <span className="line-through text-red-600 font-bold">R$ 14,90</span>{' '}
              <span className="text-[#00C853] font-black text-sm">GRÁTIS</span>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl text-neutral-900 text-left shadow-md hover:shadow-2xl flex flex-col justify-between border-2 border-amber-400/90 hover:border-brand-red hover:-translate-y-2 transition-all duration-300 relative group">
            <div>
              <div className="text-center text-amber-400 text-base sm:text-lg mb-1 drop-shadow-xs">★★★★★</div>
              <img
                src="https://i.ibb.co/sJttz1Lw/bonus-02.webp"
                alt="+30 Artesanatos Natalinos para Recortar e Montar"
                loading="lazy"
                className="h-56 sm:h-64 w-full mx-auto mb-3 object-contain group-hover:scale-102 transition-transform"
              />
              <div className="flex justify-center mb-3">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 px-4 py-1 font-black text-xs sm:text-sm rounded-full shadow-md">
                  🎁 BÔNUS #2
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black mb-2 leading-snug text-brand-red">
                +30 ARTESANATOS NATALINOS PARA RECORTAR E MONTAR
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mb-4 leading-relaxed font-normal">
                Enfeites, personagens, guirlandas, máscaras, caixinhas e outras atividades práticas para estimular a criatividade e a coordenação motora.
              </p>
            </div>
            <div className="border-2 border-emerald-500/50 rounded-xl py-2.5 text-center text-xs sm:text-sm font-bold bg-emerald-50/90 shadow-2xs">
              Valor: <span className="line-through text-red-600 font-bold">R$ 17,90</span>{' '}
              <span className="text-[#00C853] font-black text-sm">GRÁTIS</span>
            </div>
          </div>

          {/* Bonus 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl text-neutral-900 text-left shadow-md hover:shadow-2xl flex flex-col justify-between border-2 border-amber-400/90 hover:border-brand-red hover:-translate-y-2 transition-all duration-300 relative group">
            <div>
              <div className="text-center text-amber-400 text-base sm:text-lg mb-1 drop-shadow-xs">★★★★★</div>
              <img
                src="https://i.ibb.co/m5BSksvF/bonus-03.webp"
                alt="+20 Histórias Natalinas Infantis"
                loading="lazy"
                className="h-56 sm:h-64 w-full mx-auto mb-3 object-contain group-hover:scale-102 transition-transform"
              />
              <div className="flex justify-center mb-3">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 px-4 py-1 font-black text-xs sm:text-sm rounded-full shadow-md">
                  🎁 BÔNUS #3
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black mb-2 leading-snug text-brand-red">
                +20 HISTÓRIAS NATALINAS INFANTIS
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mb-4 leading-relaxed font-normal">
                Histórias curtas e envolventes sobre amizade, generosidade, solidariedade e união familiar para ler em casa ou na sala de aula.
              </p>
            </div>
            <div className="border-2 border-emerald-500/50 rounded-xl py-2.5 text-center text-xs sm:text-sm font-bold bg-emerald-50/90 shadow-2xs">
              Valor: <span className="line-through text-red-600 font-bold">R$ 19,90</span>{' '}
              <span className="text-[#00C853] font-black text-sm">GRÁTIS</span>
            </div>
          </div>

          {/* Bonus 4 */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl text-neutral-900 text-left shadow-md hover:shadow-2xl flex flex-col justify-between border-2 border-amber-400/90 hover:border-brand-red hover:-translate-y-2 transition-all duration-300 relative group">
            <div>
              <div className="text-center text-amber-400 text-base sm:text-lg mb-1 drop-shadow-xs">★★★★★</div>
              <img
                src="https://i.ibb.co/67VcfXLw/bonus-04.webp"
                alt="+35 Modelos de Lembrancinhas Natalinas para Imprimir"
                loading="lazy"
                className="h-56 sm:h-64 w-full mx-auto mb-3 object-contain group-hover:scale-102 transition-transform"
              />
              <div className="flex justify-center mb-3">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 px-4 py-1 font-black text-xs sm:text-sm rounded-full shadow-md">
                  🎁 BÔNUS #4
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black mb-2 leading-snug text-brand-red">
                +35 MODELOS DE LEMBRANCINHAS NATALINAS PARA IMPRIMIR
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mb-4 leading-relaxed font-normal">
                Porta-bombons, caixinhas, capas para pirulitos, marcadores de páginas, tags e embalagens para presentear no Natal.
              </p>
            </div>
            <div className="border-2 border-emerald-500/50 rounded-xl py-2.5 text-center text-xs sm:text-sm font-bold bg-emerald-50/90 shadow-2xs">
              Valor: <span className="line-through text-red-600 font-bold">R$ 17,90</span>{' '}
              <span className="text-[#00C853] font-black text-sm">GRÁTIS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Pricing Table */}
      <section id="oferta" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-[#EEF7F2] via-[#F6FBF8] to-[#E5F2EB] border-b-2 border-emerald-200/90 scroll-mt-6">
        <h2 className="text-xs sm:text-sm md:text-base font-black text-center text-brand-red mb-1 sm:mb-2 flex items-center justify-center gap-1.5 leading-snug uppercase tracking-wider">
          <Clock className="size-4 sm:size-5 shrink-0 text-brand-red animate-pulse" /> ÚLTIMA CHANCE — OFERTA TERMINA HOJE
        </h2>
        <p className="text-center text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-12 text-neutral-900 tracking-tight">
          Escolha o Kit com mais vantagens para você
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Basic Plan */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl border-2 border-neutral-300 hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 rounded-full" />
            <div>
              {/* Header */}
              <div className="text-center pt-1">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-500 mb-1.5">
                  KIT BÁSICO
                </h3>
                <p className="text-xs sm:text-sm text-red-500 font-semibold line-through">
                  R$ 27,90
                </p>
                <div className="flex items-baseline justify-center gap-0.5 mt-0.5">
                  <span className="text-base sm:text-lg font-bold text-neutral-800">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-none">
                    10
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-neutral-900 leading-none">
                    ,00
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-medium">
                  Pacote essencial para começar as atividades.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-gray-100 my-4 sm:my-5" />

              {/* Items List with Dividers */}
              <ul className="divide-y divide-gray-100 mb-6">
                <li className="flex items-center gap-2.5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-neutral-700">
                  <Check className="size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                  <span>+100 Atividades de Natal Prontas para Imprimir</span>
                </li>
                <li className="flex items-center gap-2.5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-neutral-700">
                  <Check className="size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                  <span>Exercícios para crianças de 3 a 7 anos</span>
                </li>
                <li className="flex items-center gap-2.5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-neutral-700">
                  <Check className="size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                  <span>Acesso imediato e vitalício</span>
                </li>
                <li className="flex items-center gap-2.5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-neutral-700">
                  <Check className="size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                  <span>Arquivos digitais em PDF de alta qualidade</span>
                </li>
                <li className="flex items-center gap-2.5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-neutral-400">
                  <X className="size-4 shrink-0 text-red-500 stroke-[2.5]" />
                  <span>4 Bônus exclusivos não inclusos</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="https://pay.lowify.com.br/checkout?product_id=XOjJjt"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#00C853] hover:bg-[#00B248] text-white font-black text-sm sm:text-base py-3.5 sm:py-4 rounded-xl sm:rounded-2xl active:scale-95 transition-all shadow-lg shadow-green-600/25 cursor-pointer"
              >
                QUERO ACESSAR AGORA →
              </a>

              {/* Compra Segura Badge */}
              <div className="flex items-center justify-center gap-1.5 mt-3 text-emerald-600 font-extrabold text-[11px] sm:text-xs tracking-wide">
                <ShieldCheck className="size-4 sm:size-5 text-emerald-500 shrink-0" />
                <span>COMPRA SEGURA</span>
              </div>
            </div>
          </div>

          {/* Complete Plan */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-3xl border-3 border-brand-red animate-pulse-border transition-all duration-300 relative flex flex-col justify-between mt-6 md:mt-0">
            {/* Pill Badge at the top */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white px-6 py-1.5 rounded-full font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl ring-2 ring-white whitespace-nowrap">
              MAIS ESCOLHIDO
            </div>

            <div>
              {/* Header */}
              <div className="text-center pt-2">
                <h3 className="text-2xl sm:text-3xl font-black text-brand-red tracking-tight mb-0.5">
                  Kit Completo
                </h3>
                <p className="text-xs sm:text-sm font-black text-[#00C853] uppercase tracking-wide">
                  TUDO DO KIT BÁSICO <span className="text-[#00C853]">+4 BÔNUS</span>
                </p>
              </div>

              {/* Product Mockup */}
              <div className="my-3">
                <img
                  src="https://i.ibb.co/MK4YvCD/mockup-principal.webp"
                  alt="Superkit Completo Natal Mágico Infantil"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-xs sm:max-w-sm mx-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Checklist with Dividers */}
              <ul className="divide-y divide-gray-100 mb-4">
                <li className="flex items-center gap-2.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-neutral-700">
                  <Check className="size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                  <span>+100 Atividades de Natal Prontas para Imprimir</span>
                </li>
                <li className="flex items-center gap-2.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-neutral-700">
                  <Check className="size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                  <span>Exercícios para crianças de 3 a 7 anos</span>
                </li>
                <li className="flex items-center gap-2.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-neutral-700">
                  <Check className="size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                  <span>Acesso imediato e vitalício</span>
                </li>
                <li className="flex items-center gap-2.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-neutral-700">
                  <Check className="size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                  <span>Impressão ilimitada em PDF de alta qualidade</span>
                </li>
              </ul>

              {/* Bonus Section Divider */}
              <div className="text-center my-3">
                <p className="text-[#00C853] font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-1">
                  <span>BÔNUS INCLUSOS GRÁTIS</span>
                  <span className="text-base font-bold leading-none">↓</span>
                </p>
              </div>

              {/* 4 Bonus Cards */}
              <div className="space-y-2 mb-5">
                <div className="bg-[#FFFDF5] border border-amber-200/90 rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-2xs">
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-hidden="true">🎁</span>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800 leading-snug">
                      +50 Desenhos Natalinos para Colorir
                    </span>
                  </div>
                  <div className="shrink-0 text-right whitespace-nowrap">
                    <span className="text-red-500 line-through text-[11px] sm:text-xs font-semibold mr-1.5">
                      R$ 14,90
                    </span>
                    <span className="text-[#00C853] font-black text-xs sm:text-sm">
                      GRÁTIS
                    </span>
                  </div>
                </div>

                <div className="bg-[#FFFDF5] border border-amber-200/90 rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-2xs">
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-hidden="true">🎁</span>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800 leading-snug">
                      +30 Artesanatos para Recortar e Montar
                    </span>
                  </div>
                  <div className="shrink-0 text-right whitespace-nowrap">
                    <span className="text-red-500 line-through text-[11px] sm:text-xs font-semibold mr-1.5">
                      R$ 17,90
                    </span>
                    <span className="text-[#00C853] font-black text-xs sm:text-sm">
                      GRÁTIS
                    </span>
                  </div>
                </div>

                <div className="bg-[#FFFDF5] border border-amber-200/90 rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-2xs">
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-hidden="true">🎁</span>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800 leading-snug">
                      +20 Histórias Natalinas Infantis
                    </span>
                  </div>
                  <div className="shrink-0 text-right whitespace-nowrap">
                    <span className="text-red-500 line-through text-[11px] sm:text-xs font-semibold mr-1.5">
                      R$ 19,90
                    </span>
                    <span className="text-[#00C853] font-black text-xs sm:text-sm">
                      GRÁTIS
                    </span>
                  </div>
                </div>

                <div className="bg-[#FFFDF5] border border-amber-200/90 rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-2xs">
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-hidden="true">🎁</span>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800 leading-snug">
                      +35 Lembrancinhas para Imprimir
                    </span>
                  </div>
                  <div className="shrink-0 text-right whitespace-nowrap">
                    <span className="text-red-500 line-through text-[11px] sm:text-xs font-semibold mr-1.5">
                      R$ 17,90
                    </span>
                    <span className="text-[#00C853] font-black text-xs sm:text-sm">
                      GRÁTIS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Pricing section */}
              <div className="text-center mb-3">
                <p className="text-xs sm:text-sm text-red-500 font-semibold line-through mb-0.5">
                  R$ 67,00
                </p>
                <p className="text-xs sm:text-sm font-black text-brand-red uppercase tracking-widest mb-1">
                  SOMENTE HOJE
                </p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-lg sm:text-xl font-black text-[#00C853]">R$</span>
                  <span className="text-5xl sm:text-6xl font-black text-[#00C853] tracking-tight leading-none">
                    27
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#00C853] leading-none">
                    ,00
                  </span>
                </div>

                {/* Savings Pill */}
                <div className="w-full bg-emerald-50 text-emerald-800 font-black text-xs sm:text-sm py-2 px-3 rounded-full border border-emerald-200 text-center mt-3 shadow-2xs">
                  Você economiza R$ 40,00
                </div>
              </div>

              {/* Button CTA - Color & text preserved */}
              <a
                href="https://pay.lowify.com.br/checkout?product_id=fSNTi3"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#00C853] hover:bg-[#00B248] text-white font-black text-base sm:text-lg md:text-xl py-4 sm:py-4.5 rounded-xl sm:rounded-2xl active:scale-95 transition-all shadow-xl shadow-green-600/30 animate-pulse tracking-wide cursor-pointer"
              >
                QUERO ACESSAR AGORA  →
              </a>

              {/* Compra Segura Badge */}
              <div className="flex items-center justify-center gap-1.5 mt-3 text-emerald-600 font-extrabold text-[11px] sm:text-xs tracking-wide">
                <ShieldCheck className="size-4 sm:size-5 text-emerald-500 shrink-0" />
                <span>COMPRA SEGURA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center text-neutral-600 mt-8 sm:mt-12 text-xs sm:text-base md:text-lg px-2 leading-relaxed space-y-2">
          <p>
            Uma única atividade pode proporcionar vários minutos de diversão, aprendizado e criatividade.
          </p>
          <p className="font-bold text-neutral-900">
            Agora imagine ter mais de 100 atividades, 50 desenhos, 30 artesanatos, 20 histórias e um kit de lembrancinhas para aproveitar durante todo o Natal.
          </p>
        </div>
      </section>

      {/* Section 11: Testimonials Carousel with Touch Swipe */}
      <section className="py-12 sm:py-18 px-4 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE8] to-[#EEE7DD] border-b border-stone-300/70">
        <p className="text-xs sm:text-sm font-black tracking-widest text-[#00C853] uppercase mb-2 text-center">
          EXPERIÊNCIAS REAIS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2 text-neutral-900 leading-tight">
          O QUE MÃES E PROFESSORAS DIZEM
        </h2>
        <p className="text-center text-xs sm:text-sm md:text-base text-neutral-600 mb-6 sm:mb-10 max-w-xl mx-auto font-medium">
          Depoimentos de quem já está aplicando as atividades com as crianças neste Natal.
        </p>

        <div className="max-w-2xl mx-auto">
          <div
            className="overflow-hidden relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.name} className="w-full shrink-0 px-1 sm:px-2">
                  <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-stone-200/80 text-center relative">
                    <div className="flex justify-center gap-1 mb-4 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 sm:size-5 fill-amber-400 stroke-amber-400"
                        />
                      ))}
                    </div>
                    <p className="font-extrabold text-neutral-800 text-base sm:text-xl mb-4 sm:mb-6 leading-snug">
                      “{item.quote}”
                    </p>
                    <p className="font-black text-brand-red text-sm sm:text-base">{item.name}</p>
                    <p className="text-neutral-500 text-xs sm:text-sm">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Ver depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === i ? 'w-6 bg-brand-red' : 'w-2 bg-neutral-300'
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-5">
            <button
              onClick={prevSlide}
              aria-label="Depoimento anterior"
              className="inline-flex items-center justify-center rounded-full size-11 sm:size-12 bg-white border border-neutral-200 shadow-sm text-neutral-800 hover:bg-neutral-50 cursor-pointer active:scale-95 transition-transform"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo depoimento"
              className="inline-flex items-center justify-center rounded-full size-11 sm:size-12 bg-white border border-neutral-200 shadow-sm text-neutral-800 hover:bg-neutral-50 cursor-pointer active:scale-95 transition-transform"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 text-center px-2">
          <a href="#oferta" className={btnCtaLarge}>
            QUERO MEU ACESSO AGORA →
          </a>
        </div>
      </section>

      {/* Section 12: Guarantee */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-[#F0F7FD] via-[#E2F1FC] to-[#EDF6FD] border-b border-sky-200/80 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-sky-200/60 shadow-xl shadow-sky-950/5">
          <img
            src="https://i.ibb.co/gM5MkNFF/garantia.png"
            alt="Garantia incondicional de 7 dias"
            loading="lazy"
            decoding="async"
            className="w-36 sm:w-48 mx-auto mb-3 sm:mb-4 object-contain drop-shadow-md"
          />
          <div className="inline-block mb-2">
            <span className="bg-sky-100 text-sky-800 text-xs sm:text-sm font-black px-3.5 py-1 rounded-full uppercase tracking-wider border border-sky-200">
              🛡️ SEGURANÇA TOTAL GARANTIDA
            </span>
          </div>
          <h2 className="mb-3 text-[#0B2545] uppercase tracking-tight leading-tight">
            <span className="block text-[15px] min-[360px]:text-[18px] sm:text-2xl md:text-3xl lg:text-4xl font-black whitespace-nowrap">
              GARANTIA INCONDICIONAL
            </span>
            <span className="block text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl text-[#0284C7] font-black mt-1 tracking-normal">
              DE 7 DIAS
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 mb-2.5 max-w-xl mx-auto leading-relaxed font-normal">
            Você tem 7 dias para conhecer e analisar todo o material. Explore as atividades, confira os arquivos e veja tudo o que foi preparado para tornar o Natal das crianças mais divertido e educativo.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 mb-4 max-w-xl mx-auto leading-relaxed font-medium">
            Se, dentro desse período, sentir que o material não atende às suas expectativas, basta solicitar o reembolso.
          </p>
          <p className="text-xs sm:text-sm md:text-base font-black text-emerald-800 bg-emerald-50 py-2.5 px-3 min-[380px]:px-4 rounded-xl inline-flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1 border border-emerald-300">
            <span>✓ Sem burocracia</span>
            <span>✓ Compra 100% protegida</span>
            <span>✓ Risco zero para você</span>
          </p>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Você não está comprando apenas arquivos digitais. Está adquirindo momentos inesquecíveis de união, aprendizado e imaginação com as crianças.
          </p>
        </div>
      </section>

      {/* Section 13: How Access Works (Step by Step) */}
      <section className="py-12 sm:py-18 px-4 bg-white border-b border-neutral-200/70 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4 text-neutral-900 leading-tight uppercase">
          COMO FUNCIONA O ACESSO
          <br />
          <span className="text-amber-600 text-xl sm:text-2xl md:text-3xl font-black">(PASSO A PASSO SIMPLES)</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-neutral-600 mb-6 sm:mb-10 max-w-xl mx-auto font-medium">
          Compre com total segurança, receba na hora e imprima suas atividades de Natal sempre que precisar.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div key={step.n} className="bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl border border-neutral-200/90 hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-start relative group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-red to-red-700 text-white text-lg sm:text-xl font-black mb-3.5 shadow-md group-hover:scale-105 transition-transform">
                {step.n}
              </div>
              <p className="font-black text-neutral-900 text-base sm:text-lg mb-1">{step.t}</p>
              {step.d && <p className="text-neutral-600 text-xs sm:text-sm mb-2 leading-relaxed">{step.d}</p>}
              {step.bullets.length > 0 && (
                <ul className="mt-2 space-y-1.5 sm:space-y-2">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-xs sm:text-sm font-bold text-neutral-800"
                    >
                      <CircleCheck className="size-4 sm:size-5 text-[#00C853] shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 px-2">
          <a href="#oferta" className={btnCtaLarge}>
            QUERO MEU ACESSO AGORA →
          </a>
        </div>
      </section>

      {/* Section 14: FAQ */}
      <section className="py-12 sm:py-18 px-4 bg-gradient-to-b from-[#F2F7F4] via-[#EAF2ED] to-[#E3EDE7] border-b border-emerald-900/10">
        <p className="text-xs sm:text-sm font-black tracking-widest text-[#00C853] uppercase mb-2 text-center">
          TIRA-DÚVIDAS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6 sm:mb-10 text-neutral-900 uppercase">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-200/70 divide-y divide-emerald-100/60">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group py-1 first:pt-0 last:pb-0"
            >
              <summary className="w-full text-left py-3.5 sm:py-4 flex justify-between items-center gap-3 font-bold text-xs sm:text-sm md:text-base text-neutral-900 cursor-pointer list-none select-none hover:text-brand-red transition-colors">
                <span className="leading-snug">
                  {index + 1}. {faq.q}
                </span>
                <ChevronDown className="size-4 sm:size-5 transition-transform duration-200 group-open:rotate-180 shrink-0 text-neutral-500" />
              </summary>
              <p className="pb-3 text-xs sm:text-sm text-neutral-700 leading-relaxed pl-4 border-l-2 border-[#00C853]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 bg-[#0E1A15] text-center text-[11px] sm:text-xs text-white w-full border-t border-emerald-900/50">
        <div className="max-w-3xl mx-auto space-y-2.5 leading-relaxed text-white">
          <p className="font-extrabold text-white text-xs sm:text-sm tracking-wide">
            Copyright © 2026 | Todos os direitos reservados.
          </p>
          <p className="text-white/85">
            Este site não é afiliado ao Facebook™, Instagram™, Google™ ou a qualquer outra plataforma mencionada.
          </p>
          <p className="text-white/85">
            Todos os direitos sobre o produto digital “+100 Atividades de Natal para Crianças” são reservados, nos termos da Lei nº 9.610/98 — Lei de Direitos Autorais.
          </p>
        </div>
      </footer>
    </div>
  );
}
