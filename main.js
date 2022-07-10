const hamburgerMenu =document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navlinks = document.querySelectorAll('#nav-content nav ul li a');

hamburgerMenu.addEventListener('click', ()=>{
    navContent.classList.add('show');
    document.body.style.overflow= "hidden";
});

closeNavButton.addEventListener('click', ()=>{
    navContent.classList.remove('show');
    document.body.style.overflow= "auto";
});


navlinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        navContent.classList.remove('show');
        document.body.style.overflow= "auto";
    });
});
