document.addEventListener("DOMContentLoaded", () => {
  const menuLayer = document.querySelector(".menu-layer");
  const menuBar = document.querySelector(".menu-bar");
  const menuLinks = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll(".page-section");
  const coverSection = document.querySelector(".cover-section");
  const placesMap = document.querySelector("#places-map");
  const photoGallery = document.querySelector(".photo-gallery");
  const mapImage = placesMap?.querySelector("img");
  const mapMarkers = placesMap?.querySelectorAll(".map-location-marker") ?? [];
  let activeSectionId = "cover";
  let menuMoveTimer;

  const updateMenuIndicator = (sectionId) => {
    if (!menuBar) return;

    const activeLink = document.querySelector(`.menu-link[href="#${sectionId}"]`);
    if (!activeLink) return;

    menuBar.style.setProperty("--menu-indicator-left", `${activeLink.offsetLeft}px`);
    menuBar.style.setProperty("--menu-indicator-width", `${activeLink.offsetWidth}px`);
    menuBar.classList.add("menu-moving");

    clearTimeout(menuMoveTimer);
    menuMoveTimer = setTimeout(() => {
      menuBar.classList.remove("menu-moving");
    }, 420);
  };

  const setActiveLink = (sectionId) => {
    activeSectionId = sectionId;

    menuLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
    });

    updateMenuIndicator(sectionId);
  };

  const updateMenuOpacity = () => {
    if (!menuLayer || !coverSection) return;

    const coverHeight = coverSection.offsetHeight;
    const fadeStart = coverHeight * 0.68;
    const fadeDistance = coverHeight - fadeStart;
    const opacity = Math.min(Math.max((window.scrollY - fadeStart) / fadeDistance, 0), 1);

    menuLayer.style.setProperty("--menu-opacity", opacity);
    menuLayer.classList.toggle("menu-visible", opacity > 0.08);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, {
    threshold: 0.6
  });

  sections.forEach((section) => observer.observe(section));
  updateMenuIndicator(activeSectionId);
  updateMenuOpacity();

  menuLinks.forEach((link) => {
    link.addEventListener("pointerenter", () => {
      const sectionId = link.getAttribute("href").slice(1);
      updateMenuIndicator(sectionId);
    });
  });

  if (menuBar) {
    menuBar.addEventListener("pointerleave", () => {
      updateMenuIndicator(activeSectionId);
    });
  }

  window.addEventListener("scroll", updateMenuOpacity);
  window.addEventListener("resize", () => {
    updateMenuIndicator(activeSectionId);
    updateMenuOpacity();
  });

  if (document.fonts) {
    document.fonts.ready.then(() => updateMenuIndicator(activeSectionId));
  }

  const clampLatitude = (latitude) => Math.max(Math.min(latitude, 85), -85);

  const mercatorY = (latitude) => {
    const radians = clampLatitude(latitude) * (Math.PI / 180);
    return Math.log(Math.tan((Math.PI / 4) + (radians / 2)));
  };

  const positionMapMarkers = () => {
    if (!placesMap || mapMarkers.length === 0) return;

    const mapCalibration = {
      x_offset: -0.13,
      x_scale: 1.15,
      y_offset: -0.48,
      y_scale: 1.6
    };

    // Geographic normalization
    const minLongitude = -180;
    const maxLongitude = 180;
    const topLatitude = 82;
    const bottomLatitude = -58;
    const topProjected = mercatorY(topLatitude);
    const bottomProjected = mercatorY(bottomLatitude);

    mapMarkers.forEach((marker) => {
      const latitude = Number(marker.dataset.lat);
      const longitude = Number(marker.dataset.lon);

      if (Number.isNaN(latitude) || Number.isNaN(longitude)) return;

      const normalizedX = (longitude - minLongitude) / (maxLongitude - minLongitude);
      const projectedLatitude = mercatorY(latitude);
      const normalizedY = (topProjected - projectedLatitude) / (topProjected - bottomProjected);
      const x = mapCalibration.x_offset + (normalizedX * mapCalibration.x_scale);
      const y = mapCalibration.y_offset + (normalizedY * mapCalibration.y_scale);

      marker.style.left = `${x * 100}%`;
      marker.style.top = `${y * 100}%`;
    });
  };

  const shuffleGallery = () => {
    if (!photoGallery) return;

    const photos = Array.from(photoGallery.children);

    for (let index = photos.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [photos[index], photos[randomIndex]] = [photos[randomIndex], photos[index]];
    }

    photos.forEach((photo) => photoGallery.appendChild(photo));
  };

  shuffleGallery();
  positionMapMarkers();
  mapImage?.addEventListener("load", positionMapMarkers);
  window.addEventListener("resize", positionMapMarkers);
});
