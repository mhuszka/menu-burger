var iconeBurger = document.querySelector('.icone-burger');
var liste = document.querySelectorAll('.navlist');
var menuBurger = document.querySelector('nav');

iconeBurger.addEventListener('click', showList);

for (i=0; i<liste.length; i++) {
    liste[i].addEventListener('click', showList);
}

function showList() {
    for (i=0; i<liste.length; i++){
        liste[i].classList.toggle('list-burger');
    }
    iconeBurger.classList.toggle('cross');
    menuBurger.classList.toggle('menu-burger');
}