import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView, View} from 'react-native';
import {Header} from './Header';
import {TotalAmount} from './TotalAmount';
import {FansTable} from './FansTable/FansTable';

export const MainScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <TotalAmount />
          <FansTable />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#f6f5f3',
  },
  container: {
    flex: 1,
    margin: 20,
  },
});
