
    


const admissionChart = () => {
    const option = {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Admission",
                data: [120, 190, 300, 500, 200, 300],
                backgroundColor: 'rgba(0, 123, 255, 0.7)',
                borderRadius: 8,
            }]
        }
    }
    const canvas = document.getElementById("admission-chart");
    new Chart(canvas, option)
}

const paymentChart = () => {
    const option = {
        type: "doughnut",
        data: {
            labels: ["Paid", "Dues"],
            datasets: [{
                data: [12000, 3000],
                backgroundColor: ['#32cd32    ', '#ff0000 '],
                borderRadius: 8,
            }]
        }
    }
    const canvas = document.getElementById("payment-chart");
    new Chart(canvas, option)
}

admissionChart();
paymentChart();