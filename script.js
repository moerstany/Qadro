function Test(){
    let num = parseInt(event.target.innerText);
    num--;
    event.target.innerText=num;
    if (num==0){
        event.target.remove();
    }
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let arr = document.querySelectorAll('.box');
setInterval(() => {
    for (const box of arr) {
        let left = 0;
        let top = 0;
        left = getRndInteger(0, 400);
        top = getRndInteger(0, 400);
        box.style = `top:${left}px;left:${top}px`;
    }

    console.log(count);
}, 1000);