// $(function(){})
// $(()=>{})
$(document).ready(function(){

    //문서가 다 준비된 후 한번 실행될 소스코드
    // $(".a").css("color","green")
    // $(".a").css("text-decoration","underline")
    $(".a").css("color","green").css("text-decoration","underline")

    let text = $(".b").html()
    console.log(text)
    $(".b").html(`<b>새롭게 바뀐</b>html 내용`)

    let naverlink = $(".naverlink").attr("href")
    console.log(naverlink)
    $(".naverlink").attr("href","http://daum.net")

    $(".box").addClass("on")
    // document.querySelector(".box").classList.add("on")

    $(".box").removeClass("on")
    // document.querySelector(".box").classList.remove("on")

    $(".lists>li")
    $(".lists").children().css("border","1px solid #888")
    // let childrens = document.querySelector(".lists").children
    // for(let i=0 ; i<childrens.length ; i++){
    //     childrens[i].style.border = "1px solid #555"
    // }
    $(".c").prev().prev().css("color","red")
    // document.querySelector(".c").previousElementSibling.previousElementSibling.computedStyleMap.color = "green"

    $(".c").next().css("color","blue")
    // document.querySelector(".c").nextElementSibling.style.color = "green"
    $(".c").parent().css("border","5px solid #000")
    // document.querySelector(".c").parentElement.style.backgroundColor = "pink"

    $(".btn").click(function(){
        $(".frame").css("color","green")
    })
    // document.querySelector(".btn").addEventListener("click",function(){
    // })

    // $(".frame").mouseover(function(){
    //     alert("마우스 올림")
    // })

    // $(".frame").mouseout(function(){
    //     alert("마우스 뺌")
    // })

    $(".tab_lists>li").click(function(){
        let idx = $(this).index()
        // 클릭한 리스트의 순번을 가져옴
        $(".tab_desc>section").eq(idx).css("border","1px solid red")
    })



})