document.addEventListener("DOMContentLoaded",function(){
    
    let btn_menu = document.querySelector(".btn_menu")
    let nav = document.querySelector("nav")
    let btn_menu_close = document.querySelector(".btn_menu_close")
    
    // 메뉴 열기 기능
    btn_menu.addEventListener("click",function(){
        nav.classList.add("on")    
    })

    // 메뉴 닫는 기능
    btn_menu_close.addEventListener("click",()=>{
        nav.classList.remove("on")
    })




})