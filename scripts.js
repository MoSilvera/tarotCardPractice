fetch("https://rws-cards-api.herokuapp.com/api/v1") 
    .then(response => response.json())  
    .then(parsedTarotCards=> {
        parsedTarotCards.cards.forEach(card => {
            const tarotAsHTML = tarotDOMComponent(card);
            writeToDom(tarotAsHTML)
        });
        // What should happen when we finally have the array?
    })

    let tarotDOMComponent = (card) => `
    <div class="card tarotCards" style="width: 20rem;">
    <div class="card-body" "oneCard">
    <h5 class="card-title entryTitle">${card.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted ">${card.type}</h6>
    <p class="card-text contents">Meaning: ${card.meaning_up}</p>
    <p class="card-text contents">Meaning reversed: ${card.meaning_rev}</p>
   
    </div> 
    </div>`

    let tarotCardContainer = document.querySelector(".tarotCard")

    const writeToDom = (whatToPrint) => {
        tarotCardContainer.innerHTML += whatToPrint
    }