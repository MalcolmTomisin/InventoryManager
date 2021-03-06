import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {InventoryScreen, AddScreen, EditScreen} from '../screens';
import utils from '../utils';
import React from 'react';

const {routes} = utils;

enableScreens();
const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen component={InventoryScreen} name={routes.HOME} />
    <Stack.Screen component={AddScreen} name={routes.ADD} />
    <Stack.Screen component={EditScreen} name={routes.EDIT} />
  </Stack.Navigator>
);
