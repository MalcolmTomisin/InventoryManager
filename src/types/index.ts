import {TextInputProps} from 'react-native';
export interface Item {
  name: string;
  price: number;
  totalStock: number;
  description: string;
}

export interface FABProps {
  onPress: () => void;
}

export interface InputProps extends TextInputProps {
  containerStyle?: object;
  label?: string;
}