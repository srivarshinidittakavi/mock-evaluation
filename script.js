let books = [];
const bookList = document.getElementById("bookList");
const bookForm = document.getElementById("bookForm");
const sortAsc = document.getElementById("sortAsc");
const sortDesc = document.getElementById("sortDesc");
const filterCategory = document.getElementById("filterCategory");

const imageUrl = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  const book = { title, author, category, imageUrl };
  books.push(book);
  renderBooks(books);
  bookForm.reset();
});

sortAsc.addEventListener("click", () => {
  books.sort((a, b) => a.title.localeCompare(b.title));
  renderBooks(books);
});

sortDesc.addEventListener("click", () => {
  books.sort((a, b) => b.title.localeCompare(a.title));
  renderBooks(books);
});

filterCategory.addEventListener("change", () => {
  const value = filterCategory.value;
  if (value === "All") renderBooks(books);
  else renderBooks(books.filter(book => book.category === value));
});

function renderBooks(list) {
  bookList.innerHTML = "";
  list.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${book.imageUrl}" alt="Book">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.category}</p>
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    bookList.appendChild(card);
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  renderBooks(books);
}