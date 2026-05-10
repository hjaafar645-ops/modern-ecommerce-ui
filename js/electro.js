/* offCanvas*/
document.querySelectorAll('.offcanvas a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = link.getAttribute('href');
        const offcanvasEl = document.querySelector('.offcanvas.show');

        if (offcanvasEl) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
            bsOffcanvas.hide();

            offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
                document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
            }, { once: true });
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    speed: 11000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
 
/* Swiper 2 - Laptops */
 
var swiper2 = new Swiper(".mySwiper2", {
    speed: 13000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
 
/*Swiper 3 - Another Products  */
 
var swiper3 = new Swiper(".mySwiper3", {
    speed: 8000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
/* offerCard */
const cards = document.querySelectorAll('.offer-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});
cards.forEach(card => observer.observe(card));


/* About */
const aboutContent = document.querySelector('.about-content');
const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutContent.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

observers.observe(aboutContent);

/* About-content-img */
const aboutContents = document.querySelector('.about-content');

const observerContent = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutContent.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

observerContent.observe(aboutContent);

const images = document.querySelectorAll('.about-section-left img');

const observerImages = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(images).indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 300);
        }
    });
}, { threshold: 0.3 });

images.forEach(img => observerImages.observe(img));