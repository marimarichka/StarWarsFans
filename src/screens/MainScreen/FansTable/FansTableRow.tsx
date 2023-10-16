import React from 'react';
import {
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import {ActivityIndicator, DataTable} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useGetPlanetByIdQuery, useGetSpecieByIdQuery} from '../../../redux/API';
import {useFunLike} from '../../../shared/hooks';
import {getIdFromUrl, hitSlop} from '../../../shared/helpers';
import {TABLE_ROW_HEIGHT, cellStyles} from './FansTable.constans';
import {RootNavigatorParamList} from '../../../Route.types';
import {CharactersItemApiType} from '../../../shared/types';

interface FanTableRowProps {
  character: CharactersItemApiType;
}

export const FanTableRow = ({character}: FanTableRowProps) => {
  const navigation = useNavigation<NavigationProp<RootNavigatorParamList>>();
  const {height, width} = useWindowDimensions();
  const isHorizontal = height < width;

  const {data: planet, status: planetStatus} = useGetPlanetByIdQuery(
    getIdFromUrl(character.homeworld),
  );

  const skipGetSpecie = !character.species.length;
  const {data: specie, status: spacieStatus} = useGetSpecieByIdQuery(
    skipGetSpecie ? 0 : getIdFromUrl(character.species[0]),
    {skip: skipGetSpecie},
  );

  const {isLiked, onLikePress} = useFunLike(character);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ExtraInfoScreen', {character})}>
      <DataTable.Row style={styles.row}>
        <DataTable.Cell style={cellStyles.like}>
          <TouchableOpacity hitSlop={hitSlop(20)} onPress={onLikePress}>
            <Icon
              style={styles.likeIcon}
              name={!isLiked ? 'heart-o' : 'heart'}
              size={18}
              color="rgba(255, 42, 36, 0.78)"
            />
          </TouchableOpacity>
        </DataTable.Cell>
        <DataTable.Cell style={cellStyles.name}>
          {character.name}
        </DataTable.Cell>
        {isHorizontal && (
          <>
            <DataTable.Cell style={cellStyles.birth_year}>
              {character.birth_year}
            </DataTable.Cell>
            <DataTable.Cell style={cellStyles.gender}>
              {character.gender}
            </DataTable.Cell>
          </>
        )}
        <DataTable.Cell style={cellStyles.home_world}>
          {planetStatus === 'pending' ? (
            <ActivityIndicator />
          ) : (
            planet?.name || 'n/a'
          )}
        </DataTable.Cell>
        <DataTable.Cell style={cellStyles.specie}>
          {spacieStatus === 'pending' ? (
            <ActivityIndicator />
          ) : (
            specie?.name || 'n/a'
          )}
        </DataTable.Cell>
      </DataTable.Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    minHeight: TABLE_ROW_HEIGHT,
    maxHeight: TABLE_ROW_HEIGHT,
  },
  likeIcon: {
    marginTop: Platform.OS === 'ios' ? 9 : 0,
  },
});
