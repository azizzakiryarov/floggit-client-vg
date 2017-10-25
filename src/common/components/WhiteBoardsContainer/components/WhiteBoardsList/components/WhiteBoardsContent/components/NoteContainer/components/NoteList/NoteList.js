import React from 'react';
import NoteContent from './components/NoteContent';
import noteListProps from './NoteList.props';

const NoteList = (props) => {
  const handleRemove = (id) => {
    props.onNoteRemove(id);
  };

  const handleUpdate = (id, title, noteList, color, whiteboardId) => {
    props.onNoteUpdate(id, title, noteList, color, whiteboardId);
  };

  return (
    <ul className="NoteList">
      {props.notes.map(noteContent => (
        <li key={noteContent.id}>
          <NoteContent
            id={noteContent.id}
            title={noteContent.title}
            noteList={noteContent.noteList}
            color={noteContent.color}
            whiteboardId={noteContent.whiteboardId}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          /> </li>
      ))
      }
    </ul>
  );
};

NoteList.propTypes = noteListProps;

export default NoteList;
