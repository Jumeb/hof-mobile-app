import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './Welcome.style';
import theme from '../../../resources/Colors/theme';
import {Actions} from 'react-native-router-flux';

const WelcomeScreen = () => {
  let h = useWindowDimensions().height;
  const [image, setImage] = useState(true);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ScrollView style={styles.container}>
        <ImageBackground
          style={[styles.welcomeImageBackground, {height: h + 30}]}
          source={
            image
              ? require('../../../resources/images/vals-3.jpg')
              : {
                  uri:
                    'https://d267afhisavhe8.cloudfront.net/wp-content/uploads/2019/03/12064238/Ballerina-themed-cake-kingdomofcakes.jpg',
                }
          }>
          <View style={styles.messageContainer}>
            <Image
              source={require('../../../resources/images/caracakes8.png')}
              style={styles.logoImage}
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>Welcome to Flavours</Text>
              <Text style={styles.welcomeSlogan}>
                resting place of chefs & aromas.
              </Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => Actions.SignUp()}>
                <Text style={styles.ButtonText}>SIGN UP</Text>
                <Icons
                  name="ios-add-sharp"
                  size={20}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => Actions.Login()}>
                <Text style={styles.ButtonText}>LOG IN</Text>
                <Icons
                  name="ios-arrow-forward-outline"
                  size={20}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
