function loadHomeSection() {
    document.getElementById("main").innerHTML = `
        <section id="intro" class="main">
            <div class="spotlight">
                <div class="content">
                    <header class="major">
                        <h2>About Me</h2>
                    </header>
                    <p>Welcome to my portfolio! I am a Software Developer passionate about Data Science and Engineering.</p>
                    <ul class="actions">
                        <li><a href="#projects" id="projects-btn" class="button">Explore My Work</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="experience" class="main special">
            <header class="major">
                <h2>Experience</h2>
            </header>
            <p>Details about my professional experience.</p>
        </section>
        <section id="skills" class="main special">
            <header class="major">
                <h2>Skills</h2>
            </header>
            <p>Programming languages, frameworks, and tools.</p>
        </section>
    `;
    document.getElementById("projects-btn").addEventListener("click", () => navigateTo("projects"));
}
