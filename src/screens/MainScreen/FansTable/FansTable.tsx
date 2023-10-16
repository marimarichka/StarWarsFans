import React, {useState} from 'react';
import {ActivityIndicator, DataTable} from 'react-native-paper';
import {StyleSheet, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FanTableRow} from './FansTableRow';
import {useGetCharactersQuery} from '../../../redux/API';
import {
  ITEMS_PER_PAGE,
  TABLE_ROW_HEIGHT,
  cellStyles,
} from './FansTable.constans';

const titles = [
  {id: 'name', title: 'Name'},
  {id: 'birth_year', title: 'Birth Year'},
  {id: 'gender', title: 'Gender'},
  {id: 'home_world', title: 'Home World'},
  {id: 'specie', title: 'Species'},
] as const;

export const FansTable = () => {
  const {height, width} = useWindowDimensions();
  const isHorizontal = height < width;

  const [page, setPage] = useState(0);
  const {data: characters, status} = useGetCharactersQuery(page + 1);

  const numberOfPage = characters
    ? Math.ceil(characters.count / ITEMS_PER_PAGE)
    : 0;

  const from = 1 + 10 * page;
  const to = numberOfPage - 1 === page ? characters?.count : 10 * (page + 1);

  return (
    <DataTable style={styles.table}>
      <DataTable.Header>
        <DataTable.Title style={cellStyles.like}>
          <Icon name="heart" size={18} color="black" />
        </DataTable.Title>
        {titles.map(({id, title}) => {
          if ((id === 'birth_year' || id === 'gender') && !isHorizontal) {
            return null;
          }

          return (
            <DataTable.Title key={id} style={cellStyles[id]}>
              {title}
            </DataTable.Title>
          );
        })}
      </DataTable.Header>
      {status === 'pending' && (
        <ActivityIndicator size={45} style={styles.loading} />
      )}
      {status !== 'pending' &&
        characters?.results?.map(character => (
          <FanTableRow character={character} key={character.url} />
        ))}
      <DataTable.Pagination
        page={page}
        numberOfPages={numberOfPage}
        onPageChange={setPage}
        label={`${from}-${to} of ${characters?.count || 0}`}
        numberOfItemsPerPage={ITEMS_PER_PAGE}
        showFastPaginationControls
      />
    </DataTable>
  );
};

const styles = StyleSheet.create({
  table: {
    backgroundColor: 'white',
    padding: 6,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 6,
  },
  loading: {
    height: TABLE_ROW_HEIGHT * ITEMS_PER_PAGE,
  },
});
