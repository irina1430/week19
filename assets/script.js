function addPost() {
  const postList = document.getElementById("postList");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        const listItem = document.createElement("li");
        const title = document.createElement("h3");
        title.textContent = `Заголовок: ${post.title}`;
        const body = document.createElement("p");
        body.textContent = `Статья: ${post.body}`;
        listItem.appendChild(title);
        listItem.appendChild(body);
        postList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Ошибка загрузки постов:", error);
    });
}
addPost();
