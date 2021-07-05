import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {TextInput, Button} from '../../components';
import styles from './style';
import {GlobalState} from '../../types';
import {useSelector, useDispatch} from 'react-redux';
import appActions from '../../provider/actions';
import utils from '../../utils';

const ACTIONS = {
  handleName: 1,
  handlePrice: 2,
  handleStock: 3,
  handleDescription: 4,
};

export default function AddItem({navigation: {navigate}}) {
  const {setOfNames, inventory} = useSelector((state: GlobalState) => state);
  const nullError = {
    name: '',
    price: '',
    totalStock: '',
    description: '',
  };
  const dispatch = useDispatch();
  const [form, handleForm] = useState({
    name: '',
    price: '',
    totalStock: '',
    description: '',
  });
  const [error, handleError] = useState(nullError);
  const [disabled, setDisabled] = useState<boolean>(true);
  const addItemToInventory = () => {
    setOfNames?.add(form.name.trim().toLowerCase());
    inventory.unshift({
      ...form,
      price: form.price,
      totalStock: form.totalStock,
    });
    dispatch(appActions.addItem({inventory, setOfNames}));
    navigate(utils.routes.HOME);
  };

  const checkAllInputs = () => {
    if (form.name.trim().length < 3) {
      handleError({...nullError, name: 'Invalid name'});
      return true;
    }
    if (setOfNames?.has(form.name.trim().toLowerCase())) {
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
          handleError(nullError);
          handleTextInput(text, ACTIONS.handleName);
          setDisabled(checkAllInputs());
        }}
        error={error.name}
        onEndEditing={checkAllInputs}
        accessibilityHint="Put in name"
        accessibilityLabel="Name text input"
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
        onEndEditing={checkAllInputs}
        accessibilityHint="Put in price"
        accessibilityLabel="Price text input"
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
        onEndEditing={checkAllInputs}
        accessibilityHint="Put in total stock"
        accessibilityLabel="Stock text input"
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
        onEndEditing={checkAllInputs}
        accessibilityHint="Put in description"
        accessibilityLabel="Description text input"
      />
      <Button
        label="Add"
        disabled={disabled}
        containerStyle={styles.input}
        onPress={addItemToInventory}
        accessibilityLabel="Add to inventory"
        accessibilityHint="tap to add to inventory"
      />
    </ScrollView>
  );
}
