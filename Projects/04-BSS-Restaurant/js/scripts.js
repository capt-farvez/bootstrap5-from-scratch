// Sidebar
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    // Desktop sidebar hover behavior
    if (window.innerWidth > 767) {
        sidebar.addEventListener('mouseenter', () => {
            sidebar.classList.remove('collapsed');
        });

        sidebar.addEventListener('mouseleave', () => {
            sidebar.classList.add('collapsed');
        });
    }

    // Mobile sidebar toggle
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Initial collapsed state for desktop
    if (window.innerWidth > 767) {
        sidebar.classList.add('collapsed');
    }
});

// Tooltips
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
});
