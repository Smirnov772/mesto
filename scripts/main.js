const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupSaveButton = document.querySelector('.popup__save-button');


let userName = document.querySelector('.profile__name');
let userOccupation = document.querySelector('.profile__occupation');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__form-input_name');
let jobInput = document.querySelector('.popup__form-input_occupation');

const popupAddCard = document.querySelector('.popupAddCard')
const cardsFormContainer = document.querySelector('.popupAddCard__container');
const addCardOpen = document.querySelector('.profile__add-button');
const addCardClose = document.querySelector('.popupAddCard__close-button');
const addCardSave = document.querySelector('.popupAddCard__save-button');
const cardsElements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.cards-template');
// const templateCardName = cardsTemplate.querySelector('.element__paragraph');
// const templateCardLink = cardsTemplate.querySelector('.element__image');
const cardNameFormInput = document.querySelector('.popupAddCard__form-input_place');
const cardLinkFormInput = document.querySelector('.popupAddCard__form-input_link');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// const addCardForm = document.querySelector('.popupAddCard__container');


// const addCard = document.querySelector('.popupAddCard');
// 
// 
// 

// 
// const cardForm = document.querySelector('.popupAddCard__forms')
// const popupAddCardName = document.querySelector('.popupAddCard__form-input_place');
// const popupAddCardLink = document.querySelector('.popupAddCard__form-input_link');
// 

function popupToggle() {
    popup.classList.toggle('popup_disabled');
}

function openPopup() {
    nameInput.value = userName.textContent;
    jobInput.value = userOccupation.textContent;

    popupToggle();
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userOccupation.textContent = jobInput.value;

    popupToggle();
};
// добавляем карточки из массива
initialCards.map(function (data) {
    const cardsTemplateData = cardsTemplate.content.cloneNode(true);
    const cardName = data.name;
    const cardLink = data.link;
    cardsTemplateData.querySelector('.element__paragraph').textContent = cardName;
    cardsTemplateData.querySelector('.element__image').src = cardLink;
    cardsElements.append(cardsTemplateData);
});
//взять значения из попап и добавить в темплейт через клонирование
function getCardInput(evt) {
    evt.preventDefault();
    const newCard = cardsTemplate.content.cloneNode(true);
    const cardNameInput = newCard.querySelector('.element__paragraph');
    const cardLinkInput = newCard.querySelector('.element__image');
    cardNameInput.textContent = cardNameFormInput.value;
    cardLinkInput.src = cardLinkFormInput.value;

    cardsElements.prepend(newCard);

    addCardToggle();
};
// const renderCard = () => {
//     const items = initialCards.map(element => getItems(element));
//     cardsElements.append(...items)
// };



// const getItems = (data) => {
//     const card = cardsTemplate.content.cloneNode(true);
//     const cardName = data.name;
//     card.querySelector('.element__paragraph').innerText = cardName;
//     const cardLink = data.link;
//     card.querySelector('.element__image').src = `${cardLink}`;
//     return card;

// };
//   console.log(cardName);



function addCardToggle() {
    cardNameFormInput.value = '';
    cardLinkFormInput.value = '';
    popupAddCard.classList.toggle('popupAddCard_disabled');

};



// renderCard();
addCardOpen.addEventListener('click', addCardToggle);
cardsFormContainer.addEventListener('submit', getCardInput);
addCardClose.addEventListener('click', addCardToggle);
formElement.addEventListener('submit', formSubmitHandler);
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', popupToggle);