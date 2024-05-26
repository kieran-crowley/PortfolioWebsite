let elements = [
    'bottom__icon', 
    'middle__icon', 
    'navigation__link', 
    'contact',
    'middle__submit',
    // 'navigation__item'
];

let courasel = document.querySelectorAll('.middle-courasel');
console.log(courasel)

document.onpointerover = (e) => {
    elements.forEach(item => {
        if(e.target.classList.contains(item)) {
            scale(e, item);
        }
    })
}

courasel.forEach(item => item.onclick = () => console.log('clicked'))







function scale(e, element) {
    e.target.classList.add(element + '--selected')

    e.target.onpointerout = () => {
        if(e.target.classList)
        e.target.classList.remove(element + '--selected')
    }
}
