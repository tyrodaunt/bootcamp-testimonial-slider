const slide = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const nextSlide = () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');

    if(active.nextElementSibling) {
        active.nextElementSibling.classList.add('active');
    } else {
        slide[0].classList.add('active');
    }
}

const prevSlide = () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');

    if(active.previousElementSibling) {
        active.previousElementSibling.classList.add('active');
    } else {
        slide[slide.length -1].classList.add('active');
    }
}

next.addEventListener ('click', e=> {
    nextSlide()
});

prev.addEventListener ('click', e=> {
    prevSlide()
});
