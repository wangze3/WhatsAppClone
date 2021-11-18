import React from 'react';
import {Text, View, Image, ImageURISource} from "react-native";
import {ChatRoom} from "../../types";
import styles from "./style";
import moment from "moment";

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const user = chatRoom.users[1];
    const imageSource: ImageURISource = {uri: user.imageUri.toString()};

    return (
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
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
    )
};

export default ChatListItem;