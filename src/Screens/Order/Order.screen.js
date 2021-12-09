import React, {useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Order.style';
import {NavBar, Text} from '../../Components';
import bakers from '../../../resources/Dummy/bakers.json';
import {OrderSection} from '../../sections';
import {Actions} from 'react-native-router-flux';
import theme from '../../../resources/Colors/theme';

const colors = {
  white: [theme.WHITE_COLOR, theme.WHITE_COLOR],
  activeCategory: [theme.SECONDARY_COLOR, theme.PRIMARY_COLOR],
};

const Order = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'All'},
    {key: 'new', title: 'New'},
    {key: 'processing', title: 'Processing'},
    {key: 'ontheway', title: 'On the way'},
    {key: 'delivered', title: 'Delivered'},
    {key: 'cancelled', title: 'Cancelled'},
  ]);

  const OrderScene = () => {
    return (
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={bakers}
        renderItem={({item, key}) => (
          <OrderSection key={key} onPress={() => Actions.orderDetails()} />
        )}
        keyExtractor={(item) => item.id.toString()}
        key={'flat'}
      />
    );
  };

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'all':
        return <OrderScene call={'hahah'} />;
      case 'new':
        return <OrderScene />;
      case 'processing':
        return <OrderScene />;
      case 'ontheway':
        return <OrderScene />;
      case 'delivered':
        return <OrderScene />;
      case 'cancelled':
        return <OrderScene />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="Order" search={true} />
      <View style={styles.tabTitle}>
        <Text style={styles.tabBarTitle}>My Orders</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: theme.WIDTH_100}}
        renderTabBar={(_props) => (
          <TabBar
            {..._props}
            scrollEnabled
            bounces
            pressColor={theme.SECONESSS_COLOR}
            tabStyle={styles.tabContainer}
            indicatorStyle={styles.renderIndicator}
            style={styles.tabContainer}
            renderLabel={({route, focused, color}) => (
              <LinearGradient
                style={styles.scene}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={focused ? colors.activeCategory : colors.white}>
                <TouchableOpacity style={styles.sceneButton}>
                  <Text
                    style={[
                      styles.sceneButtonText,
                      {
                        color: focused
                          ? theme.WHITE_COLOR
                          : theme.SECONDARY_COLOR,
                      },
                    ]}>
                    {route.title}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Order;
