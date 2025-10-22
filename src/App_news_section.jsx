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

