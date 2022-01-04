import React, {useState} from 'react';
import {View, Linking, TouchableOpacity, Platform, Alert} from 'react-native';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import theme from '../../../resources/Colors/theme';
import {Text} from '../../Components';
import styles from './Contact.styles';

const Contact = (props) => {
  const {contact, setContact} = props;
  const [active, setActive] = useState(0);
  const whatsappNo = '+237681726633';
  const whatsappMsg = 'Hello, Flavours team.';
  const twitterUsername = '@JumeNjah';
  const subject = 'Contact';
  const mail = 'bricejume@gmail.com';

  const dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+237681726633}';
    } else {
      phoneNumber = 'telprompt:${+237681726633}';
    }

    Linking.openURL(phoneNumber);
  };

  const chatWhatsApp = (link) => {
    if (link) {
      Linking.canOpenURL(link)
        .then((supported) => {
          if (!supported) {
            Alert.alert('Please install WhatsApp to continue.');
          } else {
            return Linking.openURL(link);
          }
        })
        .catch((err) => console.error('An error occurred', err));
    } else {
      // console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
    }
  };
  const chatTwitter = (link) => {
    if (link) {
      Linking.canOpenURL(link)
        .then((supported) => {
          if (!supported) {
            Alert.alert('Please install Twitter to continue.');
          } else {
            return Linking.openURL(link);
          }
        })
        .catch((err) => console.error('An error occurred', err));
    } else {
      // console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
    }
  };

  const chatGmail = (link) => {
    if (link) {
      Linking.canOpenURL(link)
        .then((supported) => {
          if (!supported) {
            Alert.alert('Please install Gmail to continue.');
          } else {
            return Linking.openURL(link);
          }
        })
        .catch((err) => console.error('An error occurred', err));
    } else {
      // console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
    }
  };

  const chatSms = (link) => {
    if (link) {
      Linking.canOpenURL(link)
        .then((supported) => {
          if (!supported) {
            Alert.alert('Please install Gmail to continue.');
          } else {
            return Linking.openURL(link);
          }
        })
        .catch((err) => console.error('An error occurred', err));
    } else {
      // console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
    }
  };

  return (
    <Modal
      isVisible={contact}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setContact(false)}
      onBackButtonPress={() => setContact(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setContact(false)}>
      <View style={styles.langContainer}>
        <TouchableOpacity
          style={styles.downIndicator}
          onPress={() => setContact(false)}>
          <Icons
            name="ios-chevron-down-outline"
            size={16}
            color={theme.TERTIARY_COLOR}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Contacts</Text>
        <View style={styles.avLang}>
          <Icons name="ios-logo-whatsapp" size={18} color={theme.WHATSAPP} />
          <Text style={styles.lang}>WhatsApp</Text>
          <TouchableOpacity
            style={[styles.button, styles.whatsapp]}
            onPress={() =>
              chatWhatsApp(
                `whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`,
              )
            }>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.avLang}>
          <Icons name="ios-logo-twitter" size={18} color={theme.TWITTER} />
          <Text style={styles.lang}>Twitter</Text>
          <TouchableOpacity
            style={[styles.button, styles.twitter]}
            onPress={() =>
              chatTwitter(`twitter://user?screen_name=${twitterUsername}`)
            }>
            <Text style={styles.buttonText}>Tweet</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.avLang}>
          <Icons name="ios-mail-outline" size={18} color={theme.MAIL} />
          <Text style={styles.lang}>Gmail</Text>
          <TouchableOpacity
            style={[styles.button, styles.mail]}
            onPress={() =>
              chatGmail(`mailto:${mail}?subject=${subject}&body=${whatsappMsg}`)
            }>
            <Text style={styles.buttonText}>Mail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.avLang}>
          <Icons name="ios-logo-facebook" size={18} color={theme.FACEBOOK} />
          <Text style={styles.lang}>Facebook</Text>
          <TouchableOpacity style={[styles.button, styles.facebook]}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.avLang}>
          <Icons name="ios-logo-linkedin" size={18} color={theme.LINK} />
          <Text style={styles.lang}>LinkedIn</Text>
          <TouchableOpacity style={[styles.button, styles.link]}>
            <Text style={styles.buttonText}>Link</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.avLang}>
          <Icon name="phone" size={18} color={theme.SECONDARY_COLOR} />
          <Text style={styles.lang}>Phone Number</Text>
          <TouchableOpacity
            style={[styles.button, styles.call]}
            onPress={() => dialCall()}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.avLang}>
          <Icons
            name="ios-chatbox-ellipses-outline"
            size={18}
            color={theme.SECONESSS_COLOR}
          />
          <Text style={styles.lang}>Message</Text>
          <TouchableOpacity
            style={[styles.button, styles.sms]}
            onPress={() => chatSms(`sms:${whatsappNo}?body=${whatsappMsg}`)}>
            <Text style={styles.buttonText}>SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Contact;
