import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFunLike} from '../../shared/hooks';
import {hitSlop} from '../../shared/helpers';
import {CharactersItemApiType} from '../../shared/types';

export const Header = ({character}: {character: CharactersItemApiType}) => {
  const navigation = useNavigation();
  const {isLiked, onLikePress} = useFunLike(character);

  return (
    <View style={styles.header}>
      <TouchableOpacity hitSlop={hitSlop(20)} onPress={navigation.goBack}>
        <Icon name={'arrow-left'} size={18} />
      </TouchableOpacity>
      <Text style={styles.name}>{character.name}</Text>
      <TouchableOpacity onPress={onLikePress} hitSlop={hitSlop(20)}>
        <Icon
          name={!isLiked ? 'heart-o' : 'heart'}
          size={18}
          color="rgba(255, 42, 36, 0.78)"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#f6f5f3',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  name: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
  },
});
