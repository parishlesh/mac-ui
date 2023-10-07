document.addEventListener('DOMContentLoaded', function () {

// script.js
const desktop = document.getElementById('desktop');
const contextMenu = document.getElementById('rightClickOption');

desktop.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevent the default browser context menu
    let menuX = e.clientX;
    let menuY = e.clientY;
    const menuWidth = contextMenu.offsetWidth;
    const menuheight = contextMenu.offsetHeight;

    if(menuX+menuWidth>window.innerWidth ){
        menuX -= menuWidth;
    }

    if(menuY+menuheight>window.innerHeight ){
        menuY -= menuheight;
        
    }
    

    // Position the context menu at the mouse pointer
    contextMenu.style.top = e.clientY + 'px';
    contextMenu.style.left = e.clientX + 'px';
    contextMenu.style.left = menuX + 'px';
    contextMenu.style.top = menuY + 'px';

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