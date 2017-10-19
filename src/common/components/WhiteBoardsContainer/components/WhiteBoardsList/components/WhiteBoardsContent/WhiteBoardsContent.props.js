import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape({
    idNote: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    noteList: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    whiteboardId: PropTypes.string.isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
  })),
};


export default propTypes;
