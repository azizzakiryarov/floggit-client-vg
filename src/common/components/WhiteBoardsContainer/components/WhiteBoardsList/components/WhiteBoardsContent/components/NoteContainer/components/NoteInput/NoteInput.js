import React from 'react';
import noteInputProps from './NoteInput.props';
import './NoteInput.css';

const NoteInput = (props) => {
  let title;
  let noteList;
  let color;

  const handleClick = () => {
    if (title.value.length > 1 && noteList.value.length > 1 && color.value.length > 1) {
      props.onAdd(title.value, noteList.value, color.value, props.whiteboardId);
      title.value = '';
      noteList.value = '';
      color.value = '';
    } else {
      alert('Please type something here...');
    }
  };

  return (
    <div className="controlBox">
      <input
        className="form-control"
        type="text"
        ref={(currentElement) => { title = currentElement; }}
        placeholder="Title text"
      />
      <textarea
        className="form-control"
        ref={(currentElement) => { noteList = currentElement; }}
        name="note-list"
        placeholder="Notes text"
      />
      <select
        className="form-control"
        name="color"
        ref={(currentElement) => { color = currentElement; }}
      >
        <option value="">Choose color</option>
        <option
          value="#3151b5"
        >
              Indigo
        </option>
        <option
          value="#26a69a"
        >
              Teal
        </option>
        <option
          value="#66bb6a"
        >
              Green
        </option>
        <option
          value="#ffa726"
        >
              Orange
        </option>
      </select>
      <button
        className="btn btn-success"
        type="button"
        onClick={handleClick}
      >
          Add Note
      </button>
    </div>
  );
};

NoteInput.propTypes = noteInputProps;

export default NoteInput;
