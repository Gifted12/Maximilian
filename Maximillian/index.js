import { myGallery, imageData } from "./gallery.js";
const galleryDiv = document.querySelector(".imagecardmain.imgmain2");
const joinTrip = document.querySelector(".join");
const joinTrip2 = document.querySelector(".maxibtn");
const form = document.querySelector(".form");
const closeForm = document.querySelector(".closeForm");
const formli = document.getElementById("formli");
const btn2 = document.querySelector(".btn2");
// const body = document.querySelector("body");
const slide = document.querySelectorAll(".slide");
const backdrop = document.querySelector(".backdrop");
const nav = document.querySelector(".navIconsDiv");
const myform = document.querySelector("form");
const currentPage = window.location.pathname;
const partnersMain = document.querySelector(".partnersmain");

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
const displayForm = () => {
  form.style.display = "block";
  // formdiv2.style.animation = "form 0.5s linear";
  backdrop.style.display = "block";
  body.style.overflow = "hidden";
  body.style.pointerevents = "none";
  if (uldiv.classList.contains("close")) {
    uldiv.classList.toggle("close");
  }
};
const removeForm = (event) => {
  form.style.display = "none";
  backdrop.style.display = "none";
  body.style.overflow = "scroll";
  body.style.pointerevents = "initial";
  if (uldiv.classList.contains("close")) {
    uldiv.classList.toggle("close");
  }
};

// Sticky Navigation
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// Active Navigation Indicator
const setActiveLink = () => {
  const navLinks = document.querySelectorAll(".uldiv a");
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
  };

  const closenav = () => {
    uldiv?.classList.toggle("close");
    body.style.overflow = "scroll";
  };

  harmburgeropen?.addEventListener("click", opennav);
  harmburgerclose?.addEventListener("click", closenav);

  const navLinks = document.querySelectorAll(".uldiv a");
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
  createGalleryItems();
  createPartnersItems();
  initNavigation();
  const backButton = document.querySelector(
    '.imagecardwrapper img[alt="Back"]'
  );
  backButton?.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});



const createGalleryItems = () => {
  if (!galleryDiv) return;

  myGallery.forEach((item) => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("imagecarddiv");

    const img = document.createElement("img");
    img.classList.add("imagecard");
    img.src = item.img;
    img.alt = "Gallery image";
    img.loading = "lazy";
    //  imageCard.addEventListener('click', () => showImage(index));

    //     const nav = document.querySelector(".navIconsDiv");
    imageCard.appendChild(img);
    galleryDiv.appendChild(imageCard);
  });
  // const showImage = createLightbox();
};

const createPartnersItems = () => {
  if (currentPage.includes("partners.html")) {
    console.log(partnersMain);
    if (partnersMain) {
      imageData.forEach((item, index) => {
        const wrapper = document.createElement("a");
        wrapper.href = `pdetails.html?index=${index}`;
        wrapper.id = "detailsModal";

        const img = document.createElement("img");
        img.classList.add("partnersimg");
        img.src = item.imageUrl;
        img.alt = "img";

        const subwrapper = document.createElement("div");
        subwrapper.classList.add("subwrapper");

        const h2 = document.createElement("h2");
        h2.id = "modalTitle";
        h2.textContent = item.title;

        wrapper.append(img, subwrapper);
        subwrapper.append(h2);
        partnersMain.append(wrapper);
      });
    } else {
      console.error("Partners main container not found in partners.html");
    }
  }
};

if (currentPage.includes("pdetails.html")) {
  if (typeof imageData !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const index = params.get("index");
    console.log("Index from URL:", index);

    if (index !== null && imageData[index]) {
      const item = imageData[index];

      const detailsContainer = document.querySelector(".detailscontainer");
      if (detailsContainer) {
        detailsContainer.innerHTML = `
          <h1>${item.title}</h1>
          <p>${item.description}</p>
          <div class="related-images">
            ${item.relatedImages
              .map(
                (url) =>
                  `<img src="${url}" alt="Related Image" class="related-image">`
              )
              .join("")}
          </div>
        `;
      } else {
        console.error("Details container not found in pdetails.html");
      }
    } else {
      console.error("Invalid index or missing imageData");
    }
  } else {
    console.error("imageData is undefined");
  }
}

joinTrip.addEventListener("click", displayForm);
formli.addEventListener("click", displayForm);
closeForm.addEventListener("click", removeForm);
joinTrip2.addEventListener("click", displayForm);
btn2.addEventListener("click", removeForm);
backdrop.addEventListener("click", removeForm);
myform.addEventListener("submit", submitForm);

//  document
//         .getElementById("requestAccessForm")
//         .addEventListener("submit", function (e) {
//           e.preventDefault();

//           const messageEl = document.getElementById("message");
//           messageEl.style.display = "block";
//           messageEl.textContent = "Sending request...";
//           messageEl.className = "message";

//           fetch("/requestaccess", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email: document.getElementById("email").value,
//             }),
//           })
//             .then((response) => {
//               console.log("Response status:", response.status);
//               return response.json().catch((error) => {
//                 console.error("Error parsing JSON:", error);
//                 return { success: false, error: "Invalid server response" };
//               });
//             })
//             .then((data) => {
//               console.log("Server response:", data);

//               if (data.success === true) {
//                 messageEl.className = "message success";
//                 messageEl.textContent =
//                   data.message ||
//                   "Access request successful. Please check your email and proceed to login.";

//                 // Disable the form
//                 document.getElementById("requestAccessForm").style.display =
//                   "none";

//                 // Show a countdown for redirection
//                 let countdown = 5;
//                 const countdownInterval = setInterval(() => {
//                   messageEl.textContent = `${
//                     data.message ||
//                     "Access request successful. Please check your email and proceed to login."
//                   } Redirecting in ${countdown} seconds...`;
//                   countdown--;
//                   if (countdown < 0) {
//                     clearInterval(countdownInterval);
//                     window.location.href = "/";
//                   }
//                 }, 1000);
//               } else {
//                 messageEl.className = "message error";
//                 messageEl.textContent =
//                   "Error: " + (data.error || "An unknown error occurred.");
//               }
//             })
//             .catch((error) => {
//               console.error("Fetch error:", error);
//               messageEl.className = "message error";
//               messageEl.textContent =
//                 "An error occurred while sending the request. Please try again.";
//             });
//         });
