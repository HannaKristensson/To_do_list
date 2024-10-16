const listForm = document.querySelector('#list_form');
const listBtn = document.querySelector('#list_btn');


listForm.addEventListener('submit', e => {
    e.preventDefault();

    // for(let i = 0; i < listForm.length; i++) {
    //     listForm[i].parentElement.classList.remove('error');
    // }
    
    const todoInput = document.querySelector(`#list_input`);

    // Validate form
    if(!validationForm(listForm)) {
        return
    }
    validationTodo(todoInput)

    // List array
    const todoList = [];

    console.log(todoList);
})


// Validation form
const validationForm = form => {
    const errors = [];
    for(let i = 0; i < form.length; i++) {
        const input = form[i];
        input.parentElement.classList.remove('error');
        // if(!input.required) continue;

        errors.push(validationswitch(input))
    }

    if(errors.includes(false)) return false

    return true
}


// Validation switch
const validationSwitch = (input) => {
    switch(input.type) {
        case 'todo': return validationTodo(input);
        default: break;
    }
}


// Error message 
const setError = (input, message) => {
    const parent = input.parentElement;
    parent.classList.add('error');

    const errorElement = parent.querySelector('.invalid_input')
}

// validationTodo = (todo) => {
    
//     if (todo.value.trim() === '') {
//         const parent = todo.parentElement;
//         parent.classList.add('error');
//         const errorElement = parent.querySelector('.invalid_input');
//         errorElement.innerText = 'Write a todo in the text field';
//         return false
//     }
//     else if (input.value.trim() < 3) {
//         parent.classList.add('error');
//         errorElement.innerText = 'Your text need to be at least 3 characters long';
//         return false
//         }

//     return true;
// }