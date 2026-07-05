function addProjectCard(title, desc, link, techStack) {
        const projectGrid = document.getElementById('dynamic-project-grid');
        const tagHTML = techStack.map(tech => {
            const lowTech = tech.toLowerCase();
            const classHook = ['html', 'css', 'javascript', 'react'].includes(lowTech) ? lowTech : 'general';
            return `<span class="tag tag-${classHook}">${tech}</span>`;
        }).join(' ');

        const cardHTML = `
            <div class="project-card">
                <div>
                    <div class="item-title">${title}</div>
                    <div class="tags">${tagHTML}</div>
                    <p style="font-size: 0.9rem;">${desc}</p>
                </div>
                <div class="proj-links-container">
                    <button class="nav-btn-link" onclick="window.open('${link}', '_blank')">
                        GitHub Code 🛠️
                    </button>
                </div>
            </div>
        `;
        
        projectGrid.innerHTML += cardHTML;
    }

    window.onload = function() {
        
        // Card 1
        addProjectCard(
            "Netflix Clone", 
            "A pixel-perfect UI replica of the Netflix landing page, focusing on responsive layout dynamics and modern styling hooks.", 
            "https://github.com/Ekamnoor-Kaur/Frontend-Projects/tree/main/netflix%20clone%202",
            ["HTML", "CSS"]
        );

        // Card 2
        addProjectCard(
            "Language Translator", 
            "A client-side utility that translates text dynamically in the browser utilizing asynchronous Fetch APIs directly from the browser window.", 
            "https://github.com/Ekamnoor-Kaur/client-side-apps/tree/main/Sentence%20Translator",
            ["JavaScript","API Integration"]
        );

        // Card 3
        addProjectCard(
            "Login System (Local Storage)", 
            "A fully client-side authentication engine that securely stores, validates, and manages user state using Web Storage APIs.", 
            "https://github.com/Ekamnoor-Kaur/client-side-apps/tree/main/Login%20System",
            ["JavaScript","Local Storage"]
        );

        // Card 4
        addProjectCard(
            "Notes App", 
            "A component-based note management canvas utilizing React hooks to capture, save, update, and manage persistent text nodes smoothly.", 
            "https://github.com/Ekamnoor-Kaur/react-notes-app.git",
            ["React", "JavaScript"]
        );
    };