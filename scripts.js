document.addEventListener('DOMContentLoaded', function () {
    // Debug log to verify script is running
    console.log('Script initialized');
    
    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-image');
    
    // Debug log to check if slides are found
    console.log('Number of slides found:', slides.length);

    // Initialize the first slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
        console.log('First slide activated');
    }

    // Move slide function
    window.moveSlide = function(direction) {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Calculate new slide index
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
        
        console.log('Moved to slide:', currentSlide);
    };

    // Add click events to prev/next buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton) {
        prevButton.addEventListener('click', () => moveSlide(-1));
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => moveSlide(1));
    }
});