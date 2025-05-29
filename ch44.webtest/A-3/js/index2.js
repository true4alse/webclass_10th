$(document).ready(function(){

    $("#btn_popup").click(function(){
        $(".popup").addClass("on")
    })
    $("#btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    let count = 0
    setInterval(function(){
        count++
        if(count>2){
            count=0
        }
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2000)

    $(".tabs>a").click(function(){
        $(".tabs>a").removeClass("on")
        $(this).addClass("on")
        $(".tab_desc>ul").removeClass("on")
        let idx = $(this).index()
        $(".tab_desc>ul").eq(idx).addClass("on")

    })


})