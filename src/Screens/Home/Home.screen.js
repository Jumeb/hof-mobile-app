import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Baker, BestBaker, NavBar} from '../../Components';
import styles from './Home.style';
import best from '../../../resources/Dummy/best.json';
import bakers from '../../../resources/Dummy/bakers.json';
import {scrolling} from '../../redux/actions/ScrollActions';

const Home = (props) => {
  const [notify, setNotify] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  });

  const handle = (event) => {
    props.scrolling(true);
  };

  const hide = (event) => {
    props.scrolling(false);
  };

  const render = () => {
    return (
      <View>
        <View style={styles.chefsContainer}>
          <Text style={styles.topChefText}>Top Chefs</Text>
        </View>
        <FlatList
          horizontal={true}
          style={styles.listStyle}
          showsHorizontalScrollIndicator={false}
          data={best}
          renderItem={({item, key}) => (
            <BestBaker data={item} onPress={() => Actions.shop()} />
          )}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={() => <View style={styles.footerStyle} />}
        />
        <Text style={styles.chefText}>Our Chefs</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="Home" search={true} />
      <FlatList
        ListHeaderComponent={render()}
        numColumns={2}
        data={bakers}
        columnWrapperStyle={styles.columnWrapperStyle}
        key={'flat'}
        renderItem={({item, key}) => (
          <Baker baker={item} onPress={() => Actions.shop()} about="Ranking" />
        )}
        keyExtractor={(item) => item.id.toString()}
        onScrollBeginDrag={(event) => handle(event)}
        onScrollEndDrag={(event) => hide(event)}
      />
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);
