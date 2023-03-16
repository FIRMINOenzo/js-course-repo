class GitHub {
  constructor() {
    this.client_id = "3a3875b7edb93d8f12a5";
    this.client_secret = "34fa47ea2eefd94e9c25f7f0c1b70427883ddee4";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json(),
      repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
