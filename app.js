document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".banner-content", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".about-item", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
    gsap.from(".course-item", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.2 });
    
    const scrollTopBtn = document.getElementById("scrollTop");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });
    
    scrollTopBtn.addEventListener("click", () => {
        gsap.to(window, { scrollTo: 0, duration: 1 });
    });
});