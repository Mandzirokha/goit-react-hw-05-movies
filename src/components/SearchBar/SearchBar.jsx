import { SearchForm, FormButton, ButtonLabel, Input } from './SearchBar.styled';

export const SearchBar = ({ onChange }) => {
  return (
    <SearchForm>
      <FormButton type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </FormButton>

      <Input
        onChange={e => onChange(e.target.value)}
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SearchForm>
  );
};
