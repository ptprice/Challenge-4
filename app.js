document.getElementById('submit').addEventListener('click', function(event) {
event.preventDefault();
const name = document.getElementById('username').value;
const title = document.getElementById('title').value;
const post = document.getElementById('post').value;
const storageData = JSON.parse(localStorage.getItem('data')) || [];
storageData.push({ name, title, post });
localStorage.setItem('data', JSON.stringify(storageData));
window.location.href = 'posts.html';
});
const handleToggle = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    const darkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkMode);
}
document.querySelector(".lightDark").addEventListener('click', handleToggle);