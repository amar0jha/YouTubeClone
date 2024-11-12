import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './bottomtab';
import { ScreenNames } from './screennames';
import VideoPlayer from '../screens/home/videoplayer';
import PlayerScreen from '../screens/playerscreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BottomTab'
                screenOptions={{
                    animation: 'slide_from_right',
                }}>
                {/* <Stack.Screen
                    component={SplashScreen}
                    name={ScreenNames.Splash}
                    options={{ headerShown: false }}
                /> */}

                <Stack.Screen
                    component={BottomTab}
                    name={ScreenNames.BottomTab}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    component={VideoPlayer}
                    name={ScreenNames.VideoPlayer}
                    options={{ headerShown: false }}
                />

                 <Stack.Screen
                    component={PlayerScreen}
                    name={ScreenNames.PlayerScreen}
                    options={{ headerShown: false }}
                />

                {/* <Stack.Screen
                    component={ChatScreen}
                    name={ScreenNames.Chat}
                    options={{ headerShown: false }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
