class Weather {
  constructor(city, state) {
    this.api_key = "8ca812106e504c659b0131025231803";
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${this.city} ${this.state}`
    );

    const data = await response.json();

    return data;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
