import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import theme from '../../../resources/Colors/theme';
import Icons from 'react-native-vector-icons/Ionicons';

import {Text, NavBar, RateButton, GradientButton} from '../../Components';
import styles from './ChefInfo.styles';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {BASE_URL} from '../../utils';

const ChefInfo = (props) => {
  const {i18n, chef} = props;
  const [images, setImages] = useState([]);

  useEffect(() => {
    let _images = [];
    _images.push(chef?.ceoImage);
    setImages(_images);
  }, [chef?.ceoImage]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="chefInfo" pop={true} />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <SwiperFlatList autoplay autoplayDelay={10} autoplayLoop>
          {images &&
            images.length >= 1 &&
            images.map((d, index) => {
              return (
                <Header
                  data={d}
                  index={index + 1}
                  length={images.length}
                  key={index}
                  logo={chef?.companyImage}
                />
              );
            })}
        </SwiperFlatList>
        <View style={styles.infoContainer}>
          <Text style={styles.companyName}>{chef?.companyName}</Text>
          <Text style={styles.ceoName}>{chef?.name}</Text>
          <Text style={styles.aboutTitle}>{i18n.t('words.about')}</Text>
          <Text style={styles.aboutText}>{chef?.about}</Text>
          <Text style={styles.aboutTitle}>{i18n.t('words.categories')}</Text>
          {chef?.categories.map((category, index) => (
            <View style={styles.contactContainer} key={index}>
              <Text style={styles.contactText}>{category}</Text>
            </View>
          ))}
          <Text style={styles.aboutTitle}>{i18n.t('words.stats')}</Text>
          <View style={styles.rateContainer}>
            <RateButton title={120} icon={'ios-thumbs-up-outline'} />
            <RateButton title={14} icon={'ios-thumbs-down-outline'} />
          </View>
          <Text style={styles.aboutTitle}>{i18n.t('words.contacts')}</Text>
          <View style={styles.contactContainer}>
            <Icons
              name="ios-logo-twitter"
              size={16}
              color={theme.PRIMARY_COLOR}
            />
            <Text style={styles.contactText}>twitter handle</Text>
          </View>
          <View style={styles.contactContainer}>
            <Icons
              name="ios-logo-facebook"
              size={16}
              color={theme.SECONDARY_COLOR}
            />
            <Text style={styles.contactText}>: twitter handle</Text>
          </View>
          <GradientButton
            title={i18n.t('words.shop')}
            icon={'ios-cart-outline'}
            onPress={() => Actions.shop({baker: chef})}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(ChefInfo);

const Header = (props) => {
  const {length, index, data, logo} = props;
  return (
    <View style={styles.chefContainer}>
      <Image
        source={
          data
            ? {uri: BASE_URL + '/' + data}
            : require('../../../resources/images/bds-7.jpg')
        }
        style={styles.chefImage}
        imageStyle={styles.chefImage}
      />
      <View style={styles.chefLogoContainer}>
        <Image
          source={
            logo
              ? {uri: BASE_URL + '/' + logo}
              : require('../../../resources/images/favicon.png')
          }
          style={styles.chefLogo}
          imageStyle={styles.chefLogo}
        />
      </View>
    </View>
  );
};
