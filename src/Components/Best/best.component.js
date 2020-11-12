import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';

import styles from './best.style';

const Best = (props) => {
  const {data, color} = props;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={[styles.bestContainer, {borderColor: color.start}]}>
        <ImageBackground
          imageStyle={styles.bestBackground}
          style={styles.bestBackground}
          source={require('../../../resources/images/cups-12.jpg')}>
          <View style={styles.likesContainer}>
            <Icons name="thumbs-up" size={18} color={color.end} />
            <Text style={styles.pastryLikes}>{data.rank}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.pastryName}>{data.ceo_name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Best;
