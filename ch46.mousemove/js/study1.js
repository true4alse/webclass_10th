document.addEventListener("DOMContentLoaded",()=>{
    // e , event 이벤트 객체 => 홈페이지에서 사용자의 모든 행동 정보가 저장되어있는 변수
    // let coords = document.querySelector(".coords")
    let mouseCursor = document.querySelector(".mouseCursor")

    let mouseState = false

    document.addEventListener("mousemove",function(e){
        if(mouseState == false){
            mouseCursor.style.display = "block"
            mouseState = true
        }
        // console.log(e.clientX,e.clientY)
        // coords.innerHTML = `x좌표 : ${e.clientX}px / y좌표 : ${e.clientY}px`
        mouseCursor.style.left = (e.clientX)+"px"
        mouseCursor.style.top = (e.clientY)+"px"
    })

    document.addEventListener("mousedown",function(){
        mouseCursor.innerHTML = `<img src="./img/clicked.png" alt="클릭시 이미지 커서">`
        mouseCursor.classList.add("on")
    })

    document.addEventListener("mouseup",function(){
        mouseCursor.innerHTML = `<img src="./img/default.png" alt="기본 이미지 커서">`
        mouseCursor.classList.remove("on")
    })
    
    let mouseCursorTxt = document.querySelector(".mouseCursorTxt")
    document.addEventListener("mousemove",function(e){
        mouseCursorTxt.style.left = (e.clientX + 120)+"px"
        mouseCursorTxt.style.top = e.clientY+"px"
    })

    const tooltip = document.querySelectorAll(".tooltip")
    tooltip.forEach(tag=>{
        // 마우스 올렸을 때
        tag.addEventListener("mouseenter",function(){
            mouseCursorTxt.innerHTML = tag.getAttribute("data-tooltip")
            mouseCursorTxt.style.display = "block"
            // mouseCursor.classList.add("on")
            mouseCursor.innerHTML = `<img src="./img/clicked.png" alt="클릭시 이미지 커서">`
        })

        // 마우스를 뺐을 때
        tag.addEventListener("mouseleave",function(){
            mouseCursorTxt.style.display = "none"
            // mouseCursor.classList.remove("on")
            mouseCursor.innerHTML = `<img src="./img/default.png" alt="기본 이미지 커서">`
        })
    })

})