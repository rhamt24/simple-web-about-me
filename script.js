document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    updateColors();
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

function showSlide(slideNumber) {
    var slides = document.querySelectorAll('.right-panel');
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });
    document.getElementById('slide' + slideNumber).style.display = 'flex';
}

function updateColors() {
    var isLightMode = document.body.classList.contains('light-mode');
    var modeColor = isLightMode ? '#ffc0cb' : '#77dbed';
    document.querySelectorAll('.mode-button, .menu-button, .menu').forEach(function(element) {
        element.style.backgroundColor = modeColor;
    });
}

// Initialize colors on page load
updateColors();
