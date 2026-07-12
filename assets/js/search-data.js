// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Journal articles, conference papers, and workshop publications in urban environmental science, AI, and human-computer interaction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-academic-journey",
          title: "academic journey",
          description: "A chronological path through Israel, South Korea, and Singapore.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/journey/";
          },
        },{id: "nav-travel",
          title: "travel",
          description: "Planning the route, then following the landscape.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/travel/";
          },
        },{id: "news-presented-physics-informed-large-language-models-for-hvac-anomaly-detection-as-an-oral-contribution-at-the-neurips-2025-urbanai-workshop",
          title: 'Presented Physics-Informed Large Language Models for HVAC Anomaly Detection as an oral contribution...',
          description: "",
          section: "News",},{id: "news-my-article-on-the-design-trade-offs-of-building-porosity-for-urban-ventilation-was-published-in-the-journal-of-wind-engineering-and-industrial-aerodynamics",
          title: 'My article on the design trade-offs of building porosity for urban ventilation was...',
          description: "",
          section: "News",},{id: "news-presented-work-on-building-porosity-and-street-canyon-ventilation-at-iaqvec-2026-in-los-angeles-and-received-the-iaqvec-fellowship-for-participation-support",
          title: 'Presented work on building porosity and street-canyon ventilation at IAQVEC 2026 in Los...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/subin-lin-cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%65%63%6F%6C%73%79@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Necolsy", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/subin-lin-81710b211", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9385-0877", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tbNGYBQAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
