$(document).ready(function(){

    //열기
    $("#btn_popup").click(function(){
        $(".popup").addClass("on")
    })

    //닫기
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    //슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateY(${-33.333*count}%)`)
    },2000)

    //탭메뉴
    $(".tabs>a").click(function(){
        $(".tabs>a").removeClass("on")
        $(this).addClass("on")
        $(".tabDesc>ul").removeClass("on")
        let idx = $(this).index()
        $(".tabDesc>ul").eq(idx).addClass("on")
    })

})