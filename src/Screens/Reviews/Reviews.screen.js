import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import styles from './Reviews.styles';
import {ReviewsCard, SendMessage} from '../../Components';
import {} from 'react-native-gesture-handler';

const Review = () => {
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

export default Review;
