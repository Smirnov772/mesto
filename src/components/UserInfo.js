export class UserInfo {
  constructor(nameEditProfile, jobEditProfile, avatarEditProfile) {
    this._nameEditProfile = nameEditProfile;
    this._JobEditProfile = jobEditProfile;
    this._avatarEditProfile = avatarEditProfile;
    // this._name = "";
    // this._job = "";
  }
  setUserInfo({ name, about, _id, avatar }) {
    this._nameEditProfile.textContent = name;
    this._JobEditProfile.textContent = about;
    this._id = _id;
    this._avatarEditProfile.style.backgroundImage = `url(${avatar})`;
    // this.avatar.style.backgroundImage = `url(${dataUser.avatar})`;
  }
  // updateUserInfo() {
  //   this._userName = this._nameEditProfile;
  //   this._userJob = this._JobEditProfile ;
  //   return {
  //     name: this._userName,
  //     job: this._userJob,
  //   };
  // };
  getMyId() {
    return this._id;
  }
  getUserInfo() {
    return {
      name: this._nameEditProfile.textContent,
      job: this._JobEditProfile.textContent,

    };
  }
}
