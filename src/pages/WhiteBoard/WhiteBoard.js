import React from 'react';
import whiteBoardProps from './WhiteBoard.props';
import NoteContainer from '../../common/components/WhiteBoardsContainer/components/WhiteBoardsList/components/WhiteBoardsContent/components/NoteContainer/NoteContainer';

const WhiteBoard = props => (
  <div>
    <div className="whiteboard">
      <h1> WhiteBoard </h1>
      <NoteContainer whiteboardId={props.match.params.id} />
    </div>
  </div>
);

WhiteBoard.propTypes = whiteBoardProps;
export default WhiteBoard;
