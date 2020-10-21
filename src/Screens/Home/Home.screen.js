import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {Baker} from '../../Components';
import {Notification} from '../../modals';
import styles from './Home.style';

const Home = () => {
  const [notify, setNotify] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Baker />
      </ScrollView>
      <Notification notify={notify} message="Welcome Jume Brice" />
    </SafeAreaView>
  );
};

export default Home;
