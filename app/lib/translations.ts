export type Locale = 'en' | 'de' | 'pl' | 'tr';

export const siteTranslations = {
  en: {
    language: 'LANGUAGE',
    home: 'HOME',
    download: 'DOWNLOAD',
    rankings: 'RANKINGS',
    register: 'REGISTER',
    discord: 'DISCORD',
    maps: 'MAPS',
    dungeons: 'DUNGEONS',
    readMore: 'READ MORE',
    viewFullRanking: 'View Full Ranking',
    bestPlayers: 'BEST PLAYERS',
    topGuilds: 'TOP GUILDS',
    latestNews: 'LATEST NEWS',
    allNews: 'ALL NEWS',
    events: 'EVENTS',
    updates: 'UPDATES',
    joinDiscord: 'JOIN TO OUR',
    discordServer: 'DISCORD SERVER',
    footerHome: 'Home',
    footerDownload: 'Download',
    footerRegister: 'Register',
    footerLeaderboard: 'Leaderboard',
    footerTerms: 'Terms',
    copyright: 'All Rights Reserved by Yuona. | Design by AshikaArts.com',
  },
  de: {
    language: 'SPRACHE',
    home: 'START',
    download: 'DOWNLOAD',
    rankings: 'RANGLISTE',
    register: 'REGISTRIEREN',
    discord: 'DISCORD',
    maps: 'KARTEN',
    dungeons: 'DUNGEONS',
    readMore: 'MEHR LESEN',
    viewFullRanking: 'Gesamte Rangliste',
    bestPlayers: 'BESTE SPIELER',
    topGuilds: 'TOP GILDEN',
    latestNews: 'NEUESTE NEWS',
    allNews: 'ALLE NEWS',
    events: 'EVENTS',
    updates: 'UPDATES',
    joinDiscord: 'KOMM AUF UNSEREN',
    discordServer: 'DISCORD SERVER',
    footerHome: 'Start',
    footerDownload: 'Download',
    footerRegister: 'Registrieren',
    footerLeaderboard: 'Rangliste',
    footerTerms: 'Rechtliches',
    copyright: 'Alle Rechte vorbehalten von Yuona. | Design von AshikaArts.com',
  },
  pl: {
    language: 'JĘZYK',
    home: 'STRONA GŁÓWNA',
    download: 'POBIERZ',
    rankings: 'RANKING',
    register: 'REJESTRACJA',
    discord: 'DISCORD',
    maps: 'MAPY',
    dungeons: 'LOCHY',
    readMore: 'CZYTAJ WIĘCEJ',
    viewFullRanking: 'Zobacz pełny ranking',
    bestPlayers: 'NAJLEPSI GRACZE',
    topGuilds: 'NAJLEPSZE GILDIE',
    latestNews: 'NAJNOWSZE NEWSY',
    allNews: 'WSZYSTKIE NEWSY',
    events: 'WYDARZENIA',
    updates: 'AKTUALIZACJE',
    joinDiscord: 'DOŁĄCZ DO NASZEGO',
    discordServer: 'SERWERA DISCORD',
    footerHome: 'Strona główna',
    footerDownload: 'Pobierz',
    footerRegister: 'Rejestracja',
    footerLeaderboard: 'Ranking',
    footerTerms: 'Regulamin',
    copyright: 'Wszelkie prawa zastrzeżone przez Yuona. | Projekt: AshikaArts.com',
  },
  tr: {
    language: 'DİL',
    home: 'ANA SAYFA',
    download: 'İNDİR',
    rankings: 'SIRALAMA',
    register: 'KAYIT OL',
    discord: 'DISCORD',
    maps: 'HARİTALAR',
    dungeons: 'ZİNDANLAR',
    readMore: 'DEVAMINI OKU',
    viewFullRanking: 'Tam sıralamayı görüntüle',
    bestPlayers: 'EN İYİ OYUNCULAR',
    topGuilds: 'EN İYİ LONCALAR',
    latestNews: 'SON HABERLER',
    allNews: 'TÜM HABERLER',
    events: 'ETKİNLİKLER',
    updates: 'GÜNCELLEMELER',
    joinDiscord: 'BİZİM',
    discordServer: 'DISCORD SUNUCUMUZA KATIL',
    footerHome: 'Ana Sayfa',
    footerDownload: 'İndir',
    footerRegister: 'Kayıt Ol',
    footerLeaderboard: 'Sıralama',
    footerTerms: 'Şartlar',
    copyright: 'Tüm hakları Yuona’ya aittir. | Tasarım: AshikaArts.com',
  },
} satisfies Record<Locale, {
  language: string;
  home: string;
  download: string;
  rankings: string;
  register: string;
  discord: string;
  maps: string;
  dungeons: string;
  readMore: string;
  viewFullRanking: string;
  bestPlayers: string;
  topGuilds: string;
  latestNews: string;
  allNews: string;
  events: string;
  updates: string;
  joinDiscord: string;
  discordServer: string;
  footerHome: string;
  footerDownload: string;
  footerRegister: string;
  footerLeaderboard: string;
  footerTerms: string;
  copyright: string;
}>;