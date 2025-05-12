console.log(this)
document.addEventListener("DOMContentLoaded",function(){
    // body태그 끝까지 읽고 난 후 실행되는 공간
    console.log(this)

    let btnclose = document.querySelector("#btn_popup_close")
    btnclose.addEventListener("click",function(){
        document.querySelector(".popup").classList.add("hidden")
        this
    })

    let btncloseoneday = document.querySelector("#btn_popup_close_oneday")
    btncloseoneday.addEventListener("click",function(){
        // 하루동안 안보게 하는 기능
        document.querySelector(".popup").classList.add("hidden")
        this
    })


})

