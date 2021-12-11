import React, {useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from './Order.style';
import {NavBar, Text} from '../../Components';
import bakers from '../../../resources/Dummy/bakers.json';
import {ItemsDetail, OrderSection} from '../../sections';
import theme from '../../../resources/Colors/theme';

const colors = {
  white: [theme.WHITE_COLOR, theme.WHITE_COLOR],
  activeCategory: [theme.SECONDARY_COLOR, theme.PRIMARY_COLOR],
};

const Order = (props) => {
  const {i18n} = props;
  const [index, setIndex] = useState(0);
  const [info, setInfo] = useState(false);
  const [routes] = useState([
    {key: 'all', title: i18n.t('words.all')},
    {key: 'new', title: i18n.t('words.new')},
    {key: 'processing', title: i18n.t('words.processing')},
    {key: 'ontheway', title: i18n.t('phrases.onTheWay')},
    {key: 'delivered', title: i18n.t('words.delivered')},
    {key: 'cancelled', title: i18n.t('words.cancelled')},
  ]);

  const OrderScene = (_props) => {
    const {onPress} = _props;
    return (
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={bakers}
        renderItem={({item, key}) => (
          <OrderSection
            key={key}
            onPress={() => Actions.orderDetails()}
            onDet={() => onPress()}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        key={'flat'}
      />
    );
  };

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'all':
        return <OrderScene onPress={() => setInfo(true)} />;
      case 'new':
        return <OrderScene onPress={() => setInfo(true)} />;
      case 'processing':
        return <OrderScene onPress={() => setInfo(true)} />;
      case 'ontheway':
        return <OrderScene onPress={() => setInfo(true)} />;
      case 'delivered':
        return <OrderScene onPress={() => setInfo(true)} />;
      case 'cancelled':
        return <OrderScene onPress={() => setInfo(true)} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="Order" search={true} />
      <View style={styles.tabTitle}>
        <Text style={styles.tabBarTitle}>{i18n.t('phrases.myOrders')}</Text>
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
      <ItemsDetail info={info} setInfo={setInfo} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(Order);
