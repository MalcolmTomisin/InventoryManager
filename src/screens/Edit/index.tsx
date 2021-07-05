import React, {useState, useEffect} from 'react';
import {ScrollView, Alert} from 'react-native';
import {TextInput, Button, TrashButton} from '../../components';
import styles from './style';
import {GlobalState, Item} from '../../types';
import {useSelector, useDispatch} from 'react-redux';
import appActions from '../../provider/actions';
import utils from '../../utils';

const ACTIONS = {
  handleName: 1,
  handlePrice: 2,
  handleStock: 3,
  handleDescription: 4,
};

export default function EditItem({navigation: {navigate, pop}, route}) {
  const {setOfNames, inventory} = useSelector((state: GlobalState) => state);
  const nullError = {
    name: '',
    price: '',
    totalStock: '',
    description: '',
  };
  const {itemId} = route.params;
  const dispatch = useDispatch();
  const [form, handleForm] = React.useState<Item>({
    name: '',
    price: '',
    totalStock: '',
    description: '',
  });
  const [error, handleError] = React.useState(nullError);

  React.useEffect(() => {
    handleForm(inventory[itemId]);
  }, []);
  const [disabled, setDisabled] = useState<boolean>(true);

  const addItemToInventory = () => {
    if (
      form.name.trim().toLowerCase() !==
      inventory[itemId].name.trim().toLowerCase()
    ) {
      setOfNames?.delete(inventory[itemId].name.trim().toLowerCase());
      setOfNames?.add(form.name.trim().toLowerCase());
    }
    inventory[itemId] = {...form};
    dispatch(appActions.addItem({inventory, setOfNames}));
      pop();
  };

  const deleteFromInventory = () => {
    Alert.alert('Delete', 'Proceed?', [
      {
        text: 'OK',
        onPress: () => {
          inventory.splice(itemId, 1);
          pop();
          dispatch(appActions.addItem({inventory}));
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
  };

  const checkAllInputs = () => {
    if (form.name.trim().length < 3) {
      handleError({...nullError, name: 'Invalid name'});
      return true;
    }
    if (
      setOfNames?.has(form.name.trim().toLowerCase()) &&
      form.name.trim().toLowerCase() !==
        inventory[itemId].name.trim().toLowerCase()
    ) {
      handleError({...nullError, name: 'Name already taken'});
      return true;
    }
    if (!form.price.match(/^\d+$/)) {
      handleError({...nullError, price: 'invalid price'});
      return true;
    }
    if (!form.totalStock.match(/^\d+$/)) {
      handleError({...nullError, totalStock: 'Invalid stock'});
      return true;
    }
    if (form.description.trim().split(' ').length < 3) {
      handleError({...nullError, description: 'Add more description'});
      return true;
    }
    handleError({...nullError});
    return false;
  };

  const handleTextInput = (text: string, flag: number) => {
    handleError(nullError);
    switch (flag) {
      case ACTIONS.handleName:
        return handleForm({...form, name: text});
      case ACTIONS.handlePrice:
        return handleForm({...form, price: text});
      case ACTIONS.handleStock:
        return handleForm({...form, totalStock: text});
      case ACTIONS.handleDescription:
        return handleForm({...form, description: text});
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Name"
        placeholder="Tomisin Alu"
        containerStyle={styles.input}
        value={form.name}
        onChangeText={text => {
          handleTextInput(text, ACTIONS.handleName);
          setDisabled(checkAllInputs());
        }}
        error={error.name}
        onEndEditing={() => checkAllInputs()}
      />
      <TextInput
        label="Price"
        placeholder="₦ 500"
        containerStyle={styles.input}
        keyboardType="numeric"
        value={form.price}
        onChangeText={text => {
          handleTextInput(text, ACTIONS.handlePrice);
          setDisabled(checkAllInputs());
        }}
        error={error.price}
        onEndEditing={() => checkAllInputs()}
      />
      <TextInput
        label="Total stock (Qty)"
        placeholder="65"
        containerStyle={styles.input}
        keyboardType="numeric"
        value={form.totalStock}
        onChangeText={text => {
          handleTextInput(text, ACTIONS.handleStock);
          setDisabled(checkAllInputs());
        }}
        error={error.totalStock}
        onEndEditing={() => checkAllInputs()}
      />
      <TextInput
        label="Description"
        placeholder="..."
        multiline
        containerStyle={styles.input}
        value={form.description}
        onChangeText={text => {
          handleTextInput(text, ACTIONS.handleDescription);
          setDisabled(checkAllInputs());
        }}
        error={error.description}
        onEndEditing={() => checkAllInputs()}
      />
      <Button
        label="Update"
        disabled={disabled}
        containerStyle={styles.input}
        onPress={addItemToInventory}
      />
      <TrashButton onPress={deleteFromInventory} />
    </ScrollView>
  );
}
