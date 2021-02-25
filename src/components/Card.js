export class Card {
  constructor(
    {
      data,
      handleCardClick,
      HandlerRemoveCard,
      handleLikeClick,
      handleLikeRemove,
    },
    templateSelector
  ) {
    this.data = data;
    this.handleLikeClick = handleLikeClick;
    this.HandlerRemoveCard = HandlerRemoveCard;
    this.handleCardClick = handleCardClick;
    this.handleLikeRemove = handleLikeRemove;
    this.userId = data.userId;
    this.cardId = data._id;
    this.ownerId = data.owner._id;
    this.likesCounter = data.likes.length;
    this.likes = data.likes;
    this.name = data.name;
    this.link = data.link;
    this.alt = this.name;
    this._template = document.querySelector(templateSelector);
    console.log(this.likesCounter);
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
    this.likeButton = this._content.querySelector(".element__like");
    this.lakesNumber = this._content.querySelector(".element__like-number");
    this._content
      .querySelector(".element__remove")
      .addEventListener("click", () => {
        this.HandlerRemoveCard(this.cardId);
      });

    this._checkLike();
    this._showDeleteIcon();
    this.likeButton.addEventListener("click", this._buttonLike.bind(this));
    this.image.addEventListener("click", () => this.handleCardClick(this.data));
    return this._content;
  }

  // this.like.classList.toggle("element__like_enable");
  _delete() {
    this._content.remove();
  }

  _checkLike() {
    this.likes.forEach((item) => {
      if (item._id === this.userId) {
        this._addLike();
        this.lakesNumber.textContent = this.likesCounter;
      } else{this.lakesNumber.textContent = this.likesCounter;}
    });
  }
  _addLike() {
    this.likeButton.classList.add("element__like_enable");
    console.log("вклlike");
    // this.handleLikeClick(this.cardId);
  }
  _removeLike() {
    this.likeButton.classList.remove("element__like_enable");
    // this.lakesNumber.textContent = this.likesCounter;
    console.log("выклlike");
    // this.handleLikeRemove(this.cardId);
  }
  setCardLiked(dataCard) {
    this.newLikes = dataCard.likes.length;
    this._likeNumbers();
  }
  _likeNumbers() {
    this.lakesNumber.textContent = this.newLikes;
  }
  _buttonLike(evt) {
    if (!evt.target.classList.contains("element__like_enable")) {
      console.log("вкл");
      this.handleLikeClick(this.cardId);
      this._addLike();
    } else {
      console.log("выкл");
      this.handleLikeRemove(this.cardId);
      this._removeLike();
    }
  }

  _showDeleteIcon() {
    if (this.ownerId !== this.userId) {
      this._content.querySelector(".element__remove").remove();
    }
  }
}
