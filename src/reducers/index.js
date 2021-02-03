import initialState from 'src/store/initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    /* case UPDATE_SETTINGS_FIELD:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.fieldName]: action.newValue,
        },
      }; */
    default:
      return { ...state };
  }
};
