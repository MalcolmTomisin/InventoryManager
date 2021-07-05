import 'react-native';
import React from 'react';
import {InventoryList} from '../src/components';
import {fireEvent, render} from '@testing-library/react-native';
import utils from '../src/utils';

const createTestProps = (props: Object) => ({
  navigation: {
    state: {params: {}},
    dispatch: jest.fn(),
    goBack: jest.fn(),
    dismiss: jest.fn(),
    navigate: jest.fn(),
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
    toggleDrawer: jest.fn(),
    getParam: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    isFocused: jest.fn(),
  },
  route: {
    params: {itemId: null},
  },
  ...props,
});

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return {inventory: [{}], setOfNames: new Set()};
    }),
    useDispatch: jest.fn().mockImplementation(() => {
      return () => {};
    }),
  };
});

let props = createTestProps({});

test('tests to ensure users are taken to the edit screen after tapping on an existing item in the inventory list', () => {
  const {getByTestId} = render(
    <InventoryList navigate={props.navigation.navigate} />,
  );
  const nav = getByTestId(utils.testID.nav);
  fireEvent.press(nav);
  expect(props.navigation.navigate).toBeCalledWith(utils.routes.EDIT, {
    itemId: 0,
  });
});
