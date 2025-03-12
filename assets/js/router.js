document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("nav-items");
    const contentDiv = document.getElementById("content");

    function updateNavbar(section) {
        if (section === "projects") {
            navbar.innerHTML = `
                <li><a href="#" id="home-link">Home</a></li>
                <li><a href="#" id="github-projects-link" class="active">GitHub Projects</a></li>
                <li><a href="#" id="dashboards-link">Dashboards</a></li>
                <li><a href="#" id="ds-projects-link">Data Science Projects</a></li>
            `;
        } else {
            navbar.innerHTML = `
                <li><a href="#" id="home-link" class="active">Home</a></li>
                <li><a href="#" id="projects-link">Projects</a></li>
                <li><a href="#" id="experience-link">Experience</a></li>
                <li><a href="#" id="skills-link">Skills</a></li>
                <li><a href="#" id="contact-link">Contact</a></li>
            `;
        }

        attachEventListeners();
    }

    function navigateTo(section) {
        if (section === "projects") {
            updateNavbar("projects");
            loadProjectSection("github"); // Default to GitHub Projects
        } else {
            updateNavbar("home");
            loadHomeSection();
        }
    }

    function attachEventListeners() {
        document.getElementById("projects-link")?.addEventListener("click", () => navigateTo("projects"));
        document.getElementById("home-link")?.addEventListener("click", () => navigateTo("home"));
        document.getElementById("github-projects-link")?.addEventListener("click", () => loadProjectSection("github"));
        document.getElementById("dashboards-link")?.addEventListener("click", () => loadProjectSection("dashboards"));
        document.getElementById("ds-projects-link")?.addEventListener("click", () => loadProjectSection("ds"));
    }

    attachEventListeners();
});
