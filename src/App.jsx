import { useState } from 'react'
import './App.css'

function App() {
  const [activeNewsCategory, setActiveNewsCategory] = useState('alle')
  const [activeTipCategory, setActiveTipCategory] = useState('bundesliga')

  // Simulated news data
  const newsArticles = [
    {
      id: 1,
      category: 'bundesliga',
      title: 'Bayern München dominiert gegen Union Berlin',
      excerpt: 'Der FC Bayern München zeigt eine beeindruckende Leistung und gewinnt mit 4:0 gegen Union Berlin. Alle Tore und Highlights im Überblick.',
      date: '19. Oktober 2025',
      author: 'Thomas Müller',
      readTime: '4 Min.',
      image: '⚽'
    },
    {
      id: 2,
      category: 'champions-league',
      title: 'Real Madrid schlägt Manchester City im Thriller',
      excerpt: 'Ein packendes Spiel in der Champions League endet 3:2 für Real Madrid. Benzema trifft doppelt und sichert den Sieg.',
      date: '18. Oktober 2025',
      author: 'Maria Schmidt',
      readTime: '5 Min.',
      image: '🏆'
    },
    {
      id: 3,
      category: "deutschland",
      title: 'Rapid Wien holt wichtigen Sieg gegen Salzburg',
      excerpt: 'Im deutschen Spitzenspiel setzt sich Rapid Wien mit 2:1 gegen Red Bull Salzburg durch und verkürzt den Rückstand in der Tabelle.',
      date: '18. Oktober 2025',
      author: 'Andreas Huber',
      readTime: '3 Min.',
    },
    {
      id: 4,
      category: 'international',
      title: 'Messi führt Inter Miami zum Playoff-Sieg',
      excerpt: 'Lionel Messi zeigt in der MLS eine Gala-Vorstellung und schießt Inter Miami mit einem Hattrick ins Finale.',
      date: '17. Oktober 2025',
      author: 'Stefan Weber',
      readTime: '4 Min.',
      image: '🌎'
    }
  ]

  // Simulated betting tips
  const bettingTips = [
    {
      id: 1,
      category: 'bundesliga',
      match: 'Borussia Dortmund vs. RB Leipzig',
      date: '20. Oktober 2025, 15:30',
      tip: 'Über 2.5 Tore',
      quote: '1.75',
      confidence: 'Hoch',
      analysis: 'Beide Teams sind offensivstark und haben in den letzten 5 Spielen durchschnittlich 3.2 Tore pro Spiel erzielt.',
      icon: '⚽'
    },
    {
      id: 2,
      category: 'champions-league',
      match: 'FC Barcelona vs. PSG',
      date: '21. Oktober 2025, 21:00',
      tip: 'Barcelona gewinnt',
      quote: '2.10',
      confidence: 'Mittel',
      analysis: 'Barcelona ist zu Hause stark, PSG hat auswärts Schwächen gezeigt. Value-Wette mit gutem Potenzial.',
      icon: '🏆'
    },
    {
      id: 3,
      category: 'bundesliga',
      match: 'Bayern München vs. Bayer Leverkusen',
      date: '21. Oktober 2025, 18:30',
      tip: 'Beide Teams treffen',
      quote: '1.65',
      confidence: 'Hoch',
      analysis: 'Leverkusen hat eine starke Offensive, Bayern lässt aber auch Chancen zu. Beide Teams haben in 80% der Spiele getroffen.',
      icon: '⚽'
    }
  ]

  const filteredNews = activeNewsCategory === 'alle' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeNewsCategory)

  const filteredTips = bettingTips.filter(tip => tip.category === activeTipCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">⚽</div>
              <div>
                <h1 className="text-2xl font-bold text-green-600">nur-sportwetten.de</h1>
                <p className="text-sm text-gray-600">News, Tipps & Analysen</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">✓ Täglich aktuell</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="mt-4 flex space-x-6 text-sm font-medium">
            <a href="#news" className="text-gray-700 hover:text-green-600 transition">📰 News</a>
            <a href="#tipps" className="text-gray-700 hover:text-green-600 transition">💡 Wett-Tipps</a>
            <a href="#analysen" className="text-gray-700 hover:text-green-600 transition">📊 Analysen</a>
            <a href="#bundesliga" className="text-gray-700 hover:text-green-600 transition">⚽ Bundesliga</a>
            <a href="#champions-league" className="text-gray-700 hover:text-green-600 transition">🏆 Champions League</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">
              Deutschlands #1 für Sportwetten News & Tipps
            </h2>
            <p className="text-xl mb-6 text-green-100">
              Tägliche Updates • Experten-Tipps • Detaillierte Analysen • Bundesliga, Champions League & mehr
            </p>
            
            {/* Live Stats */}
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold">2.847</div>
                <div className="text-sm text-green-100">Leser heute</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold">156</div>
                <div className="text-sm text-green-100">Artikel diese Woche</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold">89%</div>
                <div className="text-sm text-green-100">Erfolgsquote Tipps</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                🛡️ Unabhängig
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                ✓ Täglich aktualisiert
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                ⭐ Seit 2020
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">📰 Aktuelle Sportwetten News</h2>
              <p className="text-gray-600 mt-2">Die wichtigsten Nachrichten aus der Welt des Sports</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveNewsCategory('alle')}
                className={`px-4 py-2 rounded-lg font-medium transition \${
                  activeNewsCategory === 'alle'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Alle
              </button>
              <button
                onClick={() => setActiveNewsCategory('bundesliga')}
                className={`px-4 py-2 rounded-lg font-medium transition \${
                  activeNewsCategory === 'bundesliga'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Bundesliga
              </button>
              <button
                onClick={() => setActiveNewsCategory('champions-league')}
                className={`px-4 py-2 rounded-lg font-medium transition \${
                  activeNewsCategory === 'champions-league'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Champions League
              </button>
              <button
                onClick={() => setActiveNewsCategory('oesterreich')}
                className={`px-4 py-2 rounded-lg font-medium transition \${
                  activeNewsCategory === 'oesterreich'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredNews.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl">{article.image}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold uppercase">
                      {article.category.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>👤 {article.author}</span>
                      <span>📅 {article.date}</span>
                      <span>⏱️ {article.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition">
                    Artikel lesen →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
              Alle News anzeigen (247 Artikel)
            </button>
          </div>
        </div>
      </section>

      {/* Betting Tips Section */}
      <section id="tipps" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">💡 Experten Wett-Tipps</h2>
              <p className="text-gray-600 mt-2">Datenbasierte Analysen für bessere Wetten</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTipCategory('bundesliga')}
                className={`px-4 py-2 rounded-lg font-medium transition \${
                  activeTipCategory === 'bundesliga'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                ⚽ Bundesliga
              </button>
              <button
                onClick={() => setActiveTipCategory('champions-league')}
                className={`px-4 py-2 rounded-lg font-medium transition \${
                  activeTipCategory === 'champions-league'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                🏆 Champions League
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-100 hover:border-blue-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{tip.icon}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold \${
                      tip.confidence === 'Hoch' 
                        ? 'bg-green-500' 
                        : 'bg-yellow-500'
                    }`}>
                      {tip.confidence === 'Hoch' ? '🔥' : '⚠️'} {tip.confidence}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mt-3">{tip.match}</h3>
                  <p className="text-sm text-blue-100 mt-1">📅 {tip.date}</p>
                </div>
                
                <div className="p-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-4">
                    <div className="text-sm text-gray-600 mb-1">Unser Tipp:</div>
                    <div className="text-2xl font-bold text-gray-900">{tip.tip}</div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-gray-600">Quote:</span>
                      <span className="text-3xl font-bold text-green-600">{tip.quote}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">📊 Analyse:</div>
                    <p className="text-sm text-gray-600">{tip.analysis}</p>
                  </div>
                  
                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition">
                    Detaillierte Analyse →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md">
              Alle Tipps anzeigen (47 aktive Tipps)
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum nur-sportwetten.de?</h2>
            <p className="text-gray-600">Deine Vorteile auf einen Blick</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Datenbasiert</h3>
              <p className="text-gray-600">Alle Tipps basieren auf umfangreichen Statistiken und Analysen</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Täglich aktuell</h3>
              <p className="text-gray-600">Neue News, Tipps und Analysen jeden Tag - immer am Puls der Zeit</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deutschland-Fokus</h3>
              <p className="text-gray-600">Speziell für deutsche Sportwetten-Fans gemacht</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">89% Erfolgsquote</h3>
              <p className="text-gray-600">Unsere Tipps haben eine nachweislich hohe Trefferquote</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Verpasse keine News & Tipps mehr!</h2>
          <p className="text-xl mb-8 text-green-100">
            Abonniere unseren Newsletter und erhalte täglich die besten Wett-Tipps direkt in dein Postfach
          </p>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="px-6 py-4 rounded-lg text-gray-900 w-96 focus:outline-none focus:ring-4 focus:ring-green-300"
            />
            <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              Jetzt abonnieren →
            </button>
          </div>
          <p className="text-sm text-green-100 mt-4">
            ✓ Kostenlos • ✓ Jederzeit kündbar • ✓ Kein Spam • ✓ 12.847 Abonnenten
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">nur-sportwetten.de</h3>
              <p className="text-gray-400 text-sm">
                Deutschlands führendes Portal für Sportwetten News, Tipps und Analysen.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Schnelllinks</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#news" className="hover:text-green-400 transition">📰 News</a></li>
                <li><a href="#tipps" className="hover:text-green-400 transition">💡 Wett-Tipps</a></li>
                <li><a href="#analysen" className="hover:text-green-400 transition">📊 Analysen</a></li>
                <li><a href="#bundesliga" className="hover:text-green-400 transition">⚽ Bundesliga</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Unser Netzwerk</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://wett-kompass.at" className="hover:text-green-400 transition">🧭 Wett-Kompass.at</a></li>
                <li><a href="https://bad-bets.at" className="hover:text-green-400 transition">🚫 Bad-Bets.at</a></li>
                <li><a href="https://wett-kompass.de" className="hover:text-green-400 transition">🇩🇪 Wett-Kompass.de</a></li>
                <li><a href="https://bad-bets.de" className="hover:text-green-400 transition">🇩🇪 Bad-Bets.de</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#impressum" className="hover:text-green-400 transition">Impressum</a></li>
                <li><a href="#datenschutz" className="hover:text-green-400 transition">Datenschutz</a></li>
                <li><a href="#agb" className="hover:text-green-400 transition">AGB</a></li>
                <li><a href="#kontakt" className="hover:text-green-400 transition">Kontakt</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p className="mb-4">
              <span className="text-red-500 font-bold">18+</span> | Glücksspiel kann süchtig machen | 
              <a href="https://www.spielsuchthilfe.at" className="text-green-400 hover:underline ml-1">Spielsuchthilfe.de</a>
            </p>
            <p>
              © 2025 nur-sportwetten.de • Alle Rechte vorbehalten • 
              <span className="text-green-400 ml-1">Wir sind ein unabhängiges Informationsportal und erhalten Provisionen von Wettanbietern</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
