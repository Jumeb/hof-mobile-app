import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './Pastrycard.style';

const PastryCard = (props) => {
  const {color, layout} = props;
  return (
    <TouchableOpacity
      style={[
        layout === 0 ? styles.mainContainer2 : styles.mainContainer,
        {borderColor: color.start},
      ]}>
      <View>
        <Image
          source={require('../../../resources/images/cups-12.jpg')}
          imageStyle={layout === 0 ? styles.pastryImage2 : styles.pastryImage}
          style={layout === 0 ? styles.pastryImage2 : styles.pastryImage}
        />
      </View>
      <View style={layout === 0 ? styles.pastryDetails2 : styles.pastryDetails}>
        <Text
          style={[
            layout === 0 ? styles.pastryName2 : styles.pastryName2,
            {color: color.start},
          ]}>
          Banana cupcakes
        </Text>
        <View style={layout === 0 ? styles.grid2 : ''}>
          <View style={layout === 0 ? styles.pastryStats2 : styles.pastryStats}>
            <Text
              style={[
                layout === 0 ? styles.pastryPrice2 : styles.pastryPrice,
                {color: color.end},
              ]}>
              90,000
            </Text>
            <Text
              style={[
                layout === 0 ? styles.currency2 : styles.currency,
                {color: color.end},
              ]}>
              cfa
            </Text>
          </View>
          {layout === 0 ? (
            <View style={styles.likesContainer2}>
              <View style={styles.pastryIconDetails}>
                <Icons
                  name="heart"
                  size={15}
                  style={{marginRight: 7}}
                  color={color.end}
                />
                <Text style={styles.pastryLikes}>55</Text>
              </View>
              <View style={styles.pastryIconDetails}>
                <Icons
                  name="stats-chart"
                  size={15}
                  style={{marginRight: 7}}
                  color={color.end}
                />
                <Text style={styles.pastryLikes}>200</Text>
              </View>
            </View>
          ) : (
            <View style={styles.likesContainer}>
              <Text style={styles.pastryLikes}>Likes: 55</Text>
              <Text style={styles.pastryLikes}>Ordered: 200</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PastryCard;
