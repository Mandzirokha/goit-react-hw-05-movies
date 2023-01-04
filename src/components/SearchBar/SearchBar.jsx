import { useSearchParams } from 'react-router-dom';
import { SearchForm, FormButton, ButtonLabel, Input } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('query' ?? '');

  const handleInput = e => {
    setSearchParam({ query: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      // toast.error('Please, enter a request.');
      return;
    }

    onSubmit(query);
    setSearchParam({ query: '' });
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleInput}
      />
      <FormButton type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </FormButton>
    </SearchForm>
  );
};
