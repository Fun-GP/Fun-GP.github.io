document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const bxMenu = document.querySelector('.bx-menu');
        const bxX = document.querySelector('.bx-x');
        const navBar = document.querySelector('.navbar');
    
        // Toggle menu for mobile view
        menuToggle.addEventListener('click', () => {
            navBar.classList.toggle('show-navbar');
            bxMenu.classList.toggle('hide-bx');
            bxX.classList.toggle('show-bx');
        });
    
        // Adjust navbar visibility on scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
    
            if (scrollPosition > 50) {
                navBar.style.display = 'block';
            } else {
                navBar.style.display = 'none';
            }
        });
    });
});