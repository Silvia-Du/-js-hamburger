/* flusso di lavoro:
1. richiamare in js i tag html da modificare
2. impostare nuovi valori/ classi per i tag su cui voglio intervenire
3. aggiungere output all'evento click.
*/

const mainListMenu =document.querySelector('.header-right ul');

console.log( 'tag' + mainListMenu);

const hamburgerIcon =document.querySelector('.header-right > a');

console.log( 'tag' + hamburgerIcon);

const hamburgerMenu =document.querySelector('.hamburger-menu');

