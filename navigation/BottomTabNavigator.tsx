import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

// Screen
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ServicesScreen from '../screens/ServicesScreen';
import CityScreen from '../screens/CityScreen';


import { BottomTabParamList, TabHomeParamList, TabCalendarParamList, TabServicesParamList, TabCityParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Inicio"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Calendario"
        component={TabCalendarNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Servicios"
        component={TabServicesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Ciudad"
        component={TabCityNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
     {/*  <BottomTab.Screen
        name="Menu"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

// HOME
const TabHomeStack = createStackNavigator<TabHomeParamList>();
function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerTitle: 'Inicio' }}
      />
    </TabHomeStack.Navigator>
  );
}

// CALENDAR
const TabCalendarStack = createStackNavigator<TabCalendarParamList>();
function TabCalendarNavigator() {
  return (
    <TabCalendarStack.Navigator>
      <TabCalendarStack.Screen
        name="calendar"
        component={CalendarScreen}
        options={{ headerTitle: 'Calendario' }}
      />
    </TabCalendarStack.Navigator>
  );
}

// SERVICES
const TabServicesStack = createStackNavigator<TabServicesParamList>();
function TabServicesNavigator() {
  return (
    <TabServicesStack.Navigator>
      <TabServicesStack.Screen
        name="services"
        component={ServicesScreen}
        options={{ headerTitle: 'Servicios' }}
      />
    </TabServicesStack.Navigator>
  );
}

// CITY
const TabCityStack = createStackNavigator<TabCityParamList>();
function TabCityNavigator() {
  return (
    <TabCityStack.Navigator>
      <TabCityStack.Screen
        name="city"
        component={CityScreen}
        options={{ headerTitle: 'Ciudad' }}
      />
    </TabCityStack.Navigator>
  );
}



