import { FashionItem } from '../types';

export const FASHION_ITEMS: FashionItem[] = [
  // =====================
  // ACESSÓRIOS DE CABEÇA
  // =====================
  {
    id: 'head-beret',
    name: 'Boina de Cineasta',
    category: 'head',
    phaseRequired: 1, // Desbloqueado desde o início
    icon: '🧢',
    color: '#0a192f',
    description: 'Estilo clássico da Nouvelle Vague francesa.'
  },
  {
    id: 'head-crown',
    name: 'Coroa Dourada Real',
    category: 'head',
    phaseRequired: 2, // Desbloqueado na Fase 2 (1000 pts)
    icon: '👑',
    color: '#fbbf24',
    description: 'Digna do Rei Leão e dos mestres da telona.'
  },
  {
    id: 'head-wizard',
    name: 'Chapéu de Mago',
    category: 'head',
    phaseRequired: 3, // Desbloqueado na Fase 3 (2000 pts)
    icon: '🧙‍♂️',
    color: '#6366f1',
    description: 'Inspirado em Hogwarts e na Terra-Média.'
  },
  {
    id: 'head-fedora',
    name: 'Fedora Noir de Detetive',
    category: 'head',
    phaseRequired: 4, // Desbloqueado na Fase 4 (3000 pts)
    icon: '🕵️',
    color: '#334155',
    description: 'O clássico chapéu dos filmes policiais e gângsteres.'
  },
  {
    id: 'head-space-helmet',
    name: 'Capacete Interestelar',
    category: 'head',
    phaseRequired: 5, // Desbloqueado na Fase 5 (4000 pts)
    icon: '🧑‍🚀',
    color: '#06b6d4',
    description: 'Para viagens cósmicas além do horizonte de eventos.'
  },

  // =====================
  // ÓCULOS & OLHOS
  // =====================
  {
    id: 'glasses-3d',
    name: 'Óculos 3D Retrô',
    category: 'glasses',
    phaseRequired: 1, // Inicial
    icon: '👓',
    color: '#f43f5e',
    description: 'As icônicas lentes azul e vermelha do cinema clássico.'
  },
  {
    id: 'glasses-sunglasses',
    name: 'Óculos Matrix Escuros',
    category: 'glasses',
    phaseRequired: 2, // 1000 pts
    icon: '🕶️',
    color: '#0f172a',
    description: 'Estilo cyber-agente que desvia de qualquer spoiler.'
  },
  {
    id: 'glasses-monocle',
    name: 'Monóculo de Crítico',
    category: 'glasses',
    phaseRequired: 3, // 2000 pts
    icon: '🧐',
    color: '#d97706',
    description: 'Para analisar planos-sequência com rigor de festival.'
  },
  {
    id: 'glasses-cyber-viser',
    name: 'Visor Cibernético Neon',
    category: 'glasses',
    phaseRequired: 4, // 3000 pts
    icon: '🥽',
    color: '#14b8a6',
    description: 'Direto de Blade Runner e do ano de 2049.'
  },
  {
    id: 'glasses-star-shades',
    name: 'Óculos Estrela Pop',
    category: 'glasses',
    phaseRequired: 5, // 4000 pts
    icon: '⭐',
    color: '#ec4899',
    description: 'Destaque absoluto de celebridade no tapete vermelho.'
  },

  // =====================
  // ROUPAS & FIGURINOS
  // =====================
  {
    id: 'outfit-casual',
    name: 'Camisa Pipoca & Cinema',
    category: 'outfit',
    phaseRequired: 1, // Inicial
    icon: '👕',
    color: '#0ea5e9',
    description: 'Camiseta leve e estilosa para maratonar filmes.'
  },
  {
    id: 'outfit-tuxedo',
    name: 'Smoking 007 Tapete Vermelho',
    category: 'outfit',
    phaseRequired: 2, // 1000 pts
    icon: '🤵',
    color: '#0a192f',
    description: 'Elegância de agente secreto em noite de gala do Oscar.'
  },
  {
    id: 'outfit-leather-jacket',
    name: 'Jaqueta de Couro Rebelde',
    category: 'outfit',
    phaseRequired: 3, // 2000 pts
    icon: '🧥',
    color: '#be123c',
    description: 'Atitude pura dos rebeldes dos anos 80 e 90.'
  },
  {
    id: 'outfit-gladiator-armor',
    name: 'Manto de Mestre Jedi',
    category: 'outfit',
    phaseRequired: 4, // 3000 pts
    icon: '🥋',
    color: '#78350f',
    description: 'Que a força do conhecimento cinéfilo esteja com você.'
  },
  {
    id: 'outfit-golden-suit',
    name: 'Traje Real Dourado Metálico',
    category: 'outfit',
    phaseRequired: 5, // 4000 pts
    icon: '✨',
    color: '#f59e0b',
    description: 'Tecido reluzente para quem domina o topo do ranking.'
  },

  // =====================
  // ACESSÓRIOS & ITENS DE MÃO
  // =====================
  {
    id: 'acc-popcorn',
    name: 'Balde de Pipoca Suprema',
    category: 'accessory',
    phaseRequired: 1, // Inicial
    icon: '🍿',
    color: '#fef08a',
    description: 'Acompanhamento sagrado e indispensável em cada sessão.'
  },
  {
    id: 'acc-clapperboard',
    name: 'Claquete de Direção',
    category: 'accessory',
    phaseRequired: 2, // 1000 pts
    icon: '🎬',
    color: '#1e293b',
    description: 'Luz, câmera, ação! Pronto para cortar cenas ruins.'
  },
  {
    id: 'acc-trophy',
    name: 'Estatueta do Oscar Dourada',
    category: 'accessory',
    phaseRequired: 3, // 2000 pts
    icon: '🏆',
    color: '#f59e0b',
    description: 'O troféu máximo entregue pela Academia de Cinema.'
  },
  {
    id: 'acc-lightsaber',
    name: 'Sabre de Luz Laser',
    category: 'accessory',
    phaseRequired: 4, // 3000 pts
    icon: '🪄',
    color: '#14b8a6',
    description: 'Arma elegante para tempos mais civilizados de quiz.'
  },
  {
    id: 'acc-directors-chair',
    name: 'Megafone de Diretor',
    category: 'accessory',
    phaseRequired: 5, // 4000 pts
    icon: '📢',
    color: '#f43f5e',
    description: 'Para dar ordens expressas no estúdio cinematográfico.'
  }
];

export const INITIAL_PLAYER_CUSTOMIZATION = {
  skinColor: '#fcd34d',
  hairColor: '#334155',
  headItem: 'head-beret',
  glassesItem: null,
  outfitItem: 'outfit-casual',
  accessoryItem: 'acc-popcorn',
};
