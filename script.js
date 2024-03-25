const username = document.getElementById('username')
const email = document.getElementById('email')
const position = document.getElementById('position')
const type_full = document.getElementById('full')
const type_part = document.getElementById('part')
const form = document.getElementById('form')
const errorElement_username = document.getElementById('username_error')
const errorElement_email = document.getElementById('email_error')
const errorElement_position = document.getElementById('position_error')
const errorElement_type = document.getElementById('type_error')
const correctElement_username = document.getElementById('username_mark')
const correctElement_email = document.getElementById('email_mark')
const correctElement_position = document.getElementById('position_mark')
const correctElement_type = document.getElementById('type_mark')

form.addEventListener('submit', (e) => {
    let prevent = false;
    let error_username ='';
    let error_email ='';
    let error_position ='';
    let error_type='';
    let mark ='✓';
    const email_input = email.value.trim();

    if(username.value.length < 6 || username.value.length > 10){
        prevent = true;
        error_username ='Username should be >=6 and <=10'
    }
    for(let i = 0; i < username.value.length;i++){
        const char = username.value.charAt(i);
        if(!(/[a-zA-Z_]/.test(char))){
            prevent = true;
            error_username = 'Username should only contain letters or underscores'
            break;
        }
    }
    if(!(/^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]/.test(email_input))){
        prevent = true;
        error_email='Please input a valid email';
    }

    if (position.value === 'none'){
        prevent = true;
        error_position ='You must select a position';
    }

    if(!type_full.checked && !type_part.checked){
        prevent = true;
        error_type ='You must select a type';
    }

    if(prevent === true){
        e.preventDefault()
        if(error_username === ''){
            correctElement_username.innerText = mark;
        }
        if(error_email === ''){
            correctElement_email.innerText = mark;
        }
        if(error_position === ''){
            correctElement_position.innerText = mark;
        }
        if(error_type === ''){
            correctElement_type.innerText = mark;
        }
        errorElement_username.innerText = error_username;
        errorElement_email.innerText = error_email;
        errorElement_position.innerText = error_position;
        errorElement_type.innerText = error_type;
    }
    
})