// Wait for the DOM to load before executing
document.addEventListener('DOMContentLoaded', function () {

    // Toggle visibility of an element
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

    // Example of handling form submission
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

