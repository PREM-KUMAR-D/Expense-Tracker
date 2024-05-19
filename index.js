const form = document.querySelector('form');
const expenseInput = document.getElementById('expense');
const descriptionInput = document.getElementById('decription');
const categorySelect = document.getElementById('select');
const listGroup = document.querySelector('.list-group');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const expense = expenseInput.value;
    const description = descriptionInput.value;
    const category = categorySelect.value;


    const id = new Date().getTime().toString();
    const expenseData = { expense, description, category };

    localStorage.setItem(id, JSON.stringify(expenseData));


    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const itemText = document.createElement('p');
    itemText.textContent = `${category}: $${expense} - ${description}`;

    const buttonGroup = document.createElement('div');

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-warning btn-sm me-2';
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Delete';

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);
    listItem.appendChild(itemText);
    listItem.appendChild(buttonGroup);

    listGroup.appendChild(listItem);



    editButton.addEventListener('click', () => {
        expenseInput.value = expense;
        descriptionInput.value = description;
        categorySelect.value = category;
        listGroup.removeChild(listItem);
    });

    deleteButton.addEventListener('click', () => {
        listGroup.removeChild(listItem);
    });

    expenseInput.value = '';
    descriptionInput.value = '';
    categorySelect.value = '';

});