import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { addNote, removeNote, updateNote } from '../../../../../../../../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removeNote(id));
  },
  handleAdd: (title, noteList, color, whiteboardId) => {
    dispatch(addNote(title, noteList, color, whiteboardId));
  },
  handleUpdate: (id, title, noteList, color, whiteboardId) => {
    dispatch(updateNote(id, title, noteList, color, whiteboardId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
