import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatListItem from "../components/ChatListItem";

import chatRooms from "../data/ChatRooms";

export default function ChatsScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
      <FlatList
          data={chatRooms}
          renderItem={({item}) => <ChatListItem chatRoom={item} />}
          keyExtractor={(item) => item.id}
          style = {{width: "100%"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
