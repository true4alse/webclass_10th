$(document).ready(function(){

    let menuState = false
    $(".btn_menu").click(function(){
        if(!menuState){
            $("nav").addClass("on")
            $(".btn_menu").addClass("close")
            menuState = true
        }else{
            $("nav").removeClass("on")
            $(".btn_menu").removeClass("close")
            menuState = false
        }
    })

})