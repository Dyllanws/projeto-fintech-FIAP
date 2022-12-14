    function validateFields() {

        const emailValid = isEmailValid();
        document.getElementById("email").disabled = !emailValid;

        const passwordValid = isPasswordValid();
        document.getElementById("butaoLogin").disabled = !passwordValid;
    }

    function isEmailValid() {
        const email = document.getElementById("email").value;
        if (!email) {
            return false;
        } return validateEmail(email);
    }

    function isPasswordValid() {
        const password = document.getElementById("senha").value;
        if (!password) {
            return false;
        } 
        return true;
    }

    function validateEmail(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }

    function validatePassword(senha) {
        return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/.test(senha)
    }

    function avancarLogin() {
        window.location.href='/home.html';
    }


