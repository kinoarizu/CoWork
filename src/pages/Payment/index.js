import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ILBCA, ILCreditCard, ILPaypal } from '../../assets';
import { colors, fonts } from '../../utils';
import {
  Button,
  Gap,
  HeaderBar,
  PaymentOptionItem,
  RoomOptionItem,
} from '../../components';

const Payment = ({ route, navigation }) => {
  const { room, booked, type } = route.params;

  const [payment, setPayment] = useState();

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar 
          title="Payment" 
          navigation={() => navigation.pop()} 
        />
        <View style={styles.contentContainer}>
          <RoomOptionItem
            spaceName={room.name}
            address={room.address}
            roomOptions={room.room}
          />
          <Text style={styles.titlePayment}>
            Choose Payment
          </Text>
          <View style={styles.paymentWrapper}>
            <PaymentOptionItem
              title="Virtual Account"
              image={ILBCA}
              isSelected={'Virtual Account' === payment}
              onPress={() => setPayment('Virtual Account')}
            />
            <PaymentOptionItem
              title="Credit Card"
              image={ILCreditCard}
              isSelected={'Credit Card' === payment}
              onPress={() => setPayment('Credit Card')}
            />
            <PaymentOptionItem
              title="Paypal Transfer"
              image={ILPaypal}
              isSelected={'Paypal Transfer' === payment}
              onPress={() => setPayment('Paypal Transfer')}
            />
          </View>
          <Gap height={120} />
          <Button
            title="Order Room"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Success', params: { booked, type } }],
              });
            }}
          />
          <Gap height={4} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  titlePayment: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
    marginTop: 20,
    marginBottom: 18,
  },
});

export default Payment;
