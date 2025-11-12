import React, { useState, useEffect } from 'react';
import { 
    SenaiLogo, 
    TargetIcon, 
    CheckIcon, 
    CrossIcon, 
    BrainIcon, 
    SpeechBubbleIcon, 
    FlowChartIcon, 
    DocumentIcon,
    BackArrowIcon,
    UpArrowIcon
} from './components/icons';

const Header: React.FC = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <SenaiLogo className="h-8 w-auto"/>
            <p className="text-xs sm:text-sm text-gray-400 text-right">
                Curso Técnico em Desenvolvimento de Sistemas // Situação de Aprendizagem 01
            </p>
        </div>
    </header>
);

const HeroSection: React.FC = () => {
    const [isMissionAccepted, setIsMissionAccepted] = useState(false);

    const handleAcceptMissionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (isMissionAccepted) return; 

        setIsMissionAccepted(true);

        setTimeout(() => {
            document.getElementById('missao')?.scrollIntoView({ behavior: 'smooth' });
        }, 700);

        setTimeout(() => {
            setIsMissionAccepted(false);
        }, 1500);
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    poster="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-scrolling-program-code-2949-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0a0c1f]/80"></div>
            </div>
            <div className="relative z-10 p-6">
                <div className={`transition-all duration-700 ${isMissionAccepted ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    <h1 className="font-teko text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-wider text-white drop-shadow-lg">
                        VOCÊ NÃO É (SÓ) UM ALUNO.
                        <br/> 
                        É UM ARQUITETO DE SOLUÇÕES.
                    </h1>
                    <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
                        O Desafio "Tico e Teco" 🔩 não é sobre parafusos. É sobre construir a fundação de um projeto real.
                    </h2>
                </div>
                <a 
                    href="#missao" 
                    onClick={handleAcceptMissionClick}
                    className={`mt-8 inline-flex items-center gap-3 bg-[#39FF14] text-[#1a1a1a] font-bold text-lg py-3 px-8 rounded-md uppercase font-teko tracking-widest transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#39FF14] ${isMissionAccepted ? 'animate-pulse-glow' : ''}`}
                >
                    <TargetIcon className="h-6 w-6"/>
                    Aceitar a Missão
                </a>
            </div>
        </section>
    );
};


const ClientProblemSection: React.FC = () => (
    <section id="missao" className="py-20 md:py-32 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-96 md:h-auto md:aspect-square relative rounded-lg overflow-hidden border-2 border-gray-700">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"}}>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-gray-300 font-bold text-2xl drop-shadow-md">ANTIGO</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"}}>
                         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <span className="text-white font-bold text-2xl drop-shadow-md">MODERNO</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-teko text-5xl uppercase text-white">A ORDEM DE SERVIÇO: TICO E TECO</h3>
                    <p className="mt-4 text-gray-300">
                        Nosso cliente é real. Uma empresa tradicional do ramo industrial. Eles querem entrar no mundo digital. Parece fácil? Pense de novo.
                    </p>
                    <p className="mt-4 text-lg text-white p-4 border-l-4 border-[#39FF14] bg-gray-800/50 rounded-r-md">
                        <strong>O DESAFIO:</strong> O mesmo site precisa vender um parafuso para o seu vizinho (Consumidor Final) e 10.000 unidades para uma indústria (Cliente B2B). Como você faz isso?
                    </p>
                    <p className="mt-4 text-gray-300">
                        Eles não precisam de um 'programador'. Eles precisam de um estrategista.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const MindsetShiftSection: React.FC = () => (
    <section className="py-20 md:py-32 bg-[#111]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-teko text-6xl uppercase">O CÓDIGO É SÓ O FIM DO JOGO.</h2>
            <p className="text-gray-400 mt-2">90% dos projetos de software falham. Quase todos falham aqui.</p>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                <div className="p-8 border-2 border-red-900/50 bg-red-900/10 rounded-lg">
                    <h4 className="font-teko text-3xl text-red-400">O QUE O AMADOR FAZ</h4>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-start gap-3"><CrossIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1"/><span>Sai programando sem pensar.</span></li>
                        <li className="flex items-start gap-3"><CrossIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1"/><span>Acha que 'Briefing' é perda de tempo.</span></li>
                        <li className="flex items-start gap-3"><CrossIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1"/><span>Ignora o cliente.</span></li>
                        <li className="flex items-start gap-3"><CrossIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1"/><span><strong>Resultado:</strong> O projeto falha.</span></li>
                    </ul>
                </div>
                <div className="p-8 border-2 border-[#39FF14]/50 bg-[#39FF14]/10 rounded-lg">
                    <h4 className="font-teko text-3xl text-[#39FF14]">O QUE O PROFISSIONAL (SENAI) FAZ</h4>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-start gap-3"><CheckIcon className="h-6 w-6 text-[#39FF14] flex-shrink-0 mt-1"/><span>Gasta 8h planejando para economizar 80h codando.</span></li>
                        <li className="flex items-start gap-3"><CheckIcon className="h-6 w-6 text-[#39FF14] flex-shrink-0 mt-1"/><span>Domina o Briefing e as Entrevistas.</span></li>
                        <li className="flex items-start gap-3"><CheckIcon className="h-6 w-6 text-[#39FF14] flex-shrink-0 mt-1"/><span>Define Requisitos e Regras de Negócio.</span></li>
                        <li className="flex items-start gap-3"><CheckIcon className="h-6 w-6 text-[#39FF14] flex-shrink-0 mt-1"/><span><strong>Resultado:</strong> Constrói uma solução que funciona.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, text }) => (
    <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg transition-all duration-300 hover:border-[#39FF14] hover:scale-105 hover:bg-gray-800">
        <div className="text-[#39FF14]">{icon}</div>
        <h4 className="font-teko text-3xl mt-4 uppercase">{title}</h4>
        <p className="text-gray-400 mt-2">{text}</p>
    </div>
);

const ArsenalSection: React.FC = () => (
    <section className="py-20 md:py-32 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
            <h3 className="font-teko text-6xl uppercase">SEU NOVO ARSENAL DE HABILIDADES</h3>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <SkillCard 
                    icon={<BrainIcon className="h-10 w-10"/>}
                    title="AUTOGESTÃO E AUTONOMIA"
                    text="Aprenda a gerenciar seu tempo, tomar decisões e ser o dono do projeto. A habilidade que NENHUMA IA pode substituir."
                />
                <SkillCard 
                    icon={<SpeechBubbleIcon className="h-10 w-10"/>}
                    title="A ARTE DE PERGUNTAR"
                    text="Você vai dominar o Briefing e a Entrevista. Traduzir o 'caos' da cabeça do cliente em um plano de ação claro."
                />
                <SkillCard 
                    icon={<FlowChartIcon className="h-10 w-10"/>}
                    title="O MAPA DO TESOURO"
                    text="Aprenda a escrever Requisitos Funcionais e Não Funcionais. É o contrato oficial. É o mapa que todo o time de DEVs vai seguir."
                />
            </div>
        </div>
    </section>
);

const FutureValueSection: React.FC = () => (
    <section className="py-20 md:py-40 bg-cover bg-center bg-fixed relative" style={{backgroundImage: "url('https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"}}>
        <div className="absolute inset-0 bg-[#0a0c1f]/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="font-teko text-5xl md:text-7xl uppercase text-white drop-shadow-lg">
                A IA SABE CODAR. VOCÊ SABE <span className="text-[#39FF14]">O QUÊ</span> CODAR.
            </h2>
            <p className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl text-gray-200 font-bold">
                "Daqui para frente, o mercado não vai pagar quem só 'digita código'. O mercado vai pagar quem entende o problema, define a solução e lidera a execução. O SENAI não está te treinando para ser um digitador. Estamos te treinando para ser o Arquiteto que diz à IA o que construir."
            </p>
        </div>
    </section>
);

const DeliverableSection: React.FC = () => (
    <section className="py-20 md:py-32 bg-[#111]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
            <h3 className="font-teko text-5xl uppercase">A SUA ENTREGA FINAL</h3>
            <p className="mt-4 text-xl text-gray-300">
                Um <strong>Documento de Escopo em PDF</strong>. Completo. Profissional. E um <strong>Checklist de Validação</strong> que prova que você analisou cada ângulo do projeto.
            </p>
            <p className="mt-6 text-gray-400 text-lg p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                Grupos de 4. Duas semanas (8h de coleta, 8h de organização).
            </p>
        </div>
    </section>
);

const FinalCTASection: React.FC<{ onAccessBriefing: () => void }> = ({ onAccessBriefing }) => (
    <section className="min-h-[80vh] bg-[#1a1a1a] flex items-center justify-center text-center">
        <div className="container mx-auto px-6">
            <h1 className="font-teko text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-wider text-white">
                O DESAFIO ESTÁ LANÇADO.
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-gray-300">
                Pronto para provar que você é mais do que um 'aluno'?
            </p>
            <button
                onClick={onAccessBriefing}
                className="mt-12 inline-flex items-center gap-4 bg-[#39FF14] text-[#1a1a1a] font-bold text-xl py-4 px-10 rounded-md uppercase font-teko tracking-widest transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_#39FF14]"
            >
                <DocumentIcon className="h-7 w-7"/>
                Acessar o Briefing Completo Agora
            </button>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="bg-black py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
            <div className="flex justify-center md:justify-start">
                <SenaiLogo className="h-8 w-auto"/>
            </div>
            <p className="text-sm text-gray-500">
                Uma Situação de Aprendizagem do Curso Técnico em Desenvolvimento de Sistemas.
            </p>
            <p className="text-sm text-gray-500 text-center md:text-right">
                Seu futuro começa com a fundação certa.
            </p>
        </div>
    </footer>
);

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 bg-[#39FF14] text-[#1a1a1a] rounded-full shadow-lg transition-opacity duration-300 hover:scale-110 hover:shadow-[0_0_20px_#39FF14] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Voltar ao topo"
        >
            <UpArrowIcon className="h-6 w-6" />
        </button>
    );
};


const LandingPage: React.FC<{ onAccessBriefing: () => void }> = ({ onAccessBriefing }) => (
    <div className="bg-[#1a1a1a] text-white font-inter">
        <Header />
        <main>
            <HeroSection />
            <ClientProblemSection />
            <MindsetShiftSection />
            <ArsenalSection />
            <FutureValueSection />
            <DeliverableSection />
            <FinalCTASection onAccessBriefing={onAccessBriefing} />
        </main>
        <Footer />
        <BackToTopButton />
    </div>
);

const BriefingPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <h2 className="font-teko text-4xl uppercase text-[#39FF14] mt-12 mb-4 border-b-2 border-[#39FF14]/30 pb-2">{children}</h2>
    );

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onBack();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onBack]);

    return (
        <div className="min-h-screen bg-[#0a0c1f] text-gray-200 p-6 sm:p-10 animate-fade-in">
            <div className="max-w-5xl mx-auto font-inter">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="font-teko text-5xl sm:text-6xl uppercase text-white">Documento de Briefing</h1>
                        <p className="text-gray-400">PROJETO: TICO E TECO - PLATAFORMA E-COMMERCE</p>
                    </div>
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-[#39FF14] font-bold uppercase font-teko text-lg tracking-wider transition-transform hover:scale-105"
                    >
                        <BackArrowIcon className="h-6 w-6"/>
                        Voltar à Missão
                    </button>
                </header>

                <div className="bg-[#1a1a1a]/70 p-8 rounded-lg border border-gray-700">
                    <SectionTitle>1. Visão Geral do Projeto</SectionTitle>
                    <p>O cliente, Tico e Teco Parafusos S.A., é uma empresa tradicional no setor industrial, buscando expandir sua operação para o mundo digital. O objetivo é criar uma plataforma de e-commerce robusta que atenda a dois públicos distintos: o consumidor final (B2C) e clientes industriais (B2B).</p>
                    
                    <SectionTitle>2. O Desafio Central</SectionTitle>
                    <p className="text-lg font-bold text-white">A plataforma deve conciliar as necessidades de venda no varejo e no atacado em um único sistema coeso.</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li><strong>Consumidor Final (B2C):</strong> Busca uma experiência de compra simples, rápida, com preços unitários e checkout descomplicado.</li>
                        <li><strong>Cliente Industrial (B2B):</strong> Necessita de orçamentos, compra em grandes volumes (milhares de unidades), preços diferenciados por quantidade, e um processo de compra mais formalizado.</li>
                    </ul>

                    <SectionTitle>3. Requisitos Funcionais (O que deve fazer)</SectionTitle>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                        <li><strong>Catálogo de Produtos:</strong> Apresentação clara de todos os itens, com especificações técnicas detalhadas.</li>
                        <li><strong>Sistema de Autenticação Duplo:</strong> Perfis separados para clientes B2C e B2B com funcionalidades distintas.</li>
                        <li><strong>Precificação Dinâmica:</strong> O sistema deve exibir preços diferentes para B2C (unitário) e B2B (por lote, com descontos progressivos).</li>
                        <li><strong>Carrinho de Compras Adaptável:</strong> Funcionalidades de "compra rápida" para B2C e "solicitação de orçamento" para B2B.</li>
                        <li><strong>Painel de Cliente B2B:</strong> Área para gerenciar pedidos recorrentes, visualizar históricos de compras e acessar faturas.</li>
                    </ul>
                    
                    <SectionTitle>4. Requisitos Não Funcionais (Como deve ser)</SectionTitle>
                     <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                        <li><strong>Segurança:</strong> Proteção de dados do cliente e transações financeiras (SSL, etc.).</li>
                        <li><strong>Performance:</strong> Carregamento rápido das páginas, mesmo com um catálogo extenso de produtos.</li>
                        <li><strong>Responsividade:</strong> Experiência de uso perfeita em desktops, tablets e smartphones.</li>
                        <li><strong>Escalabilidade:</strong> A arquitetura deve suportar o crescimento futuro do número de produtos e clientes.</li>
                    </ul>

                    <SectionTitle>5. Entregáveis da Equipe</SectionTitle>
                    <p>O resultado desta fase de levantamento de requisitos será um <strong>Documento de Escopo</strong> detalhado (em formato PDF), contendo a especificação completa de todas as funcionalidades, regras de negócio e diagramas de fluxo necessários para o desenvolvimento.</p>
                </div>
                
                <div className="mt-12 text-center">
                    <button
                        onClick={onBack}
                        className="inline-flex items-center gap-3 bg-[#39FF14] text-[#1a1a1a] font-bold text-lg py-3 px-8 rounded-md uppercase font-teko tracking-widest transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#39FF14]"
                    >
                        <BackArrowIcon className="h-6 w-6"/>
                        Voltar à Visão Geral da Missão
                    </button>
                </div>
            </div>
        </div>
    );
};


function App() {
    const [view, setView] = useState<'landing' | 'briefing'>('landing');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    if (view === 'briefing') {
        return <BriefingPage onBack={() => setView('landing')} />;
    }

    return <LandingPage onAccessBriefing={() => setView('briefing')} />;
}

export default App;
