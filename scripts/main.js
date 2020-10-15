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
const cardRemove = (evt) => {
    evt.target.closest('.element').remove();

};
// function cardRemove(evt){
//     const removeItem = removeButton.event.target.closest('.element');
// }

initialCards.forEach(function (data) {
    const card = cardsTemplate.content.cloneNode(true);
    const cardName = data.name;
    const cardLink = data.link;
    card.querySelector('.element__paragraph').textContent = cardName;
    card.querySelector('.element__image').src = cardLink;


    const removeButton = card.querySelector('.element__remove');
    removeButton.addEventListener('click', cardRemove);
    console.log(removeButton);
    cardsElements.prepend(card);
    cardsElements.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_enable');
    });
    cardsElements.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_disable');
    });
    return card

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
    cardsElements.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_enable');
        console.log(evt);
    });
    cardsElements.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_disable');
        console.log(evt);
    });
    addCardToggle();
};

function addCardToggle() {
    cardNameFormInput.value = '';
    cardLinkFormInput.value = '';
    popupAddCard.classList.toggle('popupAddCard_disabled');

};
// удаление карточки
// removeButton.addEventListener('click', function (evt){
// const removeCard = removeButton.closest('.element');
// removeButton.remove;
// });


addCardOpen.addEventListener('click', addCardToggle);
cardsFormContainer.addEventListener('submit', getCardInput);
addCardClose.addEventListener('click', addCardToggle);
formElement.addEventListener('submit', formSubmitHandler);
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', popupToggle);
