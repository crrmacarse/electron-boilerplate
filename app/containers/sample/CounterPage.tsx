import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Counter from '../../components/sample/Counter';
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
} from '../../actions/counter';
import { counterStateType } from '../../reducers/types';

const mapStateToProps = (state: counterStateType) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
