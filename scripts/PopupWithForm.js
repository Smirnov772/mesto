import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
   this._form = this.popupSelector.querySelector(".popup__forms");
    //this.popupSelector = popupSelector;
    this._handleFormSubmit = handleFormSubmit;
    // this.handleCardFormSubmit = handleCardFormSubmit;
  }

  _getInputValues() {
    this._inputList = this.popupSelector.querySelectorAll(".popup__form-input");
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
    console.log(this._formValues);
    super.close();this._form.reset();
    //  this.popupSelector.reset();
  }
}
