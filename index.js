// Add event listener to navbar links
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});

const carousels = document.querySelectorAll('.carousel');
const projectButtons = document.querySelectorAll('.project-button');
let prevBtn = document.querySelector('.prev-button');
let nextBtn = document.querySelector('.next-button');

let currentSlides = [0, 0, 0]; // Track current slide for each carousel

// Auto rotate carousel
setInterval(() => {
    carousels.forEach((carousel, index) => {
        nextSlide(index);
    });
}, 5000);

// Next slide function
function nextSlide(carouselIndex) {
    const carouselItems = carousels[carouselIndex].querySelectorAll('.carousel-item');
    carouselItems[currentSlides[carouselIndex]].classList.remove('active');
    currentSlides[carouselIndex] = (currentSlides[carouselIndex] + 1) % carouselItems.length;
    carouselItems[currentSlides[carouselIndex]].classList.add('active');
    console.log(`Carousel ${carouselIndex} - Slide ${currentSlides[carouselIndex]}`);
}

// Prev slide function
function prevSlide(carouselIndex) {
    const carouselItems = carousels[carouselIndex].querySelectorAll('.carousel-item');
    carouselItems[currentSlides[carouselIndex]].classList.remove('active');
    currentSlides[carouselIndex] = (currentSlides[carouselIndex] - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlides[carouselIndex]].classList.add('active');
    console.log(`Carousel ${carouselIndex} - Slide ${currentSlides[carouselIndex]}`);
}

// Add event listeners to buttons
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        carousels.forEach((carousel, index) => {
            prevSlide(index);
        });
    });
    nextBtn.addEventListener('click', () => {
        carousels.forEach((carousel, index) => {
            nextSlide(index);
        });
    });
}

projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        carousels.forEach((carousel) => {
            carousel.style.display = 'none';
        });
        carousels[index].style.display = 'block';
    });
});

let termsButton = document.getElementById('terms-button');
let termsPopup = document.getElementById('terms-popup');
let closeButton = document.getElementById('close-button');
let termsPopupOverlay = document.getElementById('terms-popup-overlay');

termsButton.addEventListener('click', () => {
    termsPopup.classList.add('show');
    termsPopupOverlay.style.display = "block";
    document.body.classList.add("lock-scroll");
});

closeButton.addEventListener('click', () => {
    termsPopup.classList.remove('show');
    termsPopupOverlay.style.display = "none";
    document.body.classList.remove("lock-scroll");
});
