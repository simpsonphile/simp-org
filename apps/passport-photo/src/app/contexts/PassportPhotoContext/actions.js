import * as ACTION_NAMES from './actionNames';
import trimPhotoToPassportSize from '../../services/trimPhotoToPassportSize';
import deleteBgFromImg from '../../services/deleteBgFromImg';

export const resetStore =
  ({ dispatch }) =>
  () =>
    dispatch({
      type: ACTION_NAMES.RESET_STORE,
    });

export const setCurrentStep =
({ dispatch }) => 
(payload) =>
dispatch({
  type: ACTION_NAMES.SET_CURRENT_STEP,
  payload: payload,
})

export const setPhoto = 
({ dispatch }) => 
(payload) =>
dispatch({
  type: ACTION_NAMES.SET_PHOTO,
  payload,
})

export const setPhotoFixed = 
({ dispatch }) => 
(payload) =>
dispatch({
  type: ACTION_NAMES.SET_PHOTO_FIXED,
  payload,
})

export const setPhotoFixedLoading = 
({ dispatch }) => 
(payload) =>
dispatch({
  type: ACTION_NAMES.SET_PHOTO_FIXED_LOADING,
  payload,
})

export const generatePhotoFixed = ({ dispatch }) =>
async (photo) => {
  setPhoto({ dispatch })(photo);
  setPhotoFixedLoading({ dispatch })(true);

  const trimmedImg = await trimPhotoToPassportSize(photo);
  const backgroundlessImg = await deleteBgFromImg(trimmedImg);

  setPhotoFixed({ dispatch })(backgroundlessImg);
  setPhotoFixedLoading({ dispatch })(false);
}