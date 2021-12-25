let mainDiv = document.querySelector("#main-book-div");

//click add show form, toggle to hide, run checkforsubmit
function showForm() {
    let addBtn = document.querySelector("#book-btn");
    let form = document.querySelector("#bookForm");

    addBtn.addEventListener("click", () => {
        if (form.classList.contains("hide")) {
            form.classList.toggle("show");
        }
    })
    checkForSubmit()
}

//check for submit -- run add book if fields are filled, no refresh
function checkForSubmit() {
    let button = document.querySelector("#submit");

    button.addEventListener("click", (event) => {
        addBookToPage();
        event.preventDefault();
    })
}

//loop through each node add to a single div, clear form after submit, 
function addBookToPage() {
    let allInput = document.querySelectorAll('input');
    let div = document.createElement("div");
    let button = document.createElement("button");
    div.className = "book-div";

    allInput.forEach((book) => {
        let newDiv = document.createElement("div");
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
    let form = document.querySelector("#bookForm");

    form.classList.toggle("show");
    form.reset();
}



function deleteBook() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

showForm();
