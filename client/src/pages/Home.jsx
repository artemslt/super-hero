import { Title, Wrapper, Text, HomeLink } from "../components/Home.styled";
import { Container } from "../components/Layout/Layout.styled";

function HomePage() {
  return (
    <Container>
      <Wrapper>
        <Title>Welcome to the SUPERHEROES APP</Title>
        <Text>
          In this application you can find{" "}
          <HomeLink to="/catalog">information</HomeLink> about super heroes.{" "}
          <br></br>You can also <HomeLink to="/new">add</HomeLink> and{" "}
          <HomeLink to="/catalog">edit</HomeLink> information about them.
        </Text>
      </Wrapper>
    </Container>
  );
}

export default HomePage;
