// Fetch and inject HTML fragments.
function loadComponent(placeholderId, filePath, callback) {
    // Initiate the asynchronous request to get the file
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = htmlContent;
                
                // Callback to prevent script to run before html insertion
                if (callback) {
                    callback();
                }
            }
        })
        .catch(error => {
            console.error('Could not load component:', error);
        });
}

// Inicialize topbar 
function initializeTopbarMenu() {
    const menuIcon = document.querySelector('.menu-hamb');
    const menuLinks = document.getElementById('hamb-links');

    if (menuIcon && menuLinks) {
        menuIcon.addEventListener('click', () => {
            menuLinks.classList.toggle('is-active');
        });
    }
}



// Load the components
loadComponent('header-container', 'includes/topbar.html', initializeTopbarMenu);
loadComponent('aside-content', 'includes/content.html');


// Init Foundation
$(document).foundation();
