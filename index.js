// Add event listener to navbar links
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let prevBtn = document.querySelector('.prev-button');
let nextBtn = document.querySelector('.next-button');

let currentSlide = 0;

// Auto rotate carousel
setInterval(() => {
    nextSlide();
}, 4000);

// Next slide function
function nextSlide() {
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % carouselItems.length;
    carouselItems[currentSlide].classList.add('active');
    console.log(currentSlide);
    
}

// Prev slide function
function prevSlide() {
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].classList.add('active');
    console.log(currentSlide);
    
}

// Add event listeners to buttons
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

const projectButtons = document.querySelectorAll('.project-button');
const carousels = document.querySelectorAll('.carousel');

projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        carousels.forEach((carousel) => {
            carousel.style.display = 'none';
        });
        carousels[index].style.display = 'block';
    });
});
