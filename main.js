let icon = document.querySelectorAll('.bottom__icon');


icon.onclick = (e => {
    let element = e.target.className;
    e.target.classList.add(element += '--selected');
})

console.log(icon)

// fix tomorrow/ 