import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {Baker} from '../../Components';
import {Notification} from '../../modals';
import styles from './Home.style';
import bakers from '../../../resources/Dummy/bakers.json';
import theme from '../../../resources/Colors/theme';

const Home = () => {
  const [notify, setNotify] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  });

  const gradient_colors = [
    {start: theme.mix_primary_color_1, end: theme.mix_primary_color_2},
    {start: theme.mix_primary_color_3, end: theme.mix_primary_color_4},
    {start: theme.mix_primary_color_5, end: theme.mix_primary_color_6},
    {start: theme.mix_primary_color_7, end: theme.mix_primary_color_8},
    {start: theme.mix_primary_color_9, end: theme.mix_primary_color_10},
    {start: theme.mix_primary_color_11, end: theme.mix_primary_color_12},
    {start: theme.mix_primary_color_13, end: theme.mix_primary_color_14},
    {start: theme.mix_primary_color_15, end: theme.mix_primary_color_16},
  ];

  const rand = () => {
    return Math.floor(Math.random() * Math.floor(8));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={bakers}
        renderItem={({item, key}) => (
          <Baker
            baker={item}
            color={gradient_colors[rand()]}
            keyExtractor={item.id}
          />
        )}
      />
      <Notification notify={notify} message="Welcome Jume Brice" />
    </SafeAreaView>
  );
};

export default Home;
