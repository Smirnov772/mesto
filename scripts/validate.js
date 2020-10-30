function showError(formElement, inputErrorClass, errorClass, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(inputErrorClass);
    input.classList.add(errorClass);
    
}

    function hideError(formElement, inputErrorClass, errorClass, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(inputErrorClass);
    input.classList.remove(errorClass);
}

function checkInputValidity(formElement, inputErrorClass, errorClass, input) {
    input.setCustomValidity('');

    if (input.validity.valid) {
        hideError(formElement, inputErrorClass, errorClass, input);
    } else {
        showError(formElement, inputErrorClass, errorClass, input);
    }
};

function toggleButtonState(formElement, buttonElement, inactiveButtonClass) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    }
}

function setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
    const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    inputElements.forEach((input) => {
        input.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputErrorClass, errorClass, event.target);
            toggleButtonState(formElement, buttonElement, inactiveButtonClass);
        });
    });

    toggleButtonState(formElement, buttonElement, inactiveButtonClass);
}

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const formElements = Array.from(document.querySelectorAll(formSelector));

    formElements.forEach(formElement => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });


        setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
    });
}

enableValidation({
    formSelector: '.popup__forms',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});