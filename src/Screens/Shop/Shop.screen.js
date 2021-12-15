import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {
  Best,
  Categories,
  NavBar,
  Notification,
  PastryCard,
} from '../../Components';
import styles from './Shop.style';
import best from '../../../resources/Dummy/best.json';
import bakers from '../../../resources/Dummy/bakers.json';
import theme from '../../../resources/Colors/theme';
import {scrolling} from '../../redux/actions/ScrollActions';

const Shop = (props) => {
  const {i18n} = props;
  const [active, setActive] = useState(0);
  const [layout, setLayout] = useState(0);
  const [notify, setNotify] = useState(false);

  const handle = (event) => {
    props.scrolling(true);
  };

  const hide = (event) => {
    props.scrolling(false);
  };

  const renderHeader = () => {
    return (
      <View>
        <View>
          <View style={styles.pastriesContainer}>
            <Text style={styles.topPastries}>Most Liked</Text>
          </View>
          <FlatList
            horizontal={true}
            style={styles.listStyle}
            showsHorizontalScrollIndicator={false}
            data={best}
            renderItem={({item, key}) => (
              <Best
                data={item}
                onPress={() => Actions.pastryInfo()}
                setNotify={setNotify}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={() => <View style={styles.footerStyle} />}
          />
        </View>
        <Text style={styles.varietyText}>Varieties</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.paddingContent}>
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
        <View style={styles.gridContainer}>
          <View style={styles.pastriesLayout}>
            <TouchableOpacity
              style={styles.pastriesLayoutButton}
              onPress={() => setLayout(0)}>
              <Icons
                name="grid-outline"
                size={20}
                color={layout === 0 ? theme.SECONDARY_COLOR : theme.DARK_GREY}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pastriesLayoutButton}
              onPress={() => setLayout(1)}>
              <Icons
                name="square-outline"
                size={20}
                color={layout === 1 ? theme.SECONDARY_COLOR : theme.DARK_GREY}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen={'Shop'} search={true} pop={true} />
      <FlatList
        ListHeaderComponent={renderHeader()}
        horizontal={false}
        numColumns={layout === 0 ? 2 : 1}
        data={bakers}
        renderItem={({item, key}) => (
          <PastryCard
            layout={layout}
            key={key}
            setNotify={setNotify}
            onPress={() => Actions.pastryInfo()}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={layout === 0 ? styles.columnWrapperStyle : null}
        key={layout === 0 ? 'grid' : 'flat'}
        onScrollBeginDrag={(event) => handle(event)}
        onScrollEndDrag={(event) => hide(event)}
      />
      <Notification
        notify={notify}
        setNotify={setNotify}
        msg={i18n.t('phrases.addedToCart')}
        type="success"
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

const varieties = [
  {id: 1, type: 'Birthday Cakes'},
  {id: 2, type: 'Wedding Cakes'},
  {id: 3, type: 'Cookies'},
  {id: 4, type: 'Pancakes'},
  {id: 5, type: 'Valentine'},
  {id: 6, type: 'Doughnuts'},
  {id: 7, type: 'Cup Cakes'},
];
