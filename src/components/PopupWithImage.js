import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    // this.popupImageSelector = popupImageSelector
    this.link = data.link;
    this.name = data.name;
  }
  open() {
    this.popupSelector.querySelector(".big-image__item").src = this.link;
    this.popupSelector.querySelector(
      ".big-image__item"
    ).alt = `Изображение ${this.name}`;
    this.popupSelector.querySelector(
      ".big-image__name"
    ).textContent = this.name;
    super.open();
  }
  setEventListeners() {
    super.setEventListeners();
  }
}
