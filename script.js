

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); })


// Enabling Page Navigation 

// Select all the navigation links and pages
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// Add event listeners for the navigation links
navigationLinks.forEach(link => {
    link.addEventListener('click', function() {
        const targetPage = this.textContent.trim().toLowerCase(); // Get target page name from the link

        pages.forEach(page => {
            const pageName = page.dataset.page?.toLowerCase(); // Get the dataset value for the page

            // If the page exists and matches the target, show it and mark as active
            if (pageName === targetPage) {
                page.classList.add('active');
                window.scrollTo(0, 0); // Scroll to the top when a section is shown
            } else {
                // Hide the non-matching sections
                page.classList.remove('active');
            }
        });

        // Mark the clicked navigation link as active
        navigationLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});