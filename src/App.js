import React from 'react';
import ScoreBoard from './components/Scoreboard/scoreBoard';
import GameOptions from './components/GameOptions/GameOptions';
import TeamGroup from './components/TeamGroup/teamGroup';
import BarBottom from './components/BarButton/barButton';

function App() {
  return (
      <div className="App">
          <GameOptions />
          <ScoreBoard/>
          <TeamGroup team1/>
          <TeamGroup />
          <BarBottom/>
      </div>
  );
}

export default App;
