/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleid),
        nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')

        })

    }     
}

showMenu('nav-toggle','nav-menu')
/*===== REMOVE MENU MOBILE =====*/
const navlink = document.querySelectorAll('.nav__link')

function linkaction(){
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click, linkAction'))