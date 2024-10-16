const listForm = document.querySelector('#list_form');

// List array
const todoList = [];


listForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const todoInput = document.querySelector(`#list_input`);

    for(let i = 0; i < listForm.length; i++) {
        listForm[i].parentElement.classList.remove('error')
    } 

    // Validate form
    if(!validationForm(listForm)) {
        return
    }

    // Add to array 
    todoList.push(todoInput.value);

    
    console.log(todoList);
    todoInput.value = '';
    
})


// Validation form
const validationForm = (form) => {
    const errors = [];
    for(let i = 0; i < form.length; i++) {
        const input = form[i];
        errors.push(validationSwitch(input))
    }

    if(errors.includes(false)) return false

    return true;
}


// Validation switch
const validationSwitch = (input) => {
    switch(input.type) {
        case 'text': return validationText(input);
        default: break;
    }
}

// Validate text-field 
const validationText = (input) => {
    const value = input.value.trim();
    if(value === '') {
        setError(input, 'Write a todo in the text field' )
        return false;
    }
    else if(value.length < 3) {
        setError(input, 'Your text need to be at least 3 characters long');
        return false;
    }

    return true;
}


// Error message 
const setError = (input, message) => {
    const parent = input.parentElement;
    parent.classList.add('error');

    const errorElement = parent.querySelector('.invalid_input');
    errorElement.innerText = message;
}

