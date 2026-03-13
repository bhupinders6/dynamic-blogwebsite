function loadPosts() {


    let container = document.getElementById("posts-container");

    if (!container) return;

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length == 0) {
        container.innerHTML = "<p>no posts yet. click new post to add one.</p>";
        return;
    }

    container.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        container.innerHTML += `
            <div class="post-card">
                <h3>${post.title}</h3>
                <p>${post.content.substring(0, 100)}...</p>
                <a href="post.html?id=${post.id}">Read More</a>
            </div>
        `;
    }
}

loadPosts();