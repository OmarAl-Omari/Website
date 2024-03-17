let lastScrollTop = 0;
const header = document.getElementById("header-js");

window.addEventListener("scroll", (event) => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll===0) {

        header.style.transform = "translateY(0)";
    }
    if (currentScroll > lastScrollTop){
        header.style.transform = "translateY(-100%)";
    }
    
    lastScrollTop = currentScroll;
});