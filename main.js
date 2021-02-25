(()=>{"use strict";class e{constructor(e){this.popupElement=e,this.closeButton=this.popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}open(e){this._data=e,this.popupElement.addEventListener("click",this._handleOverlayClose),window.addEventListener("keydown",this._handleEscClose),this.popupElement.classList.add("popup_active")}close(){this.popupElement.removeEventListener("click",this._handleOverlayClose),window.removeEventListener("keydown",this._handleEscClose),this.popupElement.classList.remove("popup_active")}_handleOverlayClose(e){e.target===e.currentTarget&&this.close()}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this.closeButton.addEventListener("click",(()=>this.close()))}renderLoading(e){e?(this.popupElement.querySelector(".popup__save-button").textContent="Сохранение...",console.log("render true")):(this.popupElement.querySelector(".popup__save-button").textContent="Сохранить",console.log("render folse"))}}class t extends e{constructor(e,t){super(e),this._form=this.popupElement.querySelector(".popup__forms"),this._handleFormSubmit=t}_getInputValues(){return this._inputList=this.popupElement.querySelectorAll(".popup__form-input"),this._formValues={},this._inputList.forEach((e=>this._formValues[e.name]=e.value)),this._formValues}setEventListeners(){this._form.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()})),super.setEventListeners()}close(){super.close(),this._form.reset()}renderLoading(e){super.renderLoading(e)}}class r{constructor(e,t){var r=e.data,s=e.handleCardClick,o=e.HandlerRemoveCard,n=e.handleLikeClick,i=e.handleLikeRemove;this.data=r,this.handleLikeClick=n,this.HandlerRemoveCard=o,this.handleCardClick=s,this.handleLikeRemove=i,this.userId=r.userId,this.cardId=r._id,this.ownerId=r.owner._id,this.likesCounter=r.likes.length,this.likes=r.likes,this.name=r.name,this.link=r.link,this.alt=this.name,this._template=document.querySelector(t),console.log(this.likesCounter)}_getTemplate(){return this._template.content.querySelector(".element").cloneNode(!0)}renderCard(){return this._content=this._getTemplate(),this._content.querySelector(".element__paragraph").textContent=this.name,this.image=this._content.querySelector(".element__image"),this.image.src=this.link,this.image.alt="Изображение ".concat(this.name),this.likeButton=this._content.querySelector(".element__like"),this.lakesNumber=this._content.querySelector(".element__like-number"),this._content.querySelector(".element__remove").addEventListener("click",(()=>{this.HandlerRemoveCard(this.cardId)})),this._checkLike(),this._showDeleteIcon(),this.likeButton.addEventListener("click",this._buttonLike.bind(this)),this.image.addEventListener("click",(()=>this.handleCardClick(this.data))),this._content}_delete(){this._content.remove()}_checkLike(){this.likes.forEach((e=>{e._id===this.userId?(this._addLike(),this.lakesNumber.textContent=this.likesCounter):this.lakesNumber.textContent=this.likesCounter}))}_addLike(){this.likeButton.classList.add("element__like_enable"),console.log("вклlike")}_removeLike(){this.likeButton.classList.remove("element__like_enable"),console.log("выклlike")}setCardLiked(e){this.newLikes=e.likes.length,this._likeNumbers()}_likeNumbers(){this.lakesNumber.textContent=this.newLikes}_buttonLike(e){e.target.classList.contains("element__like_enable")?(console.log("выкл"),this.handleLikeRemove(this.cardId),this._removeLike()):(console.log("вкл"),this.handleLikeClick(this.cardId),this._addLike())}_showDeleteIcon(){this.ownerId!==this.userId&&this._content.querySelector(".element__remove").remove()}}class s{constructor(e,t){this.popupItem=t,this._formSelector=this.popupItem,this.formSelector=e.formSelector,this.inputSelector=e.inputSelector,this.submitButtonSelector=e.submitButtonSelector,this.inactiveButtonClass=e.inactiveButtonClass,this.inputErrorClass=e.inputErrorClass,this.errorClass=e.errorClass,this.form=document.querySelector(this._formSelector),this.inputElements=Array.from(this.form.querySelectorAll(this.inputSelector)),this.buttonElement=this.form.querySelector(this.submitButtonSelector)}_showError(e){this.errorElement=this.form.querySelector("#".concat(e.id,"-error")),this.errorElement.textContent=e.validationMessage,this.errorElement.classList.add(this.inputErrorClass),e.classList.add(this.errorClass)}_hideError(e){this.errorElement=this.form.querySelector("#".concat(e.id,"-error")),this.errorElement.textContent="",this.errorElement.classList.remove(this.inputErrorClass),e.classList.remove(this.errorClass)}_checkInputValidity(e,t){t.validity.valid?this._hideError(t):this._showError(t)}_toggleButtonState(e,t,r){this.form.checkValidity()?(this.buttonElement.classList.remove(this.inactiveButtonClass),this.buttonElement.disabled=!1):(this.buttonElement.classList.add(this.inactiveButtonClass),this.buttonElement.disabled=!0)}_setEventListeners(){this.inputElements.forEach((e=>{e.addEventListener("input",(e=>{this._checkInputValidity(this.inputElements,e.target),this._toggleButtonState()}))}))}enableValidation(){this.form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners(this.form),this._toggleButtonState()}cleanValid(){this.inputElements.forEach((e=>this._hideError(e)))}}var o=e=>e.ok?e.json():Promise.reject("Сервер не доступен");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=document.querySelector(".popup-user"),c=document.querySelector(".profile__edit-button"),h=(document.querySelector(".popup__close-button"),document.querySelector(".profile__name")),d=document.querySelector(".profile__occupation"),u=document.querySelector(".popup__container"),m=u.querySelector(".popup__form-input_name"),p=u.querySelector(".popup__form-input_occupation"),_=document.querySelector(".big-image"),v=(document.querySelector(".big-image__item"),_.querySelector(".big-image__name"),document.querySelector(".big-image__close")),k=document.querySelector(".popup-add-card"),E=(k.querySelector(".popup-add-card__container"),document.querySelector(".profile__add-button")),b=(k.querySelector(".popup-add-card__close-button"),k.querySelector(".popup-add-card__form-input_link"),k.querySelector(".popup-add-card__form-input_place"),document.querySelector(".popup-avatar")),g=document.querySelector(".profile__avatar"),f=(b.querySelector(".popup__avatar-input"),document.querySelector(".elements")),y=document.querySelector(".popup-remove"),L=(document.querySelector(".element__remove"),f.querySelector(".element__like-number"),{formSelector:".popup__forms",inputSelector:".popup__form-input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__error_visible"}),C=new class extends e{constructor(e){super(e),this.imageLink=this.popupElement.querySelector(".big-image__item"),this.imageAlt=this.popupElement.querySelector(".big-image__item"),this.imageName=this.popupElement.querySelector(".big-image__name")}open(e){this.link=e.link,this.name=e.name,this.imageLink.src=this.link,this.imageAlt.alt="Изображение ".concat(this.name),this.imageName.textContent=this.name,super.open()}}(_);C.setEventListeners(v);var S=new class{constructor(e){var t=e.url,r=e.cohortId,s=e.headers;this._url=t,this._cohortId=r,this._headers=s}getAllCards(){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards"),{method:"GET",headers:this._headers}).then(o)}addCard(e){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then(o)}getUserInfo(){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me"),{method:"GET",headers:this._headers}).then(o)}renameUser(e,t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then(o)}removeCard(e){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(o)}editAvatar(e){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then(o)}setLike(e){return console.log(e),fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(o)}removeLike(e){return console.log(e),fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(o)}}({url:"https://mesto.nomoreparties.co/v1",cohortId:"cohort-20",headers:{authorization:"8b4bf4c7-50a5-4055-8a00-6f47d910a5d3","Content-Type":"application/json"}});function q(e){var t=new r({data:i(i({},e),{},{userId:P.getMyId()}),handleCardClick:e=>{C.open(e)},HandlerRemoveCard:e=>{I.open(),I.submitActive((()=>{S.removeCard(e).then((()=>{t._delete()})).catch((e=>console.log(e)))}))},handleLikeClick:e=>{S.setLike(e).then((e=>{t.setCardLiked(e)}))},handleLikeRemove:e=>{S.removeLike(e).then((e=>{t.setCardLiked(e)}))}},".cards-template");return t.renderCard()}S.getUserInfo().then((e=>{console.log(e),P.setUserInfo(e),x(e.avatar)})).catch((e=>console.log(e))),S.getAllCards().then((e=>{w.renderedItems(e)})).catch((e=>console.log(e)));var I=new class extends e{constructor(e){super(e),this.buttonRemove=document.querySelector(".popup__remove-button")}submitActive(e){this._handleFormSubmit=e}open(){super.open()}setEventListeners(){this.buttonRemove.addEventListener("click",(()=>{this._handleFormSubmit(),this.close()})),super.setEventListeners()}close(){super.close()}}(y);I.setEventListeners();var w=new class{constructor(e,t){var r=e.renderer;this.renderer=r,this._container=t}renderedItems(e){e.forEach((e=>{this.renderer(e)}))}addItem(e){this._container.prepend(e)}}({renderer:e=>{w.addItem(q(e))}},f);new s(L,"#userForm").enableValidation(),new s(L,"#addCard").enableValidation();var O=new t(k,(e=>{O.renderLoading(!0),S.addCard(e).then((e=>{w.addItem(q(e))})).catch((e=>console.log(e))).finally((()=>{O.renderLoading(!1)}))}));O.setEventListeners();var P=new class{constructor(e,t){this._nameEditProfile=e,this._JobEditProfile=t}setUserInfo(e){var t=e.name,r=e.about,s=e._id;this._nameEditProfile.textContent=t,this._JobEditProfile.textContent=r,this._id=s}getMyId(){return this._id}getUserInfo(){return{name:this._nameEditProfile.textContent,job:this._JobEditProfile.textContent}}}(h,d),B=new t(l,(e=>{B.renderLoading(!0),S.renameUser(e.name,e.about).then((()=>{})).catch((e=>console.log(e))).finally((()=>{B.renderLoading(!1)})),P.setUserInfo(e)}));B.setEventListeners();var j=new t(b,(e=>{j.renderLoading(!0),S.editAvatar(e.link).then((t=>{x(e.link)})).catch((e=>console.log(e))).finally((()=>{j.renderLoading(!1)}))}));function x(e){g.style.backgroundImage="url(".concat(e,")")}j.setEventListeners(),g.addEventListener("click",(()=>{j.open()})),E.addEventListener("click",(()=>{O.open()})),g.addEventListener("click",(()=>{j.open()})),c.addEventListener("click",(()=>{B.open();var e=P.getUserInfo();m.value=e.name,p.value=e.job}))})();