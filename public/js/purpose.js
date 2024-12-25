const initNavigation = () => {
    const harmburgeropen = document.querySelector(".harmburgeropen");
    const harmburgerclose = document.querySelector(".harmburgerclose");
    const uldiv = document.querySelector(".uldiv");
    const body = document.body;
  
    const opennav = () => {
      uldiv?.classList.toggle("close");
      body.style.overflow = "hidden";
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
  initNavigation()