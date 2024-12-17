document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        home: createHomePage(),
        about: createAboutPage(),
        interests: createInterestsPage(),
        projects: createProjectsPage(),
        resume: createResumePage(),
        contact: createContactPage()
    };

    const contentContainer = document.getElementById('content-container');
    const navLinks = document.querySelectorAll('.sidebar a');

    function loadPage(pageName) {
        // Remove active class from all pages
        Object.keys(pages).forEach(page => {
            const pageElement = document.getElementById(page);
            if (pageElement) pageElement.classList.remove('active');
        });

        // Create or show the requested page
        let pageElement = document.getElementById(pageName);
        if (!pageElement) {
            pageElement = document.createElement('div');
            pageElement.id = pageName;
            pageElement.classList.add('page');
            pageElement.innerHTML = pages[pageName];
            contentContainer.appendChild(pageElement);
        }
        pageElement.classList.add('active');

        // Add event listeners for dynamic interactions
        addPageInteractions(pageName);
    }

    function addPageInteractions(pageName) {
        if (pageName === 'home') {
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    loadPage(item.dataset.page);
                });
            });
        }

        if (pageName === 'contact') {
            const form = document.getElementById('contact-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            });
        }
    }

    // Initial page load (Home)
    loadPage('home');

    // Navigation event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.dataset.page;
            loadPage(pageName);
        });
    });
});

function createHomePage() {
    return `
        <div class="home-page">
            <h1>Welcome to My Portfolio</h1>
            <div class="nav-grid">
                <div class="nav-item" data-page="about">About Me</div>
                <div class="nav-item" data-page="interests">Interests</div>
                <div class="nav-item" data-page="projects">Projects</div>
                <div class="nav-item" data-page="resume">Resume</div>
                <div class="nav-item" data-page="contact">Contact</div>
            </div>
        </div>
    `;
}

function createAboutPage() {
    return `
        <div class="about-page">
            <div class="about-profile">
                <img src="/api/placeholder/400/400" alt="Your Profile Picture">
            </div>
            <div class="about-content">
                <h2>About Me</h2>
                <p>Hello! I'm [Your Name], a passionate [Your Profession/Field] with a strong interest in [Your Key Interests]. I specialize in [Your Skills/Expertise].</p>
                
                <h3>Education</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>Degree in [Your Field]</h4>
                        <p>[University Name] | [Graduation Year]</p>
                    </div>
                    <div class="timeline-item">
                        <h4>Additional Certifications</h4>
                        <p>[Certification Name] | [Issuing Organization]</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createInterestsPage() {
    return `
        <div class="interests-page">
            <h2>My Interests & Curiosity</h2>
            <div class="interests-grid">
                <div class="interest-card">
                    <h3>Technology</h3>
                    <p>Exploring emerging technologies like AI, Machine Learning, and Web Development.</p>
                </div>
                <div class="interest-card">
                    <h3>Reading</h3>
                    <p>Currently reading: [Book Title] by [Author]</p>
                </div>
                <div class="interest-card">
                    <h3>Podcasts</h3>
                    <p>Favorite podcast: [Podcast Name]</p>
                </div>
            </div>
        </div>
    `;
}

function createProjectsPage() {
    return `
        <div class="projects-page">
            <h2>My Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Project 1</h3>
                    <p>Brief description of the project and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
                <div class="project-card">
                    <h3>Project 2</h3>
                    <p>Brief description of the project and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
                <div class="project-card">
                    <h3>Project 3</h3>
                    <p>Brief description of the project and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
            </div>
        </div>
    `;
}

function createResumePage() {
    return `
        <div class="resume-page">
            <h2>My Resume</h2>
            <iframe src="/api/placeholder/800/1000" width="100%" height="600px" frameborder="0"></iframe>
            <div class="resume-actions">
                <a href="#" download class="btn">Download Resume</a>
            </div>
        </div>
    `;
}

function createContactPage() {
    return `
        <div class="contact-page">
            <h2>Contact Me</h2>
            <form id="contact-form" class="contact-form">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            <div class="social-links">
                <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="#" target="_blank"><i class="fab fa-github"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    `;
}