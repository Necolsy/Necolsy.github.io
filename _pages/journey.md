---
layout: page
permalink: /journey/
title: Academic Journey
description: A chronological path through Israel, South Korea, and Singapore.
nav: true
nav_order: 2
---

<section class="journey-stage" data-journey-gradient aria-label="Interactive colour field">
  <div class="journey-stage__copy">
    <p class="journey-kicker">2016 - PRESENT</p>
    <h2>Learning across borders</h2>
    <p>From civil and environmental engineering to data-rich water systems, urban air, and physics-informed AI.</p>
    <p class="journey-hint">Drag the light to shift the colour field.</p>
  </div>
  <button id="journey-light" class="journey-light" type="button" aria-label="Drag the colour field or use arrow keys to move it">
    <span aria-hidden="true">✦</span>
  </button>
</section>

<section class="journey-timeline" aria-label="Academic and research timeline">
  <article class="journey-event journey-event--technion">
    <div class="journey-event__pin">
      <div class="journey-logo journey-logo--technion">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Technion-logo5.png" alt="Technion logo">
      </div>
    </div>
    <div class="journey-event__card">
      <p class="journey-date">2016 - 2020</p>
      <h2>Technion - Israel Institute of Technology</h2>
      <p class="journey-degree">BSc in Civil and Environmental Engineering</p>
      <p class="journey-location">Haifa, Israel · GPA 89.3/100</p>
      <p>Studied and lived in Israel for four years on a full scholarship. Completed the Technion preparatory programme in Hebrew before beginning the degree, and received Dean's List scholarships.</p>
      <div class="journey-tags"><span>Full scholarship</span><span>Hebrew preparatory programme</span></div>
    </div>
  </article>

  <article class="journey-event journey-event--kaist">
    <div class="journey-event__pin">
      <div class="journey-logo journey-logo--kaist">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/KAIST_logo.svg" alt="KAIST logo">
      </div>
    </div>
    <div class="journey-event__card">
      <p class="journey-date">2020 - 2022</p>
      <h2>KAIST</h2>
      <p class="journey-degree">MSc by Research in Civil and Environmental Engineering</p>
      <p class="journey-location">Daejeon, South Korea · GPA 96.67/100</p>
      <p>Researched data-rich water-treatment operations and deep learning while expanding formal training in machine learning, deep learning, programming, and probability.</p>
      <div class="journey-tags"><span>Full scholarship</span><span>Water + AI</span></div>
    </div>
  </article>

  <article class="journey-event journey-event--bears">
    <div class="journey-event__pin">
      <div class="journey-logo journey-logo--bears" aria-label="BEARS">BEARS</div>
    </div>
    <div class="journey-event__card">
      <p class="journey-date">Sep 2022 - Dec 2022</p>
      <h2>Berkeley Education Alliance for Research in Singapore</h2>
      <p class="journey-degree">Senior Research Engineer</p>
      <p class="journey-location">Singapore</p>
      <p>Worked on urban and building-environment research before beginning doctoral study, connecting environmental data with the built environment.</p>
      <div class="journey-tags"><span>Green buildings</span><span>Research engineering</span></div>
    </div>
  </article>

  <article class="journey-event journey-event--nus">
    <div class="journey-event__pin">
      <div class="journey-logo journey-logo--nus">
        <img src="https://nus.edu.sg/images/default-source/identity-images/nus-logo-blue-horizontal.jpg" alt="National University of Singapore logo">
      </div>
    </div>
    <div class="journey-event__card">
      <p class="journey-date">Jan 2023 - Dec 2026 (expected)</p>
      <h2>National University of Singapore</h2>
      <p class="journey-degree">PhD in Built Environment</p>
      <p class="journey-location">Singapore</p>
      <p>Researching urban ventilation, wind-tunnel-validated CFD, building porosity, and physics-informed AI for healthier cities. Built practical CFD foundations through wind-tunnel campaigns, RANS and LES simulations, and detailed model validation.</p>
      <div class="journey-tags"><span>Full scholarship</span><span>Wind tunnel + CFD</span><span>Physics-informed AI</span></div>
    </div>
  </article>
</section>

<section class="journey-side-grid">
  <article class="journey-mini-card">
    <p class="journey-kicker">RECOGNITION</p>
    <ul>
      <li><strong>2026</strong> IAQVEC Fellowship, Participation Support</li>
      <li><strong>2022</strong> A*STAR Merit Award (AMA, SINGA)</li>
      <li><strong>2021</strong> Third Prize, AI &amp; Big Data Hackathon, Daewoong Foundation</li>
    </ul>
  </article>
  <article class="journey-mini-card">
    <p class="journey-kicker">TEACHING</p>
    <ul>
      <li><strong>2026</strong> TA, BCA-GMAAP CFD Modelling for Naturally Ventilated Buildings</li>
      <li><strong>2024</strong> TA, BPS5112 Green Building Integration and Evaluation Studio, NUS</li>
    </ul>
  </article>
</section>

<script>
  (() => {
    const stage = document.querySelector('[data-journey-gradient]');
    const light = document.querySelector('#journey-light');
    if (!stage || !light) return;

    let isDragging = false;
    let x = 78;
    let y = 24;

    const updateField = (nextX, nextY) => {
      x = Math.max(5, Math.min(95, nextX));
      y = Math.max(10, Math.min(90, nextY));
      stage.style.setProperty('--journey-x', `${x}%`);
      stage.style.setProperty('--journey-y', `${y}%`);
    };

    const moveFromPointer = (event) => {
      const bounds = stage.getBoundingClientRect();
      updateField(((event.clientX - bounds.left) / bounds.width) * 100, ((event.clientY - bounds.top) / bounds.height) * 100);
    };

    light.addEventListener('pointerdown', (event) => {
      isDragging = true;
      light.setPointerCapture(event.pointerId);
      stage.classList.add('is-dragging');
      moveFromPointer(event);
    });

    light.addEventListener('pointermove', (event) => {
      if (isDragging) moveFromPointer(event);
    });

    const releaseLight = () => {
      isDragging = false;
      stage.classList.remove('is-dragging');
    };

    light.addEventListener('pointerup', releaseLight);
    light.addEventListener('pointercancel', releaseLight);

    light.addEventListener('keydown', (event) => {
      const step = event.shiftKey ? 10 : 4;
      if (event.key === 'ArrowLeft') updateField(x - step, y);
      else if (event.key === 'ArrowRight') updateField(x + step, y);
      else if (event.key === 'ArrowUp') updateField(x, y - step);
      else if (event.key === 'ArrowDown') updateField(x, y + step);
      else return;
      event.preventDefault();
    });

    updateField(x, y);
  })();
</script>
