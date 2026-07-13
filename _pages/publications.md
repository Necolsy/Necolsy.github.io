---
layout: page
permalink: /publications/
title: Publications
description: Journal articles, conference papers, and workshop publications in urban environmental science, AI, and human-computer interaction.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2>First-author publications</h2>

{% bibliography --query @*[first_author=true]* %}

<h2>Co-authored publications</h2>

Papers on which I contributed as a co-author.

{% bibliography --query @*[first_author=false]* %}

</div>
