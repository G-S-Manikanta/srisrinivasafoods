// Sri Srinivasa Foods - Main JavaScript
// Features: Theme Switcher (Dark/Light), Language Switcher (EN/KN), Tabs, Mobile Menu, WhatsApp Helper

const translations = {
  en: {
    topNotice: '<i class="fa-solid fa-leaf"></i> 100% Authentic Homemade • Traditional Karnataka Brahmin Vegetarian Taste',
    brandSub: 'ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಫುಡ್ಸ್',
    navHome: 'Home',
    navAbout: 'About',
    navPickles: 'Pickles',
    navHappala: 'Happala / Sandige',
    navMasala: 'Masala Powders',
    navOther: 'Other Foods',
    navContact: 'Contact',
    navFeedback: 'Feedback',
    navOrderNow: 'Order Now',
    
    heroTitle: 'Sri Srinivasa Foods',
    heroSubtitle: 'ಶುದ್ಧ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಮನೆ ಶೈಲಿಯ ಆಹಾರ ಪದಾರ್ಥಗಳು',
    heroTagline: 'Relish the rich aroma of authentic South Indian homemade pickles, freshly ground spice powders, sun-dried happala & sandige, and mouth-watering tokku prepared by Chef Srinivas G R in Gangapura, Kolar.',
    btnFillForm: 'Fill Requirement Form',
    btnViewMenu: 'View Full Food Menu & Prices',
    btnMeetChef: 'Meet Our Chef',
    
    specTitle: 'Explore Our Delicious Range',
    specSubtitle: 'Prepared hygienically with premium spices and traditional authentic recipes.',
    
    catPickles: 'Pickles',
    catPicklesDesc: 'Mango, Lemon, Mango Ginger, Makli Beru, Avakai, and Nelli Kayi pickles cured in traditional ceramic Bharanis.',
    catMasala: 'Masala & Chutney Powders',
    catMasalaDesc: 'Aromatic Sambhar, Rasam, Bisi Bele Bath, Vangi Bath, Puliyogare, and pure Chutney powders freshly ground to order.',
    catHappala: 'Happala & Sandige',
    catHappalaDesc: 'Sun-dried Akki Happala, Peni (Shavige) Sandige, Sabakki, Haralu Sandige, Kolu, and crisp Potato Chips.',
    catOther: 'Tokku, Gojju & Snacks (ಕೊಡುಬಳೆ)',
    catOtherDesc: 'Crispy Kodubale, tangy Mango/Tomato/Tamarind Tokku, Melkote Puliyogare Gojju, Uppu Menasinakayi & Hurida Ragi Hittu.',
    
    chefSectionTitle: 'Meet Our Chef - Srinivas G R',
    chefStory: 'With a passion towards cooking, I Srinivas G R started my journey as a chef. Cooking is something that makes me happy and I love cooking for others. When I serve a bowl of a recipe, it contains my love, hard work, and passion for my profession.',
    chefQuote: '"It is not less than magic to turn healthy ingredients into an irresistible recipe that everyone loves to eat. And this chef is a person who has a perfect solution for this."',
    btnReadStory: 'Read Full Story & Philosophy',
    
    catalogTitle: 'List of All Foods We Sell & Prices',
    catalogSubtitle: 'Updated prices across all our handcrafted traditional food lines.',
    
    orderTitle: 'Submit Requirements Directly',
    orderSubtitle: 'Select the relevant form below to submit your order:',
    tabPickle: '1. Pickle Order Form (ಉಪ್ಪಿನಕಾಯಿ)',
    tabHappala: '2. Happala & Sandige Form (ಹಪ್ಪಳ/ಸಂಡಿಗೆ)',
    tabEnquiry: '3. Powders & General Enquiry (ವಿಚಾರಣೆ)',
    
    contactTitle: 'For More Details Please Visit',
    addressLabel: 'Address / ವಿಳಾಸ:',
    phoneLabel: 'Phone Calls:',
    whatsappLabel: 'WhatsApp Orders:',
    emailLabel: 'Email:',
    
    footerDesc: 'Dedicated to delivering authentic Karnataka traditional taste right to your home. Pure ingredients, unmatched aroma, and traditional hygiene.',
    footerNavTitle: 'Quick Navigation',
    footerCallsTitle: 'Direct Calls & WhatsApp',
    footerEmailTitle: 'Email & Address',
    
    orderBtnText: 'Order Now',
    orderPickleBtn: 'Order Pickle',
    backHomeBtn: 'Back to Home'
  },
  
  kn: {
    topNotice: '<i class="fa-solid fa-leaf"></i> 100% ಶುದ್ಧ ಸಾಂಪ್ರದಾಯಿಕ ಸಸ್ಯಾಹಾರಿ • ಕೋಲಾರದ ಗಂಗಾಪುರದಿಂದ ನೇರವಾಗಿ',
    brandSub: 'ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಫುಡ್ಸ್',
    navHome: 'ಮುಖಪುಟ',
    navAbout: 'ನಮ್ಮ ಬಗ್ಗೆ / ಬಾಣಸಿಗರು',
    navPickles: 'ಉಪ್ಪಿನಕಾಯಿ',
    navHappala: 'ಹಪ್ಪಳ / ಸಂಡಿಗೆ',
    navMasala: 'ಮಸಾಲೆ ಪುಡಿಗಳು',
    navOther: 'ಇತರ ಆಹಾರಗಳು & ತಿಂಡಿ',
    navContact: 'ಸಂಪರ್ಕಿಸಿ',
    navFeedback: 'ಪ್ರತಿಕ್ರಿಯೆ',
    navOrderNow: 'ಈಗಲೇ ಆರ್ಡರ್ ಮಾಡಿ',
    
    heroTitle: 'ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಫುಡ್ಸ್',
    heroSubtitle: 'ಶುದ್ಧ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಮನೆ ಶೈಲಿಯ ಆಹಾರ ಪದಾರ್ಥಗಳು',
    heroTagline: 'ಕೋಲಾರ ಜಿಲ್ಲೆಯ ಗಂಗಾಪುರದಲ್ಲಿ ಮಾಸ್ಟರ್ ಚೆಫ್ ಶ್ರೀನಿವಾಸ್ ಜಿ.ಆರ್ ಅವರಿಂದ ಸಾಂಪ್ರದಾಯಿಕ ಬ್ರಾಹ್ಮಣ ಶೈಲಿಯಲ್ಲಿ ತಯಾರಾದ ಶುದ್ಧ ಉಪ್ಪಿನಕಾಯಿ, ಪರಿಮಳಯುಕ್ತ ಮಸಾಲೆ ಪುಡಿಗಳು, ಗರಿಗರಿ ಹಪ್ಪಳ-ಸಂಡಿಗೆ ಮತ್ತು ರುಚಿಕರವಾದ ತೊಕ್ಕುಗಳ ನೈಜ ರುಚಿಯನ್ನು ಸವಿಯಿರಿ.',
    btnFillForm: 'ಆರ್ಡರ್ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ',
    btnViewMenu: 'ಸಂಪೂರ್ಣ ಮೆನು ಮತ್ತು ಬೆಲೆಗಳು',
    btnMeetChef: 'ನಮ್ಮ ಬಾಣಸಿಗರ ಪರಿಚಯ',
    
    specTitle: 'ನಮ್ಮ ಸಾಂಪ್ರದಾಯಿಕ ವಿಶೇಷತೆಗಳು',
    specSubtitle: 'ಅತ್ಯುತ್ತಮ ಸಾಂಬಾರ ಪದಾರ್ಥಗಳು ಮತ್ತು ಶುದ್ಧ ಎಣ್ಣೆಯನ್ನು ಬಳಸಿ ಅಚ್ಚುಕಟ್ಟಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ.',
    
    catPickles: 'ಉಪ್ಪಿನಕಾಯಿ ವಿಧಗಳು',
    catPicklesDesc: 'ಮಾವಿನಕಾಯಿ, ನಿಂಬೆಕಾಯಿ, ಮಾವಿನ ಶುಂಠಿ, ಮಾಕಳಿ ಬೇರು, ಆವಕಾಯಿ, ನೆಲ್ಲಿಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿಗಳನ್ನು ಸಾಂಪ್ರದಾಯಿಕ ಜೇಡಿ ಭರಣಿಗಳಲ್ಲಿ ಹದಮಾಡಲಾಗಿದೆ.',
    catMasala: 'ಮಸಾಲೆ ಮತ್ತು ಚಟ್ನಿ ಪುಡಿಗಳು',
    catMasalaDesc: 'ಮನೆಯಲ್ಲಿ ಹುರಿದು ಬೀಸಿದ ಸಾಂಬಾರ್, ರಸಂ, ಬಿಸಿಬೇಳೆ ಬಾತ್, ವಾಂಗಿಬಾತ್, ಪುಳಿಯೋಗರೆ ಹಾಗೂ 4 ಬಗೆಯ ಚಟ್ನಿ ಪುಡಿಗಳು.',
    catHappala: 'ಹಪ್ಪಳ ಮತ್ತು ಸಂಡಿಗೆ',
    catHappalaDesc: 'ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿದ ಅಕ್ಕಿ ಹಪ್ಪಳ, ಪೆಣಿ ಶಾವಿಗೆ ಸಂಡಿಗೆ, ಸಬ್ಬಕ್ಕಿ, ಹರಳು ಸಂಡಿಗೆ, ಕೋಲು ಸಂಡಿಗೆ ಹಾಗೂ ಆಲೂಗಡ್ಡೆ ಚಿಪ್ಸ್.',
    catOther: 'ತೊಕ್ಕು, ಗೊಜ್ಜು ಮತ್ತು ತಿಂಡಿಗಳು (ಕೊಡುಬಳೆ)',
    catOtherDesc: 'ಗರಿಗರಿ ಕೊಡುಬಳೆ, ಮಾವಿನಕಾಯಿ/ಟೊಮೆಟೊ/ಹುಣಸೆ ತೊಕ್ಕು, ಮೇಲುಕೋಟೆ ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು, ಉಪ್ಪು ಮೆಣಸಿನಕಾಯಿ ಮತ್ತು ಹುರಿದ ರಾಗಿ ಹಿಟ್ಟು.',
    
    chefSectionTitle: 'ನಮ್ಮ ಮುಖ್ಯ ಬಾಣಸಿಗರು - ಶ್ರೀನಿವಾಸ್ ಜಿ ಆರ್',
    chefStory: 'ಅಡುಗೆ ಮಾಡುವ ಅಪಾರ ಆಸಕ್ತಿಯೊಂದಿಗೆ ನಾನು ಶ್ರೀನಿವಾಸ್ ಜಿ ಆರ್ ಮುಖ್ಯ ಬಾಣಸಿಗನಾಗಿ ನನ್ನ ಪಯಣ ಪ್ರಾರಂಭಿಸಿದೆ. ಇತರರಿಗೆ ರುಚಿಕರವಾದ ಅಡುಗೆ ಮಾಡಿ ಬಡಿಸುವುದು ನನಗೆ ಅಪಾರ ಸಂತೋಷ ನೀಡುತ್ತದೆ. ನಾನು ಸಿದ್ಧಪಡಿಸುವ ಪ್ರತಿಯೊಂದು ಪಾಕವಿಧಾನದಲ್ಲೂ ಪ್ರೀತಿ, ಶ್ರಮ ಮತ್ತು ವೃತ್ತಿಪರತೆ ಅಡಗಿದೆ.',
    chefQuote: '"ಆರೋಗ್ಯಕರ ಪದಾರ್ಥಗಳನ್ನು ಎಲ್ಲರೂ ಇಷ್ಟಪಟ್ಟು ತಿನ್ನುವಂತಹ ಅದ್ಭುತ ರುಚಿಯನ್ನಾಗಿ ಪರಿವರ್ತಿಸುವುದು ಒಂದು ಕಲೆ. ನಮ್ಮ ಶ್ರೀನಿವಾಸ ಫುಡ್ಸ್‌ನ ಧ್ಯೇಯವೂ ಇದೇ ಆಗಿದೆ."',
    btnReadStory: 'ಸಂಪೂರ್ಣ ಪರಿಚಯ ಓದಿ',
    
    catalogTitle: 'ಆಹಾರ ಪದಾರ್ಥಗಳ ಪಟ್ಟಿ ಮತ್ತು ದರ ವಿವರ',
    catalogSubtitle: 'ನಮ್ಮ ಎಲ್ಲಾ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ ಉತ್ಪನ್ನಗಳ ನವೀಕರಿಸಿದ ದರ ಪಟ್ಟಿ.',
    
    orderTitle: 'ಆನ್‌ಲೈನ್ ಮೂಲಕ ಆರ್ಡರ್ ಸಲ್ಲಿಸಿ',
    orderSubtitle: 'ಕೆಳಗಿನ ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ ಸೂಕ್ತವಾದದ್ದನ್ನು ಆರಿಸಿ ನಿಮ್ಮ ಬೇಡಿಕೆಯನ್ನು ಸಲ್ಲಿಸಿ:',
    tabPickle: '೧. ಉಪ್ಪಿನಕಾಯಿ ಆರ್ಡರ್ ಫಾರ್ಮ್',
    tabHappala: '೨. ಹಪ್ಪಳ & ಸಂಡಿಗೆ ಆರ್ಡರ್ ಫಾರ್ಮ್',
    tabEnquiry: '೩. ಮಸಾಲೆ ಪುಡಿ & ವಿಚಾರಣೆ ಫಾರ್ಮ್',
    
    contactTitle: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಭೇಟಿ ನೀಡಿ',
    addressLabel: 'ವಿಳಾಸ:',
    phoneLabel: 'ದೂರವಾಣಿ ಕರೆಗಳು:',
    whatsappLabel: 'ವಾಟ್ಸಾಪ್ ಆರ್ಡರ್:',
    emailLabel: 'ಇಮೇಲ್:',
    
    footerDesc: 'ಕರ್ನಾಟಕದ ಅಪ್ಪಟ ಸಾಂಪ್ರದಾಯಿಕ ಮನೆ ರುಚಿಯನ್ನು ನಿಮ್ಮ ಮನೆಬಾಗಿಲಿಗೆ ತಲುಪಿಸಲು ನಾವು ಸದಾ ಬದ್ಧರಾಗಿದ್ದೇವೆ. ಶುದ್ಧ ಪದಾರ್ಥಗಳು ಮತ್ತು ನೈರ್ಮಲ್ಯ ನಮ್ಮ ಆದ್ಯತೆ.',
    footerNavTitle: 'ತ್ವರಿತ ಸಂಪರ್ಕ ಕೊಂಡಿಗಳು',
    footerCallsTitle: 'ನೇರ ಕರೆಗಳು & ವಾಟ್ಸಾಪ್',
    footerEmailTitle: 'ಇಮೇಲ್ ಮತ್ತು ವಿಳಾಸ',
    
    orderBtnText: 'ಆರ್ಡರ್ ಮಾಡಿ',
    orderPickleBtn: 'ಉಪ್ಪಿನಕಾಯಿ ಆರ್ಡರ್ ಮಾಡಿ',
    backHomeBtn: 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ'
  }
};

