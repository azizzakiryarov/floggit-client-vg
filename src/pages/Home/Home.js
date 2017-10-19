import React from 'react';
import './Home.css';
import WhiteBoardsContainer from '../../common/components/WhiteBoardsContainer/WhiteBoardsContainer';

const Home = () => (
  <div>
    <h1> Floggit Whiteboard Service</h1>
    <div className="Home">
      <WhiteBoardsContainer />
    </div>
  </div>
);

export default Home;
