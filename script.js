let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

const formValidation = () => {
  if (input.value === "") msg.innerHTML = "Task cannot be blank";
  else {
    msg.innerHTML = "";
    acceptData();
    createPost();
    input.value = "";
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
};

const editPost = (e) => {
  console.log(e.parentElement.previousElementSibling.innerHTML);
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let createPost = () => {
  posts.innerHTML += `
          <div>
            <p>${data.text}</p>
            <span class="options">
              <i class="fas fa-edit" onClick="editPost(this)"></i>
              <i class="fas fa-trash-alt" onClick="deletePost(this)"></i>  
            </span>
          </div>
  `;
};
