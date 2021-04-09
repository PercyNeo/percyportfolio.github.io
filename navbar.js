const navSlide = () =>{

 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.nav_links');
 const navLinks = document.querySelectorAll('.nav_links li')
//toggle
 burger.addEventListener('click',()=>{
  nav.classList.toggle('nav-active');

  //

  navLinks.forEach((link, index)=>{
   
   console.log(index/7);
   if(link.style.animation){
    link.style.animation = '';
   }else{
    link.style.animation = `navlinkFade 0.5s ease forwards ${index /7 + 0.3}s`;
   }
  });
  

   burger.classList.toggle('toggle');
 });
}

navSlide();