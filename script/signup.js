const signup = (e) => {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log(`Full Name: ${fullname}, Mobile: ${mobile}, Email: ${email}, Password: ${password}`);
}