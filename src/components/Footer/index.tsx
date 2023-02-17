import { Button, Container } from './styles';

interface FooterProps {
  handleFilter: (value: string) => void;
}

export function Footer({ handleFilter }: FooterProps) {
  return (
    <Container>
      <Button onClick={() => handleFilter('top_rated')}>Top Rated</Button>
      <Button onClick={() => handleFilter('now_playing')}>Now Playing</Button>
    </Container>
  );
}