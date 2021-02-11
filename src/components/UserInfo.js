export class UserInfo {
  constructor(nameEditProfile, jobEditProfile) {
    this._nameEditProfile = nameEditProfile;
    this._JobEditProfile = jobEditProfile;
    this._job = "";
    this._name = "";
  }
  setUserInfo(newName, newJob) {
    this._name = newName;
    this._job = newJob;
  }
  updateUserInfo() {
    this._userName = this._name;
    this._userJob = this._job;
    return {
      name: this._userName,
      job: this._userJob,
    };
  };

  getUserInfo() {
    return {
      name: this._name,
      job: this._job,
    };
  };
}
