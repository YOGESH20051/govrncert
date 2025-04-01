// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //    remove toggle icon and navbar when click navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


// typed js

const typed = new Typed('.multiple-text', {
  strings: ['Electronic Government Certificates', 'All Government Documents in One Place', 'Smart & Quick Govt Docs'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
  });


 // Government Latest Updates List
const updates = [ "📰 New e-Certificate Services are now available!",
"CBSE	Group B & C	Exam ",
"⚠️ Important: Aadhaar Verification Process Updated!",
"POWERGRID	Diploma Trainee	",
"📢 Government Scholarship Applications Open!",
"AIC	MT	Exam ",
"💳 New Digital ID Cards Issued – Apply Now!",
"Supreme Court	Junior Court Assistant	",
"📄 Birth & Death Certificate Online Process Made Easier!",
"BDL	MT	Exam ",
];

let index = 0;
const updateText = document.getElementById("update-text");

function updateNews() {
  updateText.style.opacity = 0; // Fade Out
  setTimeout(() => {
      updateText.textContent = updates[index]; // Change News
      updateText.style.opacity = 1; // Fade In
      index = (index + 1) % updates.length; // Loop through news
  }, 500);
}

// Change News Every 5 Seconds
setInterval(updateNews, 5000);

// Initial Load
updateNews();




//search

const services = [
  { name: "Birth Certificate", link: "https://www.india.gov.in/apply-birth-certificate" },
  { name: "PMAY Scheme", link: "https://pmaymis.gov.in/" },
  { name: "Driving License Renewal", link: "https://parivahan.gov.in/" },
  { name: "Aadhaar Card Update", link: "https://uidai.gov.in/" },
  { name: "Passport Application", link: "https://www.passportindia.gov.in/" },
  { name: "PAN Card Application", link: "https://www.onlineservices.nsdl.com/paam/" },
  { name: "Voter ID Application", link: "https://voters.eci.gov.in/Homepage" }          
];

function searchService() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  
  let filteredServices = services.filter(service => service.name.toLowerCase().includes(input));
  
  filteredServices.forEach(service => {
      let div = document.createElement("div");
      div.className = "result-item";
      div.innerHTML = service.name;
      div.onclick = () => window.open(service.link, "_blank");
      resultsDiv.appendChild(div);
  });
}
