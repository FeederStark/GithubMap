import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.username}`);
    const user = {
      username: action.payload.username,
      name: data.name,
      avatar: data.avatar_url,
      latitude: action.payload.coordinates.latitude,
      longitude: action.payload.coordinates.longitude,
    };

    const isDuplicated = yield select(state => state.users.find(singleUser => singleUser.username === user.username));

    if (isDuplicated) {
      toast.error('User already registered', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success('User successfully added', {
        position: toast.POSITION.TOP_RIGHT,
      });

      yield put(UserActions.addUserSuccess(user));
    }
  } catch (err) {
    toast.error('User not found', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
