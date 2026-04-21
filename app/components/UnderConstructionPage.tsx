'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Locale = 'en' | 'de' | 'pl' | 'tr';

const translations = {
  en: {
    badge: 'YUONA',
    title: 'Page Under Construction',
    text: 'This page is currently being built. Please check back soon.',
    home: 'Back to Home',
    discord: 'Join Discord',
  },
  de: {
    badge: 'YUONA',
    title: 'Seite im Aufbau',
    text: 'Diese Seite wird aktuell erstellt. Bitte schau bald wieder vorbei.',
    home: 'Zurück zur Startseite',
    discord: 'Discord beitreten',
  },
  pl: {
    badge: 'YUONA',
    title: 'Strona w budowie',
    text: 'Ta strona jest obecnie tworzona. Wróć wkrótce.',
    home: 'Powrót do strony głównej',
    discord: 'Dołącz do Discorda',
  },
  tr: {
    badge: 'YUONA',
    title: 'Sayfa Yapım Aşamasında',
    text: 'Bu sayfa şu anda hazırlanıyor. Lütfen daha sonra tekrar kontrol edin.',
    home: 'Ana Sayfaya Dön',
    discord: 'Discord’a Katıl',
  },
};

type UnderConstructionPageProps = {
  customTitle?: string;
  customText?: string;
};

export default function UnderConstructionPage({
  customTitle,
  customText,
}: UnderConstructionPageProps) {
  const [locale, setLocale] = useState<Locale>('de');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && ['de', 'en', 'pl', 'tr'].includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  const t = translations[locale];

  return (
    <main className="uc-page">
      <div className="uc-bg" />
      <div className="uc-overlay" />

      <section className="uc-card">
        <p className="uc-kicker">{t.badge}</p>
        <h1 className="uc-title">{customTitle || t.title}</h1>
        <div className="uc-divider" />
        <p className="uc-text">{customText || t.text}</p>

        <div className="uc-actions">
          <Link href="/" className="gold-btn">
            {t.home}
          </Link>

          <Link href="/discord" className="uc-secondary-btn">
            {t.discord}
          </Link>
        </div>
      </section>
    </main>
  );
}