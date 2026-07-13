// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Journal articles, conference papers, and workshop publications in urban environmental science, AI, and human-computer interaction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-academic-journey",
          title: "Academic Journey",
          description: "A chronological path through Israel, South Korea, and Singapore.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/journey/";
          },
        },{id: "nav-interests",
          title: "Interests",
          description: "Travel, games, and creative work beyond research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/interests/";
          },
        },{id: "news-attended-cobee-2025-the-6th-international-conference-on-building-energy-and-environment-in-eindhoven-the-netherlands",
          title: 'Attended COBEE 2025 - the 6th International Conference on Building Energy and Environment...',
          description: "",
          section: "News",},{id: "news-physics-informed-large-language-models-for-hvac-anomaly-detection-with-autonomous-rule-generation-was-selected-as-an-oral-contribution-at-the-neurips-2025-urbanai-workshop",
          title: 'Physics-Informed Large Language Models for HVAC Anomaly Detection with Autonomous Rule Generation was...',
          description: "",
          section: "News",},{id: "news-published-design-trade-offs-in-building-porosity-a-parametric-analysis-of-vertical-placement-and-geometry-for-urban-ventilation-in-the-journal-of-wind-engineering-and-industrial-aerodynamics",
          title: 'Published Design trade-offs in building porosity: A parametric analysis of vertical placement and...',
          description: "",
          section: "News",},{id: "news-presented-aerodynamic-response-and-ventilation-enhancement-in-urban-street-canyons-through-building-porosity-at-iaqvec-2026-in-los-angeles-and-received-the-iaqvec-fellowship",
          title: 'Presented Aerodynamic response and ventilation enhancement in urban street canyons through building porosity...',
          description: "",
          section: "News",},{id: "news-presented-validation-of-rans-and-les-against-wind-tunnel-measurements-for-urban-street-canyon-aerodynamics-at-indoor-air-2026-in-singapore",
          title: 'Presented Validation of RANS and LES Against Wind Tunnel Measurements for Urban Street...',
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
      },];
