import anime from 'animejs/lib/anime.es.js';

export function hideNav(){
    const animation = anime.timeline({
        easing: 'easeInOutQuart',
        duration: 1250,
    });
    // fade out options
    animation.add({
        targets: '.menu-link',
        opacity: 0,
        delay: anime.stagger(100),
        duration: 50,
    })
    // move nav
    animation.add({
        targets: '.nav',
        left: '-100vw',
        duration: 1000,
    })
}

export function showNav(){
    const animation = anime.timeline({
        easing: 'easeInOutQuart',
        duration: 1050,
    });
    // move nav
    animation.add({
        targets: '.nav',
        left: '0vw',
        duration: 1000,
    })
    // fade out options
    animation.add({
        targets: '.menu-link',
        opacity: 1,
        delay: anime.stagger(100),
        duration: 50,
        easing: 'easeInQuart'
    })

    animation.play()
}