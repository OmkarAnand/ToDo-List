document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('#button-addon2');

    addButtons.forEach((addButton) => {
        addButton.addEventListener('click', () => {
            const parentCol = addButton.closest('.col');
            const inputField = parentCol.querySelector('.form-control[placeholder="Add schedule"]');
            const taskText = inputField.value.trim();

            if (taskText !== '') {
                // Create a new task element
                const taskItem = document.createElement('div');
                taskItem.classList.add('input-group', 'mb-3');
                taskItem.innerHTML = `
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                    <input type="text" style=background-color:green; class="form-control" value="${taskText}" readonly>
                    <button class="btn btn-danger btn-sm" type="button"><i class="bi bi-trash3-fill"></i></button>
                `;

                // Add event listener to the delete button
                const deleteButton = taskItem.querySelector('.btn-danger');
                deleteButton.addEventListener('click', () => {
                    taskItem.remove(); // Remove the task
                });

                // Append the new task below the input field
                parentCol.appendChild(taskItem);
                inputField.value = ''; // Clear the input field
            }
        });
    });
});
