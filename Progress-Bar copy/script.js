let current = 0;

let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
let pages = document.getElementsByClassName('page')
let bars = document.getElementsByClassName('bar')
manageState()
nextBtn.addEventListener('click',(event) => {
    if(current<pages.length-1){
        current++;
    }
    else{
        // 
    }
    manageState()
})
prevBtn.addEventListener('click',(event) => {
    if(current>0){
        current--;
    }
    else{
        // 
    }
    manageState()
})


function manageState(){
    if(current==0){
        clearActivePage(current)
        enableBtn(nextBtn)
        disableBtn(prevBtn)
        pages[current].classList.add("activePage")
        
    }else if(current<pages.length-1){
        clearActivePage(current)
        enableBtn(nextBtn)
        enableBtn(prevBtn)
        pages[current].classList.add("activePage")
        bars[current-1].classList.add("activeBar")
    }
    else{
        disableBtn(nextBtn)
        enableBtn(prevBtn)
        bars[current-1].classList.add("activeBar")
        pages[current].classList.add("activePage")
    }
}

function disableBtn(target){
    target.classList.remove('activeBtn')
    target.disabled = true;
}
function enableBtn(target){
    target.classList.add('activeBtn')
    target.disabled = false;
}
function clearActivePage(from){
    for (let index = from+1; index < pages.length; index++) {
        pages[index].classList.remove('activePage')
        bars[index-1].classList.remove('activeBar')
    }
}