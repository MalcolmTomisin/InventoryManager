import Carousel from 'react-native-snap-carousel';
import {styles} from './style';
import {Item} from '../../types';
import React from 'react';
import {View, Image} from 'react-native';
import Price from '../PriceContainer';
import Name from '../NameContainer';
import Stock from '../StockContainer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import utils from '../../utils';
interface CarouselProps {
  data: Array<Item>;
}

export default function CarouselList({data}: CarouselProps) {
  const _renderItem = ({item, index}) => (
    <View style={styles.items}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `https://picsum.photos/id/${index}/200/300`}}
          resizeMode="cover"
          style={styles.image}
        />
        <Price price={item.price} containerStyle={styles.price} />
        <Name name={item.name} />
        <Stock stock={item.totalStock} />
      </View>
    </View>
  );

  const emptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Icon name="hourglass-empty" size={60} color={utils.colors.PRIMARY} />
    </View>
  );

  return (
    <Carousel
      data={[]}
      renderItem={_renderItem}
      itemWidth={styles.items.width}
      itemHeight={styles.items.height}
      sliderWidth={styles.carousel.width}
      sliderHeight={styles.carousel.height}
      ListEmptyComponent={emptyComponent}
    />
  );
}
