import React, {useState} from 'react';
import {View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {EventCard} from '../../Components';
import {Confirm} from '../../modals';
import styles from './Events.style';
import {scrolling} from '../../redux/actions/ScrollActions';

const Events = (props) => {
  const [confirm, setConfirm] = useState(false);
  const closeModal = () => {
    setConfirm(false);
  };
  const openModal = () => {
    setConfirm(true);
  };

  const handle = (event) => {
    props.scrolling(true);
  };

  const hide = (event) => {
    props.scrolling(false);
  };

  return (
    <View style={styles.events}>
      <EventCard openModal={openModal} />
      <Confirm confirm={confirm} closeModal={closeModal} />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(null, mapDispatchToProps)(Events);
