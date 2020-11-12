import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './categories.style';

const Categories = (props) => {
  const {variety, color, setColor} = props;
  console.log(color);
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        style={styles.variety}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={[color.start, color.end + 'aa']}>
        <TouchableOpacity
          style={styles.varietyButton}
          onPress={() => setColor({start: color.start, end: color.end})}>
          <Text style={styles.varietyButtonText}>{variety.type}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Categories;
