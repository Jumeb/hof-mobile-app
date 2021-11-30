import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../../resources/Colors/theme';

import styles from './Categories.style';

const Categories = (props) => {
  const {variety, activeIndex, setActiveIndex, categoryIndex} = props;
  const colors = {
    white: [theme.WHITE_COLOR, theme.WHITE_COLOR],
    activeCategory: [theme.SECONDARY_COLOR, theme.PRIMARY_COLOR],
  };
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        style={styles.variety}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={
          categoryIndex === activeIndex ? colors.activeCategory : colors.white
        }>
        <TouchableOpacity
          style={styles.varietyButton}
          onPress={() => setActiveIndex(categoryIndex)}>
          <Text
            style={[
              styles.varietyButtonText,
              {
                color:
                  categoryIndex === activeIndex
                    ? theme.WHITE_COLOR
                    : theme.SECONDARY_COLOR,
              },
            ]}>
            {variety.type}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Categories;
