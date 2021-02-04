import initialState from 'src/store/initialState';
import { HANDLE_SETTINGS_LAYOUT } from 'src/actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SETTINGS_LAYOUT:
      return {
        ...state,
        settingsLayout: !state.settingsLayout,
      };
    default:
      return { ...state };
  }
};
