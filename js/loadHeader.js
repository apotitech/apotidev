document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
            setActiveLink();
        });

    function setActiveLink() {
        const navLinks = document.querySelectorAll('.navigation a');
        const currentPath = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            if (link.href.includes(currentPath)) {
                link.classList.add('active');
            }
        });
    }
});