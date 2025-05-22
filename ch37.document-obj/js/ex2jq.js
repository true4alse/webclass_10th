$(document).ready(function(){

    // 여는기능
    $(".btn_menu").click(function(){
        $("nav").addClass("on")
    })

    $(".btn_menu_close").click(function(){
        $("nav").removeClass("on")
    })

})