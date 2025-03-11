const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (email === "" || password === "") {
        console.log('All form fields must be filled in');
        return;
    }
    const info = {
        email,
        password,
    }
    console.log(info);
    form.reset();     
}
