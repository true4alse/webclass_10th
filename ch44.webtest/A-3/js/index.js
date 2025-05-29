document.addEventListener("DOMContentLoaded",function(){

    // 팝업
    let btn_popup = document.querySelector("#btn_popup")
    let popup = document.querySelector(".popup")
    let btn_close = document.querySelector("#btn_close")

    btn_popup.addEventListener("click",function(){
        popup.classList.add("on")
    })

    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    // 슬라이드
    let count = 0
    let slide = document.querySelectorAll(".train>li")
    setInterval(function(){
        // 세개의 리스트에 on클래스를 일단 다빼고 count번째 리스트에만 on클래스를 넣어준다.
        count++
        if(count>2){
            count=0
        }
        slide[0].classList.remove("on")
        slide[1].classList.remove("on")
        slide[2].classList.remove("on")
        slide[count].classList.add("on")
    },2000)

    let tab_array = document.querySelectorAll(".tabs>a")
    let tab_ul = document.querySelectorAll(".tab_desc>ul")
    for(let i=0 ; i<2 ; i++){
        tab_array[i].addEventListener("click",function(){
            tab_array[0].classList.remove("on")
            tab_array[1].classList.remove("on")
            tab_array[i].classList.add("on")

            tab_ul[0].classList.remove("on")
            tab_ul[1].classList.remove("on")
            tab_ul[i].classList.add("on")
        })
    }


})