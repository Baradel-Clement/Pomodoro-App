import React from 'react';
import SettingsLayout from 'src/components/SettingsLayout';
import settingsIcon from 'src/assets/svgs/icon-settings.svg';

const Settings = () => (
  <>
    <img className="app__settingsIcon" src={settingsIcon} alt="logo" />
    <SettingsLayout />
  </>
);

export default Settings;
