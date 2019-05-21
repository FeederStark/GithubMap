/**
 * Types
 */

export const Types = {
  ADD_USER_REQUEST: 'users/REQUEST',
  ADD_USER_SUCCESS: 'users/SUCCESS',
  REMOVE_USER: 'users/REMOVE',
};

/**
 * Reducers
 */
const INITIAL_STATE = [];
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_SUCCESS:
      return [...state, action.payload.user];
    case Types.REMOVE_USER:
      return [...state.filter(user => user.username !== action.payload.username)];
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addUserRequest: (username, coordinates) => ({
    type: Types.ADD_USER_REQUEST,
    payload: { username, coordinates },
  }),
  addUserSuccess: user => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { user },
  }),
  removeUser: username => ({
    type: Types.REMOVE_USER,
    payload: { username },
  }),
};
