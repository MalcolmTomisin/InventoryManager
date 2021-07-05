/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation';
import store from './src/provider';
import {AppState, AppStateStatus} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import utils from './src/utils';
import appActions from './src/provider/actions';

const App = () => {
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = React.useState(appState.current);

  React.useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    AsyncStorage.getItem(utils.storage_key).then(val => {
      if (val !== null) {
        let parsedState = JSON.parse(val);
        store.dispatch(
          appActions.hydrateState({
            inventory: parsedState.inventory,
            setOfNames: new Set(parsedState.setOfNames),
          }),
        );
      }
    });

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (
      appState.current === 'active' &&
      nextAppState.match(/inactive|background/)
    ) {
      if (!utils.checkEmptyState(store.getState())) {
        AsyncStorage.setItem(
          utils.storage_key,
          JSON.stringify({
            ...store.getState(),
            setOfNames: [...store.getState().setOfNames],
          }),
        ).finally(() => {
          console.log('complete');
        });
      }
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

store.subscribe(() => {
  console.log('Store Changed, ', store.getState());
});

export default App;
