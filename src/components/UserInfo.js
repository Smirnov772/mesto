export class UserInfo {
  constructor(nameEditProfile, jobEditProfile, avatarEditProfile) {
    this._nameEditProfile = nameEditProfile;
    this._JobEditProfile = jobEditProfile;
    this._avatarEditProfile = avatarEditProfile;

  }
  setUserInfo({ name, about, _id, avatar }) {
    this._nameEditProfile.textContent = name;
    this._JobEditProfile.textContent = about;
    this._id = _id;
    this._avatarEditProfile.style.backgroundImage = `url(${avatar})`;

  }

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
