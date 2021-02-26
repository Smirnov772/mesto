(()=>{"use strict";var e=document.querySelector(".popup-user"),t=document.querySelector(".profile__edit-button"),r=(document.querySelector(".popup__close-button"),document.querySelector(".profile__name")),s=document.querySelector(".profile__occupation"),o=document.querySelector(".popup__container"),n=o.querySelector(".popup__form-input_name"),i=o.querySelector(".popup__form-input_occupation"),a=document.querySelector(".big-image"),l=(document.querySelector(".big-image__item"),a.querySelector(".big-image__name"),document.querySelector(".big-image__close"),document.querySelector(".popup-add-card")),c=(l.querySelector(".popup-add-card__container"),document.querySelector(".profile__add-button")),h=(l.querySelector(".popup-add-card__close-button"),l.querySelector(".popup-add-card__form-input_link"),l.querySelector(".popup-add-card__form-input_place"),document.querySelector(".popup-avatar")),d=document.querySelector(".profile__avatar"),_=(h.querySelector(".popup__avatar-input"),document.querySelector(".elements")),u=document.querySelector(".popup-remove"),m=(document.querySelector(".element__remove"),_.querySelector(".element__like-number"),{formSelector:".popup__forms",inputSelector:".popup__form-input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__error_visible"});class p{constructor(e){this._popupElement=e,this._closeButton=this._popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}open(e){this._data=e,this._popupElement.addEventListener("click",this._handleOverlayClose),window.addEventListener("keydown",this._handleEscClose),this._popupElement.classList.add("popup_active")}close(){this._popupElement.removeEventListener("click",this._handleOverlayClose),window.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("popup_active")}_handleOverlayClose(e){e.target===e.currentTarget&&this.close()}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this._closeButton.addEventListener("click",(()=>this.close()))}renderLoading(e){e?(this._popupElement.querySelector(".popup__save-button").textContent="Сохранение...",console.log("render true")):(this._popupElement.querySelector(".popup__save-button").textContent="Сохранить",console.log("render folse"))}}class v extends p{constructor(e,t){super(e),this._form=this._popupElement.querySelector(".popup__forms"),this._handleFormSubmit=t}_getInputValues(){return this._inputList=this._popupElement.querySelectorAll(".popup__form-input"),this._formValues={},this._inputList.forEach((e=>this._formValues[e.name]=e.value)),this._formValues}setEventListeners(){this._form.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()})),super.setEventListeners()}close(){super.close(),this._form.reset()}}class k{constructor(e,t){var r=e.data,s=e.handleCardClick,o=e.HandlerRemoveCard,n=e.handleLikeClick,i=e.handleLikeRemove;this.data=r,this.handleLikeClick=n,this.HandlerRemoveCard=o,this.handleCardClick=s,this.handleLikeRemove=i,this.userId=r.userId,this.cardId=r._id,this.ownerId=r.owner._id,this.likesCounter=r.likes.length,this._likes=r.likes,this.name=r.name,this.link=r.link,this.alt=this.name,this._template=document.querySelector(t),console.log(this.likesCounter)}_getTemplate(){return this._template.content.querySelector(".element").cloneNode(!0)}renderCard(){return this._content=this._getTemplate(),this._content.querySelector(".element__paragraph").textContent=this.name,this._image=this._content.querySelector(".element__image"),this._image.src=this.link,this._image.alt="Изображение ".concat(this.name),this._likeButton=this._content.querySelector(".element__like"),this._lakesNumber=this._content.querySelector(".element__like-number"),this._content.querySelector(".element__remove").addEventListener("click",(()=>{this.HandlerRemoveCard(this.cardId)})),this._checkLike(),this._showDeleteIcon(),this._likeButton.addEventListener("click",this._buttonLike.bind(this)),this._image.addEventListener("click",(()=>this.handleCardClick(this.data))),this._content}_delete(){this._content.remove()}_checkLike(){this._likes.forEach((e=>{e._id===this.userId?(this._addLike(),this._lakesNumber.textContent=this.likesCounter):this._lakesNumber.textContent=this.likesCounter}))}_addLike(){this._likeButton.classList.add("element__like_enable"),console.log("вклlike")}_removeLike(){this._likeButton.classList.remove("element__like_enable"),console.log("выклlike")}setCardLiked(e){this._newLikes=e.likes.length,this._likeNumbers()}_likeNumbers(){this._lakesNumber.textContent=this._newLikes}_buttonLike(e){e.target.classList.contains("element__like_enable")?(console.log("выкл"),this.handleLikeRemove(this.cardId),this._removeLike()):(console.log("вкл"),this.handleLikeClick(this.cardId),this._addLike())}_showDeleteIcon(){this.ownerId!==this.userId&&this._content.querySelector(".element__remove").remove()}}class E{constructor(e,t){this._popupItem=t,this._formSelector=this._popupItem,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=document.querySelector(this._formSelector),this._inputElements=Array.from(this._form.querySelectorAll(this._inputSelector)),this.buttonElement=this._form.querySelector(this._submitButtonSelector)}_showError(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._inputErrorClass),e.classList.add(this._errorClass)}_hideError(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),this._errorElement.textContent="",this._errorElement.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass)}_checkInputValidity(e,t){t.validity.valid?this._hideError(t):this._showError(t)}_toggleButtonState(e,t,r){this._form.checkValidity()?(this.buttonElement.classList.remove(this._inactiveButtonClass),this.buttonElement.disabled=!1):(this.buttonElement.classList.add(this._inactiveButtonClass),this.buttonElement.disabled=!0)}_setEventListeners(){this._form.addEventListener("reset",(()=>{this._inputElements.forEach((e=>{this._hideError(e)})),this._toggleButtonState()})),this._inputElements.forEach((e=>{e.addEventListener("input",(e=>{this._checkInputValidity(this._inputElements,e.target),this._toggleButtonState()}))}))}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners(this._form),this._toggleButtonState()}}var b=e=>e.ok?e.json():Promise.reject("Сервер не доступен");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=new class extends p{constructor(e){super(e),this._imageLink=this._popupElement.querySelector(".big-image__item"),this._imageAlt=this._popupElement.querySelector(".big-image__item"),this._imageName=this._popupElement.querySelector(".big-image__name")}open(e){this._link=e.link,this._name=e.name,this._imageLink.src=this._link,this._imageLink.alt="Изображение ".concat(this._name),this._imageName.textContent=this._name,super.open()}}(a);L.setEventListeners();var S=new class{constructor(e){var t=e.url,r=e.cohortId,s=e.headers;this._url=t,this._cohortId=r,this._headers=s}getAllCards(){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards"),{method:"GET",headers:this._headers}).then(b)}addCard(e){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then(b)}getUserInfo(){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me"),{method:"GET",headers:this._headers}).then(b)}renameUser(e,t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then(b)}removeCard(e){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(b)}editAvatar(e){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then(b)}setLike(e){return console.log(e),fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(b)}removeLike(e){return console.log(e),fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(b)}}({url:"https://mesto.nomoreparties.co/v1",cohortId:"cohort-20",headers:{authorization:"8b4bf4c7-50a5-4055-8a00-6f47d910a5d3","Content-Type":"application/json"}});function C(e){var t=new k({data:g(g({},e),{},{userId:O.getMyId()}),handleCardClick:e=>{L.open(e)},HandlerRemoveCard:e=>{q.open(),q.submitActive((()=>{S.removeCard(e).then((()=>{t._delete()})).catch((e=>console.log(e)))}))},handleLikeClick:e=>{S.setLike(e).then((e=>{t.setCardLiked(e)}))},handleLikeRemove:e=>{S.removeLike(e).then((e=>{t.setCardLiked(e)}))}},".cards-template");return t.renderCard()}S.getUserInfo().then((e=>{console.log(e),O.setUserInfo(e)})).catch((e=>console.log(e))),S.getAllCards().then((e=>{I.renderedItems(e)})).catch((e=>console.log(e)));var q=new class extends p{constructor(e){super(e),this._buttonRemove=document.querySelector(".popup__remove-button")}submitActive(e){this._handleFormSubmit=e}setEventListeners(){this._buttonRemove.addEventListener("click",(()=>{this._handleFormSubmit(),this.close()})),super.setEventListeners()}}(u);q.setEventListeners();var I=new class{constructor(e,t){var r=e.renderer;this.renderer=r,this._container=t}renderedItems(e){e.forEach((e=>{this.renderer(e)}))}addItem(e){this._container.prepend(e)}}({renderer:e=>{I.addItem(C(e))}},_);new E(m,"#userForm").enableValidation(),new E(m,"#addCard").enableValidation();var w=new v(l,(e=>{w.renderLoading(!0),S.addCard(e).then((e=>{I.addItem(C(e))})).catch((e=>console.log(e))).finally((()=>{w.renderLoading(!1)}))}));w.setEventListeners();var O=new class{constructor(e,t,r){this._nameEditProfile=e,this._JobEditProfile=t,this._avatarEditProfile=r}setUserInfo(e){var t=e.name,r=e.about,s=e._id,o=e.avatar;this._nameEditProfile.textContent=t,this._JobEditProfile.textContent=r,this._id=s,this._avatarEditProfile.style.backgroundImage="url(".concat(o,")")}getMyId(){return this._id}getUserInfo(){return{name:this._nameEditProfile.textContent,job:this._JobEditProfile.textContent}}}(r,s,d),P=new v(e,(e=>{P.renderLoading(!0),S.renameUser(e.name,e.about).then((e=>{O.setUserInfo(e)})).catch((e=>console.log(e))).finally((()=>{P.renderLoading(!1)}))}));P.setEventListeners();var B=new v(h,(e=>{B.renderLoading(!0),S.editAvatar(e.link).then((e=>{O.setUserInfo(e)})).catch((e=>console.log(e))).finally((()=>{B.renderLoading(!1)}))}));B.setEventListeners(),d.addEventListener("click",(()=>{B.open()})),c.addEventListener("click",(()=>{w.open()})),d.addEventListener("click",(()=>{B.open()})),t.addEventListener("click",(()=>{P.open();var e=O.getUserInfo();n.value=e.name,i.value=e.job}))})();