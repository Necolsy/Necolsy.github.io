---
layout: page
permalink: /publications/
title: publications
description: Journal articles, conference papers, and workshop publications in urban environmental science, AI, and human-computer interaction.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

## First-author publications

{% bibliography --query @*[first_author=true]* %}

## Co-authored publications

Papers on which I contributed as a co-author.

{% bibliography --query @*[first_author=false]* %}

</div>
