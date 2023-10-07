import { Component, VERSION } from '@angular/core';

interface Book {
  bookTitle: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books: Book[] = [
    {
      bookTitle: 'МертвыеДуши',
      author: 'Гоголь',
    },
    {
      bookTitle: 'ГореОтУма',
      author: 'Грибоедов',
    },
    {
      bookTitle: 'ВойнаИМир',
      author: 'Толстой',
    },
  ];

  create_book = {
    bookTitle: null,
    author: null,
  };

  createBook() {
    this.books.push({
      bookTitle: this.create_book.bookTitle,
      author: this.create_book.author,
    });
  }
}
