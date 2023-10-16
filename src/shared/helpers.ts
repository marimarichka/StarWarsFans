import {Insets} from 'react-native';

export const hitSlop = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number,
): Insets => ({
  top,
  right: right || top,
  bottom: bottom || top,
  left: left || right || top,
});

export const getIdFromUrl = (url: string) => {
  const arr = url.split('/');
  const id = +arr[arr.length - 2];
  return id;
};
