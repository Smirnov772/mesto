export class FormValidator {
  constructor(setting, popupItem) {
    this._popupItem = popupItem;
    this._formSelector = this._popupItem;
    this._formSelector = setting.formSelector;
    this._inputSelector = setting.inputSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._inactiveButtonClass = setting.inactiveButtonClass;
    this._inputErrorClass = setting.inputErrorClass;
    this._errorClass = setting.errorClass;
    this._form = document.querySelector(this._formSelector);
    this._inputElements = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this.buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  _showError(input) {
    this._errorElement = this._form.querySelector(`#${input.id}-error`);
    this._errorElement.textContent = input.validationMessage;
    this._errorElement.classList.add(this._inputErrorClass);
    input.classList.add(this._errorClass);
  }

  _hideError(input) {
    this._errorElement = this._form.querySelector(`#${input.id}-error`);
    this._errorElement.textContent = "";
    this._errorElement.classList.remove(this._inputErrorClass);
    input.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElements, input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }

  _toggleButtonState(_formSelector, buttonElement, inactiveButtonClass) {
    if (this._form.checkValidity()) {
      this.buttonElement.classList.remove(this._inactiveButtonClass);
      this.buttonElement.disabled = false;
    } else {
      this.buttonElement.classList.add(this._inactiveButtonClass);
      this.buttonElement.disabled = true;
    }
  }

  _setEventListeners() {
    this._form.addEventListener("reset", () => {
      this._inputElements.forEach((inputElement) => {
        this._hideError(inputElement);
      });
      this._toggleButtonState();
    });
    this._inputElements.forEach((input) => {
      input.addEventListener("input", (input) => {
        this._checkInputValidity(this._inputElements, input.target);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners(this._form);
    this._toggleButtonState();
  }
}
