import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import books from "./books.json";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook />
        ) : (
          <div>
            <ListBookTitle />
            <ListBookContent books={books} />
            <ButtonAddBook />
          </div>
        )}
      </div>
    );
  }
}

class BookshelfBooks extends Component {
  render() {
    const { book } = this.props;
    console.log(book);
    return (
      <li>
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
              <select>
                <option value="move" disabled>
                  Move to...
                </option>
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
    );
  }
}
class BookshelfTitle extends Component {
  render() {
    const { shelf } = this.props;
    return <h2 className="bookshelf-title">{shelf}</h2>;
  }
}

// class BookshelfList extends Component {
//   render() {
//     return (
//       <div className="bookshelf-books">
//         <ol className="books-grid">
//           <BookshelfBooks book={book} key={book.id} />
//         </ol>
//       </div>
//     );
//   }
// }

class ListBookContent extends Component {
  render() {
    const bookShelves = [];
    // const bookList = [];
    let currentShelf = "";
    const { books } = this.props;
    const allbooks = books.books;

    allbooks.forEach((book, index) => {
      if (book.shelf !== currentShelf) {
        bookShelves.push(<BookshelfTitle shelf={book.shelf} key={index} />);
      }

      bookShelves.push(
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BookshelfBooks book={book} key={book.id} />
          </ol>
        </div>
      );
      currentShelf = book.shelf;
    });
    console.log(bookShelves);
    return (
      <div className="list-books-content">
        <div className="bookshelf">{bookShelves}</div>
      </div>
    );
  }
}
class ListBookTitle extends Component {
  render() {
    return (
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
    );
  }
}

class ButtonAddBook extends Component {
  render() {
    return (
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </button>
      </div>
    );
  }
}

class SearchBookBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => this.setState({ showSearchPage: false })}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
    );
  }
}

class SearchBookResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    );
  }
}

class SearchBook extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBookBar />
        <SearchBookResults />
      </div>
    );
  }
}

export default BooksApp;
