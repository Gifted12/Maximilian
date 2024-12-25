const navLinks = document.querySelectorAll(".uldiv a");
const setActiveLink = () => {
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === currentPath ||
      (currentPath.includes(link.getAttribute("href")) &&
        link.getAttribute("href") !== "/")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    document.querySelector(targetId)?.scrollIntoView({
      behavior: "smooth",
    });
  });
});
const initNavigation = () => {
  const harmburgeropen = document.querySelector(".harmburgeropen");
  const harmburgerclose = document.querySelector(".harmburgerclose");
  const uldiv = document.querySelector(".uldiv");
  const body = document.body;

  const opennav = () => {
    uldiv?.classList.toggle("close");
    body.style.overflow = "hidden";
    setActiveLink();
  };

  const closenav = () => {
    uldiv?.classList.toggle("close");
    body.style.overflow = "scroll";
  };
  harmburgeropen?.addEventListener("click", opennav);
  harmburgerclose?.addEventListener("click", closenav);

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          closenav();
        }
      }
    });
  });
};
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  const backButton = document.querySelector(
    '.imagecardwrapper img[alt="Back"]'
  );
  backButton?.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});
