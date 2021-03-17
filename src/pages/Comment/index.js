import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Button, CommentItem, HeaderBar } from '../../components';
import { colors } from '../../utils';

const Comment = ({ route, navigation }) => {
  const comments = route.params.comments;

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar 
          title="Comment" 
          navigation={() => navigation.pop()} 
        />
        <View style={styles.commentWrapper}>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <CommentItem
                  userName={item.user_name}
                  userPhoto={item.user_photo}
                  rating={item.rating}
                  datetime={item.datetime}
                  comment={item.comment}
                  photos={item.photos}
                  onReportPressed={() => {}}
                />
              );
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          type="btn-text"
          height={48}
          borderRadius={10}
          color={colors.purple}
          title="Give Review"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  commentWrapper: {
    paddingTop: 20,
    paddingBottom: 90,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    height: 88,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
});

export default Comment;
