import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50
    },
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row'
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        width: '70%',
    },
    time: {
        fontSize: 16,
        color: 'grey'
    }
});

export default styles;