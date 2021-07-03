import React from 'react';
import {InventoryList} from '../../components';
import {data} from './data';

export default function Inventory() {
  return <InventoryList data={data} />;
}
