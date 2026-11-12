---
layout: page
permalink: /interests/
title: Interests
description: Travel, games, and creative work beyond research.
nav: true
nav_order: 3
---

<section class="interests-hero">
  <p class="interests-eyebrow">BEYOND RESEARCH</p>
  <h2>Curiosity needs <em>open horizons.</em></h2>
  <p>Outside the lab, I am happiest planning a route, immersed in a console game, or working with a camera. Each is a different way of paying attention to places, people, and stories.</p>
</section>

<section class="travel-route" aria-labelledby="travel-route-heading">
  <div class="travel-route__heading">
    <p class="interests-eyebrow">TRAVEL &amp; ROUTE DESIGN</p>
    <h2 id="travel-route-heading">Nineteen places, <em>many more horizons.</em></h2>
    <p>I enjoy building the itinerary as much as the journey itself. Nature usually wins over a city checklist: mountains, coastlines, forests, and open horizons are always worth a detour.</p>
  </div>

  <div class="world-map" aria-label="Map showing places Subin Lin has visited">
    <img class="world-map__base" src="{{ '/assets/img/travel-world.svg' | relative_url }}" alt="World map in the Natural Earth projection">
    {%- for place in site.data.places %}
    <span class="world-marker" style="--x:{{ place.x }}%;--y:{{ place.y }}%" data-place="{{ place.name }}" role="img" tabindex="0" aria-label="{{ place.name }}"></span>
    {%- endfor %}
    <div class="world-map__legend"><strong>{{ site.data.places | size }}</strong><span>countries and regions<br>explored so far</span></div>
  </div>

  <p class="map-note">Markers indicate countries and regions, not individual stops. Land outlines: <a href="https://www.naturalearthdata.com/">Natural Earth</a>.</p>

  <div class="travel-route__places" aria-label="Countries and regions visited">
    {{ site.data.places | map: 'name' | join: ' &middot; ' }}
  </div>
</section>

<section class="interests-grid">
  <article class="interest-card interest-card--play">
    <p class="interest-card__number">01</p>
    <p class="interests-eyebrow">CONSOLE GAMES</p>
    <h2>Serious play, <em>real questions.</em></h2>
    <p>I love console games for their worlds, systems, and emotional range. That curiosity also led to a CHI Extended Abstract on how <em>Spiritfarer</em> can help people cope with the loss of a loved one.</p>
    <a class="interest-card__link" href="https://doi.org/10.1145/3411763.3451608">Read the paper <span aria-hidden="true">&rarr;</span></a>
  </article>

  <article class="interest-card interest-card--lens">
    <div class="interest-card__image">
      <img src="{{ '/assets/img/newspaper/subin-lin-paradise.jpg' | relative_url }}" alt="Mountain landscape in Paradise, New Zealand">
    </div>
    <div class="interest-card__body">
      <p class="interest-card__number">02</p>
      <p class="interests-eyebrow">MODELLING &amp; PHOTOGRAPHY</p>
      <h2>Finding a frame <em>in the world.</em></h2>
      <p>When time allows, I take part in amateur modelling and photography. It is another way to work with light, composition, place, and the stories held in a single image.</p>
    </div>
  </article>

  <article class="interest-card interest-card--next">
    <p class="interest-card__number">03</p>
    <p class="interests-eyebrow">NEXT DESTINATION</p>
    <h2>Always looking for a <em>different landscape.</em></h2>
    <p>More mountain trails, shorelines, forests, and unfamiliar cultures are firmly on the plan.</p>
  </article>
</section>
