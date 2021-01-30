import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
// import { UserInfo } from "./UserInfo.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupUser = document.querySelector(".popup-user");
const popupUserOpenButton = document.querySelector(".profile__edit-button");
const popupUserCloseButton = document.querySelector(".popup__close-button");

const userName = document.querySelector(".profile__name");
const userOccupation = document.querySelector(".profile__occupation");
const formElement = document.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__form-input_name");
const jobInput = formElement.querySelector(".popup__form-input_occupation");

const bigImage = document.querySelector(".big-image");
const bigImageItem = document.querySelector(".big-image__item");
const bigImageName = bigImage.querySelector(".big-image__name");
const closebuttonBigImage = document.querySelector(".big-image__close");

const popupAddCard = document.querySelector(".popup-add-card");
const submitCardForm = popupAddCard.querySelector(".popup-add-card__container");
const openAddCard = document.querySelector(".profile__add-button");
const closeAddCard = popupAddCard.querySelector(
  ".popup-add-card__close-button"
);
const cardLinkFormInput = popupAddCard.querySelector(
  ".popup-add-card__form-input_link"
);
const cardNameFormInput = popupAddCard.querySelector(
  ".popup-add-card__form-input_place"
);

const cardsElement = document.querySelector(".elements");

const cards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const enableValidation = {
  formSelector: ".popup__forms",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const section = new Section(
  {
    items: cards,
    renderer: (data) => {
      const card = new Card(data, ".cards-template", () => {
        const popupWithImage = new PopupWithImage(card, bigImage);
        popupWithImage.open();
        popupWithImage.setEventListeners(closebuttonBigImage);
      });
      section.addItem(card.renderCard());
      //  cardsElement.append(card.renderCard());
    },
  },
  cardsElement
);
section.renderedItems();

const userFormValid = new FormValidator(enableValidation, "#userForm");
userFormValid.enableValidation();

const cardValid = new FormValidator(enableValidation, "#addCard");
cardValid.enableValidation();

// const popupWithForm = new PopupWithForm(

//   popupAddCard, {
//   handleCardFormSubmit: (data) => {
//     const newCard = new Card(data, ".cards-template", () => {
// newCard.open(card);
//     }

//     );

//     popupWithForm.setEventListeners(cardValid);
//   },
// }

// );

// popupWithForm.setEventListeners(submitCardForm);

const UserPopup = new Popup(popupUser);

// открытие попапа карточек
const addCardPopup = new Popup(popupAddCard);
openAddCard.addEventListener("click", () => {
  //  cardNameFormInput.value = "";
  //  cardLinkFormInput.value = "";
  addCardPopup.open();
  addCardPopup.setEventListeners();
  //cardValid.cleanValid();
});

const popupForm = new PopupWithForm(popupAddCard, (item) => {
  const card = new Card(
    { name: item.cadrName, link: item.Link },
    ".cards-template",
    () => {
      const popupWithImage = new PopupWithImage(card, bigImage);
      popupWithImage.open();
      popupWithImage.setEventListeners(closebuttonBigImage);
    }
  );

  section.addItem(card.renderCard());

  // const cardElement = card.generateCard();

  // cardsList.setItem(cardElement);
  //section.renderedItems();
});
popupForm.setEventListeners();

function openedPopupUser() {
  nameInput.value = userName.textContent;
  jobInput.value = userOccupation.textContent;

  UserPopup.open();
  UserPopup.setEventListeners(popupUserCloseButton);
}

function handlerUserFormSubmit(event) {
  event.preventDefault();

  userName.textContent = nameInput.value;
  userOccupation.textContent = jobInput.value;

  closedPopup(popupUser);
}

// const handleCardFormSubmit = (event) => {
//   event.preventDefault();

//   section.addItem({
//     name: cardNameFormInput.value,
//     link: cardLinkFormInput.value,
//   });

//  // addCardPopup.close();
// };

// Слушатели userPopup
popupUserOpenButton.addEventListener("click", () => {
  openedPopupUser();
  userFormValid.cleanValid();
});

//popupUserCloseButton.addEventListener("click", () => UserPopup.close());
//formElement.addEventListener("submit", handlerUserFormSubmit);
