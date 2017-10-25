import { connect } from 'react-redux';
import WhiteBoardsContainerWrapper from './WhiteBoardsContainerWrapper';
import { addWhiteBoards } from '../../../reduxStore/config/whiteboards';

const mapStateToProps = state => ({
  whiteboards: state.whiteboards,
});

const mapDispatchToProps = dispatch => ({
  handleAddWhiteBoard: (label) => {
    dispatch(addWhiteBoards(label));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteBoardsContainerWrapper);
