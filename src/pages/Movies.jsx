// import { useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
// import { useSearchParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { getSearchMovies } from 'services/api';

export const Movies = () => {
  // const [searchMovies, setSearchMovies] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('search') ?? '';

  // const handleSubmit = e => {
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   if (!query) return;
  //   getSearchMovies(query).then(setSearchMovies);
  // }, [query]);

  return (
    <>
      <SearchBar />
    </>
  );
};
