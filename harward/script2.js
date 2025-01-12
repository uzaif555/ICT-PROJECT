window.addEventListener('scroll', () => {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (window.scrollY > 0) { // Check if the user has scrolled
        contentWrapper.style.top = '0'; // Bring the content into view
    }
});