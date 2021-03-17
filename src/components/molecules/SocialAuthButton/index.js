import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcFacebook, IcGoogle, IcTwitter } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

const SocialAuthButton = ({
  page,
  googleAction,
  facebookAction,
  twitterAction,
}) => {
  return (
    <View>
      <Text style={styles.textLoginWith}>
        {page} With
      </Text>
      <View style={styles.socialContainer}>
        <Button
          type="btn-icon"
          height={25}
          icon={<IcGoogle />}
          onPress={googleAction}
        />
        <Gap width={30} />
        <Button
          type="btn-icon"
          height={25}
          icon={<IcFacebook />}
          onPress={facebookAction}
        />
        <Gap width={30} />
        <Button
          type="btn-icon"
          height={25}
          icon={<IcTwitter />}
          onPress={twitterAction}
        />
      </View>
      <Gap height={48} />
    </View>
  );
};

const styles = StyleSheet.create({
  textLoginWith: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.grey3,
    textAlign: 'center',
    marginVertical: 24,
  },
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SocialAuthButton;
