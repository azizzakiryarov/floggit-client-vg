import React from 'react';

import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import notesWrapperProps from './NotesWrapper.props';
import './NoteContainer.css';

const NotesWrapper = props => (
  <div className="NoteContainer-wrapper">
    <NoteInput onAdd={props.handleAdd} whiteboardId={props.whiteboardId} />
    <NoteList
      notes={props.notes.filter(note => note.whiteboardId === props.whiteboardId)}
      onNoteRemove={props.handleRemove}
      onNoteUpdate={props.handleUpdate}
    />
  </div>
);

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
