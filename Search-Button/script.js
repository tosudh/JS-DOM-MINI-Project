let btn = document.getElementById('search-btn')
let input = document.getElementById('search-input')


btn.onclick = (event)=>{
    event.preventDefault();
    input.classList.toggle('shrink')
}