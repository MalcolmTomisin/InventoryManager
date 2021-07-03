import Carousel from 'react-native-snap-carousel';
import {styles} from './style';
import {Item} from '../../types';
import React from 'react';
import {View, Text, Image} from 'react-native';
import Price from '../PriceContainer';
import utils from '../../utils';

interface CarouselProps {
  data: Array<Item>;
}

export default function CarouselList({data}: CarouselProps) {
  const _renderItem = ({item, index}) => (
    <View>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        resizeMode="cover"
        style={styles.image}>
        <Price fill={utils.randomColor()} price={item.price} />
      </Image>
      <Text>{item.name}</Text>
      <Text>{item.totalStock}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={_renderItem}
      itemWidth={styles.items.width}
      itemHeight={styles.items.height}
      sliderWidth={styles.carousel.width}
      sliderHeight={styles.carousel.height}
    />
  );
}
