import React from 'react';

import closeIcon from 'src/assets/svgs/icon-close.svg';

const SettingsLayout = () => (
  <div className="settingsLayout">
    <div className="settingsLayout__header">
      <h2 className="dark-blue2">Settings</h2>
      <img src={closeIcon} alt="closeIcon" />
    </div>
    <div className="settingsLayout__setTime">
      <h4 className="dark-blue2">TIME (MINUTES)</h4>

      <div className="settingsLayout__setTime__mode">
        <p className="body2 dark-blue1">pomodoro</p>
        <input type="number" step="1" min="1" />
      </div>

      <div className="settingsLayout__setTime__mode">
        <p className="body2 dark-blue1">pomodoro</p>
        <input type="number" step="1" min="1" />
      </div>

      <div className="settingsLayout__setTime__mode">
        <p className="body2 dark-blue1">pomodoro</p>
        <input type="number" step="1" min="1" />
      </div>
    </div>
    <div className="settingsLayout__setFont">
      <h4 className="dark-blue2">FONT</h4>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </div>
    <div className="settingsLayout__setColor">
      <h4 className="dark-blue2">COLOR</h4>
      <div className="settingsLayout__setColor__color redColorMode" />
      <div className="settingsLayout__setColor__color blueColorMode" />
      <div className="settingsLayout__setColor__color purpleColorMode" />
    </div>
    <button type="button" className="button settingsLayout__btnApply">Apply</button>
  </div>
);

export default SettingsLayout;
