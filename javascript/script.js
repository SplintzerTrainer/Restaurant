let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}


// document.addEventListener('DOMContentLoaded', () => {
//     let menu = document.querySelector('#menu-icon');
//     let navlist = document.querySelector('.navlist');

//     if (menu && navlist) { // Check if both elements exist
//         menu.onclick = () => {
//             menu.classList.toggle('bx-x');
//             navlist.classList.toggle('open');
//         };

//         window.onscroll = () => {
//             menu.classList.remove('bx-x');
//             navlist.classList.remove('open');
//         };
//     }
// });
