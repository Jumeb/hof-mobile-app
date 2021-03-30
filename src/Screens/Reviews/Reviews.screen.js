import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import styles from './Reviews.styles';
import {ReviewsCard, SendMessage} from '../../Components';
import {scrolling} from '../../redux/actions/ScrollActions';

const Review = (props) => {
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <SendMessage showImage={true} sent={true} />
        <SendMessage showImage={true} sent={false} />
        <SendMessage showImage={false} sent={true} />
        <SendMessage showImage={false} sent={false} />
        <SendMessage showImage={true} sent={true} />
      </ScrollView>
      <ReviewsCard message={message} setMessage={(text) => setMessage(text)} />
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(null, mapDispatchToProps)(Review);
