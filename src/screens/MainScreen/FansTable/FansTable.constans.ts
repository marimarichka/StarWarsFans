import {StyleSheet} from 'react-native';

export const TABLE_ROW_HEIGHT = 48;
export const ITEMS_PER_PAGE = 10;

export const cellStyles = StyleSheet.create({
  like: {flex: 1, marginLeft: -10},
  name: {flex: 6},
  birth_year: {flex: 4},
  gender: {flex: 4},
  home_world: {flex: 4},
  specie: {flex: 2},
});
