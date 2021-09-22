window.addEventListener('DOMContentLoaded', (event) => {

    setInterval(function() {
        const d = new Date();
        date.plugin("meridium");
        


        let newTimeHours = date.format(d, "h");
        let newTimesMinutesAm = date.format(d, "mm A");
        let sepClass = "notrans"

        if(d.getSeconds()%2 === 1) sepClass = "trans";
        var sep = `<span class= "${sepClass}"> : </span>`;

        let newDate = date.format(d, "MMM D Y")

        let newDay = document.getElementById("day");
        let newHour = document.getElementById("time");

        // newDay.append(newDate);
        newDay.innerHTML = newDate;
        // newHour.append(newTime);
        newHour.innerHTML = newTimeHours + sep + newTimesMinutesAm;


    }, 1000)

    let button = document.getElementById("submitButton");
    let clearButton = document.getElementById("clearButton");
    let container = document.querySelector(".container");
    let numberOfTodo = 0;
    // let toDoArray = ["Zero","One", "Two", "Three", "Four", "Five", "Six"]
    let errorMessage = document.createElement("div");
        let sectionToAppend = document.querySelector(".mainSection")
        errorMessage.setAttribute("class", "error-message");
            
        errorMessage.textContent = "The input box cannot be empty";
        sectionToAppend.append(errorMessage);

    const getEnterItem = function(e) 
    {
        e.preventDefault();
        let userInput = document.getElementById("userInput").value;
        
        
        if(userInput === "")
        {
            errorMessage.classList.add("shown");

        } else {
            if(errorMessage.classList.contains("shown"))
            {
                console.log(errorMessage)
                errorMessage.classList.toggle("shown")
            }
            
            let list = document.createElement("div");
            list.classList.add("card");
            numberOfTodo++;
            list.innerHTML = 
            ` <div class="content">
                <h2>0${numberOfTodo}</h2>
                <h3>TO DO</h3>
                    <p>${userInput}</p>
            </div>
            `;

            let listButton = document.createElement("button");
            listButton.setAttribute("id", "delete-button")
            listButton.innerHTML = `click to remove`;


            list.append(listButton);
            

            container.append(list);
            document.getElementById("userInput").value = "";
        

            let newCards = document.querySelectorAll(".card");
            newCards.forEach(card => { 
                    card.addEventListener("click", () => {
                        if(card.classList[0] === "card")
                        {
            
                            card.remove();
                                numberOfTodo--;
                                if(numberOfTodo < 0) {
                                    numberOfTodo = 0;
                                }
                            
                        }
                    })
                
            });
                

            clearButton.addEventListener("click", ()=> {
                list.remove();
                numberOfTodo = 0;
                errorMessage.textContent = "";

            }) 

    }

        }
        




    button.addEventListener("click", getEnterItem);


    
})

window.addEventListener('DOMContentLoaded', (event) => {
    let button1 = document.getElementById("submitButton");
    // let inputActivate = document.getElementById("userInput");
    // let button2 = document.getElementById("submitButton");


    button1.addEventListener("click", () => {
        let cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.addEventListener("mouseover", (event) => {
            VanillaTilt.init(document.querySelectorAll(".card"),{
                max: 20,
                speed: 400,
                glare: true,
                "max-glare": .7,
            }); 
       }); 
    })
    
    

    })


    VanillaTilt.init(document.querySelectorAll("button"), {
		max: 20,
		speed: 400,
        glare: true,
        "max-glare": .5,
	});
    
      

        VanillaTilt.init(document.querySelector("#date-time"), {
            max: 20,
            speed: 400,
            glare: true,
            "max-glare": 1,
        });


});
