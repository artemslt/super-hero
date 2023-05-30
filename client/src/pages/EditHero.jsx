import { Title } from "../components/AddForm/AddForm.styled";
import UpdateForm from "../components/EditForm/EditForm";
import { Container } from "../components/Layout/Layout.styled";

function UpdateHero() {
  return (
    <Container>
      <Title>Edit information about hero</Title>
      <UpdateForm />
    </Container>
  );
}

export default UpdateHero;
