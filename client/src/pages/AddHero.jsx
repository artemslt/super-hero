import AddForm from "../components/AddForm/AddForm";
import { Title } from "../components/AddForm/AddForm.styled";
import { Container } from "../components/Layout/Layout.styled";

function AddHero() {
  return (
    <Container>
      <Title>Add information about hero</Title>
      <AddForm />
    </Container>
  );
}

export default AddHero;
