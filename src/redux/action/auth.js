import Axios from 'axios';
import { API_URL, showError, storeData } from '../../utils';
import { setLoading } from './global';

export const registerAction = (data, photo, navigation) => (dispatch) => {
  const registerData = new FormData();

  registerData.append('name', data.name);
  registerData.append('email', data.email);
  registerData.append('password', data.password);
  
  if (photo) {
    registerData.append('photo', photo);
  }

  const header = {
    headers: { 'Content-Type': 'multipart/form-data' },
  };

  dispatch(setLoading(true));

  Axios.post(`${API_URL}/auth/register`, registerData, header).then(
    (response) => {
      const profile = response.data.user;
      storeData('profile', profile);

      const token = { tokens: response.data.tokens, status: false };
      storeData('tokens', token);

      const verificationData = {
        userId: profile.id,
        email: profile.email,
      };

      Axios.post(`${API_URL}/auth/send-verification`, verificationData).catch(
        (error) => {
          dispatch(setLoading(false));
          showError(error?.response?.data?.message || 'Send verification is failed');
        }
      );

      dispatch(setLoading(false));
      navigation.reset({ index: 0, routes: [{ name: 'Verification' }] });
    },
  ).catch(
    (error) => {
      console.log(error?.response?.data?.message);
      dispatch(setLoading(false));
      showError(error?.response?.data?.message || 'Sign up is failed');
    },
  );
};

export const checkEmailAction = (data, navigation) => (dispatch) => {
  dispatch(setLoading(true));

  Axios.post(`${API_URL}/auth/check-email`, { email: data.email }).then(
    (response) => {
      if (response.status === 204) {
        dispatch(setLoading(false));
        dispatch({ type: 'SET_AUTH', payload: data });
        navigation.navigate('UploadPhoto');
      }
    }
  ).catch(
    (error) => {
      dispatch(setLoading(false));
      showError(error?.response?.data?.message || 'Email has alredy taken');
    }
  );
};