document.addEventListener("DOMContentLoaded",()=>{

    // 자동슬라이드 기능 -> 나 대신 컴퓨터가 다음버튼을 클릭을 해주는거다.
    let count = 0
    let timer = setInterval(function(){
        count++
        if(count>3){count=0}
        document.querySelector(".train").style.transform = `translateX(${-1000*count}px)`
    },3000)

    document.querySelector(".station").addEventListener("mouseover",function(){
        clearInterval(timer)
    })

    document.querySelector(".station").addEventListener("mouseout",function(){
        timer = setInterval(function(){
            count++
            if(count>3){count=0}
            document.querySelector(".train").style.transform = `translateX(${-1000*count}px)`
        },3000)
    })


    


   
})