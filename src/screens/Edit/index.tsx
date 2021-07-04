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
  const dispatch = useDispatch();
  const [form, handleForm] = useState({
    name: '',
    price: '',
    totalStock: '',
    description: '',
  });
  const [error, handleError] = useState({
    name: '',
    price: '',
    totalStock: '',
    description: '',
  });
  const [disabled, setDisabled] = useState<boolean>(true);
  const addItemToInventory = () => {
    setOfNames?.add(form.name.trim().toLowerCase());
    inventory.unshift({
      ...form,
      price: parseInt(form.price),
      totalStock: parseInt(form.totalStock),
    });
    dispatch(appActions.addItem({inventory, setOfNames}));
    navigate(utils.routes.HOME);
  };

  const checkAllInputs = () => {
    if (form.name.trim().length < 3) {
      return handleError({...error, name: 'Invalid name'});
    }
    if (setOfNames?.has(form.name.trim().toLowerCase())) {
      return handleError({...error, name: 'Name already taken'});
    }
    if (!form.price.match(/^\d+$/)) {
      return handleError({...error, price: 'invalid price'});
    }
    if (!form.totalStock.match(/^\d+$/)) {
      return handleError({...error, totalStock: 'Invalid stock'});
    }
    if (form.description.trim().split(' ').length < 3) {
      return handleError({...error, description: 'Add more description'});
    }
    return setDisabled(false);
  };

  const handleTextInput = (text: string, flag: number) => {
    switch (flag) {
      case ACTIONS.handleName:
        handleError({...error, name: ''});
        return handleForm({...form, name: text});
      case ACTIONS.handlePrice:
        handleError({...error, price: ''});
        return handleForm({...form, price: text});
      case ACTIONS.handleStock:
        handleError({...error, totalStock: ''});
        return handleForm({...form, totalStock: text});
      case ACTIONS.handleDescription:
        handleError({...error, description: ''});
        return handleForm({...form, description: text});
    }
  };
  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="Name"
        placeholder="Tomisin Alu"
        containerStyle={styles.input}
        value={form.name}
        onChangeText={text => {
          handleTextInput(text, ACTIONS.handleName);
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
        }}
        error={error.description}
        onEndEditing={() => checkAllInputs()}
      />
      <Button
        label="Add"
        disabled={disabled}
        containerStyle={styles.input}
        onPress={addItemToInventory}
      />
    </ScrollView>
  );
}