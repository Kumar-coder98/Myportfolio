// Toggle sidebar visibility
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Navigation logic
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach(link => {
    link.addEventListener('click', function () {
        const targetPage = this.textContent.trim().toLowerCase();

        let pageFound = false; // Track if a matching page was found

        pages.forEach(page => {
            const pageName = page.dataset.page?.toLowerCase();

            if (pageName === targetPage) {
                page.classList.add('active');
                window.scrollTo(0, 0);
                pageFound = true;
            } else {
                page.classList.remove('active');
            }
        });

        // Only update active state if the page was found
        if (pageFound) {
            navigationLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        } else {
            console.warn(`No matching page found for nav link: ${targetPage}`);
        }
    });
});
