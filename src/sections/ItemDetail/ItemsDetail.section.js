import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import theme from '../../../resources/Colors/theme';
import {RateButton, Status, Text} from '../../Components';
import styles from './ItemDetail.style';

const ItemsDetail = (props) => {
  const {info, setInfo, i18n} = props;

  const [data] = useState([
    {
      image: require('../../../resources/images/bds-7.jpg'),
    },
    // {
    //   image: require('../../../resources/images/cups-5.jpg'),
    // },
    {
      image: require('../../../resources/images/pans-2.jpg'),
    },
    // {
    //   image: require('../../../resources/images/bds-12.jpg'),
    // },
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
          <Text style={styles.aboutTitle}>{i18n.t('phrases.yourMessage')}</Text>
          <Text style={styles.aboutText}>Diner at 7PM. I love you. </Text>
          <View style={styles.aboutContainer}>
            <Text style={styles.status}>{i18n.t('words.status')}:</Text>
            <Status status={'onTheWay'} i18n={i18n} />
          </View>
          <View style={styles.rateContainer}>
            <RateButton title={120} icon={'ios-thumbs-up-outline'} />
            <RateButton title={14} icon={'ios-thumbs-down-outline'} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(ItemsDetail);

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
