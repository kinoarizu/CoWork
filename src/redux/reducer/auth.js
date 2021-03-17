const initialAuth = {
  name: '',
  email: '',
  password: '',
};

export const authReducer = (state = initialAuth, action) => {
  if (action.type === 'SET_AUTH') {
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
    };
  }
  return state;
};

const initialPhoto = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

export const photoReducer = (state = initialPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.payload.uri,
      type: action.payload.type,
      name: action.payload.name,
    };
  }
  if (action.type === 'SET_UPLOAD_STATUS') {
    return {
      ...state,
      isUploadPhoto: action.payload,
    };
  }
  return state;
};