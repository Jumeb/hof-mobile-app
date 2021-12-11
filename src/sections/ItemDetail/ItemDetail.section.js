import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../../resources/Colors/theme';
import {RateButton, Text} from '../../Components';
import styles from './ItemDetail.style';

const ItemDetail = (props) => {
  const {info, setInfo} = props;

  const [data] = useState([
    {
      image: require('../../../resources/images/bds-7.jpg'),
    },
    // {
    //   image: require('../../../resources/images/cups-5.jpg'),
    // },
    // {
    //   image: require('../../../resources/images/pans-2.jpg'),
    // },
    {
      image: require('../../../resources/images/bds-12.jpg'),
    },
    {
      image: require('../../../resources/images/cups-12.jpg'),
    },
    // {
    //   image: require('../../../resources/images/weds-2.jpg'),
    // },
  ]);

  return (
    <Modal
      isVisible={info}
      propagateSwipe={true}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setInfo(false)}
      onBackButtonPress={() => setInfo(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setInfo(false)}>
      <View style={styles.detailContainer}>
        <TouchableOpacity
          style={styles.downIndicator}
          onPress={() => setInfo(false)}>
          <Icons
            name="ios-chevron-down-outline"
            size={16}
            color={theme.TERTIARY_COLOR}
          />
        </TouchableOpacity>
        <SwiperFlatList autoplay autoplayDelay={7} autoplayLoop>
          {data.map((d, key) => {
            return (
              <Header data={d} index={key + 1} length={data.length} key={key} />
            );
          })}
        </SwiperFlatList>
        <View style={styles.infoContainer}>
          <Text style={styles.categoryName}>Category Name</Text>
          <View style={styles.detsContainer}>
            <Text style={styles.pastryName}>Pastry Name</Text>
            <Text style={styles.pastryPrice}>3,000 XAF</Text>
          </View>
          <Text style={styles.aboutTitle}>Your Message</Text>
          <Text style={styles.aboutText}>Diner at 7PM. I love you. </Text>
          <Text style={styles.aboutTitle}>Required days</Text>
          <Text style={styles.aboutText}>
            A minimum of <Text style={styles.date}>2 days</Text> is required for
            delivery.
          </Text>
          <View style={styles.rateContainer}>
            <RateButton title={120} icon={'ios-thumbs-up-outline'} />
            <RateButton title={14} icon={'ios-thumbs-down-outline'} />
          </View>
        </View>
        <View style={styles.controlsContainer}>
          <View style={styles.qtyContainer}>
            <Text style={styles.accumelatedPrice}>6,000 XAF</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.qtyButton}>
                <Icons
                  name="ios-remove-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
              <Text style={styles.qtyText}>2</Text>
              <TouchableOpacity style={styles.qtyButton}>
                <Icons
                  name="ios-add-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* <GradientButton title={'Add to Cart'} /> */}
        </View>
      </View>
    </Modal>
  );
};

export default ItemDetail;

const Header = (props) => {
  const {length, index, data} = props;
  return (
    <View style={styles.pastryContainer}>
      <Image
        source={data.image}
        style={styles.pastryImage}
        imageStyle={styles.pastryImage}
      />
      <View style={styles.pastryImageCounter}>
        <Text style={styles.pastryIndex}>{index}</Text>
        <Text style={styles.pastryLength}>/{length}</Text>
      </View>
    </View>
  );
};
