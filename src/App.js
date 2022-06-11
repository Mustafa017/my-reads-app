import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBookContent from "./components/ListBookContent";
import ButtonAddBook from "./components/ButtonAddBook";
import SearchBookBar from "./components/SearchBookBar";

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

  showSearch = () => {
    this.setState({ showSearchPage: true });
  };

  closeSearch = () => {
    this.setState({ showSearchPage: false });
  };
  render() {
    return (
      <div className="app">
        <Routes>
          {this.state.showSearchPage ? (
            <Route
              path="/search"
              element={
                <SearchBookBar
                  searchpage={this.closeSearch}
                  addToShelf={this.updateBook}
                />
              }
            />
          ) : (
            <Route
              path="/"
              element={
                <div>
                  <ListBookContent
                    books={this.state.books}
                    onUpdateShelf={this.updateBook}
                  />
                  <ButtonAddBook searchpage={this.showSearch} />
                  {/* {JSON.stringify(this.state)} */}
                </div>
              }
            />
          )}
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
