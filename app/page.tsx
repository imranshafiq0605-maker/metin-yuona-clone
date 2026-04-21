const menuItems = ['HOME', 'DOWNLOAD', 'RANKINGS', 'REGISTER', 'DISCORD'];
const languages = ['Polish', 'English', 'Germany', 'Turkish'];
const newsTabs = ['LATEST NEWS', 'ALL NEWS', 'EVENTS', 'UPDATES'];

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

const footerColumns = [
  {
    title: 'Home',
    links: ['TEXT EXAMPLE', 'TEXT EXAMPLE', 'TEXT EXAMPLE'],
  },
  {
    title: 'Download',
    links: ['TEXT EXAMPLE', 'TEXT EXAMPLE', 'TEXT EXAMPLE'],
  },
  {
    title: 'Register',
    links: ['TEXT EXAMPLE', 'TEXT EXAMPLE', 'TEXT EXAMPLE'],
  },
  {
    title: 'Leaderboard',
    links: ['TEXT EXAMPLE', 'TEXT EXAMPLE', 'TEXT EXAMPLE'],
  },
  {
    title: 'Discord',
    links: ['TEXT EXAMPLE', 'TEXT EXAMPLE', 'TEXT EXAMPLE'],
  },
  {
    title: 'Terms',
    links: ['TEXT EXAMPLE', 'TEXT EXAMPLE', 'TEXT EXAMPLE'],
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar header-overlay">
  <div className="wrapper topbar-inner">
    <nav className="nav">
      {menuItems.map((item) => (
        <a key={item} href="#" className="nav-link">
          {item}
        </a>
      ))}
    </nav>

    <div className="language-box">
      <span>LANGUAGE</span>

      <div className="language-dropdown">
        {languages.map((language) => (
          <div key={language} className="language-item">
            <div className="flag-placeholder" />
            <span>{language}</span>
          </div>
        ))}
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
        <div className="video-panel image-card">
          <div className="play-button">▶</div>
        </div>

        <div className="news-panel panel-dark">
          <div className="panel-tabs">
            {newsTabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`tab-btn ${index === 0 ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
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

              <a href="#" className="gold-btn">
                READ MORE
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="ranking-area wrapper">
        <div className="ranking-panel panel-dark">
          <div className="gold-title">BEST PLAYERS</div>

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

          <a href="#" className="panel-link">
            View Full Ranking
          </a>
        </div>

        <div className="center-showcase panel-dark">
          <div className="horn-icon image-card" />

          <div className="showcase-main">
            <button type="button" className="arrow-btn">
              ‹
            </button>

            <div className="showcase-char image-card" />

            <button type="button" className="arrow-btn">
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
            <a href="#" className="gold-btn small">
              MAPS
            </a>
            <a href="#" className="gold-btn small">
              DUNGEONS
            </a>
          </div>
        </div>

        <div className="ranking-panel panel-dark">
          <div className="gold-title">TOP GUILDS</div>

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

          <a href="#" className="panel-link">
            View Full Ranking
          </a>
        </div>
      </section>

      <section className="discord-strip wrapper">
        {discordCards.map((_, index) => (
          <article key={`discord-${index}`} className="discord-card image-card">
            <div className="discord-copy">
              <span>JOIN TO OUR</span>
              <strong>DISCORD SERVER</strong>
            </div>

            <div className="discord-arrow">›</div>
          </article>
        ))}
      </section>

      <footer className="footer">
        <div className="wrapper footer-grid">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>

              {column.links.map((link, index) => (
                <a key={`${column.title}-${index}`} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-logo image-card" />
        <p className="copyright">
          All Rights Reserved by Yuona. | Design by AshikaArts.com
        </p>
      </footer>
    </main>
  );
}