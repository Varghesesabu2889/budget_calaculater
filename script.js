let expenses = [];

function addExpense() {
    const category = document.getElementById('category-select').value;
    const amount = document.getElementById('amount-input').value;
    const date = document.getElementById('date-input').value;

    if (!category || !amount || !date) {
        alert("Please fill in all fields");
        return;
    }

    const expense = {
        category,
        amount,
        date
    };

    expenses.push(expense);
    updateExpenseTable();

    document.getElementById('category-select').value = 'bb';
    document.getElementById('amount-input').value = '';
    document.getElementById('date-input').value = '';
}

function updateExpenseTable() {
    const tableBody = document.getElementById('expense-table-body');
    const totalAmountCell = document.getElementById(`total-amount`);

    tableBody.innerHTML = '';
    let totalAmount = 0;

    expenses.forEach((expense) => {
        const row = tableBody.insertRow();
        const categoryCell = row.insertCell(0);
        const amountCell = row.insertCell(1);
        const dateCell = row.insertCell(2);
        const deleteCell = row.insertCell(3);

        categoryCell.textContent = expense.category;
        amountCell.textContent = expense.amount;
        dateCell.textContent = expense.date;

        totalAmount += parseFloat(expense.amount);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteExpense(expense));
        deleteCell.appendChild(deleteButton);
    });

    totalAmountCell.textContent = totalAmount.toFixed(2);
}

function deleteExpense(expenseToDelete) {
    expenses = expenses.filter(expense => expense !== expenseToDelete);
    updateExpenseTable();
}

document.getElementById('add-btn').addEventListener('click', addExpense);
