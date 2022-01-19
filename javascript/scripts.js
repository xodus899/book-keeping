//click add show form, toggle to hide, run checkforsubmit
function showForm() {
  const addBtn = document.querySelector("#book-btn");
  const form = document.querySelector("#bookForm");

    addBtn.addEventListener("click", () => {
      if (form.classList.contains("hide")) {
        form.classList.toggle("show");
      }
    })
    checkForSubmit();
}
showForm();

//check for submit -- run add book if fields are filled, no refresh
function checkForSubmit() {
  const button = document.querySelector("#submit");

  button.addEventListener("click", (event) => {
    addBookToPage();
    event.preventDefault();
  })
}

//loop through each node add to a single div, clear form after submit, 
function addBookToPage() {
  const mainDiv = document.querySelector("#main-book-div");
  const allInput = document.querySelectorAll('input');
  const div = document.createElement("div");
  const button = document.createElement("button");
  div.className = "book-div";

  allInput.forEach((book) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = `${book.name}: ${book.value}`;
    div.appendChild(newDiv);
  });

  function CreateDeleteButton() {
    button.innerText = "Delete";
    button.className = "delete";
    button.addEventListener("click", deleteBook, false);
  }

  resetForm();
  CreateDeleteButton()
  mainDiv.appendChild(div);
  div.appendChild(button);
}

//select form and reset on submit.
function resetForm() {
  const form = document.querySelector("#bookForm");

  form.classList.toggle("show");
  form.reset();
}

function deleteBook(event) {
  return event.target.closest(".book-div").remove();
}

// ----- input field check -----

const formDiv = document.querySelector('.form-div');

function checkForEmptyInputs() {
  const button = document.querySelector("#submit");
  const inputs = [...formDiv.querySelectorAll('input')];
  const error = document.querySelector('.error')

  const isEmpty = inputs.some(input => !input.value);
  button.disabled = isEmpty;
  button.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
}

formDiv.addEventListener('input', checkForEmptyInputs);

checkForEmptyInputs();
