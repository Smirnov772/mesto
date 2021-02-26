import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._form = this.popupElement.querySelector(".popup__forms");
    //this.popupElement = popupElement;
    this._handleFormSubmit = handleFormSubmit;
    // this.handleCardFormSubmit = handleCardFormSubmit;
  }

  _getInputValues() {
    this._inputList = this.popupElement.querySelectorAll(".popup__form-input");
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
    //  this.popupElement.reset();
  }

}
