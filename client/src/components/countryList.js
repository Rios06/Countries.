import React from 'react';
import { useQuery } from '@apollo/client';
import { COUNTRIES_QUERY } from './CountryQueries';
import client from './apollo';

const CountryList = () => {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY, { client });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.countries.map(country => (
        <li key={country.name}>
          {country.name} - {country.continent.name}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;