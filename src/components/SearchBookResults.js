import { React, Component } from "react";
import BookshelfBooks from "./BookshelfBooks";

class SearchBookResults extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="search-books-results">
        <BookshelfBooks books={books} />
      </div>
    );
  }
}

export default SearchBookResults;
