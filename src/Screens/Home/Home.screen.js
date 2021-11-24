import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Baker, BestBaker, Spacer} from '../../Components';
import styles from './Home.style';
import best from '../../../resources/Dummy/best.json';
import bakers from '../../../resources/Dummy/bakers.json';
import theme from '../../../resources/Colors/theme';
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

  const gradient_colors = [
    {start: theme.MIX_PRIMARY_COLOR_1, end: theme.MIX_PRIMARY_COLOR_2},
    {start: theme.MIX_PRIMARY_COLOR_3, end: theme.MIX_PRIMARY_COLOR_4},
    {start: theme.MIX_PRIMARY_COLOR_5, end: theme.MIX_PRIMARY_COLOR_6},
    {start: theme.MIX_PRIMARY_COLOR_11, end: theme.MIX_PRIMARY_COLOR_12},
    {start: theme.MIX_PRIMARY_COLOR_9, end: theme.MIX_PRIMARY_COLOR_10},
    {start: theme.MIX_PRIMARY_COLOR_7, end: theme.MIX_PRIMARY_COLOR_8},
    {start: theme.MIX_PRIMARY_COLOR_13, end: theme.MIX_PRIMARY_COLOR_14},
    {start: theme.MIX_PRIMARY_COLOR_15, end: theme.MIX_PRIMARY_COLOR_16},
  ];

  let rank = 0;
  const rotate = () => {
    if (rank === 8) {
      rank = 0;
    }
    return rank++;
  };

  const render = (color) => {
    return (
      <View>
        <View style={styles.pastriesContainer}>
          <Text style={styles.pastriesText}>Best Bakers</Text>
        </View>
        <FlatList
          horizontal={true}
          style={{paddingHorizontal: 10}}
          showsHorizontalScrollIndicator={false}
          data={best}
          renderItem={({item, key}) => <BestBaker data={item} color={color} />}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={() => <View style={{width: 20}} />}
        />
        <Text style={styles.pastriesText}>Best Bakers</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={render(gradient_colors[rotate()])}
        data={bakers}
        renderItem={({item, key}) => (
          <Baker
            baker={item}
            color={gradient_colors[rotate()]}
            onPress={() => Actions.shop()}
            about="Ranking"
          />
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
