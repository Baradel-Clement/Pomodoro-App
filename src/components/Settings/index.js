import React from 'react';
import PropTypes from 'prop-types';
import SettingsLayout from 'src/components/SettingsLayout';
import settingsIcon from 'src/assets/svgs/icon-settings.svg';

const Settings = ({ settingsLayout, handleSettingsLayout }) => (
  <>
    <img
      onClick={() => {
        handleSettingsLayout();
      }}
      className="app__settingsIcon pointer"
      src={settingsIcon}
      alt="logo"
    />
    {settingsLayout && <SettingsLayout />}
  </>
);

Settings.propTypes = {
  settingsLayout: PropTypes.bool.isRequired,
  handleSettingsLayout: PropTypes.func.isRequired,
};

export default Settings;
