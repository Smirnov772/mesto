export class Card {
  constructor({ data }, templateSelector, openBigImage, handleDeleteIconClick) {
    this.openBigImage = openBigImage;
    this.curentId = data.curentId;
    this.name = data.name;
    this.link = data.link;
    this.alt = this.name;
    this._template = document.querySelector(templateSelector);
    this.handleDeleteIconClick = handleDeleteIconClick;
  }

  _getTemplate() {
    const cardElement = this._template.content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  renderCard() {
    this._content = this._getTemplate();
    this._content.querySelector(".element__paragraph").textContent = this.name;
    this.image = this._content.querySelector(".element__image");
    this.image.src = this.link;
    this.image.alt = `Изображение ${this.name}`;
    this.like = this._content.querySelector(".element__like");
    this._content
      .querySelector(".element__remove")
      .addEventListener("click", this.handleDeleteIconClick);

    this.like.addEventListener("click", () => this._toggleLike());

    this.image.addEventListener("click", this.openBigImage);

    return this._content;
  }

  _delete() {
    this._content.remove();
  }
  _toggleLike() {
    this.like.classList.toggle("element__like_enable");
  }

  _openBigImage() {
    this.openBigImage(data);
  }
}
