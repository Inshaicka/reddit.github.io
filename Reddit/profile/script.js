function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let posts = [];

function addPost(title, content) {
  let post = {title: title, content: content};
  posts.push(post);
  displayPosts();
}

function displayPosts() {
  let postsHtml = "";
  posts.forEach(function(post) {
    postsHtml += '<div class="post">';
    postsHtml += '<div class="mini-profile">';
    postsHtml += '<img src="images/avatar.png">';
    postsHtml += '<span> u/Nervous-Level-9797</span>';
    postsHtml += '</div>';
    postsHtml += '<div class="post-title">';
    postsHtml += '<p>' + post.title + '</p>';
    postsHtml += '</div>';
    postsHtml += '<div class="post-text">';
    postsHtml += '<p>' + post.content + '</p>';
    postsHtml += '</div>';
    postsHtml += '</div>';
  });
  document.querySelector("#posts").innerHTML = postsHtml;
}

document.querySelector("form").addEventListener("submit", function(event){
  event.preventDefault();
  
  let titleInput = document.querySelector('.title');
  let contentInput = document.querySelector('.text');
  
  // Проверяем, что поля не пустые
  if(titleInput.value.trim() === '' || contentInput.value.trim() === '') {
    alert('Заголовок и текст поста должны быть заполнены!');
    return; // Прерываем выполнение функции, если хотя бы одно поле пустое
  }
  
  let title = titleInput.value;
  let content = contentInput.value;
  
  addPost(title, content);
  
  // Очистка формы после добавления поста
  document.querySelector("form").reset();
});
