document.addEventListener("DOMContentLoaded",function(){

    let btn_popup = document.querySelector("#btn_popup")
    let popup = document.querySelector(".popup")
    let modal = document.querySelector(".modal")
    let btn_close = document.querySelector("#btn_close")

    btn_popup.addEventListener("click",function(){
        // 팝업나와야됨
        popup.classList.add("on")
        modal.classList.add("on")
    })

    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
        modal.classList.remove("on")
    })

    //슬라이드
    let count = 0
    let train = document.querySelector(".train")
    setInterval(function(){
        count++
        if(count>2){count=0}
        train.style.transform = `translateX(${-33.333*count}%)`
    },2000)


})