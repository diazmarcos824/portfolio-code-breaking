const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{10,14}$/ // 7 a 14 numeros.
}

const campos = {
	name: false,
	last_name: false,
	email: false,
	phone: false
}

const formvalidate = (e) => {
    switch (e.target.name) {
        case "name":
            inputValidate(expresiones.name, e.target, 'name');
        break;

        case "last_name":
            inputValidate(expresiones.last_name, e.target, 'last_name');
        break;

        case "email":
            inputValidate(expresiones.email, e.target, 'email');
        break;

        case "phone":
            inputValidate(expresiones.phone, e.target, 'phone');
        break;
    }
}

const inputValidate = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`${campo}__group`).classList.remove('form__group-bad');
        document.getElementById(`${campo}__group`).classList.add('form__group-good');
        document.querySelector(`#${campo}__group i`).classList.add('fa-circle-check');
        document.querySelector(`#${campo}__group i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#${campo}__group .form__input-error`).classList.remove('form__input-error-active');
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}__group`).classList.add('form__group-bad');
        document.getElementById(`${campo}__group`).classList.remove('form__group-good');
        document.querySelector(`#${campo}__group i`).classList.add('fa-circle-xmark');
        document.querySelector(`#${campo}__group i`).classList.remove('fa-circle-check');
        document.querySelector(`#${campo}__group .form__input-error`).classList.add('form__input-error-active');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', formvalidate);
    input.addEventListener('blur', formvalidate);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.name && campos.last_name && campos.email && campos.phone){
        form.reset();

        document.getElementById('form__message-success').classList.add('form__message-success-active');
        setTimeout(() => {
            document.getElementById('form__message-success').classList.remove('form__message-success-active');
        }, 5000);

        document.querySelectorAll('.form__group-good').forEach((icono) => {
            icono.classList.remove('form__group-good');
        });
    } else {
        document.getElementById('form__message').classList.add('form__message-active');
    }
})

