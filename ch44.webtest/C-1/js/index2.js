$(document).ready(function(){

    $("#btn_popup").click(function(){
        $(".popup").addClass("on")
    })

    $("#btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    $(".tabs>a").click(function(){
        $(".tabs>a").removeClass("on")
        $(this).addClass("on")
        $(".tabDesc>ul").removeClass("on")
        let idx = $(this).index()

        $(`.tabDesc>ul:nth-of-type(${idx+1})`).addClass("on")
    })

    let count = 0
    setInterval(function(){
        $(".train>li").removeClass("on")
        count++
        if(count>2){count=0}
        $(".train>li").eq(count).addClass("on")
    },2000)

})