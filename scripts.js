document.addEventListener('DOMContentLoaded', function () {
    // Carousel functionality
    let currentIndex = 0;

    function moveSlide(direction) {
        const images = document.querySelectorAll('.carousel-image');
        
        // Remove 'active' class from the current image
        images[currentIndex].classList.remove('active');

        // Update the current index based on the direction
        currentIndex = (currentIndex + direction + images.length) % images.length;

        // Add 'active' class to the new image
        images[currentIndex].classList.add('active');
    }

    // Initialize the carousel by showing the first image
    const images = document.querySelectorAll('.carousel-image');
    if (images.length > 0) {
        // Add 'active' class to the first image
        images[currentIndex].classList.add('active');
    }

    // Add event listeners for carousel buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    if (prevButton) {
        prevButton.addEventListener('click', function () {
            moveSlide(-1); // Move to previous image
        });
    }
    if (nextButton) {
        nextButton.addEventListener('click', function () {
            moveSlide(1); // Move to next image
        });
    }

    // Additional functionality
    // Toggle visibility of an element (if needed for other parts of your page)
    function toggleVisibility(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        }
    }

    // Attach event listener to a button to toggle visibility of content
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            toggleVisibility('toggleContent');
        });
    }

    // Function to change text content of an element
    function changeTextContent(elementId, newText) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = newText;
        }
    }

    // Attach event listener to a button to change text content
    const textChangeButton = document.getElementById('textChangeButton');
    if (textChangeButton) {
        textChangeButton.addEventListener('click', function () {
            changeTextContent('textElement', 'New Text Content!');
        });
    }

    // Example of handling form submission (if needed)
    const form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent page refresh
            const formData = new FormData(form);
            console.log('Form submitted:', Object.fromEntries(formData));
            // Add additional form handling logic here
        });
    }
});
