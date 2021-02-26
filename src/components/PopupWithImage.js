import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);

    this._imageLink = this._popupElement.querySelector(".big-image__item");
    this._imageAlt = this._popupElement.querySelector(".big-image__item");

    // this.popupImageSelector = popupImageSelector
  }
  open(data) {
    this._link = data.link;
    this._name = data.name;
    this._imageLink.src = this.link;
    this._imageAlt.alt = `Изображение ${this.name}`;
    this._imageName.textContent = this.name;

    super.open();
  }
}
