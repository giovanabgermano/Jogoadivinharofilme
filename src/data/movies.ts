import { Movie } from '../types';

export const MOVIES_DATABASE: Movie[] = [
  // ==========================================
  // FASE 1: INICIANTE (Clássicos Populares)
  // Dicas diretas, enredo muito conhecido, personagens icônicos
  // ==========================================
  {
    id: 'titanic',
    titlePt: 'Titanic',
    titleOriginal: 'Titanic',
    aliases: ['O Titanic'],
    phase: 1,
    year: 1997,
    genre: 'Romance / Drama',
    director: 'James Cameron',
    mainClue: 'Um jovem artista pobre e uma aristocrata prometida se apaixonam a bordo do navio mais famoso do mundo em sua fatídica viagem inaugural.',
    extraClues: [
      'Personagens principais: Jack Dawson e Rose DeWitt Bukater.',
      'O colar precioso no centro da história chama-se "O Coração do Oceano".',
      'Ganhou 11 estatuetas do Oscar e tem trilha cantada por Céline Dion.'
    ],
    quote: '"Eu sou o rei do mundo!"',
    emojis: '🚢 🧊 🎨 💎 🌊',
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'rei-leao',
    titlePt: 'O Rei Leão',
    titleOriginal: 'The Lion King',
    aliases: ['Rei Leao', 'The Lion King', 'Lion King'],
    phase: 1,
    year: 1994,
    genre: 'Animação / Aventura',
    director: 'Roger Allers, Rob Minkoff',
    mainClue: 'Um filhote de leão herdeiro de um reino africano foge após a trágica morte de seu pai e cresce aprendendo a filosofia do "Hakuna Matata".',
    extraClues: [
      'O vilão é o tio do protagonista e comanda um exército de hienas.',
      'Amigos inseparáveis: um suricato esperto e um javali glutão.',
      'A pedra proeminente onde os reis são apresentados é a Pedra do Reino.'
    ],
    quote: '"Lembre-se de quem você é."',
    emojis: '🦁 👑 🌅 🐗 🐗',
    posterUrl: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'jurassic-park',
    titlePt: 'Jurassic Park: Parque dos Dinossauros',
    titleOriginal: 'Jurassic Park',
    aliases: ['Jurassic Park', 'Parque dos Dinossauros', 'Jurassic Park Parque dos Dinossauros'],
    phase: 1,
    year: 1993,
    genre: 'Ficção Científica / Aventura',
    director: 'Steven Spielberg',
    mainClue: 'Cientistas usam DNA preservado em âmbar pré-histórico para recriar répteis gigantes em uma ilha remota da Costa Rica.',
    extraClues: [
      'A frase clássica: "A vida encontra um meio".',
      'Cena clássica das ondulações no copo de água anunciando a chegada de um T-Rex.',
      'Baseado no livro best-seller de Michael Crichton.'
    ],
    quote: '"A vida, hã... encontra um meio."',
    emojis: '🦖 🌴 🚙 🧬 🦟',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'vingadores-ultimato',
    titlePt: 'Vingadores: Ultimato',
    titleOriginal: 'Avengers: Endgame',
    aliases: ['Avengers Endgame', 'Vingadores Ultimato', 'Endgame', 'Ultimato'],
    phase: 1,
    year: 2019,
    genre: 'Ação / Super-heróis',
    director: 'Anthony Russo, Joe Russo',
    mainClue: 'Após metade da vida no universo ser dizimada com um estalar de dedos, os heróis sobreviventes viajam no tempo pelas Joias do Infinito.',
    extraClues: [
      'Capitão América empunha o martelo Mjolnir em batalha épica.',
      'O sacrifício final do Homem de Ferro com a frase "Eu sou o Homem de Ferro".',
      'Maior reunião de heróis dos quadrinhos da Marvel no cinema.'
    ],
    quote: '"Eu te amo 3000."',
    emojis: '🦸 ⏳ 💎 🥊 🛡️',
    posterUrl: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'harry-potter-pedra-filosofal',
    titlePt: 'Harry Potter e a Pedra Filosofal',
    titleOriginal: "Harry Potter and the Philosopher's Stone",
    aliases: ['Harry Potter 1', 'A Pedra Filosofal', 'Harry Potter e a Pedra Filosofal', "Harry Potter and the Sorcerer's Stone"],
    phase: 1,
    year: 2001,
    genre: 'Fantasia / Aventura',
    director: 'Chris Columbus',
    mainClue: 'Um garoto órfão que vivia embaixo de uma escada descobre em seu aniversário de 11 anos que é um bruxo e foi aceito em Hogwarts.',
    extraClues: [
      'O protagonista tem uma cicatriz em forma de raio na testa.',
      'Melhores amigos: um ruivo de família numerosa e uma garota prodígio.',
      'Esporte jogado voando em vassouras: Quadribol.'
    ],
    quote: '"Você é um bruxo, Harry."',
    emojis: '🧙 ⚡ 🦉 🚂 🏰',
    posterUrl: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'star-wars-nova-esperanca',
    titlePt: 'Star Wars: Uma Nova Esperança',
    titleOriginal: 'Star Wars: A New Hope',
    aliases: ['Star Wars', 'Guerra nas Estrelas', 'Uma Nova Esperança', 'Star Wars Episodio IV', 'Star Wars IV'],
    phase: 1,
    year: 1977,
    genre: 'Ficção Científica / Aventura',
    director: 'George Lucas',
    mainClue: 'Um jovem fazendeiro de um planeta desértico parte em uma jornada espacial para resgatar uma princesa e destruir a Estrela da Morte.',
    extraClues: [
      'Mentor idoso: Obi-Wan Kenobi, que ensina o poder da Força.',
      'Parceiros de nave: Han Solo e um alienígena peludo wookiee.',
      'Vilão mascarado de respiração mecânica com sabre de luz vermelho.'
    ],
    quote: '"Que a Força esteja com você."',
    emojis: '⚔️ 🚀 🌌 🤖 👑',
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'de-volta-para-o-futuro',
    titlePt: 'De Volta Para o Futuro',
    titleOriginal: 'Back to the Future',
    aliases: ['De Volta Pro Futuro', 'Back to the Future'],
    phase: 1,
    year: 1985,
    genre: 'Ficção Científica / Comédia',
    director: 'Robert Zemeckis',
    mainClue: 'Um adolescente dos anos 80 é acidentalmente transportado para 1955 a bordo de um carro DeLorean movido a plutônio criado por um cientista excêntrico.',
    extraClues: [
      'Ele precisa fazer seus futuros pais se apaixonarem para não desaparecer da existência.',
      'O carro precisa atingir exatamente 88 milhas por hora.',
      'Protagonistas: Marty McFly e Dr. Emmett Brown.'
    ],
    quote: '"Para onde vamos, não precisamos de estradas."',
    emojis: '🚗 ⚡ 🎸 🕰️ 🛹',
    posterUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'toy-story',
    titlePt: 'Toy Story',
    titleOriginal: 'Toy Story',
    aliases: ['Toy Story 1', 'Toy Story Um Mundo de Aventuras'],
    phase: 1,
    year: 1995,
    genre: 'Animação / Aventura',
    director: 'John Lasseter',
    mainClue: 'Um xerife de brinquedo feito de pano tem seu posto de favorito ameaçado quando um moderno patrulheiro espacial chega ao quarto de Andy.',
    extraClues: [
      'Primeiro longa-metragem da história do cinema feito inteiramente em computação gráfica.',
      'Os dois brinquedos rivais acabam presos na casa do vizinho destrutivo Sid.',
      'Música tema célebre: "Amigo Estou Aqui".'
    ],
    quote: '"Ao infinito e além!"',
    emojis: '🤠 🚀 🧸 🦖 🎈',
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'procurando-nemo',
    titlePt: 'Procurando Nemo',
    titleOriginal: 'Finding Nemo',
    aliases: ['Finding Nemo', 'Nemo'],
    phase: 1,
    year: 2003,
    genre: 'Animação / Família',
    director: 'Andrew Stanton',
    mainClue: 'Um peixe-palhaço superprotetor cruza todo o oceano em busca de seu filho capturado por um mergulhador e levado a um aquário em Sydney.',
    extraClues: [
      'Ele recebe a ajuda de um peixe cirurgião-patela fêmea que sofre de perda de memória recente.',
      'Frase inspiradora: "Continue a nadar, continue a nadar!".',
      'Passam por tartarugas surfistas na Corrente Leste-Australiana.'
    ],
    quote: '"Continue a nadar, continue a nadar!"',
    emojis: '🐠 🌊 🐢 🦈 🦷',
    posterUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'shrek',
    titlePt: 'Shrek',
    titleOriginal: 'Shrek',
    aliases: ['Shrek 1'],
    phase: 1,
    year: 2001,
    genre: 'Animação / Comédia',
    director: 'Andrew Adamson, Vicky Jenson',
    mainClue: 'Um ogro verde que ama a solidão de seu pântano faz um acordo com um lorde tirano para resgatar uma princesa protegida por um dragão.',
    extraClues: [
      'É acompanhado por um burro tagarela que adora waffles.',
      'A princesa guarda um segredo que se revela ao pôr do sol.',
      'Venceu o primeiro Oscar de Melhor Filme de Animação da história.'
    ],
    quote: '"Os ogros são como cebolas."',
    emojis: '🟢 🧅 🐴 👸 🏰',
    posterUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },
  {
    id: 'homem-aranha',
    titlePt: 'Homem-Aranha',
    titleOriginal: 'Spider-Man',
    aliases: ['Spider Man', 'Spider-Man', 'Homem Aranha'],
    phase: 1,
    year: 2002,
    genre: 'Ação / Ficção Científica',
    director: 'Sam Raimi',
    mainClue: 'Um estudante colegial tímido é picado por um aracnídeo geneticamente modificado e ganha habilidades sobre-humanas em Nova York.',
    extraClues: [
      'Aprende que "com grandes poderes vêm grandes responsabilidades" após a morte de seu tio Ben.',
      'Enfrenta o Duende Verde, alter ego do pai de seu melhor amigo.',
      'Beijo invertido na chuva com Mary Jane Watson.'
    ],
    quote: '"Com grandes poderes vêm grandes responsabilidades."',
    emojis: '🕷️ 🕸️ 🏙️ 🧪 🧗',
    posterUrl: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Iniciante'
  },

  // ==========================================
  // FASE 2: INTERMEDIÁRIO (Filmes Marcantes)
  // Citações famosas, pistas de contexto e trama detalhada
  // ==========================================
  {
    id: 'senhor-dos-aneis-sociedade',
    titlePt: 'O Senhor dos Anéis: A Sociedade do Anel',
    titleOriginal: 'The Lord of the Rings: The Fellowship of the Ring',
    aliases: ['O Senhor dos Aneis', 'A Sociedade do Anel', 'Lord of the Rings', 'Senhor dos Aneis A Sociedade do Anel'],
    phase: 2,
    year: 2001,
    genre: 'Fantasia / Aventura',
    director: 'Peter Jackson',
    mainClue: 'Um hobbit pacato do Condado recebe a missão de levar uma joia forjada pelo Senhor das Trevas até as chamas da Montanha da Perdição.',
    extraClues: [
      'Nove companheiros formam uma comitiva composta por homens, elfo, anão, hobbits e um mago cinzento.',
      'Uma criatura decadente chamada Gollum persegue obsessivamente o anel chamando-o de "meu precioso".',
      'Filmado inteiramente nas paisagens exuberantes da Nova Zelândia.'
    ],
    quote: '"Você não vai passar!"',
    emojis: '💍 🧝 🧙 🌋 🗡️',
    posterUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'o-poderoso-chefao',
    titlePt: 'O Poderoso Chefão',
    titleOriginal: 'The Godfather',
    aliases: ['Poderoso Chefao', 'The Godfather', 'Godfather'],
    phase: 2,
    year: 1972,
    genre: 'Crime / Drama',
    director: 'Francis Ford Coppola',
    mainClue: 'O patriarca de uma influente família mafiosa de Nova York transfere o controle de seu império clandestino para seu filho mais novo e relutante.',
    extraClues: [
      'Marlon Brando interpreta Don Vito Corleone, que fala baixo e acolhe favores no casamento de sua filha.',
      'Cena chocante com uma cabeça de cavalo decepada na cama de um produtor de Hollywood.',
      'Baseado no romance escrito por Mario Puzo.'
    ],
    quote: '"Vou fazer uma proposta que ele não poderá recusar."',
    emojis: '🌹 🤵 🔫 🍝 💼',
    posterUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'interestelar',
    titlePt: 'Interestelar',
    titleOriginal: 'Interstellar',
    aliases: ['Interstellar'],
    phase: 2,
    year: 2014,
    genre: 'Ficção Científica / Drama',
    director: 'Christopher Nolan',
    mainClue: 'Com a Terra à beira do colapso ecológico, um ex-piloto da NASA lidera uma tripulação através de um buraco de minhoca perto de Saturno.',
    extraClues: [
      'A dilatação temporal faz com que 1 hora em um planeta aquático equivalha a 7 anos na Terra.',
      'A comunicação com sua filha se dá através da gravidade no ponteiro de um relógio dentro de uma estante.',
      'Trilha sonora memorável executada em órgão de tubos composta por Hans Zimmer.'
    ],
    quote: '"Não entre dócil nessa noite escura."',
    emojis: '🪐 ⏳ 🌾 🛰️ 🌽',
    posterUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'batman-cavaleiro-das-trevas',
    titlePt: 'Batman: O Cavaleiro das Trevas',
    titleOriginal: 'The Dark Knight',
    aliases: ['O Cavaleiro das Trevas', 'The Dark Knight', 'Batman Cavaleiro das Trevas', 'Dark Knight'],
    phase: 2,
    year: 2008,
    genre: 'Ação / Suspense',
    director: 'Christopher Nolan',
    mainClue: 'O vigilante mascarado de Gotham City enfrenta uma mente criminosa psicótica e anarquista que quer mergulhar a cidade no caos puro.',
    extraClues: [
      'Heath Ledger ganhou o Oscar póstumo de Melhor Ator Coadjuvante por seu Coringa inesquecível.',
      'O promotor de justiça Harvey Dent se torna o vilão Duas-Caras.',
      'A célebre charada moral envolvendo dois barcos cheios de explosivos.'
    ],
    quote: '"Por que tão sério?"',
    emojis: '🦇 🃏 🏙️ 🪙 💥',
    posterUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'forrest-gump',
    titlePt: 'Forrest Gump: O Contador de Histórias',
    titleOriginal: 'Forrest Gump',
    aliases: ['Forrest Gump', 'O Contador de Historias'],
    phase: 2,
    year: 1994,
    genre: 'Drama / Comédia',
    director: 'Robert Zemeckis',
    mainClue: 'Sentado em um banco de praça com uma caixa de bombons, um homem ingênuo do Alabama relembra como presenciou os maiores eventos históricos dos EUA.',
    extraClues: [
      'Ele corre pelos Estados Unidos por anos, luta na Guerra do Vietnã e joga pingue-pongue na China.',
      'Seu grande amor de infância e vida inteira se chama Jenny.',
      'Cria uma bem-sucedida empresa de pesca de camarão chamada Bubba Gump.'
    ],
    quote: '"A vida é como uma caixa de chocolates: você nunca sabe o que vai encontrar."',
    emojis: '🍫 👟 🪶 🏓 🦐',
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'gladiador',
    titlePt: 'Gladiador',
    titleOriginal: 'Gladiator',
    aliases: ['Gladiator'],
    phase: 2,
    year: 2000,
    genre: 'Ação / Épico',
    director: 'Ridley Scott',
    mainClue: 'Um respeitado general romano é traído pelo novo e invejoso imperador, sua família é assassinada e ele é vendido como escravo para lutar na arena.',
    extraClues: [
      'Protagonizado por Russell Crowe no papel de Maximus Decimus Meridius.',
      'O imperador corrupto e arrogante é Cômodo, vivido por Joaquin Phoenix.',
      'Cenas inesquecíveis das mãos acariciando o trigo nos campos elísios.'
    ],
    quote: '"O que fazemos em vida ecoa pela eternidade."',
    emojis: '⚔️ 🏛️ 🛡️ 🌾 🐅',
    posterUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'avatar',
    titlePt: 'Avatar',
    titleOriginal: 'Avatar',
    aliases: ['Avatar 1'],
    phase: 2,
    year: 2009,
    genre: 'Ficção Científica / Aventura',
    director: 'James Cameron',
    mainClue: 'Um fuzileiro paraplégico é enviado para uma lua alienígena luxuriante onde habita a raça Na’vi e se divide entre suas ordens militares e seu novo povo.',
    extraClues: [
      'A lua extraterrestre cheia de florestas bioluminescentes e montanhas flutuantes é Pandora.',
      'O minério precioso que os humanos buscam extrair se chama unobtanium.',
      'Revolucionou as salas de cinema com projeções em 3D de alta tecnologia.'
    ],
    quote: '"Eu vejo você."',
    emojis: '🏹 🌿 🌌 🧬 🐲',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'cidade-de-deus',
    titlePt: 'Cidade de Deus',
    titleOriginal: 'Cidade de Deus',
    aliases: ['City of God'],
    phase: 2,
    year: 2002,
    genre: 'Crime / Drama',
    director: 'Fernando Meirelles, Kátia Lund',
    mainClue: 'No subúrbio carioca, dois jovens tomam caminhos opostos: um busca se tornar fotógrafo e o outro se transforma no líder do tráfico mais temido do morro.',
    extraClues: [
      'Personagens históricos do cinema brasileiro: Buscapé, Zé Pequeno e Bené.',
      'O filme recebeu 4 indicações ao Oscar, feito histórico para o Brasil.',
      'Abertura marcante com o preparo de um churrasco e uma galinha em fuga pelas vielas.'
    ],
    quote: '"Dadinho é o c******, meu nome agora é Zé Pequeno, p****!"',
    emojis: '📸 🇧🇷 🐔 🔫 🏙️',
    posterUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'auto-da-compadecida',
    titlePt: 'O Auto da Compadecida',
    titleOriginal: 'O Auto da Compadecida',
    aliases: ['Auto da Compadecida'],
    phase: 2,
    year: 2000,
    genre: 'Comédia / Aventura',
    director: 'Guel Arraes',
    mainClue: 'No sertão paraibano, dois amigos pobres e espertos armam trapaças hilárias e acabam enfrentando o Diabo e pedindo a intercessão de Nossa Senhora no Julgamento Final.',
    extraClues: [
      'Baseado na clássica peça teatral de Ariano Suassuna.',
      'Protagonistas: João Grilo e Chicó.',
      'Chicó sempre finaliza suas histórias mirabolantes dizendo: "Não sei, só sei que foi assim".'
    ],
    quote: '"Não sei, só sei que foi assim!"',
    emojis: '🌵 🍞 🐕 ⛪ ⚖️',
    posterUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'a-origem',
    titlePt: 'A Origem',
    titleOriginal: 'Inception',
    aliases: ['Inception', 'Origem'],
    phase: 2,
    year: 2010,
    genre: 'Ficção Científica / Ação',
    director: 'Christopher Nolan',
    mainClue: 'Um ladrão especialista em espionagem corporativa que rouba segredos do subconsciente durante o sono recebe a missão inversa: plantar uma ideia.',
    extraClues: [
      'Para saber se estão na realidade ou no sonho, eles usam pequenos objetos chamados totens.',
      'O totem do protagonista Dom Cobb é um peão de metal que gira perpetuamente nos sonhos.',
      'Cenas com cidades que se dobram sobre si mesmas e lutas em gravidade zero em corredores.'
    ],
    quote: '"Um sonho dentro de um sonho."',
    emojis: '🌀 🛌 🏙️ ⏱️ 🕴️',
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },
  {
    id: 'curtindo-a-vida-adoidado',
    titlePt: 'Curtindo a Vida Adoidado',
    titleOriginal: "Ferris Bueller's Day Off",
    aliases: ['Curtindo a Vida Adoidado', "Ferris Bueller's Day Off", 'Ferris Bueller'],
    phase: 2,
    year: 1986,
    genre: 'Comédia / Teen',
    director: 'John Hughes',
    mainClue: 'Um estudante carismático finge estar doente para matar aula com a namorada e o melhor amigo a bordo de uma Ferrari vintage em Chicago.',
    extraClues: [
      'Ele quebra constantemente a quarta parede falando direto com o espectador.',
      'O diretor da escola passa o dia inteiro perseguindo o garoto obstinadamente.',
      'A icônica dança na parada da cidade cantando "Twist and Shout".'
    ],
    quote: '"A vida passa muito rápido. Se você não parar de vez em quando para olhar ao redor, pode perdê-la."',
    emojis: '🕶️ 🏎️ 🎸 🏫 🗽',
    posterUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Intermediário'
  },

  // ==========================================
  // FASE 3: CINÉFILO (Obras Aclamadas & Cults)
  // Detalhes da narrativa, direção e cinematografia
  // ==========================================
  {
    id: 'pulp-fiction',
    titlePt: 'Pulp Fiction: Tempo de Violência',
    titleOriginal: 'Pulp Fiction',
    aliases: ['Pulp Fiction', 'Tempo de Violencia'],
    phase: 3,
    year: 1994,
    genre: 'Crime / Drama',
    director: 'Quentin Tarantino',
    mainClue: 'Histórias entrelaçadas no submundo criminoso de Los Angeles envolvendo dois assassinos de aluguel que discutem sobre hambúrgueres europeus.',
    extraClues: [
      'Uma maleta com código 666 que brilha em tom dourado quando aberta.',
      'Cena de dança retrô no restaurante Jack Rabbit Slims ao som de Chuck Berry.',
      'Estrutura narrativa contada de forma não-linear e fragmentada.'
    ],
    quote: '"E você saberá que o meu nome é o Senhor, quando eu fizer cair a minha vingança sobre você!"',
    emojis: '🍔 💼 💃 💉 🔫',
    posterUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'clube-da-luta',
    titlePt: 'Clube da Luta',
    titleOriginal: 'Fight Club',
    aliases: ['Fight Club'],
    phase: 3,
    year: 1999,
    genre: 'Drama / Suspense',
    director: 'David Fincher',
    mainClue: 'Um homem deprimido e insone conhece um carismático vendedor de sabão e juntos criam uma organização subterrânea que logo vira um grupo terrorista anti-capitalista.',
    extraClues: [
      'A primeira regra é terminantemente proibido falar sobre ele.',
      'A grande reviravolta sobre a identidade real de Tyler Durden.',
      'Cena final com prédios desmoronando ao som de "Where Is My Mind?" dos Pixies.'
    ],
    quote: '"A primeira regra do Clube da Luta é: você não fala sobre o Clube da Luta."',
    emojis: '🧼 🥊 🏢 🚬 👥',
    posterUrl: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'bastardos-inglorios',
    titlePt: 'Bastardos Inglórios',
    titleOriginal: 'Inglourious Basterds',
    aliases: ['Bastardos Inglorios', 'Inglourious Basterds'],
    phase: 3,
    year: 2009,
    genre: 'Guerra / Ação',
    director: 'Quentin Tarantino',
    mainClue: 'Na França ocupada pelos nazistas, um esquadrão de soldados judeus-americanos comete atos violentos de retaliação e planeja assassinar a liderança do Reich em um cinema.',
    extraClues: [
      'Christoph Waltz interpreta o poliglota e implacável coronel Hans Landa ("O Caçador de Judeus").',
      'O erro fatal de um espião britânico ao pedir três copos de uísque com o gesto errado de dedos em uma taberna.',
      'A dona do cinema parisiense é Shosanna Dreyfus, sobrevivente do massacre de sua família.'
    ],
    quote: '"Au revoir, Shosanna!"',
    emojis: '🎥 🔥 🍺 🪖 🗡️',
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'o-iluminado',
    titlePt: 'O Iluminado',
    titleOriginal: 'The Shining',
    aliases: ['O Iluminado', 'The Shining'],
    phase: 3,
    year: 1980,
    genre: 'Terror / Suspense',
    director: 'Stanley Kubrick',
    mainClue: 'Um escritor em bloqueio criativo aceita ser caseiro de inverno de um hotel isolado nas montanhas do Colorado e enlouquece gradualmente.',
    extraClues: [
      'Seu filho pequeno possui dons telepáticos e fala com um amigo imaginário chamado Tony.',
      'O número 237 do quarto proibido e o labirinto de cerca-viva coberto de neve.',
      'Ele digita incansavelmente centenas de páginas com a frase: "All work and no play makes Jack a dull boy".'
    ],
    quote: '"Aqui está o Johnny!"',
    emojis: '🪓 🏨 ❄️ 🚪 🩸',
    posterUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'viagem-de-chihiro',
    titlePt: 'A Viagem de Chihiro',
    titleOriginal: 'Spirited Away',
    aliases: ['Viagem de Chihiro', 'Spirited Away', 'Sen to Chihiro no Kamikakushi'],
    phase: 3,
    year: 2001,
    genre: 'Animação / Fantasia',
    director: 'Hayao Miyazaki',
    mainClue: 'Uma menina de 10 anos entra acidentalmente no mundo dos espíritos após seus pais serem transformados em porcos por comerem comida proibida.',
    extraClues: [
      'Ela precisa trabalhar na casa de banhos termais controlada pela bruxa Yubaba.',
      'Recebe a ajuda de Haku, um jovem rapaz que na verdade é o espírito de um rio.',
      'Único anime tradicional em língua não-inglesa a ganhar o Oscar de Melhor Animação.'
    ],
    quote: '"Depois que você conhece alguém, nunca se esquece totalmente."',
    emojis: '🐉 ♨️ 🐷 🍙 🏮',
    posterUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'amelie-poulain',
    titlePt: 'O Fabuloso Destino de Amélie Poulain',
    titleOriginal: "Le Fabuleux Destin d'Amélie Poulain",
    aliases: ['Amelie Poulain', 'O Fabuloso Destino de Amelie Poulain', 'Amelie'],
    phase: 3,
    year: 2001,
    genre: 'Comédia / Romance',
    director: 'Jean-Pierre Jeunet',
    mainClue: 'Uma jovem garçonete ingênua de Paris encontra uma caixinha de lembranças escondida em seu apartamento e decide ajudar anonimamente as pessoas ao seu redor.',
    extraClues: [
      'Ela coleciona fotos 3x4 rasgadas e descartadas em cabines de metrô.',
      'Faz o anão de jardim de seu pai viajar pelo mundo enviando fotos de cartões-postais.',
      'Fotografia primorosa com paleta saturada em tons de verde, vermelho e amarelo.'
    ],
    quote: '"São tempos difíceis para os sonhadores."',
    emojis: '🥄 🗼 📮 📸 🍓',
    posterUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'la-la-land',
    titlePt: 'La La Land: Cantando Estações',
    titleOriginal: 'La La Land',
    aliases: ['La La Land', 'Cantando Estações'],
    phase: 3,
    year: 2016,
    genre: 'Musical / Romance',
    director: 'Damien Chazelle',
    mainClue: 'Um pianista de jazz purista e uma aspirante a atriz se apaixonam em Los Angeles enquanto batalham para alcançar seus sonhos artísticos.',
    extraClues: [
      'Cena de abertura filmada em um plano-sequência acrobático em um viaduto ensolarado engarrafado.',
      'A emblemática dança em Griffith Park com vista para as luzes da cidade.',
      'Foi erroneamente anunciado como Melhor Filme no Oscar 2017 no episódio dos envelopes trocados.'
    ],
    quote: '"Um brinde aos tolos que sonham."',
    emojis: '🎹 💃 🌃 🎺 👗',
    posterUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'parasita',
    titlePt: 'Parasita',
    titleOriginal: 'Parasite',
    aliases: ['Parasita', 'Parasite', 'Gisaengchung'],
    phase: 3,
    year: 2019,
    genre: 'Suspense / Comédia Dramática',
    director: 'Bong Joon-ho',
    mainClue: 'Uma família pobre que vive em um porão insalubre traça um plano astuto para se infiltrar como empregados na mansão de uma família milionária.',
    extraClues: [
      'Primeiro filme de língua não-inglesa da história a ganhar o Oscar de Melhor Filme.',
      'A metáfora do "cheiro de quem anda de metrô" que desencadeia a fúria final.',
      'O segredo chocante escondido no bunker subterrâneo da residência durante uma tempestade.'
    ],
    quote: '"Sabe que plano nunca falha? O plano que não existe."',
    emojis: '🏠 🌧️ 🍑 📦 🍜',
    posterUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'silencio-dos-inocentes',
    titlePt: 'O Silêncio dos Inocentes',
    titleOriginal: 'The Silence of the Lambs',
    aliases: ['Silencio dos Inocentes', 'The Silence of the Lambs'],
    phase: 3,
    year: 1992,
    genre: 'Suspense / Crime',
    director: 'Jonathan Demme',
    mainClue: 'Uma jovem estagiária do FBI é encarregada de entrevistar um brilhante psiquiatra canibal preso para obter pistas sobre um assassino em série que esfola mulheres.',
    extraClues: [
      'Protagonistas: Clarice Starling e Dr. Hannibal Lecter.',
      'O assassino caçado pela polícia atende pelo codinome "Buffalo Bill".',
      'Um dos seletos três filmes na história a conquistar o Big Five do Oscar (Filme, Diretor, Ator, Atriz e Roteiro).'
    ],
    quote: '"Comi o fígado dele com favas e um bom Chianti."',
    emojis: '🦋 🍷 🐑 🔍 ⛓️',
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'corra',
    titlePt: 'Corra!',
    titleOriginal: 'Get Out',
    aliases: ['Corra', 'Get Out'],
    phase: 3,
    year: 2017,
    genre: 'Terror / Suspense',
    director: 'Jordan Peele',
    mainClue: 'Um jovem fotógrafo negro viaja no fim de semana para conhecer os pais de sua namorada branca na propriedade isolada deles e nota comportamentos perturbadores.',
    extraClues: [
      'O estado de paralisia e transe hipnótico provocado por uma colher raspando em uma xícara de chá: "O Lugar Afundado".',
      'Um leilão silencioso de corpos humanos mascarado como festa de jardim.',
      'Venceu o Oscar de Melhor Roteiro Original, marcando a estreia eletrizante do diretor.'
    ],
    quote: '"Agora afunde... afunde no Lugar Afundado."',
    emojis: '☕ 🥄 🦌 🕳️ 📸',
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },
  {
    id: 'grande-hotel-budapeste',
    titlePt: 'O Grande Hotel Budapeste',
    titleOriginal: 'The Grand Budapest Hotel',
    aliases: ['Grande Hotel Budapeste', 'The Grand Budapest Hotel'],
    phase: 3,
    year: 2014,
    genre: 'Comédia / Aventura',
    director: 'Wes Anderson',
    mainClue: 'As aventuras do lendário concierge Monsieur Gustave H. e seu fiel mensageiro Zero em um famoso resort europeu entre as duas grandes guerras mundiais.',
    extraClues: [
      'Estilo visual impecável com simetria milimétrica, maquetes e paleta em tons pastel de rosa e roxo.',
      'O roubo de uma pintura renascentista de valor inestimável intitulada "Rapaz com Maçã".',
      'Uma confeitaria elegante chamada Mendl’s que fabrica doces sofisticados chamados Courtesan au Chocolat.'
    ],
    quote: '"Ainda há tênues lampejos de civilização nesta barbárie que outrora foi a humanidade."',
    emojis: '🏨 🍰 ⛷️ 🎨 💼',
    posterUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Cinéfilo'
  },

  // ==========================================
  // FASE 4: AVANÇADO (Clássicos de Prestígio & Mestres)
  // Pistas conceituais, detalhes específicos de cenas e história do cinema
  // ==========================================
  {
    id: 'blade-runner',
    titlePt: 'Blade Runner: O Caçador de Androides',
    titleOriginal: 'Blade Runner',
    aliases: ['Blade Runner', 'O Caçador de Androides', 'Blade Runner 1982'],
    phase: 4,
    year: 1982,
    genre: 'Ficção Científica / Neo-Noir',
    director: 'Ridley Scott',
    mainClue: 'Em uma Los Angeles chuvosa e distópica de 2019 com telões gigantes de neon, um ex-policial é designado para aposentar quatro replicantes rebeldes.',
    extraClues: [
      'O teste Voight-Kampff mede dilatação pupilar e reações empáticas para identificar humanos.',
      'O replicante Roy Batty declama o lendário monólogo "Lágrimas na Chuva" no telhado.',
      'Inspirado no livro "Androides Sonham com Ovelhas Elétricas?" de Philip K. Dick.'
    ],
    quote: '"Todos esses momentos se perderão no tempo, como lágrimas na chuva."',
    emojis: '🌧️ 🕊️ 👁️ 🏙️ 🤖',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'laranja-mecanica',
    titlePt: 'Laranja Mecânica',
    titleOriginal: 'A Clockwork Orange',
    aliases: ['Laranja Mecanica', 'A Clockwork Orange'],
    phase: 4,
    year: 1971,
    genre: 'Crime / Ficção Científica',
    director: 'Stanley Kubrick',
    mainClue: 'Um jovem delinquente britânico aficionado por Beethoven e ultraviolência lidera sua gangue e é submetido a uma terapia de aversão psicológica pelo governo.',
    extraClues: [
      'Ele bebe leite turbinado com drogas sintéticas no Korova Milk Bar.',
      'O experimento estatal de condicionamento pelo qual ele passa chama-se Técnica Ludovico.',
      'A linguagem gíria futurista anglo-russa falada pelos jovens é conhecida como Nadsat.'
    ],
    quote: '"Ah, era uma beleza! Uma festa para os meus olhos e para os meus ouvidos."',
    emojis: '🥛 👁️ 🎻 🦯 🎩',
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'psicose',
    titlePt: 'Psicose',
    titleOriginal: 'Psycho',
    aliases: ['Psicose', 'Psycho'],
    phase: 4,
    year: 1960,
    genre: 'Terror / Suspense',
    director: 'Alfred Hitchcock',
    mainClue: 'Uma secretária rouba 40 mil dólares de seu chefe e para descansar em um motel decrépito à beira da estrada gerido por um rapaz tímido e sua mãe controladora.',
    extraClues: [
      'A antológica cena do chuveiro com acordes dissonantes de violino compostos por Bernard Herrmann.',
      'Filmado propositalmente em preto e branco para não chocar demais com a cor do sangue (que era calda de chocolate).',
      'O protagonista perturbado é Norman Bates.'
    ],
    quote: '"O melhor amigo de um rapaz é sua mãe."',
    emojis: '🚿 🔪 🏨 🐦 🚗',
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'tubarao',
    titlePt: 'Tubarão',
    titleOriginal: 'Jaws',
    aliases: ['Tubarao', 'Jaws'],
    phase: 4,
    year: 1975,
    genre: 'Suspense / Aventura',
    director: 'Steven Spielberg',
    mainClue: 'O chefe de polícia de uma cidade litorânea turística precisa combater um predador marítimo assassino enquanto o prefeito se recusa a fechar as praias.',
    extraClues: [
      'A criatura mecânica nos bastidores apelidada de Bruce quebrava constantemente, forçando o diretor a filmar em ponto de vista subjetivo.',
      'A célebre e aterrorizante trilha com duas notas alternadas de John Williams.',
      'O barco de caça capitaneado pelo pescador rude Quint chama-se Orca.'
    ],
    quote: '"Você vai precisar de um barco maior."',
    emojis: '🦈 ⛵ 🏖️ 🤿 🩸',
    posterUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: '2001-odisseia-espaco',
    titlePt: '2001: Uma Odisseia no Espaço',
    titleOriginal: '2001: A Space Odyssey',
    aliases: ['2001 Uma Odisseia no Espaço', '2001', 'Space Odyssey', '2001 A Space Odyssey'],
    phase: 4,
    year: 1968,
    genre: 'Ficção Científica',
    director: 'Stanley Kubrick',
    mainClue: 'A evolução humana guiada por monólitos negros extraterrestres culmina em uma missão a Júpiter operada por uma inteligência artificial que entra em conflito com a tripulação.',
    extraClues: [
      'A inteligência artificial com olho vermelho luminoso atende pelo nome HAL 9000.',
      'O famoso corte elíptico da história do cinema: um osso arremessado por um hominídeo transforma-se em um satélite orbital.',
      'Música clássica triunfante de abertura: "Assim Falou Zaratustra" de Richard Strauss.'
    ],
    quote: '"Desculpe, Dave. Receio não poder fazer isso."',
    emojis: '🔴 🚀 ⬛ 🦴 🌌',
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'cidadao-kane',
    titlePt: 'Cidadão Kane',
    titleOriginal: 'Citizen Kane',
    aliases: ['Cidadao Kane', 'Citizen Kane'],
    phase: 4,
    year: 1941,
    genre: 'Drama / Mistério',
    director: 'Orson Welles',
    mainClue: 'Após a morte solitária de um magnata da imprensa em seu palácio colossal, um repórter investiga o significado de sua enigmática última palavra sussurrada no leito de morte.',
    extraClues: [
      'Revolucionou a linguagem cinematográfica com foco profundo, tetos nos cenários e ângulos baixos contra-picados.',
      'A suntuosa propriedade cheia de estátuas onde ele morava chamava-se Xanadu.',
      'A revelação final do trenó de infância sendo queimado no incinerador.'
    ],
    quote: '"Rosebud."',
    emojis: '🛷 📰 🏰 🪞 ❄️',
    posterUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'labirinto-do-fauno',
    titlePt: 'O Labirinto do Fauno',
    titleOriginal: 'El Laberinto del Fauno',
    aliases: ['Labirinto do Fauno', "Pan's Labyrinth", 'El Laberinto del Fauno'],
    phase: 4,
    year: 2006,
    genre: 'Fantasia Sombria / Guerra',
    director: 'Guillermo del Toro',
    mainClue: 'Na Espanha fascista de 1944 pós-guerra civil, uma garota que ama contos de fadas descobre ruínas antigas onde uma criatura mística afirma que ela é uma princesa perdida.',
    extraClues: [
      'Ela precisa completar três tarefas arriscadas para reivindicar seu trono subterrâneo.',
      'O aterrorizante Homem Pálido que coloca os próprios globos oculares nas palmas das mãos.',
      'Seu padrasto tirano é o sádico Capitão Vidal, que combate rebeldes maquis na floresta.'
    ],
    quote: '"Você é a princesa Moanna, e seu reino a espera."',
    emojis: '🧚 📜 👁️ 🌲 🗝️',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'whiplash',
    titlePt: 'Whiplash: Em Busca da Perfeição',
    titleOriginal: 'Whiplash',
    aliases: ['Whiplash', 'Em Busca da Perfeição'],
    phase: 4,
    year: 2014,
    genre: 'Drama / Música',
    director: 'Damien Chazelle',
    mainClue: 'Um jovem e ambicioso baterista de jazz ingressa no melhor conservatório de Nova York e enfrenta os métodos abusivos e impiedosos de um maestro lendário.',
    extraClues: [
      'J.K. Simmons venceu o Oscar de Melhor Ator Coadjuvante pelo papel feroz de Terence Fletcher.',
      'Ele arremessa um prato de bateria na cabeça do aluno por errar o andamento ("not quite my tempo").',
      'Mãos ensanguentadas e baquetas quebradas em busca do virtuosismo supremo de Buddy Rich.'
    ],
    quote: '"Não existem duas palavras na língua inglesa mais prejudiciais do que \'bom trabalho\'."',
    emojis: '🥁 🎺 🩸 ⏱️ 🎵',
    posterUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'amnesia',
    titlePt: 'Amnésia',
    titleOriginal: 'Memento',
    aliases: ['Amnesia', 'Memento'],
    phase: 4,
    year: 2000,
    genre: 'Mistério / Suspense',
    director: 'Christopher Nolan',
    mainClue: 'Um homem com perda de memória recente utiliza fotografias instantâneas Polaroid e tatuagens no próprio corpo para caçar o assassino de sua esposa.',
    extraClues: [
      'A trama é contada em duas ordens temporais: cenas coloridas em ordem cronológica inversa e cenas monocromáticas em ordem linear.',
      'Sua condição não permite fixar novas lembranças por mais de alguns minutos após o traumatismo craniano.',
      'O misterioso aviso tatuado: "Não confie em Teddy".'
    ],
    quote: '"Tenho que acreditar em um mundo fora da minha própria mente."',
    emojis: '📷 ✒️ 🩹 🕰️ 🚗',
    posterUrl: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'taxi-driver',
    titlePt: 'Taxi Driver',
    titleOriginal: 'Taxi Driver',
    aliases: ['Taxi Driver Motorista de Taxi'],
    phase: 4,
    year: 1976,
    genre: 'Drama / Crime',
    director: 'Martin Scorsese',
    mainClue: 'Um veterano solitário da Guerra do Vietnã trabalha no turno da madrugada pelas ruas decadentes de Nova York e planeja expurgar a corrupção da cidade.',
    extraClues: [
      'Robert De Niro improvisou diante do espelho uma das falas mais imitadas da cultura pop com sua arma escondida.',
      'Tenta resgatar uma jovem prostituta de 12 anos interpretada por Jodie Foster.',
      'Venceu a prestigiosa Palma de Ouro no Festival de Cannes de 1976.'
    ],
    quote: '"Você está falando comigo?"',
    emojis: '🚕 🗽 🔫 🕶️ 🌃',
    posterUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },
  {
    id: 'brilho-eterno',
    titlePt: 'Brilho Eterno de uma Mente Sem Lembranças',
    titleOriginal: 'Eternal Sunshine of the Spotless Mind',
    aliases: ['Brilho Eterno', 'Brilho Eterno de uma Mente sem Lembrancas', 'Eternal Sunshine of the Spotless Mind'],
    phase: 4,
    year: 2004,
    genre: 'Romance / Ficção Científica',
    director: 'Michel Gondry',
    mainClue: 'Após um término doloroso, um casal se submete a um procedimento médico experimental de uma clínica chamada Lacuna para apagar mutuamente as memórias um do outro.',
    extraClues: [
      'Ele tenta esconder a amada nas memórias mais profundas e vergonhosas de sua infância para não perdê-la.',
      'A personagem Clementine (Kate Winslet) muda a cor de seu cabelo conforme as fases de seu humor e relacionamento.',
      'Roteiro engenhoso e tocante escrito por Charlie Kaufman.'
    ],
    quote: '"Você pode apagar alguém da sua mente. Tirar essa pessoa do seu coração já é outra história."',
    emojis: '🧠 ❄️ 🍊 🛋️ 🚂',
    posterUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Avançado'
  },

  // ==========================================
  // FASE 5: MESTRE DO CINEMA (Cinéfilo Hardcore & Obras Primas)
  // Dicas altamente específicas, metáforas sutis e curiosidades profundas
  // ==========================================
  {
    id: 'apocalypse-now',
    titlePt: 'Apocalypse Now',
    titleOriginal: 'Apocalypse Now',
    aliases: ['Apocalypse Now Redux'],
    phase: 5,
    year: 1979,
    genre: 'Guerra / Drama',
    director: 'Francis Ford Coppola',
    mainClue: 'Durante a Guerra do Vietnã, um capitão do exército sobe um rio sinuoso até o Camboja em um barco de patrulha com ordens secretas de executar um coronel renegado.',
    extraClues: [
      'O ataque aéreo de helicópteros ao vilarejo costeiro sincronizado com "A Cavalgada das Valquírias" de Wagner.',
      'Baseado livremente na novela "O Coração das Trevas" de Joseph Conrad.',
      'O coronel renegado Walter Kurtz vive em um templo na selva cultuado como uma divindade por indígenas.'
    ],
    quote: '"Adoro o cheiro de napalm pela manhã."',
    emojis: '🚁 🌊 🌴 💣 🐅',
    posterUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'os-bons-companheiros',
    titlePt: 'Os Bons Companheiros',
    titleOriginal: 'Goodfellas',
    aliases: ['Bons Companheiros', 'Goodfellas'],
    phase: 5,
    year: 1990,
    genre: 'Crime / Drama',
    director: 'Martin Scorsese',
    mainClue: 'A ascensão e queda ao longo de três décadas de Henry Hill, um jovem novaiorquino que desde garoto sonhava em fazer parte da máfia ítalo-americana.',
    extraClues: [
      'Joe Pesci ganhou o Oscar por interpretar o impulsivo e volátil Tommy DeVito ("Engraçado como? Engraçado tipo um palhaço?").',
      'Um dos planos-sequência mais célebres do cinema entrando pela cozinha do clube Copacabana ao som de "Then He Kissed Me".',
      'A sequência frenética do helicóptero, do refogado de carne com molho e das entregas de cocaína.'
    ],
    quote: '"Desde que me lembro, sempre quis ser um gângster."',
    emojis: '🍝 🔫 💵 🚁 🥩',
    posterUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'central-do-brasil',
    titlePt: 'Central do Brasil',
    titleOriginal: 'Central do Brasil',
    aliases: ['Central Station'],
    phase: 5,
    year: 1998,
    genre: 'Drama',
    director: 'Walter Salles',
    mainClue: 'Uma ex-professora amargurada que ganha a vida escrevendo cartas para analfabetos na maior estação de trem do Rio decide ajudar um menino órfão a encontrar o pai no sertão.',
    extraClues: [
      'Fernanda Montenegro foi indicada ao Oscar de Melhor Atriz por essa atuação monumental.',
      'Venceu o Urso de Ouro de Melhor Filme no prestigiado Festival de Berlim.',
      'O menino Josué guarda uma garrafa com tampa que pertencia a seu pai desconhecido chamado Jesus.'
    ],
    quote: '"Tenho medo de esquecer o rosto do meu pai."',
    emojis: '🚂 ✉️ 🇧🇷 🌵 👦',
    posterUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'o-show-de-truman',
    titlePt: 'O Show de Truman: O Show da Vida',
    titleOriginal: 'The Truman Show',
    aliases: ['O Show de Truman', 'The Truman Show', 'Show de Truman'],
    phase: 5,
    year: 1998,
    genre: 'Comédia / Drama / Ficção Científica',
    director: 'Peter Weir',
    mainClue: 'Um corretor de seguros descobre aos poucos que toda a sua cidade idílica é um estúdio de TV gigante e que sua existência é transmitida 24 horas ao vivo para o planeta.',
    extraClues: [
      'O criador onipotente do programa que opera da sala de controle lunar chama-se Christof.',
      'Seu maior pavor de água foi induzido na infância pelo "afogamento" encenado de seu pai em uma tempestade.',
      'O barco com o qual ele tenta fugir colide com a parede de gesso pintada como horizonte do céu.'
    ],
    quote: '"Caso não os veja mais: bom dia, boa tarde e boa noite!"',
    emojis: '📺 ⛵ ☀️ 🎥 🚪',
    posterUrl: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'fargo',
    titlePt: 'Fargo: Uma Comédia de Erros',
    titleOriginal: 'Fargo',
    aliases: ['Fargo', 'Fargo Uma Comedia de Erros'],
    phase: 5,
    year: 1996,
    genre: 'Crime / Suspense',
    director: 'Joel Coen, Ethan Coen',
    mainClue: 'Um endividado vendedor de carros de Minnesota contrata dois criminosos ineptos para sequestrar sua própria esposa e extorquir o sogro milionário.',
    extraClues: [
      'A chefe de polícia grávida Marge Gunderson (Frances McDormand) investiga os homicídios na neve com serenidade singular.',
      'A macabra cena de um corpo sendo descartado em um triturador de galhos em meio ao inverno rigoroso.',
      'O falso aviso nos letreiros iniciais alegando que a história era estritamente verídica.'
    ],
    quote: '"Há mais na vida do que um pouco de dinheiro, sabia? E aqui está você... e é um belo dia."',
    emojis: '❄️ 🪵 🚔 🌲 🩸',
    posterUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'o-setimo-selo',
    titlePt: 'O Sétimo Selo',
    titleOriginal: 'Det sjunde inseglet',
    aliases: ['Setimo Selo', 'The Seventh Seal', 'Det sjunde inseglet'],
    phase: 5,
    year: 1957,
    genre: 'Drama / Fantasia',
    director: 'Ingmar Bergman',
    mainClue: 'Retornando das Cruzadas para uma Suécia assolada pela Peste Negra, um cavaleiro desiludido desafia a figura encapuzada da Morte para uma partida de xadrez.',
    extraClues: [
      'Enquanto a partida continua, ele ganha tempo para encontrar respostas sobre o silêncio de Deus e o sentido da vida.',
      'A icônica imagem da silhueta dos personagens dançando em fila no topo da colina na Dança Macabra.',
      'Obra seminal do cinema sueco e da história da filosofia na sétima arte.'
    ],
    quote: '"Ninguém pode viver diante da Morte sabendo que tudo é o nada."',
    emojis: '♟️ 💀 ⚔️ 🏰 🎭',
    posterUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'donnie-darko',
    titlePt: 'Donnie Darko',
    titleOriginal: 'Donnie Darko',
    aliases: ['Donnie Darko'],
    phase: 5,
    year: 2001,
    genre: 'Ficção Científica / Cult',
    director: 'Richard Kelly',
    mainClue: 'Um adolescente problemático sonâmbulo escapa da morte quando uma turbina de avião cai em seu quarto e passa a ser visitado por uma figura sinistra fantasiada de coelho.',
    extraClues: [
      'A entidade chamada Frank profetiza que o mundo vai acabar em exatamente 28 dias, 6 horas, 42 minutos e 12 segundos.',
      'Explora conceitos de universos tangentes, viagens no tempo e o livro fictício "A Filosofia da Viagem no Tempo".',
      'A clássica e melancólica versão de "Mad World" interpretada por Gary Jules na conclusão.'
    ],
    quote: '"Por que você está usando essa fantasia estúpida de coelho? / Por que você está usando essa fantasia estúpida de humano?"',
    emojis: '🐰 ✈️ 🌀 🕰️ 🏫',
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'scarface',
    titlePt: 'Scarface',
    titleOriginal: 'Scarface',
    aliases: ['Scarface 1983'],
    phase: 5,
    year: 1983,
    genre: 'Crime / Drama',
    director: 'Brian De Palma',
    mainClue: 'Um refugiado cubano chega a Miami durante o êxodo de Mariel e constrói com violência brutal um império bilionário do tráfico de cocaína.',
    extraClues: [
      'Al Pacino vive Tony Montana, com sua imensa mansão e um tigre de estimação no jardim.',
      'O tiroteio final no topo das escadas contra dezenas de assassinos colombianos com um lançador de granadas.',
      'Roteiro escrito por Oliver Stone durante seu próprio período de desintoxicação.'
    ],
    quote: '"Diga olá para o meu pequeno amigo!"',
    emojis: '🌴 💵 🔫 🐅 🏰',
    posterUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'cinema-paradiso',
    titlePt: 'Cinema Paradiso',
    titleOriginal: 'Nuovo Cinema Paradiso',
    aliases: ['Cinema Paradiso', 'Nuovo Cinema Paradiso'],
    phase: 5,
    year: 1988,
    genre: 'Drama / Romance',
    director: 'Giuseppe Tornatore',
    mainClue: 'Um cineasta famoso que vive em Roma retorna à sua pequena aldeia natal na Sicília após receber a notícia da morte do projecionista idoso que foi seu grande mentor na infância.',
    extraClues: [
      'O menino Toto passava as tardes na cabine de projeção aprendendo a arte da película com Alfredo.',
      'O padre local censurava todos os beijos dos filmes tocando um sino para cortar a fita.',
      'A inesquecível cena final com o rolo de filme contendo a colagem de todos os beijos censurados ao som de Ennio Morricone.'
    ],
    quote: '"O que quer que você decida fazer, ame aquilo."',
    emojis: '📽️ 🎞️ 🇮🇹 🚲 💋',
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'o-farol',
    titlePt: 'O Farol',
    titleOriginal: 'The Lighthouse',
    aliases: ['O Farol', 'The Lighthouse'],
    phase: 5,
    year: 2019,
    genre: 'Terror Psicológico / Drama',
    director: 'Robert Eggers',
    mainClue: 'Dois vigias de farol em uma ilha rochosa e desolada da Nova Inglaterra no final do século XIX sucumbem à loucura e alucinações durante uma tempestade sem fim.',
    extraClues: [
      'Filmado inteiramente em preto e branco com proporção de tela quase quadrada (1.19:1) e som de sirenes de nevoeiro.',
      'Atuações monumentais de Willem Dafoe e Robert Pattinson.',
      'Mitos marítimos, sereias monstruosas, gaivotas vingativas e a luz proibida da lanterna.'
    ],
    quote: '"Por que você derramou seus feijões?"',
    emojis: '🗼 🌊 🪨 🍾 🕊️',
    posterUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  },
  {
    id: 'o-segredo-dos-seus-olhos',
    titlePt: 'O Segredo dos Seus Olhos',
    titleOriginal: 'El Secreto de Sus Ojos',
    aliases: ['O Segredo dos Seus Olhos', 'El Secreto de Sus Ojos', 'Segredo dos Seus Olhos'],
    phase: 5,
    year: 2009,
    genre: 'Suspense / Mistério',
    director: 'Juan José Campanella',
    mainClue: 'Um oficial de justiça argentino recém-aposentado decide escrever um romance sobre um caso brutal de estupro e assassinato ocorrido 25 anos antes que nunca saiu de sua memória.',
    extraClues: [
      'A emblemática cena do estádio de futebol gravada em um plano-sequência aéreo contínuo de tirar o fôlego.',
      'A teoria do amigo de que "um homem pode mudar de tudo, de cara, de casa, de família, mas não pode mudar de paixão".',
      'Vencedor do Oscar de Melhor Filme Internacional representando a Argentina.'
    ],
    quote: '"Um homem pode mudar de tudo... menos de paixão."',
    emojis: '👁️ ⚽ 📜 🇦🇷 🔒',
    posterUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    difficultyLabel: 'Mestre'
  }
];

export const PHASE_CONFIG = [
  {
    phase: 1,
    name: 'Iniciante: Clássicos Populares',
    pointsRequired: 0,
    targetPoints: 1000,
    description: 'Filmes campeões de bilheteria e clássicos do conhecimento popular com sinopses diretas.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
  {
    phase: 2,
    name: 'Intermediário: Grandes Histórias',
    pointsRequired: 1000,
    targetPoints: 2000,
    description: 'Obras aclamadas, citações memoráveis e detalhes da trama.',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
  },
  {
    phase: 3,
    name: 'Cinéfilo: Filmes de Culto',
    pointsRequired: 2000,
    targetPoints: 3000,
    description: 'Obras de diretores consagrados com pistas sobre cinematografia e narrativas icônicas.',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  {
    phase: 4,
    name: 'Avançado: Mestres da Arte',
    pointsRequired: 3000,
    targetPoints: 4000,
    description: 'Clássicos atemporais com pistas conceituais e detalhes de produção refinados.',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
  },
  {
    phase: 5,
    name: 'Mestre: Lendas do Cinema',
    pointsRequired: 4000,
    targetPoints: 5000,
    description: 'Desafio supremo para verdadeiros mestres com enigmas e nuances históricas.',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
  },
];
