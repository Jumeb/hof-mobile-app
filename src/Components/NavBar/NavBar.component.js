import React, {useState} from 'react';
import {
  Platform,
  UIManager,
  LayoutAnimation,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import theme from '../../../resources/Colors/theme';

import styles from './NavBar.style';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Header = (props) => {
  const {screen, search, pop, right, i18n, action} = props;
  const [showSearch, setShowSearch] = useState(false);
  const searchScreen =
    screen.toString() === 'Home'
      ? i18n.t('words.chefs')
      : screen.toString() === 'Shop'
      ? i18n.t('words.shop')
      : screen.toString() === 'Order'
      ? i18n.t('phrases.myOrders')
      : i18n.t('words.cart');

  const animatedWidth = {
    width: showSearch ? 180 : 0,
    opacity: showSearch ? 1 : 0,
  };

  const toggleShow = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        500,
        LayoutAnimation.Types.linear,
        LayoutAnimation.Properties.opacity,
      ),
    );
    setShowSearch(!showSearch);
  };

  return (
    <View style={styles.headerContainer}>
      {pop && (
        <TouchableOpacity
          style={[
            styles.backIndicator,
            right ? styles.marginLeft : styles.marginRight,
            showSearch && styles.marginRight,
          ]}
          onPress={() => Actions.pop()}>
          <Icons
            name="ios-chevron-back-outline"
            size={20}
            color={theme.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      )}
      {/* <TouchableOpacity
        style={styles.screenIndicator}
        onPress={() => Actions.pop()}>
        <Icons
          name="ios-bookmark-outline"
          size={25}
          color={theme.PRIMARY_COLOR}
        />
        <View style={styles.eventsCountContainer}>
          <Text style={styles.eventsCount}>1</Text>
        </View>
      </TouchableOpacity> */}
      {screen.toString() === 'Home' && !showSearch && (
        <TouchableOpacity
          style={[styles.actionIndicator, styles.marginLeft]}
          onPress={() => Actions.favourites()}>
          <Icons
            name="ios-heart-outline"
            size={20}
            color={theme.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      )}
      {screen.toString() === 'Reviews' && !showSearch && (
        <TouchableOpacity style={styles.eventsIndicator}>
          <Icons
            name="ios-bookmark-outline"
            size={25}
            color={theme.PRIMARY_COLOR}
          />
          <View style={styles.eventsCountContainer}>
            <Text style={styles.eventsCount}>1</Text>
          </View>
        </TouchableOpacity>
      )}
      {screen.toString() === 'pastryInfo' && !showSearch && (
        <TouchableOpacity
          style={styles.actionIndicator}
          onPress={() => action()}>
          <Icons
            name="ios-heart-outline"
            size={20}
            color={theme.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      )}
      {screen.toString() === 'chefInfo' && !showSearch && (
        <TouchableOpacity
          style={styles.actionIndicator}
          // onPress={() => Actions.pop()}
        >
          <Icons
            name="ios-person-add-outline"
            size={20}
            color={theme.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      )}
      {(screen.toString() === 'Shop' || screen.toString() === 'checkout') &&
        !showSearch && (
          <TouchableOpacity
            style={styles.eventsIndicator}
            onPress={() => Actions.cart()}>
            <Icons
              name="ios-cart-outline"
              size={25}
              color={theme.PRIMARY_COLOR}
            />
            <View style={styles.eventsCountContainer}>
              <Text style={styles.eventsCount}>88</Text>
            </View>
          </TouchableOpacity>
        )}
      {search && (
        <View
          style={[
            styles.searchTextInputContainer,
            (screen.toString() === 'Order' || showSearch) && styles.marginLeft,
          ]}>
          <View style={animatedWidth}>
            <TextInput
              placeholder={i18n.t('words.search') + ' ' + searchScreen}
              placeholderTextColor={theme.LIGHT_GREY}
              style={[
                styles.searchBar,
                showSearch ? styles.showSearch : styles.hideSearch,
              ]}
            />
          </View>
          <TouchableOpacity
            style={styles.searchIndicator}
            onPress={() => toggleShow()}>
            <Icons
              name="ios-search-outline"
              size={20}
              color={theme.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(Header);
