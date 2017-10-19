import React from 'react';
import './WhiteBoard.css';
import whiteBoardProps from './WhiteBoard.props';
import NoteContainer from '../../common/components/WhiteBoardsContainer/components/WhiteBoardsList/components/WhiteBoardsContent/components/NoteContainer/NoteContainer';

const WhiteBoard = props => (
  <div>
    <h1> WhiteBoard </h1>
    <div className="whiteboard">
      <p>Welcome to Floggit Service</p>
      <NoteContainer whiteboardId={props.match.params.id} />
    </div>
  </div>
);

WhiteBoard.propTypes = whiteBoardProps;
export default WhiteBoard;
