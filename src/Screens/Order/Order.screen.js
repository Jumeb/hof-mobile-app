import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';

import styles from './Order.style';
import {Categories, NavBar, Text} from '../../Components';
import bakers from '../../../resources/Dummy/bakers.json';
import {OrderSection} from '../../sections';
import {Actions} from 'react-native-router-flux';

const Order = () => {
  const [active, setActive] = useState(0);
  const TabBar = () => {
    return (
      <View style={styles.tabBarContainer}>
        <Text style={styles.tabBarTitle}>My Orders</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.tabViewContainer}>
          {varieties.map((variety, key) => {
            return (
              <Categories
                key={key}
                categoryIndex={key}
                activeIndex={active}
                variety={variety}
                setActiveIndex={setActive}
              />
            );
          })}
          <View style={styles.spacer} />
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="Order" search={true} />
      <FlatList
        ListHeaderComponent={TabBar()}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        key={'flat'}
        data={bakers}
        renderItem={({item, key}) => (
          <OrderSection key={key} onPress={() => Actions.orderDetails()} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Order;

const varieties = [
  {id: 1, type: 'All'},
  {id: 2, type: 'New'},
  {id: 3, type: 'Processing'},
  {id: 4, type: 'On the way'},
  {id: 5, type: 'Delivered'},
  {id: 6, type: 'Cancelled'},
];
