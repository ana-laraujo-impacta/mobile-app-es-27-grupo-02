import React from 'react';
import ListSearchScreen from '../../screens/ListSearchScreen';
import HomeScreen from '../../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: '#fff' },
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Início') {
                    iconName = 'home';
                } else if (route.name === 'Busca') {
                    iconName = 'search';
                } else if (route.name === 'Menu') {
                    iconName = 'menu';
                }

                return (
                    <Icon
                        name={iconName}
                        size={size}
                        color={color}
                    />
                );
            },
            tabBarActiveTintColor: '#FF40A7',
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Busca" component={ListSearchScreen} />
        <Tab.Screen name="Menu" component={HomeScreen} />
    </Tab.Navigator>

);

export default Tabs;