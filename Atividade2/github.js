async function getUserData(RoninJoao) {
    const response = await fetch(`https://api.github.com/RoninJoao`);
    const data = await response.json();
    return data;
  }
  
  async function getUserRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    return data;
  }

  