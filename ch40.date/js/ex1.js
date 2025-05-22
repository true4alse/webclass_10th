document.addEventListener("DOMContentLoaded",function(){


    //시간 
    let dayTag = document.querySelector(".onday")
    let timeTag = document.querySelector(".time")
    let monthArray = ["1","2","3","4","5","6","7","8","9","10","11","12"]
    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let clock = document.querySelector(".clock")
    
    // 현재시간을 불러와서 저장
    function a(){
        let today = new Date()
        let month = today.getMonth()
        let date = today.getDate()
        let day = today.getDay()
        let hour = today.getHours()<10?"0"+today.getHours():today.getHours()
        let minute = today.getMinutes()<10?"0"+today.getMinutes():today.getMinutes()
        let second = today.getSeconds()<10?"0"+today.getSeconds():today.getSeconds()
        dayTag.innerHTML = `${monthArray[month]}/${date} ${dayArray[day]}`
        timeTag.innerHTML = `${hour}:${minute}:${second}`

        if(getDayOrNight()=="낮"){
            clock.classList.remove("day")
            clock.classList.remove("night")
            clock.classList.add("day")
        }else{
            clock.classList.remove("day")
            clock.classList.remove("night")
            clock.classList.add("night")
        }
    }
    a()
    let clockTimer = setInterval(function(){
       a()
    },1000)

    // 낮 밤 기능
    // 현재시간을 가져와서
    // 낮시간은 9시 40분부터 18시 5분까지

    function getDayOrNight(){
        let now = new Date()
        let hours = now.getHours() // 0~23 리턴
        let minutes = now.getMinutes() // 0~59 리턴
        if((hours>9 && hours<18) || (hours==9 && minutes>=40) || (hours==18 && minutes<5)){
            return "낮"
        }else{
            return "밤"
        }
    }
    
    if(getDayOrNight()=="낮"){
        clock.classList.remove("day")
        clock.classList.remove("night")
        clock.classList.add("day")
    }else{
        clock.classList.remove("day")
        clock.classList.remove("night")
        clock.classList.add("night")
    }
    

})