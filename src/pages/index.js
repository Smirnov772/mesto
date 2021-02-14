// import './index.css';
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
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__error_visible",
};
const popupWithImage = new PopupWithImage(bigImage);
popupWithImage.setEventListeners(closebuttonBigImage);

function createCard(data) {
  const cardInstance = new Card(data, ".cards-template", () => {
    popupWithImage.open(data);
  });
  const card = cardInstance.renderCard();
  return card;
}
// Инициализация классов
const section = new Section(
  {
    items: cards,
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

const addCardWithForm = new PopupWithForm(popupAddCard, (item) => {
  section.addItem(createCard({ name: item.cadrName, link: item.Link }));
});

const userInfo = new UserInfo(userName, userJob);
const userWithForm = new PopupWithForm(popupUser, () => {
  userInfo.setUserInfo({ name: nameInput.value, job: jobInput.value });
  userInfo.setUserInfo(nameInput.value, jobInput.value);
  userInfo.getUserInfo();
  const updateUserInfo = userInfo.updateUserInfo();
  userName.textContent = updateUserInfo.name;
  userJob.textContent = updateUserInfo.job;
});


//-------------

// открытие попапа добавления карточек
openAddCard.addEventListener("click", () => {
  addCardWithForm.setEventListeners();
});
//------------

// открытие userPopup
popupUserOpenButton.addEventListener("click", () => {
  userWithForm.setEventListeners();
  userInfo.setUserInfo(userName.textContent, userJob.textContent);
  const getUserInfo = userInfo.getUserInfo();
  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;

});

// Вызовы методов при загрузке
section.renderedItems();
