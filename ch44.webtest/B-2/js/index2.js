$(document).ready(function(){

    let btn_popup = $("#btn_popup")
    let modal = $(".modal")
    let popup = $(".popup")
    let btn_close = $("#btn_close")

    btn_popup.click(function(){
        modal.addClass("on")
        popup.addClass("on")
    })

    btn_close.click(function(){
        modal.removeClass("on")
        popup.removeClass("on")
    })

    let count = 0
    let train = $(".train")
    setInterval(function(){
        count++
        if(count>2){count=0}
        train.css("transform",`translateY(${-33.333*count}%)`)
    },2000)    

})