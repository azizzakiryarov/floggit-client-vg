import React from 'react';
import whiteBoardsContainerProps from './WhiteBoardsContainerWrapper.props';
import AddWhiteBoard from './components/AddWhiteBoard/AddWhiteBoard';
import WhiteBoardsList from './components/WhiteBoardsList/WhiteBoardsList';

const WhiteBoardsContainerWrapper = props => (
  <div className="WhiteBoardsContainer-wrapper">
    <AddWhiteBoard onAddWhiteBoardsLabel={props.handleAddWhiteBoard} />
    <WhiteBoardsList
      whiteboards={props.whiteboards}
    />
  </div>
);

WhiteBoardsContainerWrapper.propTypes = whiteBoardsContainerProps;

export default WhiteBoardsContainerWrapper;
