let navbar=document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');

}




const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})
let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=() =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}
window.onscroll= () =>
{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
