document.addEventListener('DOMContentLoaded', function () {

// script.js
const desktop = document.getElementById('desktop');
const contextMenu = document.getElementById('rightClickOption');

desktop.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevent the default browser context menu

    // Position the context menu at the mouse pointer
    contextMenu.style.top = e.clientY + 'px';
    contextMenu.style.left = e.clientX + 'px';

    // Show the context menu
    contextMenu.style.display = 'block';
});

// Hide the context menu when clicking outside of it
document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
});

// Handle context menu item clicks
document.getElementById('newFolder').addEventListener('click', () => {
    // Add your code here
    contextMenu.style.display = 'none'; // Hide the menu
});

})