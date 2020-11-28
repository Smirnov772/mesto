export class Card {
  constructor(data, templateSelector, openBigImage) {
    this.openBigImage = openBigImage;
    this.name = data.name;
    this.link = data.link;
    this.alt = this.name;
    this._template = document.querySelector(templateSelector);
  }

  _getTemplate() {
    const cardElement = this._template.content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  renderCard(cardsElements) {
    this._content = this._getTemplate();
    this._content.querySelector(".element__paragraph").textContent = this.name;
    this.Image = this._content.querySelector(".element__image");
    this.Image.src = this.link;
    this.Image.alt = `Изображение ${this.name}`;
    this.like = this._content.querySelector(".element__like");
    this._content
      .querySelector(".element__remove")
      .addEventListener("click", () => this._delete());

    this.like.addEventListener("click", () => this._toggleLike());

    this.Image.addEventListener("click", () => this.openBigImage());
    console.log(this._content);

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

// const openBigImage = (dataBigImage) => {
//   bigImageItem.src = dataBigImage.link;
//   bigImageItem.alt = `Изображение ${dataBigImage.name}`;
//   bigImageName.textContent = dataBigImage.name;

//   openedPopup(bigImage);
