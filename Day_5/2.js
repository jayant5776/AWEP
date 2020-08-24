function HandleMouseOver(){
    console.log("I have successfully called.");
    
    var id2Element = document.querySelector('.beutify');
    id2Element.style.background = "royalblue";
    id2Element.style.color = "tomato";

    id2Element.innerHTML = "Hello CDACIANS !!"
}

function HandleMouseOut(){
    let id2Element = document.querySelector('.beutify');
    id2Element.style.background = "black";
    id2Element.style.color = "gold";

    id2Element.innerHTML = "Hello WORLD!!"
}