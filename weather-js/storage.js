class LS {
  constructor() {
    this.city;
    this.state;
    this.default_city = "Sao Paulo";
    this.default_state = "Sao Paulo";
  }

  getLocationData() {
    if (!localStorage.getItem("city")) {
      this.city = this.default_city;
      this.state = this.default_state;
    } else {
      this.city = localStorage.getItem("city");
      this.state = localStorage.getItem("state");
    }

    return {
      city: this.city,
      state: this.state,
    };
  }

  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}
