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
      <ScrollView style={styles.container}>
        <ImageBackground
          imageStyle={styles.welcomeImageStyle}
          style={[styles.welcomeImageBackground, {height: h}]}
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
              <Text style={styles.welcomeTitle}>Welcome</Text>
              <Text style={styles.welcomeSlogan}>
                to Flavours, home of bakers & pastries.
              </Text>
            </View>
            <View style={styles.welcomeInfo}>
              <Text style={styles.welcomeInfoText}>
                GET STARTED OR CREATE AN ACCOUNT
              </Text>
            </View>
            <View style={styles.welcomeIcon}>
              <Icons
                name="ios-chevron-down-outline"
                size={25}
                color={theme.FAINT_GREY}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => Actions.Login()}>
            <Text style={styles.ButtonText}>LOG IN</Text>
            <Icons
              name="ios-arrow-forward-outline"
              size={25}
              color={theme.WHITE_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => Actions.SignUp()}>
            <Text style={styles.ButtonText}>NEW</Text>
            <Icons name="ios-add-sharp" size={25} color={theme.WHITE_COLOR} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
