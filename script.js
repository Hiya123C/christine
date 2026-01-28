const sections = document.querySelectorAll("section");
const navHearts = document.querySelectorAll(".nav-heart");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navHearts.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


// cursor trail
document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.classList.add('cursor-trail');
    document.body.appendChild(dot);

    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

    dot.style.opacity = 1;

    dot.addEventListener('animationend', () => {
        dot.remove();
    });
});

// light darkmode shit
let lightmode = localStorage.getItem('light-mode');
const themeSwitch = document.getElementById('theme-switch');
const covers = document.querySelectorAll(".song-cover");

const githubLogo = document.getElementById("github-logo");
const linkedinLogo = document.getElementById("linkedin-logo");

const sparkleStar = document.querySelector(".sparkle-text");

const updateCover = () => {
    covers.forEach(cover => {
        cover.src = document.body.classList.contains("light-mode") ? "logos/light-SL.jpeg" : "logos/dark-SL.jpg";
    })
}

const updateContactLogos = () => {
    githubLogo.src = document.body.classList.contains("light-mode") ? "logos/GitHub_Invertocat_Black.png" : "logos/GitHub_Invertocat_White.png";
    linkedinLogo.src = document.body.classList.contains("light-mode") ? "logos/InBug-Black.png" : "logos/InBug-White.png";
}

const enableLightmode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('light-mode', 'active')
    updateCover();
    updateContactLogos();
}

const disableLightmode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('light-mode', 'null');
    updateCover();
    updateContactLogos();
}

if (lightmode === "active") {
    enableLightmode();
} else {
    disableLightmode();
}

themeSwitch.addEventListener("click", () => {
    document.body.classList.contains("light-mode") ? disableLightmode() : enableLightmode();
});
