import { createContext, useContext, useReducer } from 'react';
import * as ACTIONS from './actions';
import * as ACTION_NAMES from './actionNames';
import {
  bindDispatchToActions,
  basicReducer,
} from '@simp-org/react-context-helpers';

export const STEPS = {
  UPLOAD: 'UPLOAD',
  FINISH: 'FINISH',
};

const initialState = {
  currentStep: STEPS.UPLOAD,
  photo: undefined,
  photoFixed: undefined,
  photoFixedLoading: false,
};

const PassportPhotoContext = createContext({ ...initialState });

export const usePassportPhotoContext = () => useContext(PassportPhotoContext);

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case ACTION_NAMES.RESET_STORE:
      return {
        ...initialState,
      };
    default:
      return basicReducer(state, action);
  }
};

const PassportPhotoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = bindDispatchToActions(ACTIONS, dispatch, () => state);

  return (
    <PassportPhotoContext.Provider value={{ state, actions }}>
      {children}
    </PassportPhotoContext.Provider>
  );
};

export default PassportPhotoContextProvider;
