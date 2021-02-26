export class FormValidator {
  constructor(setting, popupItem) {
    this.popupItem = popupItem;
    this._formSelector = this.popupItem;
    this.formSelector = setting.formSelector;
    this.inputSelector = setting.inputSelector;
    this.submitButtonSelector = setting.submitButtonSelector;
    this.inactiveButtonClass = setting.inactiveButtonClass;
    this.inputErrorClass = setting.inputErrorClass;
    this.errorClass = setting.errorClass;
    this.form = document.querySelector(this._formSelector);
    this.inputElements = Array.from(
      this.form.querySelectorAll(this.inputSelector)
    );
    this.buttonElement = this.form.querySelector(this.submitButtonSelector);
  }

  _showError(input) {
    this.errorElement = this.form.querySelector(`#${input.id}-error`);
    this.errorElement.textContent = input.validationMessage;
    this.errorElement.classList.add(this.inputErrorClass);
    input.classList.add(this.errorClass);
  }

  _hideError(input) {
    this.errorElement = this.form.querySelector(`#${input.id}-error`);
    this.errorElement.textContent = "";
    this.errorElement.classList.remove(this.inputErrorClass);
    input.classList.remove(this.errorClass);
  }

  _checkInputValidity(inputElements, input) {


    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }

  _toggleButtonState(_formSelector, buttonElement, inactiveButtonClass) {
    if (this.form.checkValidity()) {
      this.buttonElement.classList.remove(this.inactiveButtonClass);
      this.buttonElement.disabled = false;
    } else {
      this.buttonElement.classList.add(this.inactiveButtonClass);
      this.buttonElement.disabled = true;
    }
  }

  
  _setEventListeners() {
    this.form.addEventListener('reset', () => {
      this.inputElements.forEach((inputElement) => {
          this._hideError(inputElement)
        })
      this._toggleButtonState();
  });
    this.inputElements.forEach((input) => {
      input.addEventListener("input", (input) => {
        this._checkInputValidity(this.inputElements, input.target);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners(this.form);
    this._toggleButtonState();
  }
}

