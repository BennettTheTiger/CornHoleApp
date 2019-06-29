import React from 'react';
import ScoreBoard from './components/scoreBoard';
import TeamGroup from './components/teamGroup';
import BarBottom from './components/barButton';

function App() {
  return (
      <div className="App">
          <ScoreBoard/>
          <TeamGroup team1={true}/>
          <TeamGroup team1={false}/>
          <BarBottom/>
      </div>
  );
}

export default App;
