let lastScrollTop = 0;
const header = document.getElementById("header-js");
const threshold = 60;

window.addEventListener("scroll", (event) => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDifference = currentScroll - lastScrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
    } else if (currentScroll===0) {
        // Scrolling up
        header.style.transform = "translateY(0)";
    }
    
    lastScrollTop = currentScroll;
});