import React from 'react';
import noteContentProps from './NoteContent.props';
import './NoteContent.css';

const NoteContent = (props) => {
  let title;
  let noteList;
  let color;

  const remove = () => {
    props.onRemove(props.id);
  };

  const update = () => {
    const newColor = color.value ? color.value : props.color;
    const newTitle = title.value ? title.value : props.title;
    const newNoteList = noteList.value ? noteList.value : props.noteList;
    props.onUpdate(props.id, newTitle, newNoteList, newColor, props.whiteboardId);
  };

  return (
    <div className="NoteContent-title" style={{ backgroundColor: props.color }}>
      <h2 style={{ backgroundColor: props.color }}>{props.title}</h2>
      <div>{props.noteList}</div>
      <input
        className="form-control"
        type="title text"
        defaultValue={props.title}
        ref={(currentElement) => { title = currentElement; }}
        placeholder="new title"
      />
      <input
        className="form-control"
        type="note text"
        defaultValue={props.noteList}
        ref={(currentElement) => { noteList = currentElement; }}
        placeholder="new on list"
      />
      <select
        className="form-control"
        name="color"
        defaultValue={props.color}
        ref={(currentElement) => { color = currentElement; }}
      >
        <option value="">Choose color</option>
        <option value="#3151b5" > Indigo </option>
        <option value="#26a69a" > Teal </option>
        <option value="#66bb6a" > Green </option>
        <option value="#ffa726" > Orange </option>
      </select>
      <button
        className="fa fa-pencil"
        onClick={update}
        style={{ backgroundColor: props.color }}
      />
      <button
        onClick={remove}
        style={{ backgroundColor: props.color }}
      >  X </button>
    </div>
  );
};

NoteContent.propTypes = noteContentProps;

export default NoteContent;
