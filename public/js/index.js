import { sharedExperience, imageData } from "./gallery.js";
const uldiv = document.querySelector(".uldiv");
const joinTrip = document.querySelector(".join");
const joinTrip2 = document.querySelector(".maxibtn");
const form = document.querySelector(".form");
const closeForm = document.querySelector(".closeForm");
const formli = document.getElementById("formli");
const btn2 = document.querySelector(".btn2");
const slide = document.querySelectorAll(".slide");
const backdrop = document.querySelector(".backdrop");
const nav = document.querySelector(".navIconsDiv");
const myform = document.querySelector("form");
const body = document.body;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const imagesslidesubdiv = document.querySelector(".imagesslidesubdiv");
const currentPage = window.location.pathname;

if (slide.length > 0) {
  let index = 0;
  function slideFun() {
    for (let i = 0; i < slide.length; i++) {
      const e = slide[i];
      e.style.display = "none";
    }
    index++;
    if (index > slide.length) {
      index = 1;
    }
    slide[index - 1].style.display = "block";
    setTimeout(slideFun, 8500);
  }
  slideFun();
}

// Create slides
sharedExperience.map((item) => {
  const imagesslidediv = document.createElement("div");
  imagesslidediv.classList.add("imagesslidediv");

  const placeimgwrapper = document.createElement("div");
  placeimgwrapper.classList.add("placeimgwrapper");

  const placeimg = document.createElement("img");
  placeimg.classList.add("placeimg");
  placeimg.src = item.img;
  placeimg.alt = "image";

  const description = document.createElement("p");
  description.textContent = item.content;

  placeimgwrapper.appendChild(placeimg);
  imagesslidediv.appendChild(placeimgwrapper);
  imagesslidediv.appendChild(description);
  imagesslidesubdiv.appendChild(imagesslidediv);
});


let currentIndex = 0;
const slides = document.querySelectorAll('.imagesslidediv'); 
const slideCount = slides.length; 
const slideGap = 10;

// Initialize the slides' positions
slides.forEach((slide, index) => {
  const position = index * (100 + slideGap); 
  slide.style.transform = `translateX(${position}%)`; // Position with gaps
});

const updateSlides = () => {
  slides.forEach((slide, index) => {
    const offset = ((index - currentIndex + slideCount) % slideCount) * (100 + slideGap);
    slide.style.transform = `translateX(${offset}%)`;
  });
};
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlides();
});
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlides();
});
setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlides();
}, 8000);




const displayForm = () => {
  form.style.display = "block";
  backdrop.style.display = "block";
  body.style.overflow = "hidden";
  body.style.pointerevents = "none";
  if (uldiv.classList.contains("close")) {
    uldiv.classList.toggle("close");
  }
};
const removeForm = () => {
  form.style.display = "none";
  backdrop.style.display = "none";
  body.style.overflow = "scroll";
  body.style.pointerevents = "initial";
  if (uldiv.classList.contains("close")) {
    uldiv.classList.toggle("close");
  }
};
const navLinks = document.querySelectorAll(".uldiv a");
// Active Navigation Indicator
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


joinTrip.addEventListener("click", displayForm);
formli.addEventListener("click", displayForm);
closeForm.addEventListener("click", removeForm);
joinTrip2.addEventListener("click", displayForm);
btn2.addEventListener("click", ()=>{
  document.querySelectorAll('.forminput').textContent = '';
});
backdrop.addEventListener("click", removeForm);
// myform.addEventListener("submit", removeForm);


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.subscribe');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Show loading message
      messageDiv.textContent = 'Sending...';
      messageDiv.className = 'message info';
      messageDiv.style.display = 'block';

      // Get form data
      const formData = {
          emailadd: document.getElementById('eaddress').value,
          firstname: document.getElementById('fname').value,
          lastname: document.getElementById('lname').value,
          place: document.getElementById('pname').value
      };

      try {
          const response = await fetch('/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });

          const data = await response.json();
          document.querySelectorAll('.forminput').textContent = '';

          if (data.success) {
              // Success message
              messageDiv.textContent = '✓ Successfully subscribed!';
              messageDiv.className = 'message success';
              form.reset();

              // Auto close form after 2 seconds
              setTimeout(() => {
                  document.querySelector('.form').style.display = 'none';
                  backdrop.style.display = 'none';
                  messageDiv.style.display = 'none';
              }, 2000);
          } else {
              // Error message
              messageDiv.textContent = `✕ ${data.error || 'Something went wrong. Please try again.'}`;
              messageDiv.className = 'message error';
              setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 3000);
          }
      } catch (error) {
          messageDiv.textContent = '✕ Network error. Please check your connection.';
          messageDiv.className = 'message error';
      }
  });
});