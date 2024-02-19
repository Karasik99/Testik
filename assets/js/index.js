



const BURGER = document.querySelector('.header__burger')
const BODY = document.querySelector('.body')
const MENU = document.querySelector('.header__menu')
const BURGERSPAN= document.querySelector('.header__burger-span')


BURGER.addEventListener('click',((event)=>{
    if(event.target.closest('.header__burger') || event.target.closest('.header__burger-span')){
        BURGER.classList.toggle('active')
        BURGERSPAN.classList.toggle('activespan')
        MENU.classList.toggle('activemenu')
        BODY.classList.toggle('stopscroll')
    }
}))

BODY.addEventListener('click',(event)=>{
    if(event.target.closest('.header__link')){
        BODY.classList.remove('stopscroll')
        MENU.classList.remove('activemenu')
        BURGERSPAN.classList.remove('activespan')
        BURGER.classList.remove('active')
    }
})