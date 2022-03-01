// Steps:
// 1. get the data 

function Month(name, id, nth, days){
    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days;
}

const months = [
    new Month("january", "jan", 1, 31),
    new Month("february", "feb", 2, 28),
    new Month("april", "apr", 4, 30),
    new Month("may", "may", 5, 31),
    new Month("june", "jun", 6, 30),
    new Month("july", "jul", 7, 31),
    new Month("august", "aug", 8, 31),
    new Month("september", "sep", 9, 30),
    new Month("october", "oct", 10, 31),
    new Month("november", "nov", 11, 30),
    new Month("december", "dec", 12, 31),
]

// 2. prepare the data 


// 3. components = HTML elements we would like to add to the document later

const monthSection = (id, h1, days) => {
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="cards">${days}</div>
    </section>
    `;
}

const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
        <button class="card-btn">Get day name</button>
    </div>
    `;
}

const dayCards = (month, callDayCard) => {
    let toReturn = "";
    for (let i = 1;  i <= month.days; i++){
        toReturn += callDayCard(2022, month.nth, i)
    }

    return toReturn
}

/* console.log(dayCards(months[0], dayCard)); */

// 4. render = add the components to the document 

const loadEvent = _ => { // nem fogunk használni paramétert, vagyis minden alkalommal történjen meg

    let content = ""

    for (const month of months) {
        
        content += monthSection(month.id, month.name, dayCards(month, dayCard))
    }
    
    document.getElementById("root").insertAdjacentHTML("beforeend", content) 

// click event handling:

    /* const cardList = document.querySelectorAll(".card");

    function cardButtonClickEvent(event){

        console.log(event.target);
        event.target.parentElement.classList.toggle("clicked")
    }

    for (const card of cardList) {

        card.querySelector("button").addEventListener("click", cardButtonClickEvent)      
    } */

    function clickEvent(event) {
       // console.log(event.target);

        if (event.target.classList.contains("card-btn")) {
            console.log("Hello click!");
            event.target.innerHTML = "This button has been clicked."
        }
    }

    document.addEventListener("click", clickEvent)
} 

window.addEventListener("load", loadEvent) // callback függvény, nincs utána zárójel -> argumentumként adtuk meg