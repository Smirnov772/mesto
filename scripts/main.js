const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupSaveButton = document.querySelector('.popup__save-button');

let userName = document.querySelector('.profile__name');
let userOccupation = document.querySelector('.profile__occupation');

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__form-input_name');
let jobInput = document.querySelector('.popup__form-input_occupation');

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
}
formElement.addEventListener('submit', formSubmitHandler);
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', popupToggle);



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

const addCard = document.querySelector('.popupAddCard');
const addCardOpen = document.querySelector('.profile__add-button');
const addCardClose = document.querySelector('.popupAddCard__close-button');
const addCardSave = document.querySelector('.popupAddCard__save-button');
const cardsConteiner = document.querySelector('.elements');

const renderCard = () => {
    const items = initialCards.map(element => {
        return `        <div class="element">
        <img class="element__image" src="${element.link}" alt="Картинка">
        <p class="element__paragraph">${element.name}</p>
        <button class="element__like" type="button"></button>
    </div>`
    }).join(' ');

    cardsConteiner.insertAdjacentHTML('afterbegin', items)


};

renderCard();



let addCardForm = document.querySelector('.popupAddCard__container');

function addCardToggle() {
    addCard.classList.toggle('popupAddCard_disabled');
}





initialCards.forEach(function (item) {

}
)


function newCard(nameCard, linkCard) {
    const cardsTemplate = document.querySelector('#cards-template').content;
    const cardsItem = cardsTemplate.cloneNode(true);

    cardsItem.querySelector('.element__paragraph').textContent = nameCard;
    cardsItem.querySelector('.element__image').textContent = linkCard;

    cardsItem.querySelector('.element__like').addEventListener('click', function (evt) {
        console.log(evt);
    });

    cardsConteiner.append(cardsItem);
};


addCardOpen.addEventListener('click', addCardToggle);
addCardClose.addEventListener('click', addCardToggle);