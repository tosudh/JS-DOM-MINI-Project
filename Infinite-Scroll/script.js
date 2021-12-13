let main = document.getElementsByTagName('main')[0];
function newCard(){
    let n = document.createElement('div');
    main.appendChild(n)
    setTimeout(()=>{
        n.className = 'card';
    },0)
}
function generateNCards(n){
    while(n--){
        newCard()
    }
}

window.addEventListener('scroll', () => {
    console.log('window.scrollY',window.scrollY)
    console.log('window.innerHeight',window.innerHeight)
    console.log('document.body.offsetHeight',document.body.offsetHeight)
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        generateNCards(2);
    }
})