const initialState = {
  accessToken: '',
  refreshToken: '',
  userId: null,
  tokenId: null,
};

export default (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case 'typeName':
      return payload;
    default:
      return state;
  }
};
