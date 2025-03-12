function loadProjectSection(type) {
    let content = "";
    
    if (type === "github") {
        content = `
            <section id="projects" class="main special">
                <header class="major">
                    <h2>GitHub Projects</h2>
                </header>
                <p>Here are some of my open-source contributions.</p>
                <ul>
                    <li><a href="https://github.com/Mohitsai/project1" target="_blank">Project 1</a></li>
                    <li><a href="https://github.com/Mohitsai/project2" target="_blank">Project 2</a></li>
                    <li><a href="https://github.com/Mohitsai/project3" target="_blank">Project 3</a></li>
                </ul>
            </section>
        `;
    } else if (type === "dashboards") {
        content = `
            <section id="dashboards" class="main special">
                <header class="major">
                    <h2>Dashboards</h2>
                </header>
                <iframe src="https://some-dashboard-link.com" width="100%" height="600px"></iframe>
            </section>
        `;
    } else if (type === "ds") {
        content = `
            <section id="ds-projects" class="main special">
                <header class="major">
                    <h2>Data Science Projects</h2>
                </header>
                <p>Explore my interactive Data Science demos below.</p>
                <div class="demo-container">
                    <div class="demo">
                        <h3>Live Prediction Model</h3>
                        <iframe src="https://some-live-model.com" width="100%" height="400px"></iframe>
                    </div>
                    <div class="demo">
                        <h3>Interactive Data Visualization</h3>
                        <iframe src="https://some-dataviz.com" width="100%" height="400px"></iframe>
                    </div>
                </div>
            </section>
        `;
    }

    document.getElementById("main").innerHTML = content;
}
