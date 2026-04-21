'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Locale, siteTranslations } from './lib/translations';


const languages = [
  { label: 'Polish', code: 'pl' as const },
  { label: 'English', code: 'en' as const },
  { label: 'German', code: 'de' as const },
  { label: 'Turkish', code: 'tr' as const },
];

const bestPlayers = Array.from({ length: 10 }, (_, index) => ({
  rank: index + 1,
  name: 'Ashika',
  value: 'Lv. 150',
}));

const topGuilds = Array.from({ length: 10 }, (_, index) => ({
  rank: index + 1,
  name: 'Ashika',
  value: '150',
}));

const classIcons = Array.from({ length: 8 });
const discordCards = Array.from({ length: 3 });

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('de');
  const [activeTab, setActiveTab] = useState('LATEST NEWS');
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;

    if (savedLocale && ['de', 'en', 'pl', 'tr'].includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  const t = siteTranslations[locale];

  const selectedLanguageLabel = useMemo(() => {
    return languages.find((language) => language.code === locale)?.label ?? 'Language';
  }, [locale]);

  const newsTabs = [
    t.latestNews,
    t.allNews,
    t.events,
    t.updates,
  ];

  useEffect(() => {
    setActiveTab(newsTabs[0]);
  }, [locale]);

  const menuItems = [
    { label: t.home, href: '/' },
    { label: t.download, href: '/download' },
    { label: t.rankings, href: '/rankings' },
    { label: t.register, href: '/register' },
    { label: t.discord, href: '/discord' },
  ];

  const footerColumns = [
    {
      title: t.footerHome,
      links: [
        { label: 'TEXT EXAMPLE', href: '/' },
        { label: 'TEXT EXAMPLE', href: '/' },
        { label: 'TEXT EXAMPLE', href: '/' },
      ],
    },
    {
      title: t.footerDownload,
      links: [
        { label: 'TEXT EXAMPLE', href: '/download' },
        { label: 'TEXT EXAMPLE', href: '/download' },
        { label: 'TEXT EXAMPLE', href: '/download' },
      ],
    },
    {
      title: t.footerRegister,
      links: [
        { label: 'TEXT EXAMPLE', href: '/register' },
        { label: 'TEXT EXAMPLE', href: '/register' },
        { label: 'TEXT EXAMPLE', href: '/register' },
      ],
    },
    {
      title: t.footerLeaderboard,
      links: [
        { label: 'TEXT EXAMPLE', href: '/rankings' },
        { label: 'TEXT EXAMPLE', href: '/rankings' },
        { label: 'TEXT EXAMPLE', href: '/rankings' },
      ],
    },
    {
      title: t.discord,
      links: [
        { label: 'TEXT EXAMPLE', href: '/discord' },
        { label: 'TEXT EXAMPLE', href: '/discord' },
        { label: 'TEXT EXAMPLE', href: '/discord' },
      ],
    },
    {
      title: t.footerTerms,
      links: [
        { label: 'TEXT EXAMPLE', href: '/terms' },
        { label: 'TEXT EXAMPLE', href: '/terms' },
        { label: 'TEXT EXAMPLE', href: '/terms' },
      ],
    },
  ];

  const handleLanguageSelect = (languageCode: Locale) => {
    setLocale(languageCode);
    localStorage.setItem('locale', languageCode);
    setLanguageOpen(false);
  };

  return (
    <main className="page-shell">
      <header className="topbar header-overlay">
  <div className="wrapper topbar-inner">
    <div className="mobile-header-bar">
      <Link href="/" className="mobile-brand">
        YUONA
      </Link>

      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Open navigation"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>
    </div>

    {mobileMenuOpen && (
      <div className="mobile-menu">
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-language-block">
          <button
            type="button"
            className={`language-box mobile-language-button ${languageOpen ? 'is-open' : ''}`}
            onClick={() => setLanguageOpen((prev) => !prev)}
            aria-expanded={languageOpen}
            aria-label="Select language"
          >
            <span>{selectedLanguageLabel}</span>
            <span className="language-caret">{languageOpen ? '▲' : '▼'}</span>
          </button>

          {languageOpen && (
            <div className="mobile-language-dropdown">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className="language-item"
                  onClick={() => {
                    handleLanguageSelect(language.code);
                    setMobileMenuOpen(false);
                  }}
                >
                  <div className="flag-placeholder" />
                  <span>{language.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    )}

    <div className="desktop-header">
      <nav className="nav" aria-label="Main navigation">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="language-wrap">
        <button
          type="button"
          className={`language-box ${languageOpen ? 'is-open' : ''}`}
          onClick={() => setLanguageOpen((prev) => !prev)}
          aria-expanded={languageOpen}
          aria-label="Select language"
        >
          <span>{selectedLanguageLabel}</span>
          <span className="language-caret">{languageOpen ? '▲' : '▼'}</span>
        </button>

        {languageOpen && (
          <div className="language-dropdown">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                className="language-item"
                onClick={() => handleLanguageSelect(language.code)}
              >
                <div className="flag-placeholder" />
                <span>{language.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</header>

      <section className="hero hero-header-full">
        <div className="hero-header-bg" />
        <div className="hero-header-shadow" />

        <div className="wrapper hero-header-content">
          <div className="hero-logo-full">
            <img
              src="/assets/header/header-logo-png.png"
              alt="Yuona Header Logo"
              className="hero-logo-full-image"
            />
          </div>
        </div>

        <div className="hero-header-bottom-fade" />
      </section>

      <section className="news-video wrapper panel-grid">
        <Link href="/trailer" className="video-panel image-card">
          <div className="play-button">▶️</div>
        </Link>

        <div className="news-panel panel-dark">
          <div className="panel-tabs-wrap">
            <div className="panel-tabs">
              {newsTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <article className="news-article">
            <div className="news-thumb image-card" />

            <div className="news-content">
              <p className="news-date">11.08.2021 02:02 AM</p>
              <h3>Servers Maintenance 12.08.2021</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
                sodales ipsum, ut pellentesque lectus rhoncus at. In ultricies et erat
                sed pharetra.
              </p>

              <Link href="/news/server-maintenance" className="gold-btn">
                {t.readMore}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="ranking-area wrapper">
        <div className="ranking-panel panel-dark">
          <div className="gold-title">{t.bestPlayers}</div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>PLAYERNAMES</th>
                  <th>LvL</th>
                </tr>
              </thead>

              <tbody>
                {bestPlayers.map((player) => (
                  <tr key={`player-${player.rank}`}>
                    <td>{player.rank}.</td>
                    <td>{player.name}</td>
                    <td>{player.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link href="/rankings/players" className="panel-link">
            {t.viewFullRanking}
          </Link>
        </div>

        <div className="center-showcase panel-dark">
          <div className="horn-icon image-card" />

          <div className="showcase-main">
            <button type="button" className="arrow-btn" aria-label="Previous character">
              ‹
            </button>

            <div className="showcase-char image-card" />

            <button type="button" className="arrow-btn" aria-label="Next character">
              ›
            </button>
          </div>

          <div className="class-icons left">
            {classIcons.map((_, index) => (
              <div key={`left-icon-${index}`} className="class-icon image-card" />
            ))}
          </div>

          <div className="class-icons right">
            {classIcons.map((_, index) => (
              <div key={`right-icon-${index}`} className="class-icon image-card" />
            ))}
          </div>

          <div className="showcase-actions">
            <Link href="/maps" className="gold-btn small">
              {t.maps}
            </Link>
            <Link href="/dungeons" className="gold-btn small">
              {t.dungeons}
            </Link>
          </div>
        </div>

        <div className="ranking-panel panel-dark">
          <div className="gold-title">{t.topGuilds}</div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>GUILDNAMES</th>
                  <th>POINTS</th>
                </tr>
              </thead>

              <tbody>
                {topGuilds.map((guild) => (
                  <tr key={`guild-${guild.rank}`}>
                    <td>{guild.rank}.</td>
                    <td>{guild.name}</td>
                    <td>{guild.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link href="/rankings/guilds" className="panel-link">
            {t.viewFullRanking}
          </Link>
        </div>
      </section>

      <section className="discord-strip wrapper">
        {discordCards.map((_, index) => (
          <Link
            key={`discord-${index}`}
            href="/discord"
            className="discord-card image-card"
          >
            <div className="discord-copy">
              <span>{t.joinDiscord}</span>
              <strong>{t.discordServer}</strong>
            </div>

            <div className="discord-arrow">›</div>
          </Link>
        ))}
      </section>

      <footer className="footer">
        <div className="wrapper footer-grid">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>

              {column.links.map((link, index) => (
                <Link key={`${column.title}-${index}`} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-logo image-card" />
        <p className="copyright">{t.copyright}</p>
      </footer>
    </main>
  );
}