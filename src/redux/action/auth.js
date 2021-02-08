import Axios from 'axios';
import { API_URL, getData, removeData, showError, storeData } from '../../utils';
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

      const tokenInfo = { 
        tokens: response.data.tokens, 
        status: false,
      };
      storeData('tokenInfo', tokenInfo);

      const verificationData = {
        userId: profile.id,
        email: profile.email,
      };

      Axios.post(`${API_URL}/auth/send-verification`, verificationData).then(
        (response) => {
          if (response.status === 204) {      
            dispatch(setLoading(false));
            navigation.reset({ index: 0, routes: [{ name: 'Verification' }] });
          }
        }
      ).catch(
        (error) => {
          dispatch(setLoading(false));
          showError(error?.response?.data?.message || 'Send Verification is Failed!');
        }
      );
    },
  ).catch(
    (error) => {
      console.log(error?.response?.data?.message);
      dispatch(setLoading(false));
      showError(error?.response?.data?.message || 'Register is Failed!');
    },
  );
};

export const loginAction = (data, navigation) => (dispatch) => {
  dispatch(setLoading(true));

  Axios.post(`${API_URL}/auth/login`, data).then(
    (response) => {
      const profile = response.data.user;
      storeData('profile', profile);

      const tokenInfo = { 
        tokens: response.data.tokens, 
        status: true,
      };
      storeData('tokenInfo', tokenInfo);

      dispatch(setLoading(false));
      navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
    }
  ).catch(
    (error) => {
      dispatch(setLoading(false));
      showError(error?.response?.data?.message || 'Email or Password is Wrong!');
    }
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
      showError(error?.response?.data?.message || 'Email Has Already Taken!');
    }
  );
};

export const verificationAction = (data, navigation) => (dispatch) => {
  dispatch(setLoading(true));

  getData('profile').then(
    (response) => {
      const verificationData = {
        userId: response.id,
        code: data,
      };

      getData('tokenInfo').then(
        (response) => {
          const tokenInfo = { 
            tokens: response.tokens,
            status: true, 
          };
          storeData('tokenInfo', tokenInfo);
        }
      );

      Axios.post(`${API_URL}/auth/check-verification`, verificationData).then(
        (response) => {
          if (response.status === 204) {
            dispatch(setLoading(false));
            navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
          }
        }
      ).catch(
        (error) => {
          dispatch(setLoading(false));
          showError(error?.response?.data?.message || 'Verification Code is Wrong or Expired!');
        }
      );
    }
  );
};

export const refreshTokenAction = () => (dispatch) => {
  dispatch(setLoading(true));

  getData('tokenInfo').then(
    (response) => {
      if (new Date(response.tokens.access.expires) > new Date()) {
        const refreshToken = {
          refreshToken: response.tokens.refresh.token,
        }

        Axios.post(`${API_URL}/auth/refresh-token`, refreshToken).then(
          (response) => {
            const tokenInfo = { 
              tokens: response.data,
              status: true, 
            };
            storeData('tokenInfo', tokenInfo);

            dispatch(setLoading(false));
          }
        ).catch(
          (error) => {
            dispatch(setLoading(false));
            showError(error?.response?.data?.message || 'Refresh Token Failed. Server Still Problem!');
          }
        );
      } 
      dispatch(setLoading(false));
    }
  );
};

export const logoutAction = (navigation) => (dispatch) => {
  dispatch(setLoading(true));

  getData('tokenInfo').then(
    (response) => {
      const refreshToken = {
        refreshToken: response.tokens.refresh.token
      };

      Axios.post(`${API_URL}/auth/logout`, refreshToken).then(
        (response) => {
          if (response.status === 204) {
            removeData('profile');
            removeData('tokenInfo');

            dispatch(setLoading(false));
            navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
          }
        }
      ).catch(
        (error) => {
          dispatch(setLoading(false));
          showError(error?.response?.data?.message || 'Logout Failed. Server Still Problem!');
        }
      );
    }
  );
};