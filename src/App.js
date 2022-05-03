import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  showSearch = (showSearchPage) => {
    this.setState({ showSearchPage: true });
  };

  closeSearch = (showSearchPage) => {
    this.setState({ showSearchPage: false });
  };
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook searchpage={this.closeSearch} />
        ) : (
          <div>
            <ListBookTitle />
            <ListBookContent books={this.state.books} />
            <ButtonAddBook searchpage={this.showSearch} />
          </div>
        )}
      </div>
    );
  }
}

class BookshelfBooks extends Component {
  render() {
    const { books } = this.props;
    return (
      <ol className="books-grid">
        {books.map((book, index) => (
          <li key={index}>
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
        ))}
      </ol>
    );
  }
}
class BookshelfTitle extends Component {
  render() {
    const { shelf } = this.props;
    return <h2 className="bookshelf-title">{shelf}</h2>;
  }
}

class ListBookContent extends Component {
  render() {
    const Shelves = [];
    let currentShelf = "";
    const { books } = this.props;
    const allbooks = books;

    allbooks.forEach((book) => {
      if (book.shelf !== currentShelf) {
        Shelves.push(book.shelf);
      }
      currentShelf = book.shelf;
    });

    return (
      <div className="list-books-content">
        {Shelves.map((shelf, index) => (
          <div className="bookshelf" key={index}>
            <BookshelfTitle shelf={shelf} key={index} />
            <div className="bookshelf-books">
              <BookshelfBooks
                books={allbooks.filter(
                  (book) => book.shelf.toLowerCase() === shelf.toLowerCase()
                )}
              />
            </div>
          </div>
        ))}
        /
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
    const { searchpage } = this.props;
    return (
      <div className="open-search">
        <button onClick={() => searchpage()}>Add a book</button>
      </div>
    );
  }
}

class SearchBookBar extends Component {
  render() {
    const { searchpage } = this.props;
    return (
      <div className="search-books-bar">
        <button className="close-search" onClick={() => searchpage()}>
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
    const { searchpage } = this.props;
    return (
      <div className="search-books">
        <SearchBookBar searchpage={searchpage} />
        <SearchBookResults />
      </div>
    );
  }
}

export default BooksApp;
