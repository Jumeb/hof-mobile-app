import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import {Text} from '..';

import theme from '../../../resources/Colors/theme';
import {BASE_URL, FormatUnits} from '../../utils';
import Thousand from '../../utils/kSeparator';

import styles from './Pastrycard.style';

const PastryCard = (props) => {
  const {layout, onPress, setNotify, data} = props;
  return (
    <>
      {layout === 0 ? (
        <View style={styles.mainContainer2}>
          <View style={styles.pastryImageContainer2}>
            <Image
              source={
                data?.image
                  ? {uri: BASE_URL + '/' + data?.image}
                  : require('../../../resources/images/weds-2.jpg')
              }
              imageStyle={styles.pastryImage2}
              style={styles.pastryImage2}
            />
            <View style={styles.bestInfo2}>
              {data?.discount !== 0 && (
                <View style={styles.bestDiscount2}>
                  <Icons
                    name="ios-trending-down-outline"
                    size={16}
                    color={theme.SUCCESS_COLOR}
                  />
                  <Text style={styles.bestDiscountText2}>
                    {data?.discount}%
                  </Text>
                </View>
              )}
              <TouchableOpacity
                onPress={() => onPress(data)}
                style={styles.bestInfoButton2}>
                <Icons
                  name="ios-information-circle-outline"
                  size={16}
                  color={theme.SECONDARY_COLOR}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer2}>
              <TouchableOpacity style={styles.likesContainer2}>
                <Icons
                  name="ios-thumbs-up-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
                <Text style={styles.pastryLikes2}>
                  {FormatUnits(data?.likes?.users.length)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likesContainer2}>
                <Icons
                  name="ios-thumbs-down-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
                <Text style={styles.pastryLikes2}>
                  {FormatUnits(data?.dislikes?.users.length)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likesContainer2}>
                <Icons
                  name="ios-heart-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
            <LinearGradient
              style={styles.bestContainer2}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              colors={[
                theme.PRIMARY_COLOR + '05',
                theme.PRIMARY_COLOR + '20',
                theme.PRIMARY_COLOR + 'aa',
              ]}
            />
          </View>
          <View style={styles.pastryDetails2}>
            <View style={styles.grid2}>
              <Text style={styles.pastryName2}>{data?.name}</Text>
              <View style={styles.pastryStats2}>
                <Text style={styles.pastryPrice2}>{Thousand(data?.price)}</Text>
                <Text style={styles.currency2}>XAF</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => setNotify(true)}>
              <Icons
                name="ios-add-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.pastryImageContainer}>
            <Image
              source={
                data?.image
                  ? {uri: BASE_URL + '/' + data?.image}
                  : require('../../../resources/images/vals-3.jpg')
              }
              imageStyle={styles.pastryImage}
              style={styles.pastryImage}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.pastryDetails}>
              <Text style={styles.pastryName}>{data?.name}</Text>
              <TouchableOpacity
                style={styles.bestInfoButton}
                onPress={() => onPress(data)}>
                <Icons
                  name="ios-information-circle-outline"
                  size={16}
                  color={theme.SECONDARY_COLOR}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.pastryDetails}>
              <View style={styles.pastryStats}>
                <Text style={styles.pastryPrice}>{Thousand(data?.price)}</Text>
                <Text style={styles.currency}>XAF</Text>
              </View>
              {data?.discount !== 0 && (
                <View style={styles.bestDiscount}>
                  <Icons
                    name="ios-trending-down-outline"
                    size={16}
                    color={theme.WHITE_COLOR}
                  />
                  <Text style={styles.bestDiscountText}>{data?.discount}%</Text>
                </View>
              )}
            </View>
            <View style={styles.pastryDetails}>
              <TouchableOpacity style={styles.likesContainer}>
                <Icons
                  name="ios-thumbs-up-outline"
                  size={16}
                  color={theme.SECONDARY_COLOR}
                />
                <Text style={styles.pastryLikes}>
                  {FormatUnits(data?.likes?.users.length)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likesContainer}>
                <Icons
                  name="ios-thumbs-down-outline"
                  size={16}
                  color={theme.SECONDARY_COLOR}
                />
                <Text style={styles.pastryLikes}>
                  {FormatUnits(data?.dislikes?.users.length)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likesContainer}>
                <Icons
                  name="ios-heart-outline"
                  size={16}
                  color={theme.SECONDARY_COLOR}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => setNotify(true)}>
                <Icons
                  name="ios-add-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default PastryCard;
