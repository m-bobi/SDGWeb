let header = document.querySelector('header');


window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    header.classList.toggle('shadow');

}

window.onscroll = () => {
    navbar.classList.remove('active');
}