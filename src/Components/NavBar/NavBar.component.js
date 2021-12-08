import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import theme from '../../../resources/Colors/theme';

import styles from './NavBar.style';

const Header = (props) => {
  const {screen, search, pop, right} = props;
  return (
    <View style={styles.headerContainer}>
      {pop && (
        <TouchableOpacity
          style={[
            styles.backIndicator,
            right ? styles.marginLeft : styles.marginRight,
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
      {screen.toString() === 'Home' && (
        <TouchableOpacity
          style={[styles.searchIndicator, styles.marginLeft]}
          onPress={() => Actions.favourites()}>
          <Icons
            name="ios-heart-outline"
            size={20}
            color={theme.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      )}
      {screen.toString() === 'Reviews' && (
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
      {screen.toString() === 'pastryInfo' && (
        <TouchableOpacity
          style={styles.searchIndicator}
          // onPress={() => Actions.pop()}
        >
          <Icons
            name="ios-heart-outline"
            size={20}
            color={theme.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      )}
      {screen.toString() === 'chefInfo' && (
        <TouchableOpacity
          style={styles.searchIndicator}
          // onPress={() => Actions.pop()}
        >
          <Icons
            name="ios-person-add-outline"
            size={20}
            color={theme.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      )}
      {screen.toString() === 'Shop' && (
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
        <TouchableOpacity
          style={[
            styles.searchIndicator,
            screen.toString() === 'Order' && styles.marginLeft,
          ]}
          // onPress={() => Actions.pop()}
        >
          <Icons
            name="ios-search-outline"
            size={20}
            color={theme.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
