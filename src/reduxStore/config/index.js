import { combineReducers } from 'redux';
import whiteboards from './whiteboards';
import notes from './notes';

const reducer = combineReducers({
  whiteboards,
  notes,
});

export default reducer;