// Initialize Features
document.addEventListener('DOMContentLoaded', () => {

  // 1. Theme Switcher (Dark / Light)
  const currentTheme = localStorage.getItem('sf_theme') || 'light';
  applyTheme(currentTheme);

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(activeTheme);
      localStorage.setItem('sf_theme', activeTheme);
    });
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    const icons = document.querySelectorAll('.theme-icon');
    const texts = document.querySelectorAll('.theme-text');
    
    icons.forEach(icon => {
      if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun theme-icon';
      } else {
        icon.className = 'fa-solid fa-moon theme-icon';
      }
    });

    texts.forEach(txt => {
      txt.textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }

  // 2. Language Switcher (EN / KN)
  const currentLang = localStorage.getItem('sf_lang') || 'en';
  applyLanguage(currentLang);

  const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');
  langToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeLang = localStorage.getItem('sf_lang') === 'kn' ? 'en' : 'kn';
      localStorage.setItem('sf_lang', activeLang);
      applyLanguage(activeLang);
    });
  });

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update language switch button text
    const langBadges = document.querySelectorAll('.lang-badge');
    langBadges.forEach(badge => {
      badge.textContent = lang === 'kn' ? 'English' : 'ಕನ್ನಡ';
    });

    // Handle any elements with data-en and data-kn attributes
    document.querySelectorAll('[data-en][data-kn]').forEach(el => {
      el.textContent = lang === 'kn' ? el.getAttribute('data-kn') : el.getAttribute('data-en');
    });
  }

  // 3. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      const isExpanded = navMenu.classList.contains('show');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('show');
      }
    });
  }

  // 4. Tab Navigation for Embedded Forms
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 5. Quick WhatsApp Order Generator
  window.orderOnWhatsApp = function(itemName, price) {
    const phone = "919880170209";
    const text = `Namaskara, I would like to order "${itemName}" (${price || 'Standard pack'}) from Sri Srinivasa Foods website. Please share the details and availability.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
  };

  // 6. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 7. Web3Forms AJAX Form Submission Handler
  const web3Forms = document.querySelectorAll('form[action*="web3forms"]');
  web3Forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('.gf-submit-btn');
      const statusMsg = form.querySelector('.gf-status-msg');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Submit';
      
      if (statusMsg) {
        statusMsg.className = 'gf-status-msg';
        statusMsg.style.display = 'none';
        statusMsg.innerHTML = '';
      }
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting / ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...';
      }

      const formData = new FormData(form);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (response.status === 200 && data.success) {
          if (statusMsg) {
            statusMsg.className = 'gf-status-msg success';
            statusMsg.innerHTML = `
              <div style="font-weight: 700; margin-bottom: 4px;">
                <i class="fa-solid fa-circle-check"></i> ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.
              </div>
              <div>Thank you! Your submission has been received successfully. We will get in touch with you shortly.</div>
            `;
            statusMsg.style.display = 'block';
          } else {
            alert('ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಕೆಯಾಗಿದೆ. / Thank you! Your submission was successful.');
          }
          form.reset();
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        if (statusMsg) {
          statusMsg.className = 'gf-status-msg error';
          statusMsg.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 4px;">
              <i class="fa-solid fa-triangle-exclamation"></i> ಸಲ್ಲಿಕೆ ವಿಫಲವಾಗಿದೆ / Submission Error
            </div>
            <div>There was a problem submitting your form. Please call or WhatsApp us directly at <strong>9880170209</strong> or <strong>8197933637</strong>.</div>
          `;
          statusMsg.style.display = 'block';
        } else {
          alert('Could not submit form. Please contact us via WhatsApp: 9880170209');
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    });
  });
});
