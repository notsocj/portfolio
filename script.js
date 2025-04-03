document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const content = document.getElementById("content");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        content.classList.toggle("mt-48"); 
    });
    
    const projectsContainer = document.getElementById("projects-container");
    
    if (projectsContainer) {
        projectsContainer.classList.add("stacked");
        
        projectsContainer.addEventListener("click", function() {
            if (projectsContainer.classList.contains("stacked")) {
                projectsContainer.classList.remove("stacked");
                projectsContainer.classList.add("scattered");
                
                const cards = document.querySelectorAll('.project-card');
                
                cards.forEach((card) => {
                    card.style.opacity = "0.9";
                    card.style.transform = "scale(0.95) translateY(-5px)";
                });
                
                setTimeout(() => {
                    cards.forEach((card, index) => {
                        card.style.opacity = "0";
                        card.style.transform = "scale(0.8) translateY(-30px)";
                        
                        const randomX = (Math.random() - 0.5) * 60; 
                        const randomDelay = Math.random() * 100;
                        const randomDuration = 0.7 + (Math.random() * 0.4); 
                        const randomEasing = index % 2 === 0 ? 
                            "cubic-bezier(0.175, 0.885, 0.32, 1.275)" : 
                            "cubic-bezier(0.34, 1.56, 0.64, 1)"; 
                        
                        setTimeout(() => {
                            card.style.transition = `all ${randomDuration}s ${randomEasing}`;
                            card.style.opacity = "1";
                            card.style.transform = `translateX(${randomX}px) translateY(0) rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`;
                            
                            setTimeout(() => {
                                card.style.transition = "all 0.5s ease";
                                card.style.transform = index % 2 === 0 ? "rotate(1deg)" : "rotate(-1deg)";
                                card.style.transformOrigin = "center";
                            }, randomDuration * 1000);
                        }, index * 250 + randomDelay);
                    });
                }, 150);
            }
        });
    }
});

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 0.5, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 20, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 1 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            if (link.getAttribute("href").startsWith("#")) return;

            e.preventDefault();
            document.body.classList.add("fade-out"); 

            setTimeout(() => {
                window.location.href = link.href;
            }, 400);
        });
    });
});

