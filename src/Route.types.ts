import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CharactersItemApiType} from './shared/types';

export type RootNavigatorParamList = {
  MainScreen: undefined;
  ExtraInfoScreen: {
    character: CharactersItemApiType;
  };
};

export type ScreenRouteProp<T extends keyof RootNavigatorParamList> = RouteProp<
  RootNavigatorParamList,
  T
>;

export type ScreenNavigationProp<T extends keyof RootNavigatorParamList> =
  NativeStackNavigationProp<RootNavigatorParamList, T>;
