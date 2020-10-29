import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import theme from '../../../resources/Colors/theme';

import styles from './best.style';

const Best = (props) => {
  const {data} = props;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.bestContainer}>
        <ImageBackground
          style={styles.bestBackground}
          source={require('../../../resources/images/cups-12.jpg')}>
          <View style={styles.likesContainer}>
            <Icons name="thumbs-up" size={25} color={theme.primary_color} />
            <Text style={styles.pastryLikes}>{data.rank}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.pastryName}>{data.ceo_name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Best;
