import { connect } from 'react-redux';

import App from 'src/components/App';
import { handleSettingsLayout } from 'src/actions/index';

const mapStateToProps = (state) => ({
  settingsLayout: state.settingsLayout,
});

const mapDispatchToProps = (dispatch) => ({
  handleSettingsLayout: () => {
    dispatch(handleSettingsLayout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
