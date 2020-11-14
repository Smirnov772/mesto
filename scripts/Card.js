export class Card {
  constructor(data, templateSelector) {
    this.name = data.name;
    this.link = data.link;
    this.alt = this.name;
    this._template = document.querySelector(templateSelector).content;
  }
  renderCard(cardsElements) {
    this._content = this._template.cloneNode(true);
    this._content.querySelector(".element__paragraph").textContent = this.name;
    this._content.querySelector(".element__image").src = this.link;
    this._content.querySelector(
      ".element__image"
    ).alt = `Изображение ${this.name}`;
    cardsElements.prepend(this._content);
  }

}
