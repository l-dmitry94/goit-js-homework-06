const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені");
        return;
    }

    const user = {
        email: email.value,
        password: password.value,
    };

    console.log(user);

    loginForm.reset();
}
