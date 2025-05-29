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

    // 탭메뉴
    let tabs = document.querySelectorAll(".tabs>a")
    let tabul = document.querySelectorAll(".tabDesc>ul")

    tabs.forEach((tab,tabidx)=>{
        tab.addEventListener("click",function(){
            tabs[0].classList.remove("on")
            tabs[1].classList.remove("on")
            tab.classList.add("on")
            tabul[0].classList.remove("on")
            tabul[1].classList.remove("on")
            tabul[tabidx].classList.add("on")
        })
    })

    // for(let i=0 ; i<2 ; i++){
    //     tabs[i].addEventListener("click",function(){
    //         tabs[0].classList.remove("on")
    //         tabs[1].classList.remove("on")
    //         tabs[i].classList.add("on")
    
    //         tabul[0].classList.remove("on")
    //         tabul[1].classList.remove("on")
    //         tabul[i].classList.add("on")
    //     })
    // }



    // ["혜수","재석","혜진","보람","은수"].forEach(function(각원소,원소순번){
    //     // 각 원소한테 할 일... 원소 가리키는 뭔가 단어가?
    //     console.log(각원소,원소순번)
    // })
    
    // 슬라이드
    // 1. 슬라이드리스트에게 있는 on클래스를 다 지움
    // 2. 순번에 맞는 리스트 한테 on클래스를 넣는다.

    // 3개의 슬라이드리스트에 on클래스 지우고 첫번째 슬라이드리스트에만 on클래스를 넣는다.
    // 2초 뒤 
    // 3개의 슬라이드리스트에 on클래스 지우고 두번째 슬라이드리스트에만 on클래스를 넣는다.
    // 2초 뒤
    // 3개의 슬라이드리스트에 on클래스 지우고 세번째 슬라이드리스트에만 on클래스를 넣는다.
    // 2초 뒤
    // 3개의 슬라이드리스트에 on클래스 지우고 첫번째 슬라이드리스트에만 on클래스를 넣는다.
    // ...
    let slides = document.querySelectorAll(".train>li")
    
    let count = 0
    setInterval(function(){
        // slides[0].classList.remove("on")
        // slides[1].classList.remove("on")
        // slides[2].classList.remove("on")
        slides.forEach(function(slide){
            slide.classList.remove("on")
        })
        count++
        if(count>2){count=0}
        slides[count].classList.add("on")
    },2000)




})