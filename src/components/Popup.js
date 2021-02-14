export class Popup {
  constructor(popupElement) {

    this.popupElement = popupElement;
    this.closeButton = this.popupElement.querySelector(".popup__close-button");
    this._handleEscClose = this._handleEscClose.bind(this);
    //  this._handleOverlayClose = this._handleOverlayClose.bind(this);
    
  }
  open() {
    this.popupElement.addEventListener("click", (event) =>
      this._handleOverlayClose(event)
    );
    window.addEventListener("keydown", this._handleEscClose);
    this.popupElement.classList.add("popup_active");
  }
  close() {
    this.popupElement.removeEventListener("click", (event) =>
      this._handleOverlayClose(event)
    );
    window.removeEventListener("keydown", this._handleEscClose);
    this.popupElement.classList.remove("popup_active");
  }
  _handleOverlayClose(event) {
    if (event.target !== event.currentTarget) return;
    {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this.closeButton.addEventListener("click", () => this.close());
  }
}
