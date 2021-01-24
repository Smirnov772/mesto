import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleCardFormSubmit) {
    super(popupSelector);
    this.handleCardFormSubmit = handleCardFormSubmit;
  }

  _getInputValues(){

  }
  setEventListeners(popupWithForm){
    popupWithForm.addEventListener("submit", ()=>close());
      super.setEventListeners(popupWithForm)
  }
}
