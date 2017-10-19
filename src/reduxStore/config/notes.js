const NOTE_ADD = 'NOTE_ADD';
const NOTE_REMOVE = 'NOTE_REMOVE';
const NOTE_LIST_REPLACE = 'NOTE_LIST_REPLACE';
const NOTE_UPDATE = 'NOTE_UPDATE';

function generateId() {
  return (+(new Date())).toString();
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case NOTE_ADD: {
      return [...state, action.data];
    }
    case NOTE_REMOVE: {
      return state.filter(note => note.id !== action.data.id);
    }
    case NOTE_LIST_REPLACE: {
      return [...action.data];
    }
    case NOTE_UPDATE: {
      const oldState = state.filter(note => ((note.id !== action.data.id)));
      return [...oldState, action.data];
    }
    default:
      return state;
  }
};

const internalAddNote = (id, title, noteList, color, whiteboardId) => ({
  type: NOTE_ADD,
  data: {
    id,
    title,
    noteList,
    color,
    whiteboardId,
  },
});

const internalRemoveNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const internalReplaceAllNotes = notes => ({
  type: NOTE_LIST_REPLACE,
  data: { notes },
});

const internalUpdateNote = (id, title, noteList, color, whiteboardId) => ({
  type: NOTE_UPDATE,
  data: {
    id,
    title,
    noteList,
    color,
    whiteboardId,
  },
});

const addNote = (title, noteList, color, whiteboardId) => (dispatch) => {
  dispatch(internalAddNote(generateId(), title, noteList, color, whiteboardId));
};

const removeNote = id => (dispatch) => {
  dispatch(internalRemoveNote(id));
};

const updateNote = (id, title, noteList, color, whiteboardId) => (dispatch) => {
  dispatch(internalUpdateNote(id, title, noteList, color, whiteboardId));
};

const loadNotes = notes => (dispatch) => {
  dispatch(internalReplaceAllNotes(notes));
};

export { addNote, removeNote, updateNote, loadNotes };
export default reducer;
