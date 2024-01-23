window.onscroll = function(){
    scrollTo('#home');
};

// navbarfixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbar = document.querySelector('#nav-menu');
    const hamburger = document.querySelector('#hamburger');
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset){
        header.classList.add('navbar-fixed');
        header.classList.remove('hidden');
        toTop.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        header.classList.add('hidden');
        toTop.classList.add('hidden');
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

// klik  dimanapun
window.addEventListener('click', function(a){
    if(a.target !=hamburger && a.target !=nav){
        hamburger.classList.remove('active');
        nav.classList.add('hidden');
    }
});

// darkMode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// perpindahan tombol
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    } else {
    darkToggle.checked = false;
    }