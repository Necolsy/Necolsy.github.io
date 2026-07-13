// Initialize medium zoom.
$(document).ready(function () {
  const zoomStyleId = "publication-zoom-layer";
  if (!document.getElementById(zoomStyleId)) {
    const zoomStyle = document.createElement("style");
    zoomStyle.id = zoomStyleId;
    zoomStyle.textContent = `
      .medium-zoom-overlay { z-index: 2200 !important; background: rgba(13, 39, 51, 0.94) !important; }
      .medium-zoom-image--opened { z-index: 2201 !important; background: #fff !important; box-shadow: 0 1.2rem 4rem rgba(0, 0, 0, 0.42); }
    `;
    document.head.appendChild(zoomStyle);
  }

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: "rgba(13, 39, 51, 0.94)",
  });
});
