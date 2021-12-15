import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {bindActionCreators} from 'redux';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import styles from './PastryInfo.style';
import {scrolling} from '../../redux/actions/ScrollActions';
import {
  GradientButton,
  NavBar,
  Notification,
  RateButton,
  Text,
} from '../../Components';
import theme from '../../../resources/Colors/theme';
import Thousand from '../../utils/kSeparator';

const PastryInfo = (props) => {
  const {i18n} = props;
  const [notify, setNotify] = useState(false);
  const [msg, setMsg] = useState('');

  const AddToCart = () => {
    setNotify(true);
    setMsg(i18n.t('phrases.addedToCart'));
  };

  const AddToFavourite = () => {
    setNotify(true);
    setMsg(i18n.t('phrases.addedToFavourite'));
  };

  const handle = (event) => {
    props.scrolling(true);
  };

  const hide = (event) => {
    props.scrolling(false);
  };

  const [data] = useState([
    {
      image: require('../../../resources/images/bds-7.jpg'),
    },
    {
      image: require('../../../resources/images/cups-5.jpg'),
    },
    // {
    //   image: require('../../../resources/images/pans-2.jpg'),
    // },
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
      <NavBar screen="pastryInfo" pop={true} action={AddToFavourite} />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        onScrollBeginDrag={(event) => handle(event)}
        onScrollEndDrag={(event) => hide(event)}>
        <SwiperFlatList autoplay autoplayDelay={10} autoplayLoop>
          {data.map((d, key) => {
            return (
              <Header data={d} index={key + 1} length={data.length} key={key} />
            );
          })}
        </SwiperFlatList>
        <View style={styles.infoContainer}>
          <Text style={styles.categoryName}>Category Name</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.pastryName}>Pastry Name</Text>
            <Text style={styles.pastryPrice}>3,000 XAF</Text>
          </View>
          <Text style={styles.aboutTitle}>{i18n.t('words.description')}</Text>
          <Text style={styles.aboutText}>
            Voluptate consequat in magna anim consectetur qui exercitation
            voluptate mollit laboris sint eiusmod eiusmod proident. Commodo amet
            ea ex sunt. Minim in id aliquip pariatur aliquip est elit
            reprehenderit mollit officia cupidatat consectetur aute. Mollit duis
            anim minim ipsum.
          </Text>
          <Text style={styles.aboutTitle}>
            {i18n.t('phrases.requiredDays')}
          </Text>
          <Text style={styles.aboutText}>
            {i18n.t('phrases.aMinimumOf')}{' '}
            <Text style={styles.date}> 2 days </Text>{' '}
            {i18n.t('phrases.isRequiredForDelivery')}
          </Text>
          <Text style={styles.aboutTitle}>{i18n.t('words.stats')}</Text>
          <View style={styles.rateContainer}>
            <RateButton title={120} icon={'ios-thumbs-up-outline'} />
            <RateButton title={14} icon={'ios-thumbs-down-outline'} />
          </View>
        </View>
        <View style={styles.controlsContainer}>
          <View style={styles.qtyContainer}>
            <Text style={styles.accumelatedPrice}>{Thousand(6000)} XAF</Text>
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
          <GradientButton
            title={i18n.t('phrases.addToCart')}
            onPress={() => AddToCart()}
          />
        </View>
      </ScrollView>
      <Notification
        notify={notify}
        setNotify={setNotify}
        type="success"
        msg={msg}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PastryInfo);

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
