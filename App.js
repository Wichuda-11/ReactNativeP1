import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Detail from './screens/Detail';
import One from './screens/One';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ion-md-home'
                : 'ion-md-home-outline';
            } else if (route.name === 'One') {
              iconName = focused ? 'ion-md-notifications' : 'ion-md-notifications-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={"#000000"} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      
      <Tab.Screen name="หน้าหลัก" title="ถาม-ตอบ" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="การแจ้งเตือน" component={One} options={{ tabBarBadge: 3}}/>
    
    </Tab.Navigator>

    
    </NavigationContainer>
  )
}

export default App