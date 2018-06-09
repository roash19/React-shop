import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterAction from '../actions/filter';
import Filter from '../components/Filter';


const mapStateToProps = ({books, filter}) => ({
  filterBy: books.filterBy
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);