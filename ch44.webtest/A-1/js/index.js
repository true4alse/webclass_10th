document.addEventListener("DOMContentLoaded",function(){

    // 팝업기능
    // popup클래스에 on클래스가 붙으면 보이는거
    // on클래스가 없으면 안보이는거
    let btn_popup = document.querySelector("#btn_popup")
    let popup = document.querySelector(".popup")

    //열기
    btn_popup.addEventListener("click",function(){
        popup.classList.add("on")
    })

    //닫기
    let btn_close = document.querySelector(".btn_close")
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    //슬라이드
    let count = 0
    let train = document.querySelector(".train")
    setInterval(function(){
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.333*count}%)`
    },2000)

    //탭메뉴
    let tabs = document.querySelectorAll(".tabs>a")
    let tabUls = document.querySelectorAll(".tabDesc>ul")

    for(let i=0 ; i<2 ; i++){
        tabs[i].addEventListener("click",function(){
            tabs[0].classList.remove("on")
            tabs[1].classList.remove("on")
            tabs[i].classList.add("on")
            tabUls[0].classList.remove("on")
            tabUls[1].classList.remove("on")
            tabUls[i].classList.add("on")
        })
    }


})