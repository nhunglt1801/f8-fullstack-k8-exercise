let currentPage = 1;
let limit = 5;
let isFetching = false;
let hasMore = true;
const urlApi = `https://ld6jtf-8080.csb.app`;
const blogsContainer = document.querySelector(".blogs-container");
const loadingElement = document.getElementById("loading");
const observerElement = document.getElementById("observer");
const getBlogs = async () => {
  try {
    loadingElement.style.display = "block";
    isFetching = true;
    let response = await fetch(
      `${urlApi}/blogs?_page=${currentPage}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Fetch API Error");
    }
    let data = await response.json();
    isFetching = false;

    loadingElement.style.display = "none";
    if (data.length === 0) {
      hasMore = false;
      observer.disconnect();
      return;
    }
    render(data);
    currentPage++;
  } catch (e) {
    loadingElement.style.display = "none";
    console.log(e.message);
  }
};
// window.addEventListener("scroll", () => {
//   if (isFetching || !hasMore) {
//     return;
//   }
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     getBlogs();
//   }
// });
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !isFetching && hasMore) {
      getBlogs();
    }
  },
  {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
  }
);

observer.observe(observerElement);
const render = (blogs) => {
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
