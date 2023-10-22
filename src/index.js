//Write your code here
class API {
  #secure;
  constructor(url) {
    this.url = url;
    this.method = "GET";
    this.#secure = url.startsWith("https");
  }
  isSecure() {
    return this.#secure;
  }
  updateUrl(url) {
    this.#secure = url.startsWith("https");
  }
}

//Do not remove this code
module.exports = { API };
