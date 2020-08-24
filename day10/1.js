let likePost = function (like) {
    //console.log(like);
    //likeCounter++;
    //like.innerHTML = "Like " + likeCounter;

    let postLikeCount = like.children[0].innerHTML;

    let newLikeCount = parseInt(postLikeCount);

    newLikeCount++;

    like.children[0].innerHTML = newLikeCount;
}

let readComment = function (comment) {
    //  console.log(comment.parentElement.parentElement.children[1].children[0]);
    let userComment = comment.parentElement.parentElement.children[1].children[0].value;

    let commentBlock = comment.parentElement.parentElement.parentElement.children[2].children[0];

    let commentContainer = comment.parentElement.parentElement.parentElement.children[2];

    let newElement = commentBlock.cloneNode(true);

    comment.parentElement.parentElement.parentElement.children[2].children[0].appendChild(newElement);
}