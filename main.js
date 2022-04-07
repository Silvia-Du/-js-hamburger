/* flusso di lavoro:
1. richiamare in js i tag html da modificare
2. aggiungere output con nuove classi all'evento click.
*/

const mainMenuIcon =document.querySelector('.header-right > a');
console.log(mainMenuIcon);

const hamburgerMenu =document.querySelector('div.hamburger-menu');
console.log(hamburgerMenu);

const hambMenuIcon =document.querySelector('.hamburger-menu > a');
console.log(hambMenuIcon);

mainMenuIcon.addEventListener('click', function(){
  hamburgerMenu.classList.add('active')
});

hambMenuIcon.addEventListener('click', function(){
  hamburgerMenu.classList.remove('active')
});
