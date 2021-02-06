import React from 'react';
import FlashMessageDefault from 'react-native-flash-message';
import { colors, fonts } from '../../../utils';

const FlashMessage = () => {
  return (
    <FlashMessageDefault
      backgroundColor={colors.red1}
      position="top"
      titleStyle={{ fontFamily: fonts.primary[400] }}
    />
  );
};

export default FlashMessage;
