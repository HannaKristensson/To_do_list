const listForm = document.querySelector('#list_form');
const ulList = document.querySelector('#todo_list');

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
       
    // Add to list
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    ulList.appendChild(li);

    // const checkUncheck = (e) => {
    //     li.classList.toggle('li_checked')
    // }
    // document.querySelector(li).addEventListener('click', e => {
    //     e.currentTarget.classList.add('checked')
    // })

    
    console.log(todoList);
    console.log(ulList)
    todoInput.value = '';
    
})

// Check / uncheck list
ulList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
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

