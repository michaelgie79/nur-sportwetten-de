import { useParams, Link } from 'wouter'
import { getAffiliateLink } from '../config/affiliate'

export default function ArticleDetail() {
  const params = useParams()
  const articleId = params.id
  
  // TODO: Fetch article data from CMS or database
  const article = {
    id: articleId,
    title: 'Artikel-Titel (Platzhalter)',
    category: 'bundesliga',
    excerpt: 'Kurze Zusammenfassung des Artikels...',
    content: `
      <h2>Einleitung</h2>
      <p>Hier kommt der vollständige Artikel-Content...</p>
      
      <h2>Hauptteil</h2>
      <p>Weitere Inhalte folgen...</p>
      
      <h2>Fazit</h2>
      <p>Zusammenfassung und Schlussfolgerungen...</p>
    `,
    date: '23. Oktober 2025',
    author: 'Redaktion',
    readTime: '5 Min.',
    image: '⚽'
  }
  
  const getCategoryColor = (category) => {
    const colors = {
      bundesliga: { bg: 'from-red-500 to-red-700', text: 'text-red-600' },
      'champions-league': { bg: 'from-blue-500 to-blue-700', text: 'text-blue-600' },
      international: { bg: 'from-purple-500 to-purple-700', text: 'text-purple-600' },
      alle: { bg: 'from-emerald-500 to-cyan-500', text: 'text-emerald-600' }
    }
    return colors[category] || colors.alle
  }
  
  const colors = getCategoryColor(article.category)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center space-x-3 group cursor-pointer">
                <img 
                  src="/logo.png" 
                  alt="Nur-Sportwetten Logo" 
                  className="w-32 h-32 group-hover:scale-110 transition-all duration-300"
                />
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    nur-sportwetten<span className="text-emerald-600">.de</span>
                  </h1>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Hero */}
      <section className={`bg-gradient-to-r ${colors.bg} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-6">{article.image}</div>
            <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              {article.category.toUpperCase()}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm text-white/80">
              <span>📅 {article.date}</span>
              <span>✍️ {article.author}</span>
              <span>⏱️ {article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Excerpt */}
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border-l-4 border-emerald-500 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 font-medium">{article.excerpt}</p>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Jetzt bei Top-Anbietern wetten!</h3>
              <p className="mb-6">Die besten Quoten für deine Sportwetten</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getAffiliateLink('bet365', {
                    source: 'nur-sportwetten',
                    campaign: 'article-detail',
                    medium: 'cta-button'
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Zu Bet365 →
                </a>
                <a
                  href={getAffiliateLink('betano', {
                    source: 'nur-sportwetten',
                    campaign: 'article-detail',
                    medium: 'cta-button'
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Zu Betano →
                </a>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link href="/">
              <a className="text-emerald-600 hover:text-emerald-700 font-medium">
                ← Zurück zur Startseite
              </a>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-4">
            ⚠️ Glücksspiel kann süchtig machen. Bitte spiele verantwortungsvoll. 18+
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 nur-sportwetten.de - Alle Rechte vorbehalten
          </p>
        </div>
      </footer>
    </div>
  )
}

