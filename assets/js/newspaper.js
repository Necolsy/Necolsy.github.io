// Behaviour of the newspaper home page (_pages/newspaper.html).
//
//  - Clicking a paper in the rack folds the open sheet away and pulls that
//    section out. The address fragment follows, so /#journey can be shared.
//  - "Get in touch" also copies the e-mail address, for visitors without a
//    mail app.
//  - Pictures in the closed sections are fetched once the front page is in.

(function () {
  "use strict";

  var OPEN = "is-open";
  var TUCKING = "is-tucking";
  // Must match the duration of the sheet-tuck animation in newspaper.css.
  var TUCK_MS = 270;

  var desk = document.getElementById("desk");
  var papers = Array.prototype.slice.call(document.querySelectorAll(".paper"));
  if (!desk || !papers.length) return;

  var firstSection = papers[0].dataset.section;
  var busy = false;

  function sheetFor(sectionId) {
    return document.getElementById("section-" + sectionId);
  }

  function paperFor(sectionId) {
    return papers.filter(function (paper) {
      return paper.dataset.section === sectionId;
    })[0];
  }

  // Swap which paper and sheet carry the open state, without animation.
  function show(sectionId) {
    var sheet = sheetFor(sectionId);
    var paper = paperFor(sectionId);
    if (!sheet || !paper) return false;

    document.querySelectorAll(".paper." + OPEN + ", .sheet." + OPEN).forEach(function (el) {
      el.classList.remove(OPEN);
    });
    paper.classList.add(OPEN);
    sheet.classList.add(OPEN);
    return true;
  }

  function updateAddress(sectionId) {
    if (!history.replaceState) return;
    var target = sectionId === firstSection ? location.pathname + location.search : "#" + sectionId;
    history.replaceState(null, "", target);
  }

  // Fold the current sheet away, then pull the chosen one out.
  function pullOut(sectionId) {
    if (busy || !sheetFor(sectionId)) return;
    busy = true;
    desk.classList.add(TUCKING);

    setTimeout(function () {
      show(sectionId);
      desk.classList.remove(TUCKING);
      updateAddress(sectionId);
      busy = false;
    }, TUCK_MS);
  }

  papers.forEach(function (paper) {
    paper.addEventListener("click", function () {
      if (!paper.classList.contains(OPEN)) pullOut(paper.dataset.section);
    });
  });

  // Open the section named in the address, e.g. /#publications.
  var requested = location.hash.slice(1);
  if (requested && requested !== firstSection) show(requested);

  // ---- Contact: copy the address and confirm, or select it if copying is refused.
  var copyLink = document.querySelector("[data-copy-email]");
  var addressLine = document.querySelector("[data-email-display]");

  if (copyLink && addressLine) {
    var email = copyLink.dataset.copyEmail;

    var confirmCopied = function () {
      addressLine.textContent = "Copied: " + email;
      setTimeout(function () {
        addressLine.textContent = email;
      }, 2600);
    };

    var selectAddress = function () {
      var range = document.createRange();
      range.selectNodeContents(addressLine);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    };

    copyLink.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(confirmCopied, selectAddress);
      } else {
        selectAddress();
      }
    });
  }

  // ---- Fetch the closed sections' pictures early so pulling one out is instant.
  window.addEventListener("load", function () {
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      img.loading = "eager";
    });
  });
})();
