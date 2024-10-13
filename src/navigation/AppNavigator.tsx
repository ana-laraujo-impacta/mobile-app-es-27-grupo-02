import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash/SplashScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import ListSearchScreen from '../screens/ListSearch/ListSearchScreen';
import Tabs from 'src/components/Tabs';
import Developing from 'src/components/Developing';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Busca"
                    component={ListSearchScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Início"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Developing" component={Developing} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
