import React from 'react';
import {Text, TextInput, View} from 'react-native';
import theme from '../../../resources/Colors/theme';

import styles from './Input.style';

const InputComponentOne = (props) => {
  const {
    holder,
    type,
    capitalize,
    inputError,
    value,
    setValue,
    secure,
    toggleError,
    errorMessage,
  } = props;

  return (
    <View style={styles.mainContainer}>
      <View
        style={inputError ? styles.inputContainerError : styles.inputContainer}>
        <TextInput
          placeholder={holder}
          keyboardType={type}
          autoCapitalize={capitalize}
          secureTextEntry={secure}
          style={styles.inputText}
          value={value}
          onFocus={() => toggleError()}
          onChangeText={(text) => setValue(text)}
          placeholderTextColor={theme.LIGHT_GREY}
        />
      </View>
      {inputError && <Text style={styles.inputError}>{errorMessage}</Text>}
    </View>
  );
};

export default InputComponentOne;
