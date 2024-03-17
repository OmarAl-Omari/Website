let lastScrollTop = 0;
let header = document.querySelector('.header-grid');


window.addEventListener("scroll", (event) => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    console.log(document.documentElement.scrollTop );
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        console.log("Scrolling down");
        
    } else {
        // Scrolling up
        console.log("Scrolling up");
    }
    
    lastScrollTop = currentScroll;
});