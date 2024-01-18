// navbarfixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbar = document.querySelector('#nav-menu');
    const hamburger = document.querySelector('#hamburger');

    if (window.pageYOffset){
        header.classList.add('navbar-fixed');
        header.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        header.classList.add('hidden');
    };
    
    navbar.classList.add('hidden');
    hamburger.classList.remove('active');
};

// button hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');
hamburger.addEventListener('click' ,function(){
    hamburger.classList.toggle('active');
    nav.classList.toggle('hidden');

});