$(document).ready(function(){
    let btn_next = $(".btn_next")
    let btn_prev = $(".btn_prev")
    let train = $(".train")
    let count = 0
    let slides = $(".train>li").length
    train.css("width",`${100*slides}%`)

    btn_next.click(function(){
        count++
        if(count>slides-1){count = slides-1}
        train.css("transform",`translateX(${count*-(100/slides)}%)`)
    })

    btn_prev.click(function(){
        count--
        if(count<0){count = 0}
        train.css("transform",`translateX(${count*-(100/slides)}%)`)
    })
    
})