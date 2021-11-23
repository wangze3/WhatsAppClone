import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import ContactListItem from "../components/ContactListItem";

import users from "../data/Users";
import NewMessageButton from "../components/NewMessageButton";

export default function ContactsScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
      <FlatList
          data={users}
          renderItem={({item}) => <ContactListItem user={item} />}
          keyExtractor={(item) => item.id}
          style = {{width: "100%"}}
      />

      <NewMessageButton />
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
