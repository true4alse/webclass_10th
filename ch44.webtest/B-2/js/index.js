document.addEventListener("DOMContentLoaded",function(){

    let btn_popup = document.querySelector("#btn_popup")
    let modal = document.querySelector(".modal")
    let popup = document.querySelector(".popup")
    let btn_close = document.querySelector("#btn_close")

    btn_popup.addEventListener("click",function(){
        modal.classList.add("on")
        popup.classList.add("on")
    })

    btn_close.addEventListener("click",function(){
        modal.classList.remove("on")
        popup.classList.remove("on")
    })

    // 슬라이드
    let count = 0
    let train = document.querySelector(".train")
    setInterval(function(){
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.333*count}%)`
    },2000)    

})