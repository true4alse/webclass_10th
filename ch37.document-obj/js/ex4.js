document.addEventListener("DOMContentLoaded",function(){

    // 탭 클릭 했을 때
    let tabs = document.querySelector(".tabs").children
    let tabDescriptions = document.querySelector(".tabDescriptions")
    let tabDesc = [
        `<h2>title-tab1</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae magni nesciunt cum repellat pariatur cupiditate odit suscipit dolores molestiae sapiente quos, nihil harum debitis cumque totam consequuntur aliquid, enim dolore!</p>`,
        `<h2>title-tab2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, non eius molestias expedita ratione praesentium veniam nostrum aliquid iste id officiis consectetur possimus ex inventore impedit maxime! Iste, voluptatum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores perferendis nostrum natus odit libero alias a molestias tempora totam voluptatibus, fuga doloribus asperiores rem sequi veritatis nulla reprehenderit debitis commodi!</p>`,
        `<h2>title-tab3</h2>
            <ol>
                <li>step1</li>
                <li>step2</li>
                <li>step3</li>
                <li>step4</li>
            </ol>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores perferendis nostrum natus odit libero alias a molestias tempora totam voluptatibus, fuga doloribus asperiores rem sequi veritatis nulla reprehenderit debitis commodi!</p>`,
            `<h2>title-tab4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, non eius molestias expedita ratione praesentium veniam nostrum aliquid iste id officiis consectetur possimus ex inventore impedit maxime! Iste, voluptatum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores perferendis nostrum natus odit libero alias a molestias tempora totam voluptatibus, fuga doloribus asperiores rem sequi veritatis nulla reprehenderit debitis commodi!</p>`
    ]

    for(let i=0 ; i<tabs.length ; i++){
        tabs[i].addEventListener("click",function(){
            // 1. 탭에 맞는 첫번째 탭 내용이 보이도록 하는 기능
            tabDescriptions.innerHTML = tabDesc[i]
            // 2. 탭이 활성스타일 되도록 기능
            for(let j=0 ; j<tabs.length ; j++){
                tabs[j].classList.remove("on")
            }
            this.classList.add("on")
        })
    }

    
    

   



    

})