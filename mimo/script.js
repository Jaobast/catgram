let counter = 1;

function addPost (){
  const input = document.getElementById("inputPost").value;
  if(input != ""){
    const postDiv = document.createElement("div");
    const body = document.getElementById("body");
    postDiv.className = "post";
    body.appendChild(postDiv);

    const p = document.createElement("p");
    p.innerHTML = input;
    postDiv.appendChild(p);

    const likeButton = document.createElement("button");
    likeButton.innerHTML = "Like";
    postDiv.appendChild(likeButton);

    const commentButton = document.createElement("button");
    commentButton.innerHTML = "Comment";
    postDiv.appendChild(commentButton);

    document.getElementById("inputPost").value = "";

    counter += 1;

    document.getElementById("count").innerHTML = counter;
  }
}

function remove(){
  const notificationDiv = document.getElementById("notification");
  document.getElementById("body").removeChild(notificationDiv);
}