import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  useWindowDimensions,
  Platform,
  UIManager,
  Animated,
} from 'react-native';

import styles from './TabBar.style';
import TabIcon from '../TabIcon/TabIcon.component';
import {connect} from 'react-redux';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TabBarTwo = (props) => {
  const {state} = props.navigation;
  const {scrolling} = props;
  const activeTabIndex = state.index;
  let wide = useWindowDimensions().width - 30;
  let height = useWindowDimensions().height - 75;
  let _height = height + 90;

  const _bottom = useRef(new Animated.Value(height + 75)).current;

  const slideUp = () => {
    Animated.timing(_bottom, {
      toValue: height,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(_bottom, {
      toValue: _height,
      duration: 500,
      velocity: 3,
      tension: 2,
      friction: 6,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (scrolling) {
      slideUp();
    }
    setTimeout(() => {
      slideDown();
    }, 5000);
  }, [scrolling]);
  return (
    <Animated.View
      style={[
        styles.tabBar,
        {width: wide, transform: [{translateY: _bottom}]},
      ]}>
      {state.routes.map((element) => (
        <TabIcon
          element={element}
          title={element.key}
          activeTabIndex={activeTabIndex}
          key={element.key}
        />
      ))}
    </Animated.View>
  );
};

const mapStateToProps = ({scroll}) => {
  return {
    scrolling: scroll.scrolling,
  };
};

export default connect(mapStateToProps)(TabBarTwo);
