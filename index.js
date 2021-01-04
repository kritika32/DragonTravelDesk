console.log("This is index.js ");
$('#failure').hide();
$('#success').hide();

const first  = document.getElementById("first");
const last = document.getElementById("last");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validfirst = false;
let validlast = false;
let validemail = false;
let validphone = false;
let validUserN = false;

username.addEventListener('blur', () => {
    console.log("Username is blured");

    // validate name here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,20}$/;
    let str = first.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("first Name is valid");
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        validUserN = true;
    } else {
        console.log("Name is not valid");
        username.classList.add('is-invalid');
        username.classList.remove('is-valid');
        validUserN = false;
    }

    console.log(validUserN);
});
first.addEventListener('blur', () => {
    console.log("first name is blured");

    // validate name here 
    let regex = /^[a-zA-Z]{1,20}$/;
    let str = first.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("first Name is valid");
        first.classList.remove('is-invalid');
        first.classList.add('is-valid');
        validfirst = true;
    } else {
        console.log("Name is not valid");
        first.classList.add('is-invalid');
        first.classList.remove('is-valid');
        validfirst = false;
    }
});

last.addEventListener('blur', () => {
    console.log("last name is blured");

    // validate name here 
    let regex = /^[a-zA-Z]([a-zA-Z]){1,20}$/;
    let str = last.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("first Name is valid");
        last.classList.remove('is-invalid');
        last.classList.add('is-valid');
        validlast = true;
    } else {
        console.log("Name is not valid");
        last.classList.add('is-invalid');
        last.classList.remove('is-valid');
        validlast = false;
    }
});

email.addEventListener('blur', () => {
    console.log("email is blured");
    // validate email here 
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("email is valid");
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validemail = true;
    } else {
        console.log("email is not valid");
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        validemail = false;
    }
});

phone.addEventListener('blur', () => {
    console.log("phone is blured");

    // validate phone here 
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("phone is valid");
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validphone = true;
    } else {
        console.log("phone is not valid");
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        validphone = false;
    }
});

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("You clicked on submit button");

    console.log(validphone, validUserN, validemail);

    if (validemail && validphone && validfirst && validlast && validUserN) {
        // let failure = document.getElementById('failure');
        let success = document.getElementById('success');

        success.classList.add('show');

        $('#failure').hide();
        $('#success').show();
    }
    else {

        let failure = document.getElementById("failure");

        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();

    }
})

