import React from 'react';
import DatePickerRN from 'react-native-datepicker';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const DatePicker = ({ date, onDateChange }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.labelValidationWrapper}>
        <Text style={styles.dateLabel}>Date</Text>
        <Text style={styles.dateValidation}></Text>
      </View>
      <Gap height={11} />
      <View style={styles.container}>
        <DatePickerRN
          style={styles.datePicker}
          date={date}
          mode="date"
          placeholder="Select Date Available"
          format="dddd, DD MMMM YYYY"
          showIcon={false}
          onDateChange={onDateChange}
          customStyles={customStyles}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
    backgroundColor: colors.white,
    borderRadius: 7.25,
  },
  labelValidationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateLabel: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  dateValidation: {
    fontFamily: fonts.primary[500],
    fontSize: 11,
    color: colors.red1,
  },
  datePicker: {
    flex: 1,
  },
});

const customStyles = {
  placeholderText: {
    fontFamily: fonts.primary[300],
    fontSize: 13,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    color: colors.grey6,
  },
  dateInput: {
    borderColor: colors.white,
  },
  dateText: {
    fontFamily: fonts.primary[300],
    fontSize: 13,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
  },
};

export default DatePicker;
