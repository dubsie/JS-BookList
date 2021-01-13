// Book Class: Represents a book

class Book {
    constructor(title, author, isbn)  {
      this.title = title;
      this.author = author;
      this.isbn = isbn;  
    }
}

//UI Class: Handle UI Class

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '343444'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '356444'
            }
        ];

        const books=StoredBooks;

        books.forEach((book) => UI.addBookToList(book));

    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML= `
            <td>${book.title}</td> 
            <td>${book.author}</td> 
            <td>${book.isbn}</td> 
            <td><a href="#" class="btn btn-danger brn-sm delete">X</a></td>
        `;

        list.appendChild(row);

    }    
}


 
//Store Class: Handles Storage


//Event: Display books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a book

//Event: Remove a book
