document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const content = document.getElementById("content");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        content.classList.toggle("mt-48"); // Pushes content down
    });
    
    // Projects stack/scatter functionality
    const projectsContainer = document.getElementById("projects-container");
    
    if (projectsContainer) {
        // Start in stacked mode
        projectsContainer.classList.add("stacked");
        
        // Allow clicking on the stacked cards to scatter them
        projectsContainer.addEventListener("click", function() {
            if (projectsContainer.classList.contains("stacked")) {
                // Scatter the cards when clicked
                projectsContainer.classList.remove("stacked");
                projectsContainer.classList.add("scattered");
                
                // Enhanced animation for scattering cards
                const cards = document.querySelectorAll('.project-card');
                
                // Add a small "shuffle" animation before scattering
                cards.forEach((card) => {
                    card.style.opacity = "0.9";
                    card.style.transform = "scale(0.95) translateY(-5px)";
                });
                
                // Delay the scatter animation slightly for better visual effect
                setTimeout(() => {
                    cards.forEach((card, index) => {
                        // Set initial state for the scatter animation
                        card.style.opacity = "0";
                        card.style.transform = "scale(0.8) translateY(-30px)";
                        
                        // Create more varied animations for each card
                        const randomX = (Math.random() - 0.5) * 60; // More horizontal variation
                        const randomDelay = Math.random() * 100; // Random delay for more natural movement
                        const randomDuration = 0.7 + (Math.random() * 0.4); // Random animation duration
                        const randomEasing = index % 2 === 0 ? 
                            "cubic-bezier(0.175, 0.885, 0.32, 1.275)" : // Bounce effect
                            "cubic-bezier(0.34, 1.56, 0.64, 1)"; // Different bounce effect
                        
                        // Staggered animations with different timing for each card
                        setTimeout(() => {
                            // Animate to final position with custom effect for each card
                            card.style.transition = `all ${randomDuration}s ${randomEasing}`;
                            card.style.opacity = "1";
                            card.style.transform = `translateX(${randomX}px) translateY(0) rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`;
                            
                            // Reset to normal transition after the scatter animation completes
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

// Initialize particles.js
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
            anim: { enable: false, speed: 0.5, opacity_min: 0.1, sync: false } // Reduced speed
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 20, size_min: 0.1, sync: false } // Reduced speed
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
            speed: 2, // Reduced from 6 to 2 for slower movement
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
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 1 }, // Slower bubbles
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

// Stats.js for Performance Monitoring
var count_particles, stats, update;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);

count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            if (link.getAttribute("href").startsWith("#")) return; // Ignore internal page anchors

            e.preventDefault(); // Prevent immediate navigation
            document.body.classList.add("fade-out"); 

            setTimeout(() => {
                window.location.href = link.href; // Navigate after fade-out animation
            }, 400); // Match fade-out duration
        });
    });
});

