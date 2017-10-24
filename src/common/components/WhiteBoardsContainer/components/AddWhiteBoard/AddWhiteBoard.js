import React from 'react';

import whiteBoardInputProps from './AddWhiteBoard.props';
import './AddWhiteBoard.css';

const AddWhiteBoard = (props) => {
  let label;

  const showInputName = () => {
    document.getElementById('save-whiteboards').style.visibility = 'visible';
    document.getElementById('input-whiteboards').style.visibility = 'visible';
    document.getElementById('add-whiteboards').style.visibility = 'hidden';
    console.log('change style to visibale');
  };

  const handleClick = () => {
    if (label.value.length > 1) {
      document.getElementById('save-whiteboards').style.visibility = 'hidden';
      document.getElementById('input-whiteboards').style.visibility = 'hidden';
      document.getElementById('add-whiteboards').style.visibility = 'visible';
      props.onAddWhiteBoardsLabel(label.value);
      label.value = '';
    } else {
      alert('Write whiteboards name...');
    }
  };

  return (
    <div className="whiteboard-input">
      <input
        className="form-control"
        id="input-whiteboards"
        type="text"
        ref={(currentElement) => { label = currentElement; }}
        placeholder="WhiteBoard name"
      />
      <button
        className="btn btn-success"
        id="save-whiteboards"
        type="button"
        onClick={handleClick}
      >
          Save WhiteBoard
      </button>
      <button
        className="btn btn-warning"
        id="add-whiteboards"
        type="button"
        onClick={showInputName}
      >
          + Add WhiteBoard
      </button>
    </div>
  );
};

AddWhiteBoard.propTypes = whiteBoardInputProps;

export default AddWhiteBoard;
