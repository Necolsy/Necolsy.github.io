---
layout: page
permalink: /publications/
title: Publications
description: Experiments, computational fluid dynamics, and AI for environmental systems — with a detour into games and human experience.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2>First-author preprints &amp; manuscripts</h2>

{% bibliography --query @*[preprint=true]* %}

<section class="manuscripts" aria-label="Additional manuscript under review">
  <p><strong>Beyond porosity ratio: Opening configuration and array length shape aerodynamic exchange and pedestrian wind.</strong></p>
  <p><strong>Subin Lin</strong>, Jason Leong, Boo Cheong Khoo, and Hee Joo Poh.</p>
  <p><em>Building and Environment</em> · Under review</p>
</section>

<h2>First-author publications</h2>

{% bibliography --query @*[first_author=true]* %}

<h2>Co-authored publications</h2>

Papers on which I contributed as a co-author.

{% bibliography --query @*[first_author=false]* %}

</div>
