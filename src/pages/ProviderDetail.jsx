import { useParams, Link } from 'wouter'
import { getProvider, getAffiliateLink } from '../config/affiliate'

export default function ProviderDetail() {
  const params = useParams()
  const providerId = params.id
  
  const provider = getProvider(providerId)
  
  if (!provider) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anbieter nicht gefunden</h1>
          <Link href="/">
            <a className="text-emerald-600 hover:text-emerald-700 font-medium">← Zurück zur Startseite</a>
          </Link>
        </div>
      </div>
    )
  }
  
  const affiliateLink = getAffiliateLink(providerId, {
    source: 'nur-sportwetten',
    campaign: 'provider-detail',
    medium: 'cta-button'
  })
  
  const getBadgeColor = (color) => {
    const colors = {
      gold: 'from-amber-500 to-yellow-600',
      green: 'from-emerald-500 to-green-600',
      blue: 'from-blue-500 to-indigo-600',
      purple: 'from-purple-500 to-pink-600'
    }
    return colors[color] || colors.green
  }
  
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

      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-6xl">{provider.logo}</div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <span className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                  #{provider.rank}
                </span>
                {provider.badge && (
                  <span className="bg-white/30 text-white text-sm font-bold px-4 py-2 rounded-full">
                    {provider.badge}
                  </span>
                )}
              </div>
              <h1 className="text-5xl font-bold mb-4">{provider.name}</h1>
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-2xl ${i < Math.floor(provider.rating) ? 'text-yellow-300' : 'text-white/30'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xl font-semibold">
                  {provider.rating}/5 <span className="text-white/70">({provider.ratingCount} Bewertungen)</span>
                </span>
              </div>
              <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Jetzt bei {provider.name} wetten →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content - Same as sportwett-vergleich.de */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{provider.name} im Detail</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Detaillierte Informationen über {provider.name} folgen in Kürze.
          </p>
          <a 
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all`}
          >
            Jetzt bei {provider.name} wetten →
          </a>
        </div>
      </div>

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

