const initialState = {
  whiteboards: [],
};

function generateId() {
  return (+(new Date())).toString();
}

// ACTIONS
const ADD_WHITEBOARD = 'ADD_WHITEBOARD';
const WHITEBOARD_LIST_REPLACE = 'WHITEBOARD_LIST_REPLACE';

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WHITEBOARD: {
      return [...state, action.data];
    }
    case WHITEBOARD_LIST_REPLACE: {
      return [...action.data];
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddWhiteBoards = label => ({
  type: ADD_WHITEBOARD,
  data: {
    id: generateId(),
    label,
  },
});

const internalReplaceAllWhiteBoards = whiteboards => ({
  type: WHITEBOARD_LIST_REPLACE,
  data: { whiteboards },
});

const addWhiteBoards = label => (dispatch) => {
  dispatch(internalAddWhiteBoards(label));
};

const loadWhiteBoards = whiteboards => (dispatch) => {
  dispatch(internalReplaceAllWhiteBoards(whiteboards));
};

export { addWhiteBoards, loadWhiteBoards };
export default reducer;
