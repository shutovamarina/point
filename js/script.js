'use strict';

window.addEventListener('DOMContentLoaded', () => {
    fix100vh();
    findHeight();
    animation();
    window.addEventListener('resize', () => {
        fix100vh();
        findHeight();
    })
})

let promo = document.querySelector('.promo');


function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function findHeight() {
    let fullHeight = document.documentElement.clientHeight,
        fullWidth = document.documentElement.clientWidth;
    if (fullWidth > 768 && fullWidth <= 1024) {
        if (fullHeight < 730) {
            promo.classList.add('no-full');
        } else {
            if (promo.classList.contains('no-full')) {
                promo.classList.remove('no-full');
            }
        }
    } else if (fullWidth > 576 && fullWidth <= 768) {
        if (fullHeight < 700) {
            promo.classList.add('no-full');
        } else {
            if (promo.classList.contains('no-full')) {
                promo.classList.remove('no-full');
            }
        }
    } else if (fullWidth <= 576) {
        if (fullHeight < 700) {
            promo.classList.add('no-full');
        } else {
            if (promo.classList.contains('no-full')) {
                promo.classList.remove('no-full');
            }
        }
    }
}

function animation() {
    //метод .to от верстви к другой точке
    /*   gsap.to('.promo__text', {
          duration: 1,
          x: -150,
          opacity: 0.5,
          xpersent: -50,
          color: 'red'

      }) */
    //метод .from от другой точки к верстке
    /*  gsap.from('.promo__text', {
         duration: 3,
         opacity: 0.5,
         xpersent: -50,
         color: 'blue'
     }) */
    //метод .fromTo от одной точки к другой, минуя нашу верстку
    /*  gsap.fromTo('.promo__text', { x: -200, }, { duration: 1, x: 200 })

     gsap.to('.promo__text', {
         duration: 2,
         xpersent: -50,
     })
     gsap.to('.promo__text', {
         duration: 1,
         scale: 0.5,
         delay: 1,
     }) */

    const tlPromo = gsap.timeline({})
    tlPromo.to('.promo__text', {
            duration: 1,
            xPercent: -50
        })
        .to('.promo__text', {
            duration: 1,
            rotation: 360
        }, '-=1') //выполнить 2функцию за 1сек до завершения 1//
}