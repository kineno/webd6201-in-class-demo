(function (){

    function DisplayButton(){
        let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function(){
        location.href = './projects.html'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")

        documentBody = document.body

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        //Concatenation- '1' + '2'
        //Interpolation - `${var_1}`  -- TILDA
        let firstString = "This is a "
        let secondString = `${firstString} Main Paragrap that we Added with JavaScript`
        mainParagraph.textContent = secondString


        mainParagraph.textContent = firstString


        mainContent.before(mainParagraphs)

        // documentBody.innerHTML = `
        // <div class="container">
        // <h1 class="display"
        // `
    }

    function Start(){
        console.log("App Started!")

        // if (document.title === ''){

        // }else if (document.title 'sads'){

        // }


        switch (document.title){
            case "Home - WEBD6201 Demo":
            DisplayButton()
            break
            case "Projects -WEBD6201 Demo":
                DisplayButton
                break
        }
        
    }

    window.addEventListener("load", Start)
})()