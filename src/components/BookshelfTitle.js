import { React, Component } from "react";

class BookshelfTitle extends Component {
  render() {
    const { shelf } = this.props;
    return <h2 className="bookshelf-title">{shelf}</h2>;
  }
}

export default BookshelfTitle;
