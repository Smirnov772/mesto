import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);

    this.imageLink = this.popupElement.querySelector(".big-image__item");
    this.imageAlt = this.popupElement.querySelector(".big-image__item");
    this.imageName = this.popupElement.querySelector(
      ".big-image__name"
    );
    // this.popupImageSelector = popupImageSelector
  }
  open(data) {
    this.link = data.link;
    this.name = data.name;
    this.imageLink.src = this.link;
    this.imageAlt.alt = `Изображение ${this.name}`;
    this.imageName.textContent = this.name;

    super.open();
  }
}
