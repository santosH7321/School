const createEmployee = (e) => {
    e.preventDefault();

    const employee = {
        employeeName: document.getElementById("employeeName").value.trim(),
        gender: document.getElementById("gender").value.trim(),
        dob: document.getElementById("dob").value.trim(),
        religion: document.getElementById("religion").value.trim(),
        mobile: document.getElementById("mobile").value.trim(),
        email: document.getElementById("email").value.trim(),
        qualification: document.getElementById("qualification").value.trim(),
        address: document.getElementById("address").value.trim(),
        city: document.getElementById("city").value.trim(),
        state: document.getElementById("state").value.trim(),
        country: document.getElementById("country").value.trim(),
        pinCode: document.getElementById("pinCode").value.trim(),
        designation: document.getElementById("designation").value.trim(),
    }

    console.log(employee);
}