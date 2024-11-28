document.querySelectorAll('.more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const flipCard = this.closest('.flip-card');
        flipCard.classList.toggle('flip');
    });
});

document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', function() {
        const flipCard = this.closest('.flip-card');
        flipCard.classList.toggle('flip');
    });
});

// Slideshow functionality
document.querySelectorAll('.flip-card-front').forEach(card => {
    const images = card.querySelectorAll('.slideshow-container img');
    let currentImageIndex = 0;

    card.addEventListener('mouseenter', function() {
        // Show the next image when hovered
        const interval = setInterval(() => {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }, 1500); // Change image every 1.5 seconds

        card.addEventListener('mouseleave', function() {
            clearInterval(interval); // Stop the slideshow when hover ends
            images.forEach(img => img.classList.remove('active')); // Remove all active states
            images[0].classList.add('active'); // Show the first image again
        });
    });
});
