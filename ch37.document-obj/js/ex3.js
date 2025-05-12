document.addEventListener("DOMContentLoaded",function(){

    let btn_menu = document.querySelector(".btn_menu")
    let nav = document.querySelector("nav")

    let menuState = false

    btn_menu.addEventListener("click",function(){
        // 클릭했을 때 실행 되는 코드
        // 메뉴창이 닫혀있는 상태라면? -> 열어
        // 메뉴창이 열려있는 상태라면? -> 닫어
        if(!menuState){
            // 닫혀있는 상태
            nav.classList.add("on")
            btn_menu.classList.add("close")
            menuState = true
        }else{
            // 열려있는 상태
            nav.classList.remove("on")
            btn_menu.classList.remove("close")
            menuState = false
        }
    })
    
})