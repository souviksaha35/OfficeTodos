import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import {
  Provider as PaperProvider
} from 'react-native-paper';
import { DrawerContent } from '../components/DrawerContent'
import { createDrawerNavigator, } from '@react-navigation/drawer';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import TaskScreen from '../screens/TasksScreen';
import createTaskScreen from '../screens/createTaskScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const Drawer = createDrawerNavigator();


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <PaperProvider>
        <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Home" component={RootNavigator}/>
            {/* <Drawer.Screen name="Tasks" component={TaskScreen}/> */}
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Task" component={TaskScreen}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
