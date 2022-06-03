import { React, Component } from "react";

class BookshelfBooks extends Component {
  handleSelect = (e, book) => {
    let shelf = e.target.value;
    // console.log(shelf);
    // console.log(book);
    if (shelf !== "none") {
      if (this.props.onUpdateBookShelf) {
        this.props.onUpdateBookShelf(book, shelf);
      }
    }
  };

  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 192,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`,
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select
                    id={book.id}
                    onChange={(e) => this.handleSelect(e, book)}
                  >
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default BookshelfBooks;
