let currentPage = 1;
let isFetching = false;
let hasMore = true;
const urlApi = `https://ld6jtf-8080.csb.app`;
const getBlogs = async () => {
  try {
    isFetching = true;
    let response = await fetch(`${urlApi}/blogs?_page=${currentPage}&_limit=5`);
    if (!response.ok) {
      throw new Error("Fetch API Error");
    }
    let data = await response.json();
    isFetching = false;
    if (data.length === 0) {
      hasMore = false;
      return;
    }
    render(data);
    currentPage++;
  } catch (e) {
    console.log(e.message);
  }
};
window.addEventListener("scroll", () => {
  if (isFetching || !hasMore) {
    return;
  }
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    getBlogs();
  }
});
const render = (blogs) => {
  const blogsContainer = document.querySelector(".blogs-container");
  for (let { avatar, name, title, content } of blogs) {
    let div = document.createElement("div");
    div.className = "blog-item";
    div.innerHTML = `<a href="#" target="_blank" class="blog-info">
                <img class="avatar"
                    src="${avatar}"
                    alt="">
                <span class="name">${name}</span>
            </a>
            <div class="blog-content">
                <h3 class="title">${title}</h3>
                <p class="content">${content}</p>
            </div>`;
    blogsContainer.appendChild(div);
  }
};
getBlogs();
