function loadHTML(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(containerId).innerHTML = data)
        .catch(error => console.error('Error loading file:', error));
}

// Load components dynamically
loadHTML('header', 'components/header.html');
loadHTML('navigation', 'components/navigation.html');
loadHTML('carousel', 'components/carousel.html');
loadHTML('footer', 'components/footer.html');
