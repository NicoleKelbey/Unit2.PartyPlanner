// grab the form

const form = document.querySelector("form");

// form being submitted

form.addEventListener("submit", async (Event) => {
    Event.preventDefault();

    // grab input

    const input = document.querySelector("input");

    // get the value

    const partyName = input.value;
    try {

    // call party API with value (https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events[name])

    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events/${partyName}");
    const eventData = await response.json();

    // grab the data

    console.log(eventData);
})

// render event

const renderEvent = (events) => {
    events.forEach(event => {
        const eventListLi = document.createElement("li");

        // put information in the LI

        partyLI.innerHTML = `
        <h3>${partyData.name}</h3>
        <p>${partyData.date}</p>
        <p>${partyData.location}</p>
        <p>${partyData.id}</p>
        <p>${partyData.description}</p>
        <p>${partyData.cohortId}</p>
        `;

        // grab the ol

        const ol = document.querySelector("ol");

        // attach li to the ol

        ol.append(partyLI);
    } 


})