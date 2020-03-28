const listRepo = async username => {
  const repo = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then(res => res.json())
    .catch(e => console.log(e));

  const markup = repo.map(
    r =>
      `<li><a href="${r.html_url}"> ${r.name} </a> (⭐️ ${r.stargazers_count})</li>`
  );
  const content = document.getElementById("content");
  content.innerHTML = `<ul> ${markup} </ul>`;
};

listRepo("jlengstorf");
