document.addEventListener("DOMContentLoaded",function(){

    // 팝업
    let btn_popup = document.querySelector("#btn_popup")
    let popup = document.querySelector(".popup")
    let modal = document.querySelector(".modal")
    let btn_close = document.querySelector("#btn_close")

    // 팝업열기
    btn_popup.addEventListener("click",function(){
        modal.classList.add("on")
        popup.classList.add("on")
    })

    // 팝업닫기
    btn_close.addEventListener("click",function(){
        modal.classList.remove("on")
        popup.classList.remove("on")
    })

    // 슬라이드
    let count = 0
    let train = document.querySelector(".train")
    setInterval(function(){
        count++
        if(count>2){count=0} // 0,1,2,0,1,2,....
        train.style.transform = `translateX(${-33.333*count}%)`
    },2000)

})