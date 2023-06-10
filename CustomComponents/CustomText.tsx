import {StyleSheet, Text} from 'react-native';
import React, {memo} from 'react';

const CustomText = ({text, onPress}: {text: number; onPress: () => void}) => {
  console.log('custom text');
  return (
    <Text onPress={onPress} style={styles.text}>
      {text}
    </Text>
  );
};

export default memo(CustomText);

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
  },
});
