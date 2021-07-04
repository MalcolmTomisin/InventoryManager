import {TextInputProps} from 'react-native';
export interface Item {
  name: string;
  price: number | null;
  totalStock: number | null;
  description: string;
}

export interface FABProps {
  onPress: () => void;
}

export interface InputProps extends TextInputProps {
  containerStyle?: object;
  label?: string;
  error?: string;
}

export interface TouchableProps {
  label?: string;
  containerStyle?: object;
  disabled?: boolean;
  onPress?: () => void;
}

export interface GlobalState {
  inventory: Array<Item>;
  setOfNames?: Set<string>;
}

export interface Action {
  type: string;
  payload: object;
}
