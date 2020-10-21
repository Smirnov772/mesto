const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupSaveButton = document.querySelector('.popup__save-button');

const userName = document.querySelector('.profile__name');
const userOccupation = document.querySelector('.profile__occupation');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__form-input_name');
const jobInput = formElement.querySelector('.popup__form-input_occupation');

const bigImage = document.querySelector('.bigImage');
const bigImageItem = document.querySelector('.bigImage__item');
const closebuttonBigImage = document.querySelector('.bigImage__close');

const popupAddCard = document.querySelector('.popupAddCard')
const submitCardForm = popupAddCard.querySelector('.popupAddCard__container');
const openAddCard = document.querySelector('.profile__add-button');
const closeAddCard = popupAddCard.querySelector('.popupAddCard__close-button');
const addCardSave = popupAddCard.querySelector('.popupAddCard__save-button');
const cardLinkFormInput = popupAddCard.querySelector('.popupAddCard__form-input_link');
const cardNameFormInput = popupAddCard.querySelector('.popupAddCard__form-input_place');

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
    cardNameFormInput.value = '';
    cardLinkFormInput.value = '';
};

function openPopup() {
    nameInput.value = userName.textContent;
    jobInput.value = userOccupation.textContent;

    togglePopup(popup);
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userOccupation.textContent = jobInput.value;

    togglePopup(popup);
};

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
    const catrdName = cardElement.querySelector('.element__paragraph');
    const cardImage = cardElement.querySelector('.element__image');

    cardImage.addEventListener('click', () => openBigImage(dataCard));
    catrdName.textContent = dataCard.name;
    cardImage.src = dataCard.link;
    
    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_enable');
    });
    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_disable');
    });
const cardRemove = (evt) => {
    evt.target.closest('.element').remove();
};
    const removeButton = cardElement.querySelector('.element__remove');
    removeButton.addEventListener('click', cardRemove);

    return cardElement
};
// Открытие большой картинки
const openBigImage = (dataBigImage) => {
    bigImageItem.src = dataBigImage.link;
    bigImageItem.alt = `Изображение ${dataBigImage.title}`;

    togglePopup(bigImage);
};

initialCards.forEach((data) => {
    const cardItem = getCard(data);
    cardsElements.prepend(cardItem);
});

// Слушатели userPopup
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', () => togglePopup(popup));
formElement.addEventListener('submit', formSubmitHandler);

// Слушатели карточек
openAddCard.addEventListener('click', () => togglePopup(popupAddCard));
submitCardForm.addEventListener('submit', handleCardFormSubmit);
closeAddCard.addEventListener('click', () => togglePopup(popupAddCard));

closebuttonBigImage.addEventListener('click', () => togglePopup(bigImage));