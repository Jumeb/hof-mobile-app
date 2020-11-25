import React from 'react';
import {View, useWindowDimensions} from 'react-native';

import styles from './TabBar.style';
import TabIcon from '../TabIcon/TabIcon.component';

const TabBarTwo = (props) => {
  const {state} = props.navigation;
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
    </View>
  );
};

export default TabBarTwo;
