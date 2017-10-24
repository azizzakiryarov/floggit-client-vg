import React from 'react';
import { NavLink } from 'react-router-dom';

import whiteboardsContentProps from './WhiteBoardsContent.props';

const WhiteBoardsContent = props => (
  <div className="WhiteBoardsContent-title">
    <NavLink to={`/${props.label}/${props.id}`}> {props.label} </NavLink>
  </div>
);

WhiteBoardsContent.propTypes = whiteboardsContentProps;

export default WhiteBoardsContent;
