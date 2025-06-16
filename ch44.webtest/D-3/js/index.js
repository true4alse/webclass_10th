document.addEventListener("DOMContentLoaded",function(){

    // 탭메뉴
    let tabs_array = document.querySelectorAll(".tabs>a")
    let tab_ul_array = document.querySelectorAll(".tab_desc>ul")

    tabs_array.forEach(function(tab,tabidx){
        tab.addEventListener("click",function(){
            tabs_array[0].classList.remove("on")
            tabs_array[1].classList.remove("on")
            tab.classList.add("on")
            tab_ul_array[0].classList.remove("on")
            tab_ul_array[1].classList.remove("on")
            tab_ul_array[tabidx].classList.add("on")
        })
    })

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
    let slides = document.querySelectorAll(".train>li")
    setInterval(function(){
        count++
        if(count>2){count=0}
        slides.forEach(list=>{list.classList.remove("on")})
        slides[count].classList.add("on")
    },2000)



})