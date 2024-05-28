let elements = [
    'bottom__icon', 
    'middle__icon', 
    'navigation__link', 
    'contact',
    'middle__submit',
];

let courasel = document.querySelector('.middle__courasel');
let button = document.querySelectorAll('.middle__button')
let thumb = document.querySelector('.middle__thumb');
let slider = document.querySelector('.middle__scroll-bar');
let couraselViewWindow = courasel.offsetWidth/3;
let couraselWidth = courasel.scrollWidth
let scrollingRatio = courasel.offsetWidth / slider.offsetWidth;
let thumbRatio = slider.offsetWidth / courasel.offsetWidth
let thumbPosition;

window.onresize = () => {
    couraselViewWindow = courasel.offsetWidth/3;
    couraselWidth = courasel.scrollWidth
    scrollingRatio = courasel.offsetWidth / slider.offsetWidth;
    thumbRatio = slider.offsetWidth / courasel.offsetWidth
}

document.onpointerover = (e) => {
    elements.forEach(item => {
        if(e.target.classList.contains(item)) {
            scale(e, item);
        }
    })
};

button.forEach(item => {
    item.onclick = () => {
        scrollCarasel(item);
    }
});

slider.onpointerdown = (e) => {
    thumbPosition = e.clientX - slider.offsetLeft - (thumb.offsetWidth/2);
    moveThumb(thumbPosition)
    moveCarasel(thumbPosition * scrollingRatio)
 }

 courasel.onscroll = () => {
    moveThumb(courasel.scrollLeft * thumbRatio)
 }

function moveCarasel(amount) {
    courasel.scrollLeft = amount;
}

function moveThumb(amount) {
    thumb.style.left = amount + "px"
}

function scrollCarasel(element) {
    if(element.id === 'left') {
        courasel.scrollLeft += couraselViewWindow;
    } else if (element.id === 'right') {
        courasel.scrollLeft -= couraselViewWindow;
    }
}

function scale(e, element) {
    e.target.classList.add(element + '--selected')

    e.target.onpointerout = () => {
        if(e.target.classList)
        e.target.classList.remove(element + '--selected')
    }
}
