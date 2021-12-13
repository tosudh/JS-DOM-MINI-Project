let cards = document.getElementsByClassName('card')
let selectedCard = document.querySelector('.card')
console.log(cards)
for (const card of cards) {
    card.addEventListener('click',(event)=>{
        toggleCardClass()
        selectedCard = card
        toggleCardClass()
    })
}

function toggleCardClass(){
    selectedCard.classList.toggle('expanded')
}