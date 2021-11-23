import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {User} from "../../types";
import styles from "./style";
import {useNavigation} from "@react-navigation/native";

export type ContactListItemProps = {
    user: User
}

const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: user.id,
            name: user.name,
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: user.imageUri}} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text numberOfLines={1} style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
};

export default ContactListItem;