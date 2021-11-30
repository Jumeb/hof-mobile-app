import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import theme from '../../../resources/Colors/theme';

import styles from './Best.style';

const Best = (props) => {
  const {data} = props;
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        imageStyle={styles.bestBackground}
        style={styles.bestBackground}
        source={require('../../../resources/images/pans-2.jpg')}>
        <LinearGradient
          style={styles.bestContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          colors={[
            theme.PRIMARY_COLOR + '05',
            theme.PRIMARY_COLOR + '20',
            theme.PRIMARY_COLOR + 'aa',
          ]}>
          <View style={styles.bestInfo}>
            <View style={styles.bestDiscount}>
              <Icons
                name="ios-trending-down-outline"
                size={16}
                color={theme.SUCCESS_COLOR}
              />
              <Text style={styles.bestDiscountText}>20%</Text>
            </View>
            <TouchableOpacity style={styles.bestInfoButton}>
              <Icons
                name="ios-information-circle-outline"
                size={16}
                color={theme.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <TouchableOpacity style={styles.likesContainer}>
              <Icons
                name="ios-thumbs-up-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.pastryLikes}>{data.rank}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likesContainer}>
              <Icons
                name="ios-thumbs-down-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.pastryLikes}>{data.rank}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likesContainer2}>
              <Icons
                name="ios-heart-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.bestDetail}>
        <View>
          <Text style={styles.pastryName}>{data.ceo_name}</Text>
          <Text style={styles.pastryPrice}>2000 FCFA</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Icons name="ios-add-outline" size={16} color={theme.WHITE_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Best;
