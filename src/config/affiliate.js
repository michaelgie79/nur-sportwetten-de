/**
 * ZENTRALE AFFILIATE & CONTENT KONFIGURATION
 * 
 * Diese Datei wird von allen 4 Websites verwendet:
 * - sportwett-vergleich.de
 * - nur-sportwetten.de
 * - bad-bets.de
 * - wett-kompass.de
 * 
 * Hier werden alle Affiliate-Links, Anbieter-Daten und Content-Strukturen zentral verwaltet.
 */

// ============================================================================
// AFFILIATE LINKS
// ============================================================================

export const AFFILIATE_LINKS = {
  // Hauptanbieter
  bet365: {
    name: 'Bet365',
    baseUrl: 'https://www.bet365.com',
    // TODO: Ersetze mit echtem Affiliate-Link sobald verfügbar
    affiliateUrl: 'https://www.bet365.com?affiliate=DEIN_CODE',
    trackingParams: {
      source: 'source',
      campaign: 'campaign',
      medium: 'medium'
    }
  },
  
  betano: {
    name: 'Betano',
    baseUrl: 'https://www.betano.de',
    // TODO: Ersetze mit echtem Affiliate-Link sobald verfügbar
    affiliateUrl: 'https://www.betano.de?affiliate=DEIN_CODE',
    trackingParams: {
      source: 'source',
      campaign: 'campaign',
      medium: 'medium'
    }
  },
  
  bwin: {
    name: 'bwin',
    baseUrl: 'https://www.bwin.de',
    // TODO: Ersetze mit echtem Affiliate-Link sobald verfügbar
    affiliateUrl: 'https://www.bwin.de?affiliate=DEIN_CODE',
    trackingParams: {
      source: 'source',
      campaign: 'campaign',
      medium: 'medium'
    }
  },
  
  tipico: {
    name: 'Tipico',
    baseUrl: 'https://www.tipico.de',
    // TODO: Ersetze mit echtem Affiliate-Link sobald verfügbar
    affiliateUrl: 'https://www.tipico.de?affiliate=DEIN_CODE',
    trackingParams: {
      source: 'source',
      campaign: 'campaign',
      medium: 'medium'
    }
  },
  
  interwetten: {
    name: 'Interwetten',
    baseUrl: 'https://www.interwetten.de',
    // TODO: Ersetze mit echtem Affiliate-Link sobald verfügbar
    affiliateUrl: 'https://www.interwetten.de?affiliate=DEIN_CODE',
    trackingParams: {
      source: 'source',
      campaign: 'campaign',
      medium: 'medium'
    }
  },
  
  winamax: {
    name: 'Winamax',
    baseUrl: 'https://www.winamax.de',
    // TODO: Ersetze mit echtem Affiliate-Link sobald verfügbar
    affiliateUrl: 'https://www.winamax.de?affiliate=DEIN_CODE',
    trackingParams: {
      source: 'source',
      campaign: 'campaign',
      medium: 'medium'
    }
  },
  
  leovegas: {
    name: 'LeoVegas',
    baseUrl: 'https://www.leovegas.de',
    // TODO: Ersetze mit echtem Affiliate-Link sobald verfügbar
    affiliateUrl: 'https://www.leovegas.de?affiliate=DEIN_CODE',
    trackingParams: {
      source: 'source',
      campaign: 'campaign',
      medium: 'medium'
    }
  }
}

// ============================================================================
// ANBIETER-DATEN (für Vergleiche, Rankings, etc.)
// ============================================================================

export const PROVIDERS = {
  bet365: {
    id: 'bet365',
    name: 'Bet365',
    logo: '🎰',
    rank: 1,
    rating: 4.8,
    ratingCount: 1247,
    bonus: '100% bis 100€',
    bonusType: 'Wett-Credits',
    bonusValue: 100,
    bonusRating: 4.5,
    license: 'Deutsche Lizenz',
    licenseSince: 'Seit Ende 2020',
    licenseRating: 5.0,
    quotesRating: 4.7,
    appRating: 4.8,
    serviceRating: 4.6,
    minDeposit: '5€',
    payout: '1-3 Tage',
    features: ['Live-Streaming', 'Cash Out', 'Live-Wetten', 'Statistiken'],
    highlights: ['Live-Streams', 'Starke Quoten', 'Breites Angebot'],
    pros: [
      'Einer der größten Wettanbieter weltweit',
      'Hervorragende Live-Streams',
      'Sehr breites Wettangebot'
    ],
    cons: [
      'Bonusbedingungen etwas komplex',
      'Sehr umfangreiches Angebot kann überwältigend sein'
    ],
    paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Neteller'],
    badge: 'BESTE WAHL',
    badgeColor: 'gold',
    sports: ['Fußball', 'Tennis', 'Basketball', 'Eishockey']
  },
  
  betano: {
    id: 'betano',
    name: 'Betano',
    logo: '🏆',
    rank: 2,
    rating: 4.75,
    ratingCount: 892,
    bonus: '20€ Gratiswette + 100% Bonus',
    bonusType: 'Kombination',
    bonusValue: 120,
    bonusRating: 4.9,
    license: 'Deutsche Lizenz',
    licenseSince: 'Seit 2021',
    licenseRating: 5.0,
    quotesRating: 4.8,
    appRating: 4.8,
    serviceRating: 4.5,
    minDeposit: '10€',
    payout: '1-3 Tage',
    features: ['Live-Streaming', 'Cash Out', 'Kombi-Boost', 'Schnelle Auszahlung'],
    highlights: ['Bester Bonus', 'Top-App', 'Schnelle Auszahlung'],
    pros: [
      'Sehr attraktiver Willkommensbonus',
      'Hervorragende mobile App',
      'Schnelle Auszahlungen'
    ],
    cons: [
      'Etwas kleineres Wettangebot als Bet365',
      'Live-Streaming nur für ausgewählte Events'
    ],
    paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Paysafecard'],
    badge: 'BESTER BONUS',
    badgeColor: 'green',
    sports: ['Fußball', 'Tennis', 'Basketball']
  },
  
  bwin: {
    id: 'bwin',
    name: 'bwin',
    logo: '⭐',
    rank: 3,
    rating: 4.7,
    ratingCount: 1034,
    bonus: '100% bis 100€',
    bonusType: 'Einzahlungsbonus',
    bonusValue: 100,
    bonusRating: 4.4,
    license: 'Deutsche Lizenz',
    licenseSince: 'Seit 2020',
    licenseRating: 5.0,
    quotesRating: 4.6,
    appRating: 4.7,
    serviceRating: 4.6,
    minDeposit: '10€',
    payout: '1-3 Tage',
    features: ['Live-Streaming', 'Cash Out', 'Statistiken', 'Live-Ticker'],
    highlights: ['Traditionsmarke', 'Große Auswahl', 'Zuverlässig'],
    pros: [
      'Etablierte Marke mit langer Tradition',
      'Sehr breites Sportangebot',
      'Zuverlässiger Kundenservice'
    ],
    cons: [
      'Bonusbedingungen könnten fairer sein',
      'Quoten manchmal nicht die besten'
    ],
    paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Neteller', 'Paysafecard'],
    badge: 'TRADITIONSMARKE',
    badgeColor: 'blue',
    sports: ['Fußball', 'Tennis', 'Basketball', 'Handball']
  }
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Generiert einen vollständigen Affiliate-Link mit Tracking-Parametern
 * 
 * @param {string} providerId - ID des Anbieters (z.B. 'bet365')
 * @param {object} tracking - Tracking-Parameter
 * @param {string} tracking.source - Quelle (z.B. 'sportwett-vergleich')
 * @param {string} tracking.campaign - Kampagne (z.B. 'provider-comparison')
 * @param {string} tracking.medium - Medium (z.B. 'cta-button')
 * @returns {string} Vollständiger Affiliate-Link
 */
export function getAffiliateLink(providerId, tracking = {}) {
  const provider = AFFILIATE_LINKS[providerId]
  
  if (!provider) {
    console.error(`Provider ${providerId} not found in AFFILIATE_LINKS`)
    return '#'
  }
  
  const url = new URL(provider.affiliateUrl)
  
  // Füge Tracking-Parameter hinzu
  if (tracking.source) {
    url.searchParams.set(provider.trackingParams.source, tracking.source)
  }
  if (tracking.campaign) {
    url.searchParams.set(provider.trackingParams.campaign, tracking.campaign)
  }
  if (tracking.medium) {
    url.searchParams.set(provider.trackingParams.medium, tracking.medium)
  }
  
  return url.toString()
}

/**
 * Holt Anbieter-Daten
 * 
 * @param {string} providerId - ID des Anbieters
 * @returns {object} Anbieter-Daten
 */
export function getProvider(providerId) {
  return PROVIDERS[providerId] || null
}

/**
 * Holt alle Anbieter sortiert nach Rank
 * 
 * @returns {array} Array aller Anbieter
 */
export function getAllProviders() {
  return Object.values(PROVIDERS).sort((a, b) => a.rank - b.rank)
}

/**
 * Filtert Anbieter nach Kriterien
 * 
 * @param {object} filters - Filter-Kriterien
 * @param {string} filters.sport - Sport (z.B. 'Fußball')
 * @param {number} filters.minRating - Mindest-Rating
 * @param {string} filters.license - Lizenz-Typ
 * @returns {array} Gefilterte Anbieter
 */
export function filterProviders(filters = {}) {
  let providers = getAllProviders()
  
  if (filters.sport) {
    providers = providers.filter(p => p.sports.includes(filters.sport))
  }
  
  if (filters.minRating) {
    providers = providers.filter(p => p.rating >= filters.minRating)
  }
  
  if (filters.license) {
    providers = providers.filter(p => p.license.includes(filters.license))
  }
  
  return providers
}

// ============================================================================
// WEBSITE-SPEZIFISCHE KONFIGURATION
// ============================================================================

export const WEBSITE_CONFIG = {
  'sportwett-vergleich': {
    name: 'sportwett-vergleich.de',
    theme: 'blue-purple',
    primaryColor: '#2563eb',
    logo: '/logo.png',
    defaultTracking: {
      source: 'sportwett-vergleich',
      campaign: 'organic'
    }
  },
  
  'nur-sportwetten': {
    name: 'nur-sportwetten.de',
    theme: 'emerald-cyan',
    primaryColor: '#10b981',
    logo: '/logo.png',
    defaultTracking: {
      source: 'nur-sportwetten',
      campaign: 'organic'
    }
  },
  
  'bad-bets': {
    name: 'bad-bets.de',
    theme: 'red-orange',
    primaryColor: '#dc2626',
    logo: '/logo.png',
    defaultTracking: {
      source: 'bad-bets',
      campaign: 'organic'
    }
  },
  
  'wett-kompass': {
    name: 'wett-kompass.de',
    theme: 'gold-yellow',
    primaryColor: '#f59e0b',
    logo: '/logo.png',
    defaultTracking: {
      source: 'wett-kompass',
      campaign: 'organic'
    }
  }
}

// ============================================================================
// CONTENT PLACEHOLDERS
// ============================================================================

export const CONTENT_PLACEHOLDERS = {
  // Anbieter-Detailseite
  providerDetail: {
    title: '[ANBIETER] Test & Erfahrungen 2024',
    metaDescription: 'Ausführlicher [ANBIETER] Test: Bonus, Quoten, App, Auszahlung im Check. Lohnt sich [ANBIETER]? Jetzt lesen!',
    sections: [
      'Überblick',
      'Bonus & Aktionen',
      'Quoten & Wettangebot',
      'App & Website',
      'Zahlungsmethoden',
      'Kundenservice',
      'Vor- und Nachteile',
      'Fazit'
    ]
  },
  
  // Vergleichsseite
  comparison: {
    title: '[ANBIETER1] vs [ANBIETER2] - Welcher ist besser?',
    metaDescription: '[ANBIETER1] oder [ANBIETER2]? Wir vergleichen Bonus, Quoten, App und mehr. Finde den besseren Anbieter!',
    sections: [
      'Überblick',
      'Bonus-Vergleich',
      'Quoten-Vergleich',
      'App-Vergleich',
      'Fazit & Empfehlung'
    ]
  },
  
  // Ratgeber
  guide: {
    title: '[THEMA] - Der ultimative Guide 2024',
    metaDescription: 'Alles über [THEMA]: Tipps, Strategien und Fehler die du vermeiden solltest. Jetzt Guide lesen!',
    sections: [
      'Einleitung',
      'Grundlagen',
      'Strategien',
      'Häufige Fehler',
      'Tipps & Tricks',
      'Fazit'
    ]
  }
}

// ============================================================================
// EXPORT DEFAULT
// ============================================================================

export default {
  AFFILIATE_LINKS,
  PROVIDERS,
  WEBSITE_CONFIG,
  CONTENT_PLACEHOLDERS,
  getAffiliateLink,
  getProvider,
  getAllProviders,
  filterProviders
}

