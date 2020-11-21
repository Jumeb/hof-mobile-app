import React from 'react';
import {Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './TabBar.style';
import TabIcon from '../TabIcon/TabIcon.component';

const TabBarTwo = (props) => {
  let scene = '';
  const {state} = props.navigation;
  const activeTabIndex = state.index;
  console.log(state);

  let wide = useWindowDimensions().width - 30;
  return (
    <View style={[styles.tabBar, {width: wide}]}>
      {state.routes.map((element) => (
        <TabIcon
          element={element}
          title={element.key}
          activeTabIndex={activeTabIndex}
        />
      ))}
    </View>
  );
};

export default TabBarTwo;
