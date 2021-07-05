import appReducer, {INITIAL_STATE} from '../src/provider/reducers';
import appActions from '../src/provider/actions';
import {Item} from '../src/types';

describe('create CRUD tests on global state that ends up being persisted to storage layer', () => {
  const item: Item = {
    price: '3',
    totalStock: '5',
    name: 'zederf',
    description: 'zzzzzzzzzzzz',
  };
  it('create state', () => {
    expect(
      appReducer(INITIAL_STATE, appActions.addItem({inventory: [item]})),
    ).toEqual({
      inventory: [item],
      setOfNames: new Set(),
    });
  });
  it('updates state', () => {
    expect(
      appReducer(
        {inventory: [item], setOfNames: new Set(['Faraday'])},
        appActions.editItem({
          setOfNames: new Set(['Faraday', 'Scooby']),
        }),
      ),
    ).toEqual({inventory: [item], setOfNames: new Set(['Faraday', 'Scooby'])});
  });
  it('deletes item', () => {
    expect(
      appReducer(
        {inventory: [item], setOfNames: new Set(['Faraday', 'Scooby'])},
        appActions.removeItem(INITIAL_STATE),
      ),
    ).toEqual(INITIAL_STATE);
  });
});
