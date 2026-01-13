gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 1. Initial Hero Animations
const tl = gsap.timeline();

tl.from(".logo", { y: -50, opacity: 0, duration: 1 })
    .from("ul li", { y: -50, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.5")
    .from(".animate-text", {
        x: -100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power4.out"
    })
    .to(".ball", {
        x: -1200,
        rotation: 360,
        duration: 2,
        ease: "power2.inOut"
    }, "-=1");

// 2. Smooth Scroll for Nav Links
document.querySelectorAll('nav ul li a, .cta').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith("#") && targetId.length > 1) {
            e.preventDefault();
            gsap.to(window, {
                duration: 1,
                scrollTo: targetId,
                ease: "power2.inOut"
            });
        }
    });
});

// 3. Scroll Animation for the Info Section
gsap.to(".animate-on-scroll", {
    scrollTrigger: {
        trigger: ".info-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out"
});

// 4. Counter Animation for Stats
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: updateCount,
        once: true // Ensures it only counts up once
    });
});

// 5. About Section Animations
gsap.from(".about-image", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".about-text > *", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// 6. Player Cards Animation
gsap.from(".player-card", {
    scrollTrigger: {
        trigger: ".player-grid",
        start: "top 75%",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.3,
    ease: "back.out(1.7)"
});

// Floating Badge
gsap.to(".experience-badge", {
    y: 15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});