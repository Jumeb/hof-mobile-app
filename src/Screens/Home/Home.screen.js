import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NotifyComponent} from '../../Components';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  });

  const [notify, setNotify] = useState(true);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
      <NotifyComponent notify={notify} message="Welcome Jume Brice" />
    </SafeAreaView>
  );
};

export default Home;
