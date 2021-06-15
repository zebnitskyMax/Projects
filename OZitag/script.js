
    const burger = document.querySelector('.burger-menu');
    const wrapperMenu = document.querySelector('.header-wrapper');
    const wrapper = document.querySelector('.wrapper')

    burger.addEventListener('click',()=>{
        burger.classList.toggle('change')
    })

window.addEventListener('resize', (e)=>{
    windowSize(e.target.innerWidth)
})

function windowSize(width){
    if(width < 780){
        wrapperMenu.classList.add('mobile');
    }else{
        wrapperMenu.classList.remove('mobile');
    }
}
windowSize(window.innerWidth);

burger.addEventListener('click', (e)=>{
    wrapperMenu.classList.toggle('menu-open')
})


wrapper.addEventListener('click', (e)=>{
    if(e.target.classList.contains('open-close')){
        e.target.parentElement.classList.toggle('open-submenu')
    }
       
})