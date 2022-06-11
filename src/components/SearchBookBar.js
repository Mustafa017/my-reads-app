import { React, Component } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import SearchBookResults from "./SearchBookResults";

class SearchBookBar extends Component {
  state = {
    books: [],
    query: "",
  };

  handleChange = (query) => {
    if (query) {
      this.searchBook({ query });
    }
    this.setState({ query: query.trim() });
  };

  searchBook(query) {
    BooksAPI.search(query).then((books) =>
      books ? this.setState({ books }) : []
    );
  }

  render() {
    const { searchpage, addToShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={() => searchpage()}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <form>
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.handleChange(event.target.value)}
              />
            </form>
          </div>
        </div>
        <SearchBookResults books={this.state.books} updateShelf={addToShelf} />
      </div>
    );
  }
}

export default SearchBookBar;
