import "./index.css";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Api } from "../components/Api.js";
import { Popup } from "../components/Popup";

const popupUser = document.querySelector(".popup-user");
const popupUserOpenButton = document.querySelector(".profile__edit-button");
const popupUserCloseButton = document.querySelector(".popup__close-button");

const userName = document.querySelector(".profile__name");
const userJob = document.querySelector(".profile__occupation");
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
const avatarEdit = document.querySelector(".popup-avatar");
const avatarEditOpen = document.querySelector(".profile__avatar");
const avatarLink = avatarEdit.querySelector(".popup__avatar-input");
const cardsElement = document.querySelector(".elements");
const popupRemove = document.querySelector(".popup-remove");
const cardRemoveButton = document.querySelector(".element__remove");
// const cards = [
//   {
//     name: "Архыз",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

const enableValidation = {
  formSelector: ".popup__forms",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__error_visible",
};
const popupWithImage = new PopupWithImage(bigImage);
popupWithImage.setEventListeners(closebuttonBigImage);

//const popupWithDelete = new Popup()

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1",
  cohortId: "cohort-20",
  headers: {
    authorization: "8b4bf4c7-50a5-4055-8a00-6f47d910a5d3",
    "Content-Type": "application/json",
  },
});

api
  .getAllCards()
  .then((item) => {
    section.renderedItems(item);
  })
  .catch((err) => console.log(err));

api
  .getUserInfo()
  .then((dataUser) => {
    console.log(dataUser);
    userInfo.setUserInfo(dataUser);
    userId = userInfo;
  })
  .catch((err) => console.log(err));

function createCard(data) {
  const cardInstance = new Card(
    { data: { ...data, curentId: userInfo.getMyId() } },
    ".cards-template",
    () => {
      popupWithImage.open(data);
    },
    { handleDeleteIconClick: (card) => {cardInstance._delete(card)} }
  );
  console.log(data);
  const card = cardInstance.renderCard();
  return card;
}

// Инициализация классов
const popupDeleteCard = new Popup(popupRemove);

const section = new Section(
  {
    renderer: (data) => {
      section.addItem(createCard(data));
    },
  },
  cardsElement
);
const userFormValid = new FormValidator(enableValidation, "#userForm");
userFormValid.enableValidation();
const cardValid = new FormValidator(enableValidation, "#addCard");
cardValid.enableValidation();

// const avatarWithForm = new PopupWithForm(avatarEdit, (item) => {
//   userInfo.setUserInfo(item.avatarLink);
// });
//avatarWithForm.setEventListeners();

const addCardWithForm = new PopupWithForm(popupAddCard, (item) => {
  api.addCard(item);
  section.addItem(createCard(item));
  console.log({ item });
});

addCardWithForm.setEventListeners();

const userInfo = new UserInfo(userName, userJob);
const userWithForm = new PopupWithForm(popupUser, (item) => {
  api.renameUser(item.name, item.about);
  userInfo.setUserInfo(item);
});
userWithForm.setEventListeners();

//-------------

// открытие попапа добавления карточек
openAddCard.addEventListener("click", () => {
  addCardWithForm.open();
});
//------------
//открытие попапа редактирования аватара
avatarEditOpen.addEventListener("click", () => {
  avatarWithForm.open();
});
// открытие userPopup
popupUserOpenButton.addEventListener("click", () => {
  userWithForm.open();

  const getUserInfo = userInfo.getUserInfo();
  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;
});

//section.renderedItems();
