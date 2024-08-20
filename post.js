const blogPost = JSON.parse(localStorage.getItem('data')) || [];
console.log(blogPost);
blogPost.forEach((post) => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
    <h2 id="title">${post.title}</h2>
    <p id="post">${post.post}</p>
    <p id="userName">${post.name}</p>
    `;
    document.body.appendChild(postDiv);
})
document.querySelector(".backButton").addEventListener('click', function(event) {
    window.location.href = 'index.html';
});