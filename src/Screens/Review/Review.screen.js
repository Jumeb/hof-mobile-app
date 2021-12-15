import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {ReviewCard, Spacer} from '../../Components';
import styles from './Review.style';
import bakers from '../../../resources/Dummy/bakers.json';
import {scrolling} from '../../redux/actions/ScrollActions';

const Review = (props) => {
  const [notify, setNotify] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  });

  const handle = (event) => {
    props.scrolling(true);
  };

  const hide = (event) => {
    props.scrolling(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={bakers}
        renderItem={({item, key}) => (
          <ReviewCard baker={item} onPress={() => Actions.reviews()} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={Spacer}
        onScrollBeginDrag={(event) => handle(event)}
        onScrollEndDrag={(event) => hide(event)}
      />
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(null, mapDispatchToProps)(Review);
