import 'react-native';
import React from 'react';
import Edit from '../src/screens/Edit';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

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
      return {inventory: [], setOfNames: new Set()};
    }),
    useDispatch: jest.fn().mockImplementation(() => {
      return () => {};
    }),
  };
});

let props = createTestProps({});

it('renders correctly', () => {
  const tree = renderer.create(<Edit {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
