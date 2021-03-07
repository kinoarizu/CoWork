import React, { useState } from 'react';
import FitImage from 'react-native-fit-image';
import { launchImageLibrary } from 'react-native-image-picker';
import { colors, fonts, showError } from '../../utils';
import { Button, Gap } from '../../components';
import { IcAdd, IcRemove, ILUploadPhoto, ILUserNull } from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../redux/action';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const UploadPhoto = ({ navigation }) => {
  const [photo, setPhoto] = useState(ILUserNull);

  const dispatch = useDispatch();
  const { authReducer, photoReducer } = useSelector((state) => state);

  const addPhoto = () => {
    launchImageLibrary(
      { quality: 0.5, maxWidth: 200, maxHeight: 200 },
      (response) => {
        if (response.didCancel || response.error) {
          showError('Oops, You cancelled pick image!');
        } else {
          const source = { uri: response.uri };
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          setPhoto(source);
          dispatch({ type: 'SET_PHOTO', payload: dataImage });
          dispatch({ type: 'SET_UPLOAD_STATUS', payload: true });
        }
      },
    );
  };

  const removePhoto = () => {
    setPhoto(ILUserNull);
    dispatch({ type: 'SET_PHOTO', payload: null });
    dispatch({ type: 'SET_UPLOAD_STATUS', payload: false });
  };

  const onUploadPressed = () => {
    dispatch(registerAction(authReducer, photoReducer, navigation));
  };

  const onSkipPressed = () => {
    dispatch(registerAction(authReducer, null, navigation));
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage 
          source={ILUploadPhoto} 
          style={styles.cover} 
        />
        <View style={styles.uploadPhotoContainer}>
          <Text style={styles.title}>
            Almost Finish,{'\n'}Please Add Your Pic
          </Text>
          <Gap height={72} />
          <View style={styles.avatarContainer}>
            <Image 
              source={photo} 
              style={styles.avatar} 
            />
            <View style={styles.addPhoto}>
              {!(photo == ILUserNull) && (
                <Button
                  type="btn-icon"
                  width={28}
                  height={28}
                  color={colors.red2}
                  onPress={removePhoto}
                  icon={<IcRemove 
                    width={13} 
                    height={13} 
                  />}
                />
              )}
              {photo == ILUserNull && (
                <Button
                  type="btn-icon"
                  width={28}
                  height={28}
                  color={colors.green1}
                  onPress={addPhoto}
                  icon={<IcAdd 
                    width={13} 
                    height={13} 
                  />}
                />
              )}
            </View>
          </View>
          <Gap height={130} />
          <Button
            title="Upload"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => onUploadPressed()}
          />
          <Gap height={14} />
          <Button
            title="Skip"
            height={48}
            type="btn-text"
            color={colors.grey1}
            onPress={() => onSkipPressed()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  cover: {
    width: '100%',
    height: 120,
  },
  uploadPhotoContainer: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 28,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    lineHeight: 30,
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 20,
  },
  addPhoto: {
    position: 'absolute',
    bottom: -14,
  },
});

export default UploadPhoto;
