// == Import npm
import React from 'react';

import ChooseMode from 'src/components/ChooseMode';
import Timer from 'src/components/Timer';
import Settings from 'src/components/Settings';

// == Import
import 'src/styles/index.scss';
import logo from 'src/assets/svgs/logo.svg';

// == Composant
const App = () => (
  <div className="app">
    <img className="app__logo" src={logo} alt="logo" />
    <ChooseMode />
    <Timer />
    <Settings />
  </div>
);

// == Export
export default App;
