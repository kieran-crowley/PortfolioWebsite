let elements = [
    'bottom__icon', 
    'middle__icon', 
    'navigation__link', 
    'contact',
    'middle__submit',
    // 'navigation__item'
];

document.onpointerover = (e) => {
    elements.forEach(item => {
        if(e.target.classList.contains(item)) {
            addEventListers(e, item);
        }
    })
}

function addEventListers(e, element) {
    e.target.classList.add(element + '--selected')

    e.target.onpointerout = () => {
        if(e.target.classList)
        e.target.classList.remove(element + '--selected')
    }
    
}