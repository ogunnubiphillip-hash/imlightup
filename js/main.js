/* =========================================================
   I'M LIGHT UP — GLOBAL JAVASCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {


    /* =====================================================
       1. SCROLL REVEAL SYSTEM
       ===================================================== */

    const scrollElements = document.querySelectorAll('.scroll-reveal');

    if (scrollElements.length > 0) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add('is-visible');

                        // Reveal only once.
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            }
        );


        scrollElements.forEach((element) => {
            revealObserver.observe(element);
        });

    }


    /* =====================================================
       2. PHRASE SWITCH
       ===================================================== */

    const phrase = document.querySelector('.phrase-switch');

    if (phrase) {

        const phrases = [
            'how they feel.',
            'how they look.'
        ];

        let currentIndex = 0;

        setInterval(() => {

            currentIndex =
                (currentIndex + 1) % phrases.length;

            phrase.classList.add('phrase-changing');

            setTimeout(() => {

                phrase.textContent =
                    phrases[currentIndex];

                phrase.classList.remove('phrase-changing');

            }, 350);

        }, 4000);

    }

});


// =========================================================
// MOBILE NAVIGATION
// =========================================================

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {

    mobileMenuButton.addEventListener('click', () => {

        const isOpen = !mobileMenu.classList.contains('hidden');

        mobileMenu.classList.toggle('hidden');

        mobileMenuButton.setAttribute(
            'aria-expanded',
            String(!isOpen)
        );

        mobileMenuButton.setAttribute(
            'aria-label',
            isOpen ? 'Open navigation menu' : 'Close navigation menu'
        );

    });


    // Close menu after clicking a navigation link
    const mobileLinks = mobileMenu.querySelectorAll('a');

    mobileLinks.forEach((link) => {

        link.addEventListener('click', () => {

            mobileMenu.classList.add('hidden');

            mobileMenuButton.setAttribute(
                'aria-expanded',
                'false'
            );

            mobileMenuButton.setAttribute(
                'aria-label',
                'Open navigation menu'
            );

        });

    });

}


