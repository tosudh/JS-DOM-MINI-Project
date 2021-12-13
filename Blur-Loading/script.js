let img = new Image();
img.src = 'https://unsplash.com/photos/3MAmj1ZKSZA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM5MzgwMTg1&force=true&w=1920'

img.onload = () => {
    document.querySelector('main').style.backgroundImage = `url(${img.src})`;
}

let t=0;
let loader = document.getElementById('loader');
let progress = document.getElementById('loader-prog');
let task;

task = setInterval(() =>{
    t+=10;
    progress.textContent = t;
    if(t==100){
        clearInterval(task);
        loader.style.display="none"
    }
},100)



