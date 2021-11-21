import React from 'react';
import {Image, ImageURISource, Text, TouchableWithoutFeedback, View} from "react-native";
import {ChatRoom} from "../../types";
import styles from "./style";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];
    const imageSource: ImageURISource = {uri: user.imageUri.toString()};

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={imageSource} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text
                            style={styles.lastMessage}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}>
                            {chatRoom.lastMessage.content}
                        </Text>

                    </View>
                </View>

                <Text style={styles.time} >
                    {moment(chatRoom.lastMessage.createdAt.toString()).format("DD/MM/YYYY")}
                </Text>
            </View>
        </TouchableWithoutFeedback>

    )
};

export default ChatListItem;