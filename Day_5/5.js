let counter = 1;

function commentHere() {
    let userComment = document.querySelector("#inputId").value;

    const newElement = document.createElement("div");
    newElement.style.display = "flex";
    newElement.style.justifyContent = "space-between";

    const child1 = document.createElement("div");
    child1.textContent = userComment;

    const child2 = document.createElement("button");
    child2.textContent = "DELETE";

    var commentBox = document.querySelector("#commentBox");
    // commentBox.appendChild(newElement);

    newElement.appendChild(child1);
    newElement.appendChild(child2);

    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#inputId").value = "";
}


function likeHere() {
    counter++;

    let btnElement = document.querySelector('#btnId');
    btnElement.innerHTML = "Like" + counter;
}

function deleteComment(currentElement) {
    //alert(currentElement);

    currentElement.parentElement.remove();
}