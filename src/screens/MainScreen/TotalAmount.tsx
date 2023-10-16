import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {useAppSelector} from '../../redux/store';

export const TotalAmount = () => {
  const selectedFans = useAppSelector(state => state.fans.selectedFans);

  const counts = useMemo(() => {
    let femaleCount = 0;
    let maleCount = 0;
    let othersCount = 0;

    selectedFans.forEach(fan => {
      if (fan.gender === 'female') femaleCount++;
      else if (fan.gender === 'male') maleCount++;
      else othersCount++;
    });

    return [
      {gender: 'Female Fans', count: femaleCount},
      {gender: 'Male Fans', count: maleCount},
      {gender: 'Others', count: othersCount},
    ];
  }, [selectedFans]);

  return (
    <View style={styles.container}>
      {counts.map(({gender, count}) => (
        <Card
          mode="elevated"
          key={gender}
          style={styles.cardStyle}
          contentStyle={styles.cardContentStyle}>
          <Text style={styles.counter}>{count}</Text>
          <Text style={styles.genderText}>{gender}</Text>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
    marginHorizontal: 3,
  },
  cardStyle: {
    maxHeight: 80,
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  cardContentStyle: {marginVertical: 5},
  counter: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  genderText: {
    fontSize: 12,
    color: 'black',
    marginLeft: 10,
  },
});
