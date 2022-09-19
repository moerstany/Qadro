function Test(){
    let num = parseInt(event.target.innerText);
    num--;
    event.target.innerText=num;
    if (num==0){
        event.target.remove();
    }
}

let count=0;
setInterval(()=>{
document.querySelector('.box').style =`top:${count++}px;left:${count++}px`;

}, 1000);