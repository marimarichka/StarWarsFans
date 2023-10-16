import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-paper';
import {clearSelectedFan} from '../../redux/slices/fansSlice';

export const Header = () => {
  const dispatch = useDispatch();

  const onClearFans = () => {
    dispatch(clearSelectedFan());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fans</Text>
      <Button
        mode="outlined"
        style={styles.button}
        onPress={onClearFans}
        textColor="rgba(255, 42, 36, 0.78)">
        CLEAR FUNS
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '300',
    color: 'black',
  },
  button: {
    borderColor: 'rgba(255, 42, 36, 0.78)',
    borderRadius: 4,
  },
});
