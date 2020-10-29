import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

import {Best} from '../../Components';
import styles from './shop.style';
import best from '../../../resources/Dummy/best.json';

const Shop = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        horizontal={true}
        data={best}
        renderItem={({item, key}) => <Best data={item} />}
      />
    </SafeAreaView>
  );
};

export default Shop;
