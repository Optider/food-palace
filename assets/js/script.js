let nav_toggler = document.querySelector('.navbar__toggle');

nav_toggler.addEventListener('click', function () {
    if (nav_toggler.classList.contains('toggled')) {
        nav_toggler.classList.remove('toggled');
        document.querySelector('.navbar__links').classList.remove('active');
        document.querySelector('.navbar__cta--get-started').classList.remove('active');
    }
    else {
        nav_toggler.classList.add('toggled');
        document.querySelector('.navbar__links').classList.add('active');
        document.querySelector('.navbar__cta--get-started').classList.add('active');
    }
})

document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});