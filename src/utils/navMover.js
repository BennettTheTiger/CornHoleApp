import anime from 'animejs/lib/anime.es.js';


export function hideNav(){
    anime({
        targets: '.menu-link',
        opacity: 0,
        delay: anime.stagger(100),
        duration: 50,
        easing: 'easeInOutQuart',
      })

    anime({
        targets: '.nav',
        left: '-100vw',
        delay: 400,
        duration: 1000,
        easing: 'easeInOutQuart'
    });  
}

export function showName(){
    anime({
        targets: '.menu-link',
        opacity: 1,
        delay: anime.stagger(100),
        duration: 50,
        easing: 'easeInOutQuart',
      })

    anime({
        targets: '.nav',
        left: '0vw',
        delay: 400,
        duration: 1000,
        easing: 'easeInOutQuart'
    }); 
}