// Function to load an HTML file into a specified container
function loadHTML(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Load components dynamically into the placeholders
window.onload = function() {
    loadHTML('navigation', 'components/navigation.html');        // Load navigation
    loadHTML('carousel', 'components/carousel.html');            // Load carousel
    loadHTML('user', 'components/User.html'); // Load user authentication (login/signup)
    loadHTML('languages', 'components/languages.html');          // Load languages component
    loadHTML('your-home', 'components/your-home.html');          // Load Airbnb Your Home page
    loadHTML('footer', 'components/footer.html');                // Load footer
};
