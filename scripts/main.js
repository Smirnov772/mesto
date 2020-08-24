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
//popupSaveButton.addEventListener('click', formSubmitHandler);
console.log(nameInput);
console.log(jobInput);