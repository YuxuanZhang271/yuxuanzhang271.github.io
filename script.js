document.addEventListener("DOMContentLoaded", () => {
  const menuLayer = document.querySelector(".menu-layer");
  const menuBar = document.querySelector(".menu-bar");
  const menuLinks = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll(".page-section");
  const coverSection = document.querySelector(".cover-section");
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
});
