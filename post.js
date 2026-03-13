
let params = new URLSearchParams(window.location.search);
let postId = parseInt(params.get("id"));

let posts = JSON.parse(localStorage.getItem("posts")) || [];

let post = null;
for(let i = 0; i < posts.length; i++) {
    if(posts[i].id == postId) {
        post = posts[i];
    }
}

if(post) {
    document.getElementById("postTitle").textContent = post.title;
    document.getElementById("postContent").textContent = post.content;
}

function showEditForm() {
    document.getElementById("viewPost").style.display = "none";
    document.getElementById("editPost").style.display = "block";
    document.getElementById("editTitle").value = post.title;
    document.getElementById("editContent").value = post.content;
}

function cancelEdit() {
    document.getElementById("editPost").style.display = "none";
    document.getElementById("viewPost").style.display = "block";
}

let editForm = document.getElementById("editForm");
editForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let newTitle = document.getElementById("editTitle").value;
    let newContent = document.getElementById("editContent").value;

    for(let i = 0; i < posts.length; i++) {
        if(posts[i].id == postId) {
            posts[i].title = newTitle;
            posts[i].content = newContent;
        }
    }

    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "index.html";
});

function deletePost() {
    let updatedPosts = posts.filter(function(p) {
        return p.id != postId;
    });

    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    window.location.href = "index.html";
}