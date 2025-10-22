// Intelligent Cross-Linking Component
// Automatically generates contextual links to other websites in the network

export const CrossLinks = {
  // Network websites configuration
  network: {
    sportwettVergleich: {
      url: 'https://sportwett-vergleich.de',
      name: 'Sportwett-Vergleich.de',
      description: 'Finde die besten Wettanbieter im Vergleich'
    },
    badBets: {
      url: 'https://bad-bets.de',
      name: 'Bad-Bets.de',
      description: 'Vermeide die häufigsten Wett-Fehler'
    }
  },

  // Contextual link suggestions based on article category
  getContextualLinks: (category) => {
    const links = {
      'bundesliga': [
        {
          text: 'beste Bundesliga-Wettanbieter',
          url: 'https://sportwett-vergleich.de',
          context: 'Jetzt bei den {link} wetten und von Top-Quoten profitieren.'
        },
        {
          text: 'häufigsten Fehler bei Bundesliga-Wetten',
          url: 'https://bad-bets.de',
          context: 'Vermeide die {link} und wette profitabler.'
        }
      ],
      'champions-league': [
        {
          text: 'besten Champions League Wettanbieter',
          url: 'https://sportwett-vergleich.de',
          context: 'Finde die {link} mit den höchsten Quoten.'
        },
        {
          text: 'typischen Fehler bei Champions League Wetten',
          url: 'https://bad-bets.de',
          context: 'Lerne aus den {link} und steigere deine Erfolgsquote.'
        }
      ],
      'default': [
        {
          text: 'lizenzierten Wettanbieter im Vergleich',
          url: 'https://sportwett-vergleich.de',
          context: 'Vergleiche jetzt {link} und finde den besten für dich.'
        },
        {
          text: 'häufigsten Wett-Fehler',
          url: 'https://bad-bets.de',
          context: 'Vermeide die {link} und wette smarter.'
        }
      ]
    };

    return links[category] || links['default'];
  },

  // Generate random contextual link for variety
  getRandomLink: (category) => {
    const links = CrossLinks.getContextualLinks(category);
    return links[Math.floor(Math.random() * links.length)];
  }
};

// Footer Links Component
export const FooterLinks = () => {
  return (
    <div className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Site */}
          <div>
            <h4 className="text-white font-bold mb-4">nur-sportwetten.de</h4>
            <p className="text-slate-400 text-sm">
              Dein Premium-Portal für Sportwetten News, Tipps und Analysen
            </p>
          </div>

          {/* Partner Sites */}
          <div>
            <h4 className="text-emerald-400 font-bold mb-4">Unsere Partner-Portale</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://sportwett-vergleich.de" 
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <span className="mr-2">🔍</span>
                  Sportwett-Vergleich.de
                </a>
                <p className="text-slate-500 text-xs ml-6">Wettanbieter vergleichen</p>
              </li>
              <li>
                <a 
                  href="https://bad-bets.de" 
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <span className="mr-2">⚠️</span>
                  Bad-Bets.de
                </a>
                <p className="text-slate-500 text-xs ml-6">Wett-Fehler vermeiden</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#news" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Aktuelle News
                </a>
              </li>
              <li>
                <a href="#tipps" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Wett-Tipps
                </a>
              </li>
              <li>
                <a href="#analysen" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Analysen
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 nur-sportwetten.de - Dein Wett-Insider • Alle Rechte vorbehalten
          </p>
          <div className="mt-4 flex justify-center items-center space-x-4 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Impressum</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Datenschutz</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Kontakt</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar Widget Component
export const SidebarWidget = () => {
  return (
    <div className="space-y-6">
      {/* Wettanbieter-Vergleich Widget */}
      <div className="bg-gradient-to-br from-emerald-900/30 to-slate-800 border-2 border-emerald-600/40 rounded-2xl p-6">
        <div className="text-4xl mb-3">🎯</div>
        <h3 className="text-lg font-bold text-white mb-2">Wettanbieter-Vergleich</h3>
        <p className="text-sm text-slate-300 mb-4">
          Finde den besten Wettanbieter mit Top-Quoten und Bonus-Angeboten
        </p>
        <a 
          href="https://sportwett-vergleich.de"
          className="block w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white text-center rounded-xl font-bold transition-all duration-200 shadow-lg shadow-emerald-500/50"
        >
          Jetzt vergleichen →
        </a>
      </div>

      {/* Bad Bets Widget */}
      <div className="bg-gradient-to-br from-orange-900/30 to-slate-800 border-2 border-orange-600/40 rounded-2xl p-6">
        <div className="text-4xl mb-3">⚠️</div>
        <h3 className="text-lg font-bold text-white mb-2">Vermeide Wett-Fehler</h3>
        <p className="text-sm text-slate-300 mb-4">
          Lerne aus den häufigsten Fehlern anderer Wetter und steigere deine Erfolgsquote
        </p>
        <a 
          href="https://bad-bets.de"
          className="block w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-center rounded-xl font-bold transition-all duration-200 shadow-lg shadow-orange-500/50"
        >
          Mehr erfahren →
        </a>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 border-2 border-blue-600/40 rounded-2xl p-6">
        <div className="text-4xl mb-3">📧</div>
        <h3 className="text-lg font-bold text-white mb-2">Newsletter</h3>
        <p className="text-sm text-slate-300 mb-4">
          Erhalte täglich die besten Wett-Tipps direkt in dein Postfach
        </p>
        <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-bold transition-all duration-200 shadow-lg shadow-blue-500/50">
          Jetzt abonnieren
        </button>
      </div>
    </div>
  );
};

// Contextual Link Component (to be inserted in articles)
export const ContextualLink = ({ category, position = 'end' }) => {
  const link = CrossLinks.getRandomLink(category);
  
  return (
    <div className="my-6 p-4 bg-slate-800/50 border-l-4 border-emerald-500 rounded-r-xl">
      <p className="text-slate-300 text-sm">
        💡 <strong>Tipp:</strong> {link.context.replace('{link}', '')}
        <a 
          href={link.url}
          className="text-emerald-400 hover:text-emerald-300 underline font-semibold ml-1"
        >
          {link.text}
        </a>
      </p>
    </div>
  );
};

export default CrossLinks;

