class EasyHTTP {
  async get(url) {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const datas = await response.json();

    return datas;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const datas = await response.json();

    return datas;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  }
}

export const http = new EasyHTTP();
