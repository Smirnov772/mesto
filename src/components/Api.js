const onError = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject("Сервер не доступен");
};

export class Api {
  constructor({ url, cohortId, headers }) {
    this._url = url;
    this._cohortId = cohortId;
    this._headers = headers;
  }
  getAllCards() {
    return fetch(`${this._url}/${this._cohortId}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(onError);
  }

  addCard(dataCards) {
    return fetch(`${this._url}/${this._cohortId}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: `${dataCards.name}`,
        link: `${dataCards.link}`,
        _id:  `${dataCards.curentId}`
      })
    }).then(onError);
  }

  getUserInfo() {
    return fetch(`${this._url}/${this._cohortId}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(onError);
  }

  renameUser(name, job) {
    return fetch(`${this._url}/${this._cohortId}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        about: `${job}`,
      }),
    }).then(onError);
  }

  removeCard(id) {
    return fetch(`${this._url}/${this._cohortId}/cards`, {
      method: "DELETE",
      headers: this._headers,
    }).then(onError);
  }

  // getUserInfo() {
  //   return fetch(
  //     `${this._url}/users/me`,
  //     {
  //       method: "GET",
  //       headers: this.headers,
  //     }
  //   ).then(onError);
  // }

  // renameUser(){
  //   return fetch(
  //     `${this._url}/users/me`,
  //     {
  //       method: "PATCH",
  //       headers: this.headers,
  //       body: JSON.stringify(data),
  //     }
  //   ).then(onError);
  // }

  // getAllTask() {
  //   return fetch(this._url, {
  //     method: "GET",
  //     headers: this.headers,
  //   }).then((data) => console.log(data.text));
  // }
  // getInitialCard() {
  //   return fetch(`${this._url}cards`, {headers: this.headers }).then(
  //     (res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }return Promise.reject(`Ошибка: ${res.status}`)
  //     }
  //     );
  //   }
}
