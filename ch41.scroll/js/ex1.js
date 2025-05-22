document.addEventListener("DOMContentLoaded",function(){

    let documentHeight = document.documentElement.scrollHeight
    let prval = document.querySelector("#prval")
    let prog = document.querySelector(".prog")

    // 전체문서의 길이
    window.innerHeight // 뷰포트 높이의 현재 픽셀값
    console.log(documentHeight)
    window.addEventListener("scroll",function(){
        let distance = window.scrollY
        let per = ((distance / (documentHeight-window.innerHeight))*100).toFixed(2)
        prval.innerHTML = per
        prog.style.width = `${per}%`

    })

    // 탑버튼
    let btnTop = document.querySelector("#btnTop")
    btnTop.addEventListener("click",function(){
        window.scrollTo({top:0,behavior:"smooth"})
    })

    // ui숨겨놓고 나오게 하는 기능
    let lastScrollTop = 0
    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop < lastScrollTop) {
            // 마우스 휠을 위로 굴릴 때 할 일
            btnTop.classList.add("on")
        } else {
            // 마우스 휠을 아래로 굴릴 때 할 일    
            btnTop.classList.remove("on")
        }
    
        lastScrollTop = scrollTop;
    })


})