export class UserInfo {
  constructor(nameEditProfile, JobEditProfile) {
    this._nameEditProfile = nameEditProfile;
    this._JobEditProfile = JobEditProfile;
    this._job = "";
    this._name = "";
  }
  setUserInfo(newName, newJob) {
    this._name = newName;
    this._job = newJob;

  }
  updateUserInfo = () => {
    this._userName= this._name ;
    this._userJob = this._job;
    return {
      name: this._userName,
      job: this._userJob, 
    }
    //console.log( this._userName);
  };


  getUserInfo = () => {
    return {
      name: this._name,
      job: this._job,
    };
  };
}
