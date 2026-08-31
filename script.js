const password = document.getElementById('user_password')
const confirmPassword = document.getElementById('confirm_password')
const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    if(password.value !== confirmPassword.value){
        e.preventDefault();
        alert('Enter the same passwords!')
    }
})