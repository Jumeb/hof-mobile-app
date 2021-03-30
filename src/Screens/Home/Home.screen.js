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
    {start: theme.mix_primary_color_1, end: theme.mix_primary_color_2},
    {start: theme.mix_primary_color_3, end: theme.mix_primary_color_4},
    {start: theme.mix_primary_color_5, end: theme.mix_primary_color_6},
    {start: theme.mix_primary_color_11, end: theme.mix_primary_color_12},
    {start: theme.mix_primary_color_9, end: theme.mix_primary_color_10},
    {start: theme.mix_primary_color_7, end: theme.mix_primary_color_8},
    {start: theme.mix_primary_color_13, end: theme.mix_primary_color_14},
    {start: theme.mix_primary_color_15, end: theme.mix_primary_color_16},
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
