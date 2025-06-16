document.addEventListener("DOMContentLoaded",function(){

    // 탭메뉴
    let tabs_array = document.querySelectorAll(".tabs a") // [{a},{a}]
    let tabs_ul_array = document.querySelectorAll(".tab_desc > ul") // [{ul},{ul}]

    tabs_array.forEach(function(tab,index){
        tab.addEventListener("click",function(e){
            e.preventDefault()
            tabs_array.forEach(function(tab){
                tab.classList.remove("on")
            })
            tab.classList.add("on")
            tabs_ul_array.forEach(function(ul){
                ul.classList.remove("on")
            })
            tabs_ul_array[index].classList.add("on")
        })
    })

    // 팝업
    let btn_popup = document.querySelector("#btn_popup") // {#btn_popup}
    let popup = document.querySelector(".popup")
    let btn_close = document.querySelector("#btn_close")

    btn_popup.addEventListener("click",function(e){
        e.preventDefault()
        popup.classList.add("on")
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    // 슬라이드
    let count = 0
    let slides_array = document.querySelectorAll(".train>li") // [{li},{li},{li}]

    setInterval(function(){
        slides_array.forEach(function(each_slide){
            each_slide.classList.remove("on")
        })
        count++
        if(count>2){count=0}
        slides_array[count].classList.add("on")
    },2000)


})