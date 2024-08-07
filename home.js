// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('closed');
        mainContent.classList.toggle('shifted');
        
        // Toggle button position
        if (sidebar.classList.contains('closed')) {
            toggleBtn.style.right = '20px';
        } else {
            toggleBtn.style.right = '-50px';
        }
    });
});
