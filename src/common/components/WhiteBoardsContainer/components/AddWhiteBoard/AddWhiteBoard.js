import React from 'react';

import whiteBoardInputProps from './AddWhiteBoard.props';
import './AddWhiteBoard.css';

const AddWhiteBoard = (props) => {
  let label;

  const showInputName = () => {
    document.getElementById('save-whiteboards').style.visibility = 'visible';
    document.getElementById('input-whiteboards').style.visibility = 'visible';
    console.log('change style to visibale');
  };

  const handleClick = () => {
    if (label.value.length > 1) {
      document.getElementById('save-whiteboards').style.visibility = 'hidden';
      document.getElementById('input-whiteboards').style.visibility = 'hidden';
      props.onAddWhiteBoardsLabel(label.value);
      label.value = '';
    } else {
      alert('Write whiteboards name...');
    }
  };

  return (
    <div className="whiteboard-input">
      <input
        id="input-whiteboards"
        type="text"
        ref={(currentElement) => { label = currentElement; }}
        placeholder="WhiteBoard name"
      />
      <button
        id="save-whiteboards"
        type="button"
        onClick={handleClick}
      >
          Save WhiteBoard
      </button>
      <button
        id="add-whiteboards"
        type="button"
        onClick={showInputName}
      >
          Add WhiteBoard
      </button>
    </div>
  );
};

AddWhiteBoard.propTypes = whiteBoardInputProps;

export default AddWhiteBoard;
