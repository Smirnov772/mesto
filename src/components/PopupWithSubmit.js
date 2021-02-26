import { Popup } from "./Popup.js";
export class PopupWithSubmit extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._buttonRemove = document.querySelector(".popup__remove-button");
  }
  submitActive(handlerSubmit) {
    this._handleFormSubmit = handlerSubmit;
  }

  setEventListeners() {
    this._buttonRemove.addEventListener("click", () => {
      this._handleFormSubmit();
      this.close();
    });
    // this.buttonRemove.addEventListener("click", ()=>{this.close()});
    super.setEventListeners();
  }
}
