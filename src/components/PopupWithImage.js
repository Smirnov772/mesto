import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);

    this._imageLink = this._popupElement.querySelector(".big-image__item");
    this._imageAlt = this._popupElement.querySelector(".big-image__item");
    this._imageName = this._popupElement.querySelector( 
      ".big-image__name" );
    // this.popupImageSelector = popupImageSelector
  }
  open(data) {
    this._link = data.link;
    this._name = data.name;
    this._imageLink.src = this._link;
    this._imageLink.alt = `Изображение ${this._name}`;
    this._imageName.textContent = this._name;

    super.open();
  }
}
