const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupSaveButton = document.querySelector('.popup__save-button');

function popupToggle() {
    popup.classList.toggle('popup__open');
};

let formElement = document.querySelector('.popup__forms')
function formSubmitHandler(evt) {
    evt.preventDefault();
    
    let nameInput = formElement.querySelector('.popup__form-name');
    let jobInput = formElement.querySelector('.popup__form-occupation');

    let profile = document.querySelector('.profile');
    let profileInfo = profile.querySelector('.profile__info');
    let userNameNew = profileInfo.querySelector('.profile__name');
    let userOccupationNew = profileInfo.querySelector('.profile__occupation');
console.log
    userNameNew.textContent = nameInput.value;
    userOccupationNew.textContent = jobInput.value;
    popupToggle();
};
formElement.addEventListener('submit', formSubmitHandler);
popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupSaveButton.addEventListener('click', formSubmitHandler);
console.log(formSubmitHandler);
// let formElement = document.querySelector('.popup__container');
//let formElement = document.querySelector ('popup__forms')
// let nameInput = formElement.querySelector('.popup__form-name').textContent;

// let profileName = formElement.querySelector('.profile__name');
// nameInput = profileName.textContent;

// let jobInput = document.querySelector('.popup__form-occupation').textContent;
// let profileOccupation = document.querySelector('.profile__occupation');
// profileOccupation = jobInput.textContent;
//formElement.addEventListener('submit', formSubmitHandler);
// let userName = document.getElementById('userName');
// let userNameNew = userName.textContent;
// let placeholder = document.querySelector('');
// userNameNew.setAttribute('profile__name', placeholder);

// Находим форму в DOM
//function formSubmitHandler (evt) {
 //   evt.preventDefault();
  //  

   // let jobInput = document.querySelector ('popup__form-occupation');

//};
// formElement.addEventListener('submit', formSubmitHandler);