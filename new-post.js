let form = document.getElementById("newPostForm");
let errorMsg= document.getElementById("errorMsg");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let title = document.getElementById("postTitle").value;
    let content = document.getElementById("postContent").value;

    if(title == "" || content == "") {
        errorMsg.textContent = "Please fill in both title and content";
        return;

    }

     let posts = JSON.parse(localStorage.getItem("posts")) || [];

    let newPost = {
        id: Date.now(),
        title: title,
        content: content
    };

    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "index.html";
});

completed

