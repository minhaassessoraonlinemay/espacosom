(function () {
  const config = window.SITE_CONFIG || {};
  const tracking = config.tracking || {};
  const whatsappUrl = config.whatsappUrl || "https://wa.me/5547996330890";
  const consentKey = "espacoSomCookieConsent";

  function pushEvent(eventName, payload = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      project: "espaco_som",
      ...payload
    });
  }

  function hasTrackingIds() {
    return Boolean(
      tracking.googleTagManagerId ||
      tracking.googleAnalyticsId ||
      tracking.metaPixelId ||
      tracking.googleAdsId
    );
  }

  function normalizeWhatsappLinks() {
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
      link.setAttribute("href", whatsappUrl);
      link.setAttribute("rel", "noopener");
    });
  }

  function bindClicks() {
    document.querySelectorAll("[data-track]").forEach((element) => {
      element.addEventListener("click", () => {
        pushEvent(element.dataset.track, {
          label: element.dataset.trackLabel || element.textContent.trim()
        });
      });
    });
  }

  function bindScrollDepth() {
    const thresholds = [25, 50, 75, 100];
    const reached = new Set();

    window.addEventListener("scroll", () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const current = Math.round((window.scrollY / scrollable) * 100);
      thresholds.forEach((threshold) => {
        if (current >= threshold && !reached.has(threshold)) {
          reached.add(threshold);
          pushEvent("scroll", { percent: threshold });
        }
      });
    }, { passive: true });
  }

  function observeSections() {
    if (!("IntersectionObserver" in window)) return;

    const sectionEvents = {
      offer: "view_offer",
      methodology: "view_methodology"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const sectionName = entry.target.dataset.trackSection;
        const eventName = sectionEvents[sectionName];
        if (eventName) {
          pushEvent(eventName, { section: sectionName });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45 });

    document.querySelectorAll("[data-track-section]").forEach((section) => {
      observer.observe(section);
    });
  }

  function setupCookieBanner() {
    const banner = document.querySelector(".cookie-banner");
    if (!banner) return;

    const savedConsent = localStorage.getItem(consentKey);
    if (!savedConsent) {
      banner.hidden = false;
    }

    const accept = banner.querySelector("[data-cookie-accept]");
    const decline = banner.querySelector("[data-cookie-decline]");

    accept?.addEventListener("click", () => {
      localStorage.setItem(consentKey, "accepted");
      banner.hidden = true;
      pushEvent("cookie_consent", { status: "accepted", tracking_ready: hasTrackingIds() });
    });

    decline?.addEventListener("click", () => {
      localStorage.setItem(consentKey, "essential");
      banner.hidden = true;
      pushEvent("cookie_consent", { status: "essential" });
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    normalizeWhatsappLinks();
    bindClicks();
    bindScrollDepth();
    observeSections();
    setupCookieBanner();
    pushEvent("page_view", {
      page_title: document.title,
      tracking_ready: hasTrackingIds()
    });
  });
})();
