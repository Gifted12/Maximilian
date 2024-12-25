// navigation.js

export function initializeNavigation() {
    // Get navigation elements
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburgerOpen = document.querySelector('.harmburgeropen');
    const hamburgerClose = document.querySelector('.harmburgerclose');
    const ulDiv = document.querySelector('.uldiv');
    const backdrop = document.querySelector('.backdrop');
    const navLinks = document.querySelectorAll('.uldiv a');
    const body = document.body;
  
    // Toggle navigation
    const toggleNav = () => {
      ulDiv?.classList.toggle('close');
      backdrop.style.display = ulDiv?.classList.contains('close') ? 'none' : 'block';
      body.style.overflow = ulDiv?.classList.contains('close') ? 'auto' : 'hidden';
    };
  
    // Close navigation
    const closeNav = () => {
      ulDiv?.classList.add('close');
      backdrop.style.display = 'none';
      body.style.overflow = 'auto';
    };
  
    // Event listeners
    hamburgerOpen?.addEventListener('click', toggleNav);
    hamburgerClose?.addEventListener('click', toggleNav);
    backdrop?.addEventListener('click', closeNav);
  
    // Handle navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Handle anchor links
        if (link.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            closeNav();
          }
        } else {
          // For regular page links, just close the nav
          closeNav();
        }
      });
    });
  
    // Set active link based on current page
    const setActivePage = () => {
      const currentPath = window.location.pathname;
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href) || 
            (currentPath === '/' && href === 'index.html')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
  
    // Call setActivePage on load
    setActivePage();
  
    // Handle form link if it exists
    const formLi = document.getElementById('formli');
    const form = document.querySelector('.form');
    
    if (formLi && form) {
      formLi.addEventListener('click', (e) => {
        e.preventDefault();
        form.style.display = 'block';
        backdrop.style.display = 'block';
        closeNav();
      });
    }
  
    // Return cleanup function
    return () => {
      hamburgerOpen?.removeEventListener('click', toggleNav);
      hamburgerClose?.removeEventListener('click', toggleNav);
      backdrop?.removeEventListener('click', closeNav);
      navLinks.forEach(link => {
        link.removeEventListener('click', closeNav);
      });
    };
  }