import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './ReviewCard.style';

const Card = (props) => {
  const {message, setMessage} = props;

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.reviewButtons}>
        <Icons name="add-outline" size={20} />
      </TouchableOpacity>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={'Review message'}
          style={styles.textInputField}
          onChangeText={(text) => setMessage(text)}
          value={message}
          autoCapitalize="sentences"
          multiline={true}
          numberOfLines={1}
        />
      </View>
      <TouchableOpacity style={styles.reviewButtons}>
        <Icons name="camera-outline" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.reviewButtons}>
        <Icons name="send-outline" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
