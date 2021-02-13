import './index.css';
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";

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

// Инициализация классов
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
const userFormValid = new FormValidator(enableValidation, "#userForm");
userFormValid.enableValidation();

const cardValid = new FormValidator(enableValidation, "#addCard");
cardValid.enableValidation();

const addCardWithForm = new PopupWithForm(popupAddCard, (item) => {
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
});

const userInfo = new UserInfo(userName, userJob);

const userPopup = new Popup(popupUser);

const addCardPopup = new Popup(popupAddCard);
//-------------

// открытие попапа добавления карточек
openAddCard.addEventListener("click", () => {
  addCardPopup.open();
  addCardPopup.setEventListeners();
});
//------------

// Слушатели userPopup
popupUserOpenButton.addEventListener("click", () => {
  const getUserInfo = userInfo.getUserInfo();
  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;
  userPopup.open();
  userPopup.setEventListeners();
});

popupUser.addEventListener("submit", (event) => {
  event.preventDefault();
  userInfo.setUserInfo(nameInput.value, jobInput.value);
  const updateUserInfo = userInfo.updateUserInfo();
  userName.textContent = updateUserInfo.name;
  userJob.textContent = updateUserInfo.job;
  userPopup.close();
});
//--------------

// Вызовы методов при загрузке
section.renderedItems();
addCardWithForm.setEventListeners();
userInfo.setUserInfo(userName.textContent, userJob.textContent);
//-------------
