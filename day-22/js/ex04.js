function display(element, data = " ") {
  element.innerHTML = data;
}
var postLists = [
  [
    "https://fastly.picsum.photos/id/316/536/354.jpg?hmac=BHeSVqUq4U-yGoidWx9o3Mx74IVlvl2INDNkNhuuDOQ",
    "Tiêu đề bài viết 1",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusantium nihil asperiores quis hic dolor delectus perferendis distinctio itaque odio, corporis, voluptatem accusamus doloremque consequuntur dolores, tempora pariatur impedit quo?",
  ],
  [
    "https://fastly.picsum.photos/id/316/536/354.jpg?hmac=BHeSVqUq4U-yGoidWx9o3Mx74IVlvl2INDNkNhuuDOQ",
    "Tiêu đề bài viết 2",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusantium nihil asperiores quis hic dolor delectus perferendis distinctio itaque odio, corporis, voluptatem accusamus doloremque consequuntur dolores, tempora pariatur impedit quo?",
  ],
  [
    "https://fastly.picsum.photos/id/316/536/354.jpg?hmac=BHeSVqUq4U-yGoidWx9o3Mx74IVlvl2INDNkNhuuDOQ",
    "Tiêu đề bài viết 3",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusantium nihil asperiores quis hic dolor delectus perferendis distinctio itaque odio, corporis, voluptatem accusamus doloremque consequuntur dolores, tempora pariatur impedit quo?",
  ],
];
var htmlElement = document.querySelector("#ex04 .post-list");
htmlElement.innerHTML = "";
var html = postLists
  .map(function (post) {
    return `
    <article class="post-item">
        <div class="post-image">
            <img src="${post[0]}" alt="img-1">
        </div>
        <div class="post-content">
            <h2 class="post-content-title">${post[1]}</h2>
            <p class="post-content-description">${post[2]}
            </p>
        </div>
    </article>
`;
  })
  .join("");
display(htmlElement, html);
