import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Gap, InfoItem } from '../../components';
import { colors, fonts } from '../../utils';
import { IcDate, IcPerson, IcTime } from '../../assets';

const Success = ({ route, navigation }) => {
  const { booked, type } = route.params;

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.saveTicketText}>
            Save The Ticket
          </Text>
          <Text style={styles.messageText}>
            This the ticket for booking your {type},{'\n'}
            save or capture to order the {type}.
          </Text>
          <Gap height={20} />
          <QRCode 
            value="reactnative.dev" 
            size={176} 
          />
          <Gap height={24} />
          <Text style={styles.title}>
            {booked.pickRoom.name}
          </Text>
          <Text style={styles.subtitle}>
            {booked.pickRoom.room.name}
          </Text>
          <View style={styles.ticketInfo}>
            <InfoItem 
              icon={<IcDate />} 
              info={booked.date} 
            />
            <Gap width={10} />
            <InfoItem 
              icon={<IcTime />} 
              info={booked.time} 
            />
            <Gap width={10} />
            <InfoItem 
              icon={<IcPerson />} 
              info={`${booked.person} Person`} 
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            type="btn-text"
            height={48}
            borderRadius={10}
            color={colors.purple}
            title="Back To Home"
            onPress={() => {
              navigation.replace('Main');
            }}
          />
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 126,
    marginHorizontal: 30,
    backgroundColor: colors.white,
    borderRadius: 27,
    paddingTop: 12,
    paddingBottom: 25,
  },
  saveTicketText: {
    fontFamily: fonts.primary[700],
    fontSize: 20,
    lineHeight: 36,
  },
  messageText: {
    fontFamily: fonts.primary[500],
    fontSize: 9,
    color: colors.grey13,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 12.5,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: colors.darkBlue,
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: fonts.primary[300],
    fontSize: 12.6,
    color: colors.darkBlue,
    marginBottom: 36,
  },
  ticketInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
});

export default Success;
