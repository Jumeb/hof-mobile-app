import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Notification} from '../../modals';

const Home = () => {
  const [notify, setNotify] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  });

  return (
    <SafeAreaView>
      <View>
        <Text></Text>
      </View>
      <Notification notify={notify} message="Welcome Jume Brice" />
    </SafeAreaView>
  );
};

export default Home;
