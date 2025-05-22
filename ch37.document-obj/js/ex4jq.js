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

$(document).ready(function(){
    $(".tabs>span").click(function(){
        $(".tabs>span").removeClass("on")
        $(this).addClass("on")

        let idx = $(this).index()
        $(".tabDescriptions").html(tabDesc[idx])
    })
})