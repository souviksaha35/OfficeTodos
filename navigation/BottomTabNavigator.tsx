import { AntDesign, Ionicons, Octicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../constants/Colors';
import ExploreScreen from '../screens/ExploreScreen';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import createTaskScreen from '../screens/createTaskScreen';
import TeamScreen from '../screens/TeamScreen';
import createTeamScreen from '../screens/createTeamScreen';


const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#fff">
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Tasks"
        component={TabTwoNavigator}
        options={{
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => <Octicons name="tasklist" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Teams"
        component={TabThreeNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => <AntDesign name="team" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Explore"
        component={TabFourNavigator}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => <Feather name="aperture" size={24} color={color} />,
        }}
      />
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
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false, }}
      />

      <TabTwoStack.Screen
        name="createTaskScreen"
        component={createTaskScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TeamScreen"
        component={TeamScreen}
        options={{ headerShown: false }}
      />

      <TabThreeStack.Screen
        name="createTeamScreen"
        component={createTeamScreen}
        options={{ headerShown: false }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
    </TabFourStack.Navigator>
  );
}
