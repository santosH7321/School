const addExpense = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const description = document.getElementById("description").value.trim();
    const date = document.getElementById("date").value.trim();

    console.log(`Title: ${title}, Amount: ${amount}, Description: ${description}, Date: ${date}`);
} 