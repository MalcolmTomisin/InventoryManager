import {TextInputProps} from 'react-native';
export interface Item {
  name: string;
  price: string;
  totalStock: string;
  description: string;
}

export interface FABProps {
  onPress: () => void;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityLiveRegion?: string;
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
  accessibilityLabel: string;
  accessibilityHint: string;
}

export interface GlobalState {
  inventory: Array<Item>;
  setOfNames?: Set<string>;
}

export interface Action {
  type: string;
  payload: object;
}

export interface CarouselProps {
  navigate: (arg: string, obj: object) => void;
}
