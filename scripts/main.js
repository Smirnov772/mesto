const popupUser = document.querySelector('.popup-user');
const popupUserOpenButton = document.querySelector('.profile__edit-button');
const popupUserCloseButton = document.querySelector('.popup__close-button');

const userName = document.querySelector('.profile__name');
const userOccupation = document.querySelector('.profile__occupation');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__form-input_name');
const jobInput = formElement.querySelector('.popup__form-input_occupation');

const bigImage = document.querySelector('.big-image');
const bigImageItem = document.querySelector('.big-image__item');
const bigImageName = bigImage.querySelector('.big-image__name');
const closebuttonBigImage = document.querySelector('.big-image__close');

const popupAddCard = document.querySelector('.popup-add-card')
const submitCardForm = popupAddCard.querySelector('.popup-add-card__container');
const openAddCard = document.querySelector('.profile__add-button');
const closeAddCard = popupAddCard.querySelector('.popup-add-card__close-button');
const cardLinkFormInput = popupAddCard.querySelector('.popup-add-card__form-input_link');
const cardNameFormInput = popupAddCard.querySelector('.popup-add-card__form-input_place');

const cardsElements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.cards-template');

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

function togglePopup(popup) {
    popup.classList.toggle('popup_active');
}

function openPopupUser() {
    nameInput.value = userName.textContent;
    jobInput.value = userOccupation.textContent;

    togglePopup(popupUser);
}

function handlerUserFormSubmit(event) {
    event.preventDefault();
    userName.textContent = nameInput.value;
    userOccupation.textContent = jobInput.value;

    togglePopup(popupUser);
}

const handleCardFormSubmit = (event) => {
    event.preventDefault();

    const cardItem = getCard({
        name: cardNameFormInput.value,
        link: cardLinkFormInput.value
    });

    cardsElements.prepend(cardItem);
    togglePopup(popupAddCard);
};

const getCard = (dataCard) => {
    const cardElement = cardsTemplate.cloneNode(true).content;
    const cardName = cardElement.querySelector('.element__paragraph');
    const cardImage = cardElement.querySelector('.element__image');

    cardImage.addEventListener('click', () => openBigImage(dataCard));
    cardName.textContent = dataCard.name;
    cardImage.src = dataCard.link;
    cardImage.alt = `Изображение ${dataCard.name}`;

    cardElement.querySelector('.element__like').addEventListener('click', function (event) {
        event.target.classList.toggle('element__like_enable');
    });

    const cardRemove = (event) => {
        event.target.closest('.element').remove();
    };
    const removeButton = cardElement.querySelector('.element__remove');
    removeButton.addEventListener('click', cardRemove);

    return cardElement
};
// Открытие большой картинки
const openBigImage = (dataBigImage) => {
    bigImageItem.src = dataBigImage.link;
    bigImageItem.alt = `Изображение ${dataBigImage.name}`;
    bigImageName.textContent = dataBigImage.name;

    togglePopup(bigImage);
};



initialCards.forEach((data) => {
    const cardItem = getCard(data);
    cardsElements.prepend(cardItem);
});

// Слушатели userPopup
popupUserOpenButton.addEventListener('click', openPopupUser);
popupUserCloseButton.addEventListener('click', () => togglePopup(popupUser));
formElement.addEventListener('submit', handlerUserFormSubmit);

// Слушатели карточек
openAddCard.addEventListener('click', () => {
    cardNameFormInput.value = '';
    cardLinkFormInput.value = '';
    togglePopup(popupAddCard)
});
submitCardForm.addEventListener('submit', handleCardFormSubmit);
closeAddCard.addEventListener('click', () => togglePopup(popupAddCard));

closebuttonBigImage.addEventListener('click', () => togglePopup(bigImage));