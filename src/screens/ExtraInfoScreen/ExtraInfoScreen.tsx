import React from 'react';
import {View, StyleSheet, ScrollView, Text, SafeAreaView} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {Header} from './Header';
import {useExtraDataTable} from './ExtraInfoScreen.hooks';
import {LOADING_TABLE_KEY} from './ExtraInfoScreen.constans';
import {ScreenRouteProp} from '../../Route.types';

interface ExtraInfoScreenProps {
  route: ScreenRouteProp<'ExtraInfoScreen'>;
}

export const ExtraInfoScreen = ({
  route: {
    params: {character},
  },
}: ExtraInfoScreenProps) => {
  const table = useExtraDataTable(character);

  return (
    <SafeAreaView style={styles.container}>
      <Header character={character} />
      <ScrollView>
        <View style={styles.table}>
          {table.map(({id, name, value}, i) => (
            <View
              key={id}
              style={[styles.row, i === table.length - 1 && styles.lastRow]}>
              <View style={styles.name}>
                <Text>{name}</Text>
              </View>
              <View style={styles.value}>
                {value === LOADING_TABLE_KEY ? (
                  <ActivityIndicator size={18} />
                ) : (
                  <Text>{value}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f5f3',
  },
  scrollView: {},
  table: {
    borderRadius: 6,
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    minHeight: 40,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  name: {
    borderColor: 'lightgray',
    borderRightWidth: 1,
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
  },
  value: {
    flex: 3,
    padding: 10,
    alignItems: 'flex-start',
  },
});
