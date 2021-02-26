import {
  popupUser,
  popupUserOpenButton,
  userName,
  userJob,
  nameInput,
  jobInput,
  bigImage,
  popupAddCard,
  openAddCard,
  avatarEdit,
  avatarEditOpen,
  cardsElement,
  popupRemove,
  enableValidation,
} from "../utils/constants.js";
import "./index.css";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Api } from "../components/Api.js";

const popupWithImage = new PopupWithImage(bigImage);
popupWithImage.setEventListeners();

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1",
  cohortId: "cohort-20",
  headers: {
    authorization: "8b4bf4c7-50a5-4055-8a00-6f47d910a5d3",
    "Content-Type": "application/json",
  },
});

api
  .getUserInfo()
  .then((dataUser) => {
    console.log(dataUser);
    userInfo.setUserInfo(dataUser);
  })
  .catch((err) => console.log(err));

api
  .getAllCards()
  .then((item) => {
    section.renderedItems(item);
  })
  .catch((err) => console.log(err));

function createCard(data) {
  const createCard = new Card(
    {
      data: { ...data, userId: userInfo.getMyId() },
      handleCardClick: (data) => {
        popupWithImage.open(data);
      },
      HandlerRemoveCard: (cardId) => {
        popupRemoveCard.open();
        popupRemoveCard.submitActive(() => {
          api
            .removeCard(cardId)
            .then(() => {
              createCard._delete();
            })
            .catch((err) => console.log(err));
        });
      },
      handleLikeClick: (cardId) => {
        api.setLike(cardId).then((res) => {
          // createCard._addLike(res);
          createCard.setCardLiked(res);
        });
      },
      handleLikeRemove: (cardId) => {
        api.removeLike(cardId).then((res) => {
          //  createCard._removeLike(res);
          createCard.setCardLiked(res);
        });
      },
    },
    ".cards-template"
  );

  const card = createCard.renderCard();
  return card;
}

// Инициализация классов
const popupRemoveCard = new PopupWithSubmit(popupRemove);
popupRemoveCard.setEventListeners();
const section = new Section(
  {
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
  addCardWithForm.renderLoading(true);
  api
    .addCard(item)
    .then((res) => {
      section.addItem(createCard(res));
    })
    .catch((err) => console.log(err))
    .finally(() => {
      addCardWithForm.renderLoading(false);
    });
});

addCardWithForm.setEventListeners();

const userInfo = new UserInfo(userName, userJob, avatarEditOpen);
const userWithForm = new PopupWithForm(popupUser, (item) => {
  userWithForm.renderLoading(true);
  api
    .renameUser(item.name, item.about)
    .then((dataUser) => {
      userInfo.setUserInfo(dataUser);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      userWithForm.renderLoading(false);
    });
});
userWithForm.setEventListeners();

//-------------
//редактирования аватара
const avatarWithForm = new PopupWithForm(avatarEdit, (avatarId) => {
  avatarWithForm.renderLoading(true);
  api
    .editAvatar(avatarId.link)
    .then((dataUser) => {
      userInfo.setUserInfo(dataUser);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      avatarWithForm.renderLoading(false);
    });
});
//   avatarImg(avatarId.link);
// });
avatarWithForm.setEventListeners();
avatarEditOpen.addEventListener("click", () => {
  avatarWithForm.open();
});
//----------

// открытие попапа добавления карточек
openAddCard.addEventListener("click", () => {
  addCardWithForm.open();
});
//------------
//открытие попапа редактирования аватара
avatarEditOpen.addEventListener("click", () => {
  avatarWithForm.open();
});
// открытие userPopup
popupUserOpenButton.addEventListener("click", () => {
  userWithForm.open();

  const getUserInfo = userInfo.getUserInfo();
  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;
});
