const container = document.querySelector('.container');
let signupButton = document.querySelector('.signup-section header');
let loginButton = document.querySelector('.login-section header');
let loginbtn = document.querySelector('.btn')
let signbtn = document.querySelector('.btn')
 
let nickname = document.querySelector('.login-name')
let password = document.querySelector('.login-pass')

let wrongPass = ['`', '~', '!', '@', '"', '№','#', '$', '%', '^', ':', '?', '&', '*', '(', ')', '_', '+', '=', ',', '<', '>', ';', '|', '/', '[', ']', '{', '}']



loginbtn.addEventListener('click', function() {
    if (password.lenght < 8){
        alert("Пароль должен быть не менее 8 символов")
    }
})

signbtn.addEventListener('click', function() {
    if (password.lenght < 8){
        alert("Пароль должен быть не менее 8 символов")
    }
    for(let i; wrongPass.lenght; i++){
        if (wrongPass[i] in nickname){
            alert('В имени нельзя использовать спец.символы ')
        }
    }
    console.log(nickname.lenght)
})

loginButton.addEventListener('click', function() {
    container.classList.add('active')
    console.log('1')
})



signupButton.addEventListener('click', function() {
    container.classList.remove('active')
})


