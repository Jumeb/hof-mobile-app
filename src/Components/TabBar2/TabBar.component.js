import React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  Platform,
  UIManager,
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
  return (
    <View style={[styles.tabBar, {width: wide}]}>
      {state.routes.map((element) => (
        <TabIcon
          element={element}
          title={element.key}
          activeTabIndex={activeTabIndex}
          key={element.key}
        />
      ))}
      <Text>{scrolling && 'Hello'}</Text>
    </View>
  );
};

const mapStateToProps = ({scroll}) => {
  return {
    scrolling: scroll.scrolling,
  };
};

export default connect(mapStateToProps)(TabBarTwo);
