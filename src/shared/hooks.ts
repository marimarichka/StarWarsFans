import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {addSelectedFan, deleteSelectedFan} from '../redux/slices/fansSlice';
import {useAppSelector} from '../redux/store';
import {CharactersItemApiType} from './types';

export const useFunLike = (character: CharactersItemApiType) => {
  const selectedFans = useAppSelector(state => state.fans.selectedFans);
  const dispatch = useDispatch();

  const isLiked = useMemo(
    () => !!selectedFans.find(fan => fan.url === character.url),
    [selectedFans],
  );

  const onLikePress = () => {
    if (!isLiked) dispatch(addSelectedFan(character));
    else dispatch(deleteSelectedFan(character.url));
  };

  return {isLiked, onLikePress};
};
