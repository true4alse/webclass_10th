$(document).ready(function(){
    let bt_next = $("#bt_next")
    let bt_prev = $("#bt_prev")
    let count = 0

    bt_next.click(function(){
        $(".train>li").removeClass("on")
        count++
        if(count>3){count=3}
        $(".train>li").eq(count).addClass("on")
    })

    bt_prev.click(function(){
        $(".train>li").removeClass("on")
        count--
        if(count<0){count=0}
        $(".train>li").eq(count).addClass("on")
    })
})