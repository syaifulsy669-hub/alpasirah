// Get lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');

// Function to create floating hearts
function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// Add click event to each photo
document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', () => {
        const imgSrc = photo.querySelector('img').src;
        const caption = photo.getAttribute('data-caption');
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'block';
        setTimeout(() => {
            lightbox.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 10);
        createFloatingHearts();
    });
});

// Close lightbox when close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.8)';
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.8)';
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }
});
