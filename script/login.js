axios.defaults.baseURL = server; 

const login = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    

    const payload = {
        email: email,
        password: password,
    }
    axios.post("/school/login", payload)
    .then((res)=> {
        localStorage.setItem("token", res.data.token)
        location.href = "/app/dashbord.html"
    })
    .catch(()=> {
        new Swal({
            icon: "error",
            title: "Login failed",
            text: err.response.data.message
        })
    })
}