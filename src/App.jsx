import { useState } from 'react'
import './App.css'
import { FooterLinks } from './components/CrossLinks'

function App() {
  const [activeNewsCategory, setActiveNewsCategory] = useState('alle')
  const [activeTipCategory, setActiveTipCategory] = useState('bundesliga')

  // Simulated news data
  const newsArticles = [
    {
      id: 201,
      category: 'champions-league',
      title: 'SC Freiburg vs FC Utrecht heute live auf RTL: Quoten, Tipps & Free-TV-Übertragung',
      excerpt: 'Der SC Freiburg empfängt heute Abend (21:00 Uhr) den FC Utrecht zum 3. Spieltag der Europa League. Das Besondere: Das Spiel läuft live im Free-TV auf RTL! Freiburg ist mit Quote 1.60 klarer Favorit. Unser Tipp: Freiburg-Sieg + Über 2.5 Tore (Kombiquote 2.40).',
      date: '23. Oktober 2025',
      author: 'Michael Wagner',
      readTime: '5 Min.',
      image: '⚽'
    },
    {
      id: 202,
      category: 'champions-league',
      title: 'Europa League heute: Die 5 Top-Spiele am 23. Oktober - Quoten, Tipps & TV',
      excerpt: 'Heute Abend steht der 3. Spieltag der Europa League an! Wir präsentieren die 5 spannendsten Partien: Fenerbahçe vs Stuttgart (18:45), Freiburg vs Utrecht (RTL Free-TV!), AS Rom vs Plzeň, Nottingham Forest vs Porto und Celtic vs Sturm Graz. Kombiwette: Freiburg + Rom + Celtic = Quote 3.72!',
      date: '23. Oktober 2025',
      author: 'Sarah Klein',
      readTime: '6 Min.',
      image: '🏆'
    },
    {
      id: 203,
      category: 'bundesliga',
      title: 'Bundesliga am Wochenende: Bayern vs Leverkusen - Der Spitzenspiel-Kracher',
      excerpt: 'Nach der Europa-League-Woche wartet am Wochenende das Bundesliga-Highlight: Bayern München empfängt Bayer Leverkusen am Samstag um 18:30 Uhr! Tabellenführer gegen Zweiter - nur 2 Punkte Rückstand! Frühe Quote: Bayern 1.70. Unser Tipp: Beide Teams treffen (Quote 1.60).',
      date: '23. Oktober 2025',
      author: 'Thomas Becker',
      readTime: '5 Min.',
      image: '⚽'
    },
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
    <div className="min-h-screen bg-slate-950">
      {/* Modern Header with Custom Logo */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b-2 border-emerald-500 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Custom Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                {/* Logo Image - Shield Sports - Prominent & Large */}
                <img 
                  src="/logo.png" 
                  alt="nur-sportwetten.de Logo" 
                  className="w-36 h-36 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(16,185,129,0.8)] filter brightness-110" 
                />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">nur-sportwetten</span>
                  <span className="text-white">.de</span>
                </h1>
                <p className="text-sm text-emerald-400 font-semibold tracking-wider uppercase">Dein Wett-Insider</p>
              </div>
            </div>
            
            {/* Live Indicator */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-semibold">LIVE</span>
              </div>
            </div>
          </div>
          
          {/* Modern Navigation */}
          <nav className="mt-6 flex space-x-1">
            <a href="#news" className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200">
              <span className="mr-2">📰</span>News
            </a>
            <a href="#tipps" className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200">
              <span className="mr-2">💡</span>Wett-Tipps
            </a>
            <a href="#analysen" className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200">
              <span className="mr-2">📊</span>Analysen
            </a>
            <a href="#bundesliga" className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200">
              <span className="mr-2">⚽</span>Bundesliga
            </a>
            <a href="#champions-league" className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200">
              <span className="mr-2">🏆</span>Champions League
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Bold & Modern */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 py-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-wider">
                #1 Sportwetten Portal
              </span>
            </div>
            <h2 className="text-6xl font-black mb-6 leading-tight">
              <span className="text-white">Gewinne mehr.</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400">Wette smarter.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Professionelle Analysen • Exklusive Insider-Tipps • Live-Quoten • Bundesliga & Champions League
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400">2.847</div>
                <div className="text-sm text-slate-400 font-semibold mt-2">Aktive Leser heute</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400">156</div>
                <div className="text-sm text-slate-400 font-semibold mt-2">Artikel diese Woche</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400">89%</div>
                <div className="text-sm text-slate-400 font-semibold mt-2">Erfolgsquote Tipps</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center items-center space-x-8 mt-10 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400">✓</span>
                <span>Unabhängig</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400">✓</span>
                <span>Täglich aktualisiert</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400">⭐</span>
                <span>Seit 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-4xl font-black text-white mb-2">
                📰 Aktuelle News
              </h3>
              <p className="text-slate-400">Die wichtigsten Nachrichten aus der Welt des Sports</p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex space-x-3 mb-8">
            <button
              onClick={() => setActiveNewsCategory('alle')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeNewsCategory === 'alle'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Alle
            </button>
            <button
              onClick={() => setActiveNewsCategory('bundesliga')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeNewsCategory === 'bundesliga'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Bundesliga
            </button>
            <button
              onClick={() => setActiveNewsCategory('champions-league')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeNewsCategory === 'champions-league'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Champions League
            </button>
            <button
              onClick={() => setActiveNewsCategory('international')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeNewsCategory === 'international'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              International
            </button>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredNews.map((article) => {
              // Define colors based on category
              const categoryColors = {
                'bundesliga': {
                  bg: 'from-emerald-900/40 to-slate-900',
                  border: 'border-emerald-500/50',
                  hoverBorder: 'hover:border-emerald-400',
                  shadow: 'hover:shadow-emerald-500/30',
                  badge: 'bg-emerald-500/20 text-emerald-400',
                  hoverText: 'group-hover:text-emerald-400',
                  button: 'hover:from-emerald-500 hover:to-emerald-600'
                },
                'champions-league': {
                  bg: 'from-blue-900/40 to-slate-900',
                  border: 'border-blue-500/50',
                  hoverBorder: 'hover:border-blue-400',
                  shadow: 'hover:shadow-blue-500/30',
                  badge: 'bg-blue-500/20 text-blue-400',
                  hoverText: 'group-hover:text-blue-400',
                  button: 'hover:from-blue-500 hover:to-blue-600'
                },
                'deutschland': {
                  bg: 'from-yellow-900/40 to-slate-900',
                  border: 'border-yellow-500/50',
                  hoverBorder: 'hover:border-yellow-400',
                  shadow: 'hover:shadow-yellow-500/30',
                  badge: 'bg-yellow-500/20 text-yellow-400',
                  hoverText: 'group-hover:text-yellow-400',
                  button: 'hover:from-yellow-500 hover:to-yellow-600'
                },
                'international': {
                  bg: 'from-purple-900/40 to-slate-900',
                  border: 'border-purple-500/50',
                  hoverBorder: 'hover:border-purple-400',
                  shadow: 'hover:shadow-purple-500/30',
                  badge: 'bg-purple-500/20 text-purple-400',
                  hoverText: 'group-hover:text-purple-400',
                  button: 'hover:from-purple-500 hover:to-purple-600'
                }
              };

              const colors = categoryColors[article.category] || categoryColors['bundesliga'];

              return (
                <div
                  key={article.id}
                  className={`group bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl overflow-hidden ${colors.hoverBorder} transition-all duration-300 hover:shadow-xl ${colors.shadow}`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{article.image || '⚽'}</span>
                      <span className={`px-3 py-1 ${colors.badge} text-xs font-bold uppercase rounded-full`}>
                        {article.category.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <h4 className={`text-xl font-bold text-white mb-3 ${colors.hoverText} transition-colors`}>
                      {article.title}
                    </h4>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center space-x-4">
                        <span>👤 {article.author}</span>
                        <span>📅 {article.date}</span>
                        <span>⏱️ {article.readTime}</span>
                      </div>
                    </div>
                    
                    <button className={`mt-4 w-full px-4 py-2.5 bg-slate-700 hover:bg-gradient-to-r ${colors.button} text-white rounded-xl font-semibold text-sm transition-all duration-200`}>
                      Artikel lesen →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contextual Cross-Link */}
          <div className="mt-10 p-6 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border-l-4 border-emerald-500 rounded-r-2xl">
            <p className="text-slate-300 text-lg">
              💡 <strong className="text-white">Tipp:</strong> Bevor du wettest, vergleiche die Quoten! 
              <a 
                href="https://sportwett-vergleich.de"
                className="text-emerald-400 hover:text-emerald-300 underline font-bold ml-2"
              >
                Zu den besten Wettanbietern im Vergleich →
              </a>
            </p>
          </div>

          <div className="text-center mt-6">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/50 transition-all duration-200">
              Alle News anzeigen (247 Artikel)
            </button>
          </div>
        </div>
      </section>

      {/* Betting Tips Section */}
      <section id="tipps" className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-4xl font-black text-white mb-2">
                💡 Experten Wett-Tipps
              </h3>
              <p className="text-slate-400">Datenbasierte Analysen für bessere Wetten</p>
            </div>
          </div>

          {/* Tip Category Tabs */}
          <div className="flex space-x-3 mb-8">
            <button
              onClick={() => setActiveTipCategory('bundesliga')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTipCategory === 'bundesliga'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              ⚽ Bundesliga
            </button>
            <button
              onClick={() => setActiveTipCategory('champions-league')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTipCategory === 'champions-league'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🏆 Champions League
            </button>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{tip.icon}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-400">🔥</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold uppercase rounded-full">
                      {tip.confidence}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  {tip.match}
                </h4>

                <p className="text-sm text-slate-400 mb-4">
                  📅 {tip.date}
                </p>

                <div className="bg-slate-950/50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Unser Tipp:</p>
                      <p className="text-lg font-bold text-emerald-400">{tip.tip}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 mb-1">Quote:</p>
                      <p className="text-2xl font-black text-cyan-400">{tip.quote}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">📊 Analyse:</p>
                  <p className="text-sm text-slate-300">{tip.analysis}</p>
                </div>

                <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/50 transition-all duration-200">
                  Detaillierte Analyse →
                </button>
              </div>
            ))}
          </div>

          {/* Contextual Cross-Link */}
          <div className="mt-10 p-6 bg-gradient-to-r from-orange-900/30 to-red-900/30 border-l-4 border-orange-500 rounded-r-2xl">
            <p className="text-slate-300 text-lg">
              ⚠️ <strong className="text-white">Achtung:</strong> Vermeide die häufigsten Wett-Fehler! 
              <a 
                href="https://bad-bets.de"
                className="text-orange-400 hover:text-orange-300 underline font-bold ml-2"
              >
                Lerne aus den Bad Bets anderer →
              </a>
            </p>
          </div>

          <div className="text-center mt-6">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/50 transition-all duration-200">
              Alle Tipps anzeigen (47 aktive Tipps)
            </button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4">
              Warum NurSportwetten?
            </h3>
            <p className="text-slate-400">Deine Vorteile auf einen Blick</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-900/30 to-slate-800 border-2 border-emerald-600/40 rounded-2xl p-6 text-center hover:border-emerald-400 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">Datenbasiert</h4>
              <p className="text-sm text-slate-400">Alle Tipps basieren auf umfangreichen Statistiken und Analysen</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-slate-800 border-2 border-cyan-600/40 rounded-2xl p-6 text-center hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Täglich aktuell</h4>
              <p className="text-sm text-slate-400">Neue News, Tipps und Analysen jeden Tag - immer am Puls der Zeit</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 border-2 border-blue-600/40 rounded-2xl p-6 text-center hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-5xl mb-4">🇩🇪</div>
              <h4 className="text-lg font-bold text-white mb-2">Deutschland-Fokus</h4>
              <p className="text-sm text-slate-400">Speziell für deutsche Sportwetten-Fans gemacht</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-slate-800 border-2 border-orange-600/40 rounded-2xl p-6 text-center hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">89% Erfolgsquote</h4>
              <p className="text-sm text-slate-400">Unsere Tipps haben eine nachweislich hohe Trefferquote</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-slate-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-black text-white mb-4">
            Verpasse keine News & Tipps mehr!
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Abonniere unseren Newsletter und erhalte täglich die besten Wett-Tipps direkt in dein Postfach
          </p>
          
          <button className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl font-bold text-lg shadow-2xl shadow-emerald-500/50 transition-all duration-200 transform hover:scale-105">
            Jetzt abonnieren →
          </button>

          <div className="flex justify-center items-center space-x-6 mt-8 text-sm text-slate-400">
            <span>✓ Kostenlos</span>
            <span>•</span>
            <span>✓ Jederzeit kündbar</span>
            <span>•</span>
            <span>✓ Kein Spam</span>
            <span>•</span>
            <span>✓ 12.847 Abonnenten</span>
          </div>
        </div>
      </section>

      {/* Footer with Cross-Links */}
      <FooterLinks />
    </div>
  )
}

export default App

