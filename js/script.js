// Declaring the variables
const image = document.querySelector(".carrusel__image-imgActive");
const textTitle = document.querySelector(".carrusel__text-title");
const textDescription = document.querySelector(".carrusel__text-description");

const buttonPrev = document.querySelector(".carrusel__button-prev");
const buttonNext = document.querySelector(".carrusel__button-next");

const display = window.innerWidth;

let currentSlide = 0;

// Creatting the Objects with the images
const contentData = [
  {
    imageDesktop: "../images/desktop-image-hero-1.jpg",
    imageMobile: "../images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    imageDesktop: "../images/desktop-image-hero-2.jpg",
    imageMobile: "../images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imageDesktop: "../images/desktop-image-hero-3.jpg",
    imageMobile: "../images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

// We put the correct image in the first position
window.onload = () => {
  image.src =
    display < 1024
      ? "../images/mobile-image-hero-1.jpg"
      : "../images/desktop-image-hero-1.jpg";
};

// Function that will remove the animations
function removeAnimations(event) {
    event.target.classList.remove("slide-left", "slide-right", "fade-in-left", "fade-in-right");
}

// Añadir listeners a los elementos de texto
textTitle.addEventListener("animationend", removeAnimations);
textDescription.addEventListener("animationend", removeAnimations);

// Creating the function that will change the image and text
function changeContent(direction) {
  // We put the animations for exiting
  if (direction === "left") {
    textTitle.classList.add("slide-left");
    textDescription.classList.add("slide-left");
  } else {
    textTitle.classList.add("slide-right");
    textDescription.classList.add("slide-right");
  }

  // We wait for the animation to finish
  setTimeout(() => {
    currentSlide =
      direction === "left"
        ? (currentSlide - 1 + contentData.length) % contentData.length
        : (currentSlide + 1) % contentData.length;

    const currentContent = contentData[currentSlide];

    // We change the text
    textTitle.innerText = currentContent.title;
    textDescription.innerText = currentContent.description;

    // We change the image in function of the device
    image.src =
      display < 1024 
      ? currentContent.imageMobile 
      : currentContent.imageDesktop;

    if (direction === "left") {
      textTitle.classList.add("fade-in-right");
      textDescription.classList.add("fade-in-right");
    } else {
      textTitle.classList.add("fade-in-left");
      textDescription.classList.add("fade-in-left");
    }
  }, 450);
}

// We add the event listener to the buttons
buttonPrev.addEventListener("click", () => changeContent("left"));
buttonNext.addEventListener("click", () => changeContent("right"));


// Burger Menu
const menuBtn = document.querySelector(".header__burger-btn");
const menu = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");
const closeBtn = document.querySelector(".header__close-btn");

// Function that will open the menu
menuBtn.addEventListener("click", () => {
  logo.style.display = "none";
  menu.style.display = "flex";
});

// Function that will close the menu
closeBtn.addEventListener("click", () => {
  logo.style.display = "flex";
  menu.style.display = "none";
});