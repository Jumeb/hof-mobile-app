import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import styles from './Setting.style';
import {scrolling} from '../../redux/actions/ScrollActions';
import {Contact, FAQs, Language, Terms} from '../../sections';
import {Actions} from 'react-native-router-flux';

const Setting = (props) => {
  const {i18n} = props;
  const [lang, setLang] = useState(false);
  const [terms, setTerms] = useState(false);
  const [faqs, setFaqs] = useState(false);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    props.scrolling(false);
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.settings}>
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsText}>{i18n.t('words.settings')}</Text>
        </View>
        <View style={styles.userProfile}>
          <View style={styles.userImageBorder}>
            <Image
              style={styles.userImage}
              imageStyle={styles.userImage}
              source={require('../../../resources/images/vals-3.jpg')}
            />
          </View>
          <TouchableOpacity
            style={styles.editProfile}
            activeOpacity={0.9}
            onPress={() => Actions.profile()}>
            <Icons
              name="pencil-outline"
              size={18}
              style={styles.editProfileIcon}
            />
          </TouchableOpacity>
          <Text style={styles.userName}>Jume Njah</Text>
          <Text style={styles.userNumber}>+237 681 726 633</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.subMenus}
            onPress={() => setLang(true)}>
            <Text style={styles.subMenusText}>{i18n.t('words.languages')}</Text>
            <Icons name="ios-language-outline" size={20} />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.subMenus}>
            <Text style={styles.subMenusText}>{i18n.t('words.history')}</Text>
            <Icons name="ios-analytics-outline" size={20} />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.subMenus}
            onPress={() => setContact(true)}>
            <Text style={styles.subMenusText}>
              {i18n.t('phrases.contactUs')}
            </Text>
            <Icons name="ios-phone-portrait-outline" size={20} />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.subMenus}
            onPress={() => setTerms(true)}>
            <Text style={styles.subMenusText}>
              {i18n.t('phrases.privacyPolicyTerms')}
            </Text>
            <Icons name="ios-shield-checkmark-outline" size={20} />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.subMenus}
            onPress={() => setFaqs(true)}>
            <Text style={styles.subMenusText}>{i18n.t('words.faq')}</Text>
            <Icons name="ios-help-outline" size={20} />
          </TouchableOpacity>
        </View>
        {/* <Spacer /> */}
      </ScrollView>
      <Language lang={lang} setLang={setLang} />
      <Terms terms={terms} setTerms={setTerms} />
      <FAQs faqs={faqs} setFaqs={setFaqs} />
      <Contact contact={contact} setContact={setContact} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
