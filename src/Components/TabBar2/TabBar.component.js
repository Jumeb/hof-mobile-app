import React, {useEffect, useRef} from 'react';
import {useWindowDimensions, Animated} from 'react-native';

import styles from './TabBar.style';
import TabIcon from '../TabIcon/TabIcon.component';
import {connect} from 'react-redux';

const TabBarTwo = (props) => {
  const {state} = props.navigation;
  const {scrolling} = props;
  const activeTabIndex = state.index;
  let wide = useWindowDimensions().width - 30;
  let height = useWindowDimensions().height * 0.892;
  let _height = height * 1.148;

  const _bottom = useRef(new Animated.Value(height / 0.892)).current;
  const _opacity = useRef(new Animated.Value(0.5)).current;

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

  const fadeIn = () => {
    Animated.timing(_opacity, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(_opacity, {
      toValue: 0.5,
      duration: 300,
      velocity: 3,
      tension: 2,
      friction: 6,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!scrolling) {
      slideUp();
      fadeIn();
    }
    setTimeout(() => {
      slideDown();
      fadeOut();
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolling]);

  return (
    <Animated.View
      style={[
        styles.tabBar,
        state.index === 3
          ? {
              width: wide,
              opacity: 1,
              transform: [{translateY: height}],
            }
          : {
              width: wide,
              opacity: _opacity,
              transform: [{translateY: _bottom}],
            },
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
