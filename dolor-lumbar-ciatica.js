/* ============================================ */
/* JAVASCRIPT CANVA STYLE — PRUEBA LUMBALGIA V2 */
/* ============================================ */

(function () {
  const backToTopButton = document.getElementById("backToTop");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const expanded = button.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".faq-item").forEach((faq) => {
        faq.classList.remove("active");
        const faqButton = faq.querySelector(".faq-question");
        if (faqButton) faqButton.setAttribute("aria-expanded", "false");
      });

      if (!expanded && item) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.querySelectorAll('a[href^="https://wa.me"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (typeof gtag !== "undefined") {
        gtag("event", "whatsapp_click", {
          event_category: "contact",
          event_label: "WhatsApp CTA"
        });
      }
      if (typeof fbq !== "undefined") {
        fbq("track", "Contact");
      }
    });
  });

  document.querySelectorAll('a[href*="calendar.google.com"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (typeof gtag !== "undefined") {
        gtag("event", "calendar_click", {
          event_category: "conversion",
          event_label: "Google Calendar"
        });
      }
      if (typeof fbq !== "undefined") {
        fbq("track", "Schedule");
      }
    });
  });
})();
