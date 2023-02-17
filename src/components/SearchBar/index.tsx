import { Container } from './styles';

interface SearchBarProps {
  handleSearchMovie: (e: any) => void;
}

export function SearchBar({ handleSearchMovie }: SearchBarProps) {
  const debounce = (cb: any, delay = 1000) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  return (
    <Container>
      <form>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => debounce(handleSearchMovie(e.target.value))}
        />
      </form>
    </Container>
  );
}
