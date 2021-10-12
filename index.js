/*
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});
*/


var observer = new IntersectionObserver(function(entries) {
  entries.forEach(e =>{
      let element = e.target;
      if(e.isIntersecting === true){
          element.classList.remove("not-visible");
          element.classList.add("visible");
      }else{
          element.classList.remove("visible");
          element.classList.add("not-visible");
      }
  });
}, { threshold: [0] });

observer.observe(document.querySelector("#first-element"));
observer.observe(document.querySelector("#second-element"));
observer.observe(document.querySelector("#third-element"));
observer.observe(document.querySelector("#fourth-element"));
observer.observe(document.querySelector("#fifth-element"));
observer.observe(document.querySelector("#sixth-element"));

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// --- this changes the styling of header on scroll start

var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // pageYOffset for compatibility with IE
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
    document.getElementById("logo").src="./assets/png/mwp-logo-only.png";
    document.getElementById("burger").src="./assets/png/icon-hamburger-24x24.png";
    document.getElementById("burger-close").src="./assets/png/close-24x24.png";
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
    document.getElementById("logo").src="./assets/png/mwp-logo-only-white.png";
    document.getElementById("burger").src="./assets/png/icon-hamburger-white-24x24.png";
    document.getElementById("burger-close").src="./assets/png/close-white-24x24.png";
  }
};

