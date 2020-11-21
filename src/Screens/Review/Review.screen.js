import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TabBarTwo} from '../../Components';

import styles from './Review.styles';
import {ReviewCard} from '../../Components';

const Review = () => {
  return (
    <SafeAreaView>
      <ReviewCard />
    </SafeAreaView>
  );
};

export default Review;
