import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksAction from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy ) => {
  switch (filterBy) {
    case 'all':
      return books;
    case 'price-higt':
      return orderBy(books, 'price', 'desc');
    case 'price-low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books
  }
};

const filterBook = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLocaleString()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLocaleString()) >= 0
  );

const serchBooks = (books, filterBy, searchQuery) => {
   return sortBy(filterBook (books, searchQuery), filterBy)
};

const mapStateToProps = ({books, filter}) => ({
  books: books.items && serchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksAction, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);