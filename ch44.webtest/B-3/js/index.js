document.addEventListener("DOMContentLoaded",function(){

    // 슬라이드
    let count = 0
    let train = document.querySelector(".train")
    setInterval(function(){
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.333*count}%)`
    },2000)

    let btn_popup = document.querySelector("#btn_popup")
    let popup = document.querySelector(".popup")
    let btn_close = document.querySelector("#btn_close")

    btn_popup.addEventListener("click",function(){
        popup.classList.add("on")
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

})