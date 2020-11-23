export class FormValidator {
  constructor(setting, popupItem) {
    this.popupItem = popupItem;
    this.formElement = this.popupItem;
    this.formSelector = setting.formSelector;
    this.inputSelector = setting.inputSelector;
    this.submitButtonSelector = setting.submitButtonSelector;
    this.inactiveButtonClass = setting.inactiveButtonClass;
    this.inputErrorClass = setting.inputErrorClass;
    this.errorClass = setting.errorClass;
  }

  _showError(inputElements, input) {
    this.errorElement = this.form.querySelector(`#${input.id}-error`);
    this.errorElement.textContent = input.validationMessage;
    this.errorElement.classList.add(this.inputErrorClass);
    input.classList.add(this.errorClass);
  }

  _hideError(inputElements, input) {
    this.errorElement = this.form.querySelector(`#${input.id}-error`);
    this.errorElement.textContent = "";
    this.errorElement.classList.remove(this.inputErrorClass);
    input.classList.remove(this.errorClass);
  }

  _checkInputValidity(inputElements, input) {
    //this.setCustomValidity("");

    if (input.validity.valid) {
      this._hideError(inputElements, input);
    } else {
      this._showError(inputElements, input);
    }
  }

  _toggleButtonState(formElement, buttonElement, inactiveButtonClass) {
    if (this.form.checkValidity()) {
      this.buttonElement.classList.remove(this.inactiveButtonClass);
      this.buttonElement.disabled = false;
    } else {
      this.buttonElement.classList.add(this.inactiveButtonClass);
      this.buttonElement.disabled = true;
    }
  }

  _setEventListeners(form) {
    this.buttonElement = this.form.querySelector(this.submitButtonSelector);
    this.inputElements = Array.from(
      this.form.querySelectorAll(this.inputSelector)
    );

    this.inputElements.forEach((input) => {
      input.addEventListener("input", (input) => {
        this._checkInputValidity(this.inputElements, input.target);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this.form = document.querySelector(this.formElement);
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners(this.form);
    this._toggleButtonState();
  }
}

// enableValidation({
//   formSelector: ".popup__forms",
//   inputSelector: ".popup__form-input",
//   submitButtonSelector: ".popup__save-button",
//   inactiveButtonClass: "popup__save-button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// });
