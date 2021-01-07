import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { IcFilter, IcSearch } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

const FilterSearchBox = ({
  placeholder,
  onPressFilter,
  ...restTextInputProps
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <IcSearch />
        <Gap width={10} />
        <TextInput
          disableFullscreenUI
          style={styles.textInput}
          placeholder={placeholder}
          autoCapitalize="none"
          {...restTextInputProps}
        />
      </View>
      <Gap width={12} />
      <Button
        type="btn-icon"
        width={48}
        height={48}
        color={colors.lightGrey}
        icon={<IcFilter />}
        onPress={onPressFilter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: colors.lightGrey,
    borderRadius: 7.25,
  },
  textInput: {
    flex: 1,
    fontFamily: fonts.primary[300],
    fontSize: 12.5,
    alignSelf: 'center',
  },
});

export default FilterSearchBox;
