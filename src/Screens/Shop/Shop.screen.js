import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {
  Best,
  Categories,
  NavBar,
  Notification,
  PastryCard,
} from '../../Components';
import styles from './Shop.style';
import best from '../../../resources/Dummy/best.json';
import bakers from '../../../resources/Dummy/bakers.json';
import theme from '../../../resources/Colors/theme';
import {scrolling} from '../../redux/actions/ScrollActions';
import {BASE_URL} from '../../utils';

const Shop = (props) => {
  const {i18n, baker, user, token} = props;
  const [active, setActive] = useState(0);
  const [layout, setLayout] = useState(0);
  const [notify, setNotify] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    setCategories(baker.categories);
    console.log(categories);
  }, [baker, categories]);

  useEffect(() => {
    setLoading(true);
    setLoading(true);
    fetch(`${BASE_URL}/superpastriesmob`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then((res) => {
        const statusCode = res.status;
        const response = res.json();
        return Promise.all([statusCode, response]);
      })
      .then((res) => {
        const statusCode = res[0];
        const response = res[1];
        setLoading(false);

        if (statusCode === 200) {
          setArticles(
            response.pastries.filter(
              (pastry) =>
                pastry?.creatorId?._id.toString() === baker._id.toString(),
            ),
          );
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.unexpectedError'),
          });
          return false;
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
  }, [props, i18n, token, baker._id]);

  const renderHeader = () => {
    return (
      <View>
        <View>
          <View style={styles.pastriesContainer}>
            <Text style={styles.topPastries}>
              {i18n.t('phrases.mostLiked')}
            </Text>
          </View>
          <FlatList
            horizontal={true}
            style={styles.listStyle}
            showsHorizontalScrollIndicator={false}
            data={articles.slice(0, 5)}
            renderItem={({item, key}) => (
              <Best
                data={item}
                onPress={(data) => Actions.pastryInfo({data})}
                setNotify={setNotify}
              />
            )}
            keyExtractor={(item) => item._id.toString()}
            ListFooterComponent={() => <View style={styles.footerStyle} />}
          />
        </View>
        <Text style={styles.varietyText}>{i18n.t('words.categories')}</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.paddingContent}>
          {categories.map((category, key) => {
            return (
              <Categories
                key={key}
                categoryIndex={key}
                activeIndex={active}
                category={category}
                setActiveIndex={setActive}
              />
            );
          })}
          <View style={styles.spacer} />
        </ScrollView>
        <View style={styles.gridContainer}>
          <View style={styles.pastriesLayout}>
            <TouchableOpacity
              style={styles.pastriesLayoutButton}
              onPress={() => setLayout(0)}>
              <Icons
                name="grid-outline"
                size={20}
                color={layout === 0 ? theme.SECONDARY_COLOR : theme.DARK_GREY}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pastriesLayoutButton}
              onPress={() => setLayout(1)}>
              <Icons
                name="square-outline"
                size={20}
                color={layout === 1 ? theme.SECONDARY_COLOR : theme.DARK_GREY}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar
        screen={'Shop'}
        search={true}
        pop={true}
        cartNumber={user?.cart?.pastries.length}
      />
      <FlatList
        ListHeaderComponent={renderHeader()}
        horizontal={false}
        numColumns={layout === 0 ? 2 : 1}
        data={articles.length <= 5 ? articles : articles.slice(5)}
        renderItem={({item, key}) => (
          <PastryCard
            layout={layout}
            data={item}
            key={key}
            setNotify={setNotify}
            onPress={(data) => Actions.pastryInfo({data})}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={layout === 0 ? styles.columnWrapperStyle : null}
        key={layout === 0 ? 'grid' : 'flat'}
      />
      <Notification
        notify={notify}
        setNotify={setNotify}
        msg={i18n.t('phrases.addedToCart')}
        type="success"
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n, auth}) => {
  return {
    i18n: i18n.i18n,
    user: auth.user,
    token: auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

const varieties = [
  {id: 1, type: 'Birthday Cakes'},
  {id: 2, type: 'Wedding Cakes'},
  {id: 3, type: 'Cookies'},
  {id: 4, type: 'Pancakes'},
  {id: 5, type: 'Valentine'},
  {id: 6, type: 'Doughnuts'},
  {id: 7, type: 'Cup Cakes'},
];
