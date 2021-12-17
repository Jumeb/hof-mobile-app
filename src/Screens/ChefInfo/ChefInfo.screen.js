import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import theme from '../../../resources/Colors/theme';
import Icons from 'react-native-vector-icons/Ionicons';

import {Text, NavBar, RateButton, GradientButton} from '../../Components';
import styles from './ChefInfo.styles';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

const ChefInfo = (props) => {
  const {i18n} = props;
  const [data] = useState([
    {
      image: require('../../../resources/images/chef1.jpg'),
      logo: require('../../../resources/images/favicon.png'),
    },
    {
      image: require('../../../resources/images/chef2.jpg'),
      logo: require('../../../resources/images/favicon-2.png'),
    },
    {
      image: require('../../../resources/images/chef3.jpg'),
      logo: require('../../../resources/images/favicon-1.png'),
    },
    // {
    //   image: require('../../../resources/images/bds-12.jpg'),
    // },
    // {
    //   image: require('../../../resources/images/cups-12.jpg'),
    // },
    // {
    //   image: require('../../../resources/images/weds-2.jpg'),
    // },
  ]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="chefInfo" pop={true} />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <SwiperFlatList autoplay autoplayDelay={10} autoplayLoop>
          {data.map((d, key) => {
            return (
              <Header data={d} index={key + 1} length={data.length} key={key} />
            );
          })}
        </SwiperFlatList>
        <View style={styles.infoContainer}>
          <Text style={styles.companyName}>Company Name</Text>
          <Text style={styles.ceoName}>Ceo Name</Text>
          <Text style={styles.aboutTitle}>{i18n.t('words.about')}</Text>
          <Text style={styles.aboutText}>
            Voluptate consequat in magna anim consectetur qui exercitation
            voluptate mollit laboris sint eiusmod eiusmod proident. Commodo amet
            ea ex sunt. Minim in id aliquip pariatur aliquip est elit
            reprehenderit mollit officia cupidatat consectetur aute. Mollit duis
            anim minim ipsum.
          </Text>
          <Text style={styles.aboutTitle}>{i18n.t('words.categories')}</Text>
          <View style={styles.contactContainer}>
            <Text style={styles.contactText}>Birthday cakes</Text>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.contactText}>Pies</Text>
          </View>
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
            onPress={() => Actions.shop()}
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
  const {length, index, data} = props;
  return (
    <View style={styles.chefContainer}>
      <Image
        source={data.image}
        style={styles.chefImage}
        imageStyle={styles.chefImage}
      />
      <View style={styles.chefLogoContainer}>
        <Image
          source={data.logo}
          style={styles.chefLogo}
          imageStyle={styles.chefLogo}
        />
      </View>
    </View>
  );
};
