import { React, Component } from "react";
import BookshelfBooks from "./BookshelfBooks";
import BookshelfTitle from "./BookshelfTitle";

class ListBookContent extends Component {
  render() {
    const Shelves = [];
    let currentShelf = "";
    const { books, onUpdateShelf } = this.props;
    const allbooks = books;

    allbooks.forEach((book) => {
      if (book.shelf !== currentShelf) {
        Shelves.push(book.shelf);
      }
      currentShelf = book.shelf;
    });

    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {Shelves.map((shelf, index) => (
            <div className="bookshelf" key={index}>
              <BookshelfTitle shelf={shelf} key={index} />
              <div className="bookshelf-books">
                <BookshelfBooks
                  books={allbooks.filter(
                    (book) => book.shelf.toLowerCase() === shelf.toLowerCase()
                  )}
                  onUpdateBookShelf={onUpdateShelf}
                />
              </div>
            </div>
          ))}
          /
        </div>
      </div>
    );
  }
}

export default ListBookContent;
