// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import ChooseMode from 'src/components/ChooseMode';
import Timer from 'src/components/Timer';
import SettingsLayout from 'src/components/SettingsLayout';

// == Import
import 'src/styles/index.scss';
import logo from 'src/assets/svgs/logo.svg';
import settingsIcon from 'src/assets/svgs/icon-settings.svg';

// == Composant
const App = ({ settingsLayout, handleSettingsLayout }) => (
  <div className="app">
    <img className="app__logo" src={logo} alt="logo" />
    <ChooseMode />
    <Timer />
    <img
      onClick={() => {
        handleSettingsLayout();
      }}
      className="app__settingsIcon pointer"
      src={settingsIcon}
      alt="settingsIcon"
    />
    { settingsLayout && <SettingsLayout /> }
  </div>
);

App.propTypes = {
  settingsLayout: PropTypes.bool.isRequired,
  handleSettingsLayout: PropTypes.func.isRequired,
};

// == Export
export default App;
