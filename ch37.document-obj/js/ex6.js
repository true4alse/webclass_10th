document.addEventListener("DOMContentLoaded",function(){

    // 다음 버튼을 클릭 했을 때
    let btn_next = document.querySelector(".btn_next")
    let btn_prev = document.querySelector(".btn_prev")
    let train = document.querySelector(".train")
    let count = 0
    let slides = train.children.length
    train.style.height = `${100*slides}%`

    btn_next.addEventListener("click",function(){
        // 기차가 왼쪽으로 1000픽셀만큼 이동하는 소스코드
        count++
        if(count>slides-1){count = slides-1}
        train.style.transform = `translateY(${count*-(100/slides)}%)`
    })

    btn_prev.addEventListener("click",function(){
        count--
        if(count<0){count = 0}
        train.style.transform = `translateY(${count*-(100/slides)}%)`
    })


})