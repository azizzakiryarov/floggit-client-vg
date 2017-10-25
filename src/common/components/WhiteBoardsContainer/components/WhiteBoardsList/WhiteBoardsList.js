import React from 'react';
import WhiteBoardsContent from './components/WhiteBoardsContent/WhiteBoardsContent';
import whiteBoardListProps from './WhiteBoardsList.props';

const WhiteBoardsList = props => (
  <div className="container">
    <ul className="list-group">
      {
        props.whiteboards.map(whiteboardsContent => (
          <li key={whiteboardsContent.id} className="list-group-item">
            <WhiteBoardsContent
              id={whiteboardsContent.id}
              label={whiteboardsContent.label}
            /> </li>
        ))
      }
    </ul>
  </div>
);

WhiteBoardsList.propTypes = whiteBoardListProps;

export default WhiteBoardsList;
