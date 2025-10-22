// Analytics & Tracking Component
// Tracks user interactions, cross-link clicks, and page views

export const Analytics = {
  // Initialize Google Analytics
  init: (measurementId) => {
    if (typeof window === 'undefined') return;
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', measurementId);
    
    window.gtag = gtag;
    
    console.log('✅ Analytics initialized');
  },
  
  // Track page view
  pageView: (path) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: path
      });
    }
  },
  
  // Track cross-link clicks
  trackCrossLink: (targetSite, sourcePage) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'cross_link_click', {
        target_site: targetSite,
        source_page: sourcePage,
        event_category: 'SEO',
        event_label: `${sourcePage} → ${targetSite}`
      });
    }
    console.log(`📊 Cross-link click: ${targetSite}`);
  },
  
  // Track article clicks
  trackArticleClick: (articleTitle, articleCategory) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'article_click', {
        article_title: articleTitle,
        article_category: articleCategory,
        event_category: 'Content',
        event_label: articleTitle
      });
    }
  },
  
  // Track button clicks
  trackButtonClick: (buttonName, buttonLocation) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'button_click', {
        button_name: buttonName,
        button_location: buttonLocation,
        event_category: 'Engagement'
      });
    }
  },
  
  // Track newsletter signup
  trackNewsletterSignup: () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'newsletter_signup', {
        event_category: 'Conversion',
        event_label: 'Newsletter'
      });
    }
  },
  
  // Track time on page
  trackTimeOnPage: (seconds) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'time_on_page', {
        value: seconds,
        event_category: 'Engagement'
      });
    }
  }
};

// Auto-track cross-links
export function setupCrossLinkTracking() {
  if (typeof window === 'undefined') return;
  
  // Track all external links to partner sites
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Check if it's a cross-link to partner sites
    const partnerSites = [
      'sportwett-vergleich.de',
      'bad-bets.de'
    ];
    
    partnerSites.forEach(site => {
      if (href.includes(site)) {
        Analytics.trackCrossLink(site, window.location.pathname);
      }
    });
  });
  
  console.log('✅ Cross-link tracking setup complete');
}

// Track time on page
export function setupTimeTracking() {
  if (typeof window === 'undefined') return;
  
  let startTime = Date.now();
  
  // Track when user leaves
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    Analytics.trackTimeOnPage(timeSpent);
  });
  
  // Track every 30 seconds
  setInterval(() => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    if (timeSpent % 30 === 0) {
      Analytics.trackTimeOnPage(timeSpent);
    }
  }, 1000);
}

// Simple Analytics Component (Privacy-friendly alternative)
export const SimpleAnalytics = () => {
  return (
    <script
      async
      defer
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    ></script>
  );
};

export default Analytics;

