import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './ImageCapture.styles';
import theme from '../../../resources/Colors/theme';
import {Text} from '../../Components';

const ImageCapture = (props) => {
  const {image, setImage, i18n, setNotify, location} = props;

  const [uploadedImage, setUploadedImage] = useState(false);
  const [profileImage, setProfileImage] = useState([]);
  const [selectedImages, setSelectedImage] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setImage(false);
  //   }, 30000);
  // }, [image, setImage]);

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    }).then((_images) => {
      setUploadedImage(true);
      setSelectedImage([...selectedImages, ..._images]);

      _images.map((_image) => (_image.url = _image.path));
      setProfileImage([...profileImage, ..._images]);
    });
  };

  const Confirm = () => {
    setImage(false);
    setNotify(true);
  };

  return (
    <Modal
      isVisible={image}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.PRIMARY_COLOR}
      onBackdropPress={() => setImage(false)}
      onBackButtonPress={() => setImage(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setImage(false)}>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.downIndicator}
          onPress={() => setImage(false)}>
          <Icons
            name="ios-chevron-down-outline"
            size={16}
            color={theme.TERTIARY_COLOR}
          />
        </TouchableOpacity>
        <Text style={styles.actionInfo}>{i18n.t('phrases.changeImage')}</Text>
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => Confirm()}>
          <Text style={styles.actionButtonText}>
            {i18n.t('phrases.takeAPhoto')}
          </Text>
          <Icons
            name="ios-camera-outline"
            size={18}
            color={theme.WHITE_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => selectImage()}>
          <Text style={styles.actionButtonText}>{i18n.t('words.gallery')}</Text>
          <Icons
            name="ios-images-outline"
            size={18}
            color={theme.WHITE_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => setImage(false)}>
          <Text style={styles.actionButtonText}>{i18n.t('words.cancel')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(ImageCapture);
