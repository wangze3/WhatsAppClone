import {FontAwesome, Fontisto} from '@expo/vector-icons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {RootTabParamList} from '../types';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].background,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 4,
                },
                tabBarShowIcon: true
            }}>
            <MainTab.Screen
                name="Camera"
                component={ChatsScreen}
                options={{
                    tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
                    tabBarLabel: () => null,
                }}
            />
            <MainTab.Screen
                name="Chats"
                component={ChatsScreen}
            />
            <MainTab.Screen
                name="Status"
                component={TabTwoScreen}
            />
            <MainTab.Screen
                name="Calls"
                component={TabTwoScreen}
            />
        </MainTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}