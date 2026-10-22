---
layout: about
title: About
permalink: /
editorial_hero: true
profile: false
selected_papers: true
social: true
announcements:
  enabled: true
  scrollable: false
  limit: 8
latest_posts:
  enabled: false
---

<section class="portfolio-hero" aria-labelledby="hero-name">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot"></span> RESEARCHER / ENGINEER / EXPLORER</p>
    <h1 id="hero-name">Subin <em>Lin.</em></h1>
    <p class="hero-statement">Making sense of<br><span>air, data, and cities.</span></p>
    <p class="hero-description">I connect hands-on experiments, computational fluid dynamics, and AI to understand environmental systems.</p>
    <div class="hero-role"><strong>PhD Candidate · NUS</strong><span>Research Intern · A*STAR</span><span>Singapore</span></div>
    <div class="hero-actions"><a class="portfolio-button" href="#research">Explore my research</a><a class="text-link" href="mailto:necolsy@gmail.com">Get in touch</a></div>
    <p class="availability"><span></span> Open to postdoctoral, research scientist, and R&amp;D opportunities</p>
  </div>
  <figure class="hero-portrait">
    <div class="portrait-frame"><img src="{{ '/assets/img/subin-lin-beach.jpg' | relative_url }}" alt="Subin Lin overlooking the coast" fetchpriority="high" width="960" height="1200"></div>
    <figcaption><span>Curious by nature.</span><span>Across disciplines &amp; borders.</span></figcaption>
    <div class="portrait-stamp" aria-hidden="true">EXPERIMENT<br>SIMULATE<br>LEARN</div>
  </figure>
  <div class="hero-footer"><div class="hero-contact"><a href="https://scholar.google.com/citations?user=tbNGYBQAAAAJ&amp;hl=en">Google Scholar ↗</a><a href="https://www.linkedin.com/in/subin-lin-81710b211/">LinkedIn ↗</a><a href="{{ '/assets/pdf/subin-lin-cv.pdf' | relative_url }}">Curriculum Vitae ↗</a></div><span>Israel / South Korea / Singapore</span></div>
</section>

<div class="flow-ribbon" aria-label="Decorative airflow animation">
  <canvas id="flow-canvas" aria-hidden="true"></canvas>
  <div class="flow-ribbon__label"><span>FOLLOWING THE FLOW</span><span>From observations to understanding.</span></div>
  <button id="flow-toggle" type="button" aria-pressed="false">Pause motion</button>
</div>

<section class="portfolio-section bio-section" aria-labelledby="bio-heading">
  <div class="section-heading"><span class="section-index">01 / SHORT BIO</span><h2 id="bio-heading">A researcher who<br><em>crosses boundaries.</em></h2></div>
  <div class="bio-content">
    <p class="lead-copy">I am a PhD candidate in the Department of the Built Environment at the <strong>National University of Singapore</strong>, working at the intersection of environmental fluid mechanics, experiments, and data-driven modelling.</p>
    <p>My doctoral research asks how building geometry and porosity shape street-canyon ventilation. I designed and conducted <strong>pressure-tap wind-tunnel experiments</strong> and use RANS/LES simulations to examine pedestrian wind, air exchange, and model fidelity.</p>
    <p>My route here began with civil and environmental engineering at the <strong>Technion</strong>, followed by an MSc at <strong>KAIST</strong> combining water-treatment experiments, operational data, and machine learning. I developed graph-attention and recurrent models for dosage and turbidity prediction, leading to first-author papers in <strong>Water Research</strong> and the <strong>Journal of Water Process Engineering</strong>.</p>
    <p>At the <strong>Berkeley Education Alliance for Research in Singapore</strong>, I worked on infrared-camera data collection, image preprocessing, and urban thermal analytics. That work contributed to a first-author dataset publication in <strong>Scientific Data</strong>.</p>
  </div>
  <div class="now-grid">
    <article class="now-card"><span>NOW / A*STAR</span><h3>Tracing pollutants.</h3><p>Since September 2026, my research internship has focused on pollutant dispersion, source identification, and concentration forecasting with computational and statistical methods.</p></article>
    <article class="now-card"><span>RESEARCH / NUS–SIA</span><h3>Designing local airflow.</h3><p>Comparing aircraft-cabin air-terminal designs using CFD, with prototyping and experimental validation work in the NUS–Singapore Airlines collaboration.</p></article>
    <article class="now-card"><span>TEACHING / NUS</span><h3>Sharing what I learn.</h3><p>Teaching Assistant for BPS5234A CFD Applications in the Built Environment, supporting modelling, simulation, and practical troubleshooting.</p></article>
  </div>
</section>

<section class="portfolio-section research-section" id="research" aria-labelledby="research-heading">
  <div class="section-heading"><span class="section-index">02 / RESEARCH INTERESTS</span><h2 id="research-heading">Measure. Model.<br><em>Make connections.</em></h2><p>Three complementary ways of asking better environmental questions.</p></div>
  <div class="research-editorial">
    <article class="research-feature">
      <div class="research-feature__image"><img src="{{ '/assets/img/research/urban-cfd-flow.webp' | relative_url }}" alt="Concept visual of airflow around porous buildings" loading="lazy"><span>01 / URBAN FLUID MECHANICS</span></div>
      <div class="research-feature__body"><h3>Air moves.<br>Geometry matters.</h3><p>Building porosity, opening configuration, and array length can change pedestrian wind and canyon-scale exchange in different ways. I study those trade-offs through validated CFD.</p><div class="method-tags"><span>RANS / LES</span><span>Urban ventilation</span><span>Model fidelity</span></div><a class="text-link" href="{{ '/publications/#lin2026porosity' | relative_url }}">Read the research</a></div>
    </article>
    <article class="research-feature">
      <div class="research-feature__image"><img src="{{ '/assets/img/research/wind-tunnel-concept.webp' | relative_url }}" alt="Concept illustration of a wind tunnel, pressure taps, and data acquisition" loading="lazy"><span>02 / HANDS-ON EXPERIMENTS</span></div>
      <div class="research-feature__body"><h3>From the lab<br>to the model.</h3><p>Wind-tunnel models, pressure taps, tubing, data acquisition, and uncertainty analysis. Earlier work also brought me into water-treatment wet labs and infrared field sensing.</p><div class="method-tags"><span>Wind tunnels</span><span>Wet lab</span><span>Thermal imaging</span></div><a class="text-link" href="{{ '/journey/' | relative_url }}">My experimental background</a></div>
    </article>
    <article class="research-feature">
      <div class="research-feature__image"><img src="{{ '/assets/img/research/physics-ai-concept.webp' | relative_url }}" alt="Concept visual connecting physical models, data, and neural networks" loading="lazy"><span>03 / ENVIRONMENTAL AI</span></div>
      <div class="research-feature__body"><h3>Learning with<br>physical context.</h3><p>Graph learning and time-series forecasting for environmental operations; LLM-generated heuristics for building energy and HVAC diagnostics; emerging work on pollutant-source inference.</p><div class="method-tags"><span>Python / PyTorch</span><span>Graph learning</span><span>Physics-informed AI</span></div><a class="text-link" href="{{ '/publications/#lin2023coagulant' | relative_url }}">Models &amp; publications</a></div>
    </article>
  </div>
  <p class="figure-note">Concept illustrations of my research themes. Original study figures appear in Publications.</p>
</section>

<section class="portfolio-section recognition-section" aria-labelledby="recognition-heading">
  <div class="section-heading"><span class="section-index">03 / RECOGNITION</span><h2 id="recognition-heading">Built on curiosity.<br><em>Backed by commitment.</em></h2></div>
  <div class="recognition-layout">
    <div class="recognition-feature"><span class="large-number">03</span><h3>Stages of study.<br>Three countries.<br>Full scholarships.</h3><p>My BSc, MSc, and ongoing PhD education has been supported by full scholarships, allowing me to build an independent path through Israel, South Korea, and Singapore.</p><a href="{{ '/journey/' | relative_url }}" class="text-link">Follow my academic journey</a></div>
    <div class="recognition-list">
      <article><span>2026</span><div><h3>IAQVEC Fellowship</h3><p>Participation support for IAQVEC 2026.</p></div></article>
      <article><span>2022</span><div><h3>A*STAR Merit Award · SINGA</h3><p>Doctoral scholarship support at NUS.</p></div></article>
      <article><span>2021</span><div><h3>AI &amp; Big Data Hackathon · Third Prize</h3><p>Daewoong Foundation; computer vision and an AI skin-analysis prototype.</p></div></article>
      <article><span>2018–19</span><div><h3>Technion Dean’s List</h3><p>Academic recognition and scholarships.</p></div></article>
    </div>
  </div>
</section>

<section class="portfolio-section personality-section" aria-labelledby="personality-heading">
  <div class="section-heading"><span class="section-index">04 / BEYOND THE CV</span><h2 id="personality-heading">Always a beginner<br><em>at something new.</em></h2></div>
  <div class="personality-grid">
    <article><span>01</span><h3>Hands-on &amp; self-directed</h3><p>I like building the experiment, writing the code, and following a question through the details. Learning a new tool is part of the work.</p></article>
    <article><span>02</span><h3>Adaptive across disciplines</h3><p>From civil engineering and water treatment to deep learning, CFD, and LLMs, I take time to learn the fundamentals before making connections.</p></article>
    <article><span>03</span><h3>Open to unfamiliar places</h3><p>Living in three countries taught me to adapt across cultures and languages, including studying Hebrew and learning Korean.</p></article>
  </div>
  <a class="beyond-link" href="{{ '/interests/' | relative_url }}"><span>OFF THE CLOCK</span><strong>Mountains, console games,<br>and life through a lens.</strong><span>Explore my interests ↗</span></a>
</section>
