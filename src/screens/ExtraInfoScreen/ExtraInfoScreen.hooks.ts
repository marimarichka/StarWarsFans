import {useMemo} from 'react';
import {
  useGetFilmsQuery,
  useGetPlanetByIdQuery,
  useGetSpeciesQuery,
  useGetVehiclesQuery,
} from '../../redux/API';
import {getIdFromUrl} from '../../shared/helpers';
import {LOADING_TABLE_KEY} from './ExtraInfoScreen.constans';
import {CharactersItemApiType, PlanetsItemApiType} from '../../shared/types';

const keysWithString = [
  'name',
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender',
  'homeworld',
] as const;

const names = {
  name: 'Name',
  height: 'Height',
  mass: 'Mass',
  hair_color: 'Hair color',
  skin_color: 'Skin color',
  eye_color: 'Eye color',
  birth_year: 'Birth year',
  gender: 'Gender',
  homeworld: 'Homeworld',
  films: 'Films',
  species: 'Species',
  vehicles: 'Vehicles',
  starships: 'Starships',
};

const getPlanetName = (planet?: PlanetsItemApiType) => {
  return planet ? planet.name : LOADING_TABLE_KEY;
};

export const useExtraDataTable = (character: CharactersItemApiType) => {
  const {data: species} = useGetSpeciesQuery();
  const {data: films} = useGetFilmsQuery();
  const {data: vehicles} = useGetVehiclesQuery();
  const {data: planet} = useGetPlanetByIdQuery(
    getIdFromUrl(character.homeworld),
  );

  const tableWithString = keysWithString.map(key => ({
    id: key,
    name: names[key],
    value: key === 'homeworld' ? getPlanetName(planet) : character[key],
  }));

  const spesiesText = useMemo(
    () =>
      species
        ? character.species.length
          ? species.results
              .filter(s => character.species.includes(s.url))
              .map(s => s.name)
              .join(', ')
          : 'n/a'
        : LOADING_TABLE_KEY,
    [species, character],
  );

  const filmsText = useMemo(
    () =>
      films
        ? character.films.length
          ? films.results
              .filter(f => character.films.includes(f.url))
              .map(f => f.title)
              .join(', ')
          : 'n/a'
        : LOADING_TABLE_KEY,
    [films, character],
  );

  const vehiclesText = useMemo(
    () =>
      vehicles
        ? character.vehicles.length
          ? vehicles.results
              .filter(v => character.vehicles.includes(v.url))
              .map(v => v.name)
              .join(', ')
          : 'n/a'
        : LOADING_TABLE_KEY,
    [vehicles, character],
  );

  return [
    ...tableWithString,
    {
      id: 'species',
      name: names['species'],
      value: spesiesText,
    },
    {
      id: 'films',
      name: names['films'],
      value: filmsText,
    },
    {
      id: 'vehicles',
      name: names['vehicles'],
      value: vehiclesText,
    },
  ];
};
