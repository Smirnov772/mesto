export class Popup {
  constructor(popupSelector) {

    this.popupSelector = popupSelector;
    this.closeButton = this.popupSelector.querySelector(".popup__close-button");
    this._handleEscClose = this._handleEscClose.bind(this);
    //  this._handleOverlayClose = this._handleOverlayClose.bind(this);
    
  }
  open() {
    this.popupSelector.addEventListener("click", (event) =>
      this._handleOverlayClose(event)
    );
    window.addEventListener("keydown", this._handleEscClose);
    this.popupSelector.classList.add("popup_active");
  }
  close() {
    this.popupSelector.removeEventListener("click", () =>
      this._handleOverlayClose()
    );
    window.removeEventListener("keydown", this._handleEscClose);
    this.popupSelector.classList.remove("popup_active");
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
