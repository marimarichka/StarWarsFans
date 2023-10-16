import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {MainScreen} from './screens/MainScreen/MainScreen';
import {ExtraInfoScreen} from './screens/ExtraInfoScreen/ExtraInfoScreen';
import {store} from './redux/store';
import {RootNavigatorParamList} from './Route.types';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MainScreen"
            screenOptions={{
              contentStyle: styles.navigator,
              headerShown: false,
            }}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="ExtraInfoScreen" component={ExtraInfoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: 'white',
  },
});

export default App;
