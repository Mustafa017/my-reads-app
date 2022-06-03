import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBook from "./components/SearchBook";
import ListBookContent from "./components/ListBookContent";
import ButtonAddBook from "./components/ButtonAddBook";

class BooksApp extends Component {
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
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getBooks());
  };

  searchBook(book) {
    BooksAPI.search(book).then((books) => this.setState({ books }));
  }

  showSearch = () => {
    this.setState({ showSearchPage: true });
  };

  closeSearch = () => {
    this.setState({ showSearchPage: false });
  };
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook
            searchpage={this.closeSearch}
            onSearchBook={(book) => this.searchBook(book)}
            books={this.state.books}
          />
        ) : (
          <div>
            <ListBookContent
              books={this.state.books}
              onUpdateShelf={this.updateBook}
            />
            <ButtonAddBook searchpage={this.showSearch} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
