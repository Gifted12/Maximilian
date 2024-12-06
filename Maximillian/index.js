import mySlides from "./slides.js";

const joinTrip = document.querySelector(".join");
const joinTrip2 = document.querySelector(".maxibtn");
const form = document.querySelector(".form");
const closeForm = document.querySelector(".closeForm");
const formli = document.getElementById("formli");
const btn2 = document.querySelector(".btn2");
const body = document.querySelector("body");
const slide = document.querySelectorAll(".slide");
const backdrop = document.querySelector(".backdrop");
const harmburgeropen = document.querySelector(".harmburgeropen");
const harmburgerclose = document.querySelector(".harmburgerclose");
const uldiv = document.querySelector(".uldiv");
const li = document.querySelector("ul");
const myform = document.querySelector('form');
let index = 0;
slideFun();
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
  if (index > slide.length) {
    index = 1;
  }
  setTimeout(slideFun, 8500);
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
const submitForm = (event)=>{
  event.preventDefault();
}
const opennav = () => {
  uldiv.classList.toggle("close");
  body.style.overflow = "hidden";
};
const closenav = () => {
  uldiv.classList.toggle("close");
  body.style.overflow = "scroll";
};

joinTrip.addEventListener("click", displayForm);
formli.addEventListener("click", displayForm);
closeForm.addEventListener("click", removeForm);
joinTrip2.addEventListener("click", displayForm);
btn2.addEventListener("click", removeForm);
backdrop.addEventListener("click", removeForm);
harmburgeropen.addEventListener("click", opennav);
harmburgerclose.addEventListener("click", closenav);
li.addEventListener("click", closenav);
myform.addEventListener('submit', submitForm);


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