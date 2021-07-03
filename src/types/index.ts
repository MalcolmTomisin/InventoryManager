export interface Item {
  name: string;
  price: number;
  totalStock: number;
  description: string;
}

export interface SvgProps {
  fill: string;
  width?: number;
  height?: number;
  price: number;
  style?: object;
}
