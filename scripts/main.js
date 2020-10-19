const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupSaveButton = document.querySelector('.popup__save-button');

const userName = document.querySelector('.profile__name');
const userOccupation = document.querySelector('.profile__occupation');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__form-input_name');
const jobInput = document.querySelector('.popup__form-input_occupation');

const bigImage = document.querySelector('.bigImage');
const bigImageItem = document.querySelector('.bigImage__item');
const closebuttonBigImage = document.querySelector('.bigImage__close');

const popupAddCard = document.querySelector('.popupAddCard')
const cardsFormContainer = document.querySelector('.popupAddCard__container');
const addCardOpen = document.querySelector('.profile__add-button');
const addCardClose = document.querySelector('.popupAddCard__close-button');
const addCardSave = document.querySelector('.popupAddCard__save-button');
const cardsElements = document.querySelector('.elements');
const cardItem = cardsElements.querySelector('.element');
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
    popup.classList.toggle('popup_active');
};

function openPopup() {
    nameInput.value = userName.textContent;
    jobInput.value = userOccupation.textContent;

    popupToggle();
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userOccupation.textContent = jobInput.value;

    popupToggle();
};

const cardRemove = (evt) => {
    evt.target.closest('.element').remove();
};

function closedBigImage() {
    bigImage.classList.toggle('bigImage_active');
};

initialCards.forEach(function (data) {
    const card = cardsTemplate.content.cloneNode(true);
    const cardName = data.name;
    const cardLink = data.link;
    card.querySelector('.element__paragraph').textContent = cardName;
    card.querySelector('.element__image').src = cardLink;

    const removeButton = card.querySelector('.element__remove');
    removeButton.addEventListener('click', cardRemove);

    function openBigImage(data) {
        bigImage.classList.toggle('bigImage_active');
        bigImageItem.src = data.link;
        document.querySelector('.bigImage__name').textContent = data.name;
    };
    card.querySelector('.element__image').addEventListener('click', () => openBigImage(data));
    cardsElements.prepend(card);

    cardsElements.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_enable');
    });
    cardsElements.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_disable');
    });

});

function getCardInput(evt) {
    evt.preventDefault();
    const newCard = cardsTemplate.content.cloneNode(true);
    const cardNameInput = newCard.querySelector('.element__paragraph');
    const cardLinkInput = newCard.querySelector('.element__image');
    cardNameInput.textContent = cardNameFormInput.value;
    cardLinkInput.src = cardLinkFormInput.value;
    function openBigImage(data) {
        bigImage.classList.toggle('bigImage_active');
        bigImageItem.src = cardLinkInput.src;
        document.querySelector('.bigImage__name').textContent = cardNameInput.textContent;
    };
    newCard.querySelector('.element__image').addEventListener('click', openBigImage);
    cardsElements.prepend(newCard);
    cardsElements.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_enable');
        console.log(evt);
    });
    cardsElements.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_disable');

    });
    addCardToggle();

};

function addCardToggle() {
    cardNameFormInput.value = '';
    cardLinkFormInput.value = '';
    popupAddCard.classList.toggle('popupAddCard_active');

};

closebuttonBigImage.addEventListener('click', closedBigImage);
addCardOpen.addEventListener('click', addCardToggle);
cardsFormContainer.addEventListener('submit', getCardInput);
addCardClose.addEventListener('click', addCardToggle);
formElement.addEventListener('submit', formSubmitHandler);
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', popupToggle);
