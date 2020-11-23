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

// const cardsTemplate = document.querySelector(".cards-template");
const cardsElements = document.querySelector(".elements");

const initialCards = [
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

//закрытие попапов <
const closedOverlayPopup = (event) => {
  const activePopup = document.querySelector(".popup_active");
  if (event.target !== event.currentTarget) return;
  closedPopup(activePopup);
};
popupUser.addEventListener("click", closedOverlayPopup);
bigImage.addEventListener("click", closedOverlayPopup);
popupAddCard.addEventListener("click", closedOverlayPopup);
// >

const handLeEscUp = (event) => {
  event.preventDefault();
  const activePopup = document.querySelector(".popup_active");
  if (event.key === "Escape") {
    closedPopup(activePopup);
  }
};
popupUser.addEventListener("click", closedOverlayPopup);
function openedPopup(popup) {
  document.addEventListener("keydown", handLeEscUp);
  popup.classList.add("popup_active");
}

function closedPopup(popup) {
  document.removeEventListener("keydown", handLeEscUp);
  popup.classList.remove("popup_active");
}

function openedPopupUser() {
  nameInput.value = userName.textContent;
  jobInput.value = userOccupation.textContent;

  openedPopup(popupUser);
}



const userFormValid = new FormValidator ({
  formSelector: ".popup__forms",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
}, "#userForm");


const cardValid = new FormValidator ({
  formSelector: ".popup__forms",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: ".popup__save-button_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_visible",
}, "#addCard");




function handlerUserFormSubmit(event) {
  event.preventDefault();

  userName.textContent = nameInput.value;
  userOccupation.textContent = jobInput.value;

  closedPopup(popupUser);
}

const handleCardFormSubmit = (event) => {
  event.preventDefault();

  const cardItem = getCard({
    name: cardNameFormInput.value,
    link: cardLinkFormInput.value,
  });

  // cardsElements.prepend(cardItem);
  closedPopup(popupAddCard);
};

const getCard = (data) => {
  const card = new Card(data, ".cards-template", ()=>openBigImage(data));
  card.renderCard(cardsElements);

  // const cardElement = cardsTemplate.cloneNode(true).content;
  // const cardName = cardElement.querySelector(".element__paragraph");
  // const cardImage = cardElement.querySelector(".element__image");

  // cardImage.addEventListener("click", () => openBigImage(dataCard));
  // cardName.textContent = dataCard.name;
  // cardImage.src = dataCard.link;
  // cardImage.alt = `Изображение ${dataCard.name}`;

  // cardElement
  //   .querySelector(".element__like")
  //   .addEventListener("click", function (event) {
  //     event.target.classList.toggle("element__like_enable");
  //   });

  // const cardRemove = (event) => {
  //   event.target.closest(".element").remove();
  // };
  // const removeButton = cardElement.querySelector(".element__remove");
  // removeButton.addEventListener("click", cardRemove);

  // return cardElement;
};
// Открытие большой картинки
const openBigImage = (data) => {
  bigImageItem.src = data.link;
  bigImageItem.alt = `Изображение ${data.name}`;
  bigImageName.textContent = data.name;

  openedPopup(bigImage);
};

// initialCards.forEach(() => {
//   const card = new Card(data.name, data.link);
//   const cardElement = card.renderCard();

//   // Добавляем в DOM
//   document.querySelector("elements").append(cardElement);
// });
initialCards.forEach(getCard); // => {
//   const cardItem = getCard(data);
//   cardsElements.prepend(cardItem);

// });

// Слушатели userPopup
popupUserOpenButton.addEventListener("click", () => {
openedPopupUser();
userFormValid.enableValidation();});

popupUserCloseButton.addEventListener("click", () => closedPopup(popupUser));
formElement.addEventListener("submit", handlerUserFormSubmit);

// Слушатели карточек
openAddCard.addEventListener("click", () => {
  cardNameFormInput.value = "";
  cardLinkFormInput.value = "";
  openedPopup(popupAddCard);
  cardValid.enableValidation();
});

submitCardForm.addEventListener("submit", handleCardFormSubmit);
closeAddCard.addEventListener("click", () => closedPopup(popupAddCard));

closebuttonBigImage.addEventListener("click", () => closedPopup(bigImage));
