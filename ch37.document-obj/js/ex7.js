document.addEventListener("DOMContentLoaded",()=>{

    let bt_next = document.querySelector("#bt_next")
    let bt_prev = document.querySelector("#bt_prev")
    let train = document.querySelector(".train")
    let train_list = train.children
    let count = 0

    bt_next.addEventListener("click",()=>{
        for(let i=0 ; i<train_list.length ; i++){
            train_list[i].classList.remove("on")
        }
        count++
        if(count>3){count=3}
        train_list[count].classList.add("on")
    })

    bt_prev.addEventListener("click",()=>{
        for(let i=0 ; i<train_list.length ; i++){
            train_list[i].classList.remove("on")
        }
        count--
        if(count<0){count=0}
        train_list[count].classList.add("on")
    })
    



})

let arr = ["일","이","삼","사"]

arr.forEach(function(item,i){
    console.log(item,i)
})

