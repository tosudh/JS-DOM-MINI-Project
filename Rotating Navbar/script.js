let navReq = document.querySelector('.nav-conatiner')
for(svg of navReq.getElementsByTagName('svg')){
    svg.addEventListener('click', (event)=>{
        navReq.classList.toggle('nav-active')
    })
}
