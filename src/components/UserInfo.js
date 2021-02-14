export class UserInfo {
  constructor(nameEditProfile, jobEditProfile) {
    this._nameEditProfile = nameEditProfile;
    this._JobEditProfile = jobEditProfile;
    this._name = "";
    this._job = "";
  }
  setUserInfo(userName, userJob) {
    this._nameEditProfile = userName;
    this._JobEditProfile = userJob;

  }
  updateUserInfo() {
    this._userName = this._nameEditProfile;
    this._userJob = this._JobEditProfile ;
    return {
      name: this._userName,
      job: this._userJob,
    };
  };

  getUserInfo() {
    return {
      name: this._nameEditProfile,
      job: this._JobEditProfile,
    };
  };
}
