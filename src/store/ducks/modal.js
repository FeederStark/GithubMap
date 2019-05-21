/**
 * TYPES
 */

export const Types = {
  OPEN_MODAL: 'modal/OPEN',
  CLOSE_MODAL: 'modal/CLOSE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  open: false,
  coordinates: {},
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, open: true, coordinates: action.payload.coordinates };
    case Types.CLOSE_MODAL:
      return { ...state, open: false, coordinates: {} };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  openModal: coordinates => ({
    type: Types.OPEN_MODAL,
    payload: { coordinates },
  }),
  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
};
