import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  CharactersApiType,
  FilmsApiType,
  PlanetsItemApiType,
  SpeciesApiItemType,
  SpeciesApiType,
  StarshipsApiType,
  VehiclesApiType,
} from '../shared/types';

const TAG_CHARACTER = 'Character';
const TAG_PLANET = 'Planet';
const TAG_SPECIE = 'Specie';
const TAG_FILM = 'Film';
const TAG_VEHICLE = 'Vehicle';
const TAG_STARSHIP = 'Starship';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
  tagTypes: [
    TAG_CHARACTER,
    TAG_PLANET,
    TAG_SPECIE,
    TAG_FILM,
    TAG_VEHICLE,
    TAG_STARSHIP,
  ],
  endpoints: builder => ({
    // characters
    getCharacters: builder.query<CharactersApiType, number>({
      query: page => `/people/?page=${page}`,
      providesTags: [TAG_CHARACTER],
    }),
    // species
    getSpecies: builder.query<SpeciesApiType, void>({
      query: () => `/species`,
      providesTags: [TAG_SPECIE],
    }),
    getSpecieById: builder.query<SpeciesApiItemType, number>({
      query: id => `/species/${id}`,
      providesTags: [TAG_SPECIE],
    }),
    // planets
    getPlanetById: builder.query<PlanetsItemApiType, number>({
      query: id => `/planets/${id}`,
      providesTags: [TAG_PLANET],
    }),
    // vehicles
    getVehicles: builder.query<VehiclesApiType, void>({
      query: () => `/vehicles`,
      providesTags: [TAG_VEHICLE],
    }),
    // films
    getFilms: builder.query<FilmsApiType, void>({
      query: () => `/films`,
      providesTags: [TAG_FILM],
    }),
    // starships
    getStarships: builder.query<StarshipsApiType, void>({
      query: () => `/starships`,
      providesTags: [TAG_STARSHIP],
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetPlanetByIdQuery,
  useGetSpecieByIdQuery,
  useGetSpeciesQuery,
  useGetVehiclesQuery,
  useGetFilmsQuery,
  useGetStarshipsQuery,
} = api;
