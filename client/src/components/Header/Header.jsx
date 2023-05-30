import { Container } from "../Layout/Layout.styled";
import { Logo, NavWrapper, StyledLink, Wrapper } from "./Header.styled";

function Header() {
  return (
    <header>
      <Container>
        <Wrapper>
          <Logo>SuperHeroes</Logo>

          <StyledLink to="/new">Add new Hero</StyledLink>
          <NavWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </NavWrapper>
        </Wrapper>
      </Container>
    </header>
  );
}

export default Header;
