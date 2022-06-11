import { React, Component } from "react";
import BookshelfBooks from "./BookshelfBooks";

class SearchBookResults extends Component {
  render() {
    const { books, updateShelf } = this.props;
    return (
      <div className="search-books-results">
        <BookshelfBooks books={books} onUpdateBookShelf={updateShelf} />
      </div>
    );
  }
}

export default SearchBookResults;
