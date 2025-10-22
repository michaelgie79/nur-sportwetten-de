#!/usr/bin/env node

/**
 * Automatic Content Generator for nur-sportwetten.de
 * Generates new news articles daily
 */

const fs = require('fs');
const path = require('path');

// Content templates
const newsTemplates = [
  {
    category: 'bundesliga',
    titleTemplates: [
      '{team1} dominiert gegen {team2}',
      '{team1} holt wichtigen Sieg gegen {team2}',
      'Überraschung: {team2} schlägt {team1}',
      '{team1} zeigt Gala-Vorstellung gegen {team2}'
    ],
    excerptTemplate: 'In einem spannenden Bundesliga-Spiel setzte sich {team1} mit {score} gegen {team2} durch. Alle Tore und Highlights im Überblick.'
  },
  {
    category: 'champions-league',
    titleTemplates: [
      '{team1} schlägt {team2} im Thriller',
      'Champions League: {team1} besiegt {team2}',
      '{team1} zeigt starke Leistung gegen {team2}',
      'Packend: {team1} vs {team2} endet {score}'
    ],
    excerptTemplate: 'Ein packendes Spiel in der Champions League endet {score} für {team1}. {player} trifft doppelt und sichert den Sieg.'
  },
  {
    category: 'deutschland',
    titleTemplates: [
      '{team1} holt wichtigen Sieg gegen {team2}',
      'Spitzenspiel: {team1} vs {team2}',
      '{team1} verkürzt Rückstand mit Sieg gegen {team2}'
    ],
    excerptTemplate: 'Im deutschen Spitzenspiel setzt sich {team1} mit {score} gegen {team2} durch und verkürzt den Rückstand in der Tabelle.'
  },
  {
    category: 'international',
    titleTemplates: [
      '{player} führt {team1} zum Sieg',
      '{team1} gewinnt dank {player}',
      'Gala-Vorstellung: {player} schießt {team1} zum Sieg'
    ],
    excerptTemplate: '{player} zeigt eine Gala-Vorstellung und schießt {team1} mit einem Hattrick zum Sieg.'
  }
];

// Teams
const bundesligaTeams = [
  'Bayern München', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen',
  'Union Berlin', 'SC Freiburg', 'Eintracht Frankfurt', 'VfL Wolfsburg',
  'VfB Stuttgart', 'Borussia Mönchengladbach', 'Werder Bremen', 'FC Augsburg'
];

const championsLeagueTeams = [
  'Real Madrid', 'Manchester City', 'FC Barcelona', 'PSG',
  'Bayern München', 'Liverpool', 'Inter Mailand', 'AC Milan'
];

const players = [
  'Thomas Müller', 'Karim Benzema', 'Lionel Messi', 'Erling Haaland',
  'Kylian Mbappé', 'Mohamed Salah', 'Robert Lewandowski'
];

const authors = [
  'Thomas Müller', 'Maria Schmidt', 'Andreas Huber', 'Stefan Weber',
  'Julia Becker', 'Michael Wagner', 'Sarah Klein'
];

// Helper functions
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateScore() {
  const home = Math.floor(Math.random() * 5);
  const away = Math.floor(Math.random() * 4);
  return `${home}:${away}`;
}

function getDate(daysAgo = 0) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toLocaleDateString('de-DE', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
}

// Generate article
function generateArticle(daysAgo = 0) {
  const template = getRandomItem(newsTemplates);
  const category = template.category;
  
  let team1, team2;
  if (category === 'bundesliga' || category === 'deutschland') {
    team1 = getRandomItem(bundesligaTeams);
    team2 = getRandomItem(bundesligaTeams.filter(t => t !== team1));
  } else if (category === 'champions-league') {
    team1 = getRandomItem(championsLeagueTeams);
    team2 = getRandomItem(championsLeagueTeams.filter(t => t !== team1));
  } else {
    team1 = getRandomItem(championsLeagueTeams);
    team2 = 'Gegner';
  }
  
  const score = generateScore();
  const player = getRandomItem(players);
  const titleTemplate = getRandomItem(template.titleTemplates);
  
  const title = titleTemplate
    .replace('{team1}', team1)
    .replace('{team2}', team2)
    .replace('{score}', score)
    .replace('{player}', player);
  
  const excerpt = template.excerptTemplate
    .replace('{team1}', team1)
    .replace('{team2}', team2)
    .replace('{score}', score)
    .replace('{player}', player);
  
  const icons = {
    'bundesliga': '⚽',
    'champions-league': '🏆',
    'deutschland': '🇩🇪',
    'international': '🌎'
  };
  
  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    category: category,
    title: title,
    excerpt: excerpt,
    date: getDate(daysAgo),
    author: getRandomItem(authors),
    readTime: `${Math.floor(Math.random() * 4) + 3} Min.`,
    image: icons[category] || '⚽'
  };
}

// Main function
function main() {
  console.log('🚀 Generiere neue Artikel...\n');
  
  // Generate 3 new articles
  const newArticles = [
    generateArticle(0),  // Today
    generateArticle(1),  // Yesterday
    generateArticle(2)   // 2 days ago
  ];
  
  newArticles.forEach((article, index) => {
    console.log(`✅ Artikel ${index + 1}:`);
    console.log(`   Titel: ${article.title}`);
    console.log(`   Kategorie: ${article.category}`);
    console.log(`   Datum: ${article.date}`);
    console.log('');
  });
  
  console.log('💡 Hinweis: Um die Artikel zu App.jsx hinzuzufügen, führe aus:');
  console.log('   node scripts/update-articles.js');
  
  // Save to temporary file
  const outputPath = path.join(__dirname, 'generated-articles.json');
  fs.writeFileSync(outputPath, JSON.stringify(newArticles, null, 2));
  console.log(`\n📄 Artikel gespeichert in: ${outputPath}`);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateArticle };

