function HandleMouseOver(){
    console.log("I have successfully called.");
    
    var id2Element = document.querySelector('#id2');
    id2Element.style.background = "pink";
    id2Element.style.color = "royalblue";

    id2Element.innerHTML = "Hello CDACIANS !!"
}

function HandleMouseOut(){
    let id2Element = document.querySelector('#id2');
    id2Element.style.background = "black";
    id2Element.style.color = "gold";

    id2Element.innerHTML = "Hello WORLD!!"
}