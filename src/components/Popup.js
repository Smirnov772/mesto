export class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._closeButton = this._popupElement.querySelector(
      ".popup__close-button"
    );
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }
  open(data) {
    this._data = data;
    this._popupElement.addEventListener("click", this._handleOverlayClose);
    window.addEventListener("keydown", this._handleEscClose);
    this._popupElement.classList.add("popup_active");
  }
  close() {
    this._popupElement.removeEventListener("click", this._handleOverlayClose);
    window.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.classList.remove("popup_active");
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
    this._closeButton.addEventListener("click", () => this.close());
  }
  renderLoading(isLoading) {
    if (isLoading) {
      const submitButton = this._popupElement.querySelector(
        ".popup__save-button"
      );
      submitButton.textContent = "Сохранение...";
      console.log("render true");
    } else {
      const submitButton = this._popupElement.querySelector(
        ".popup__save-button"
      );
      submitButton.textContent = "Сохранить";
      console.log("render folse");
    }
  }
}
