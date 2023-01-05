import { Container, Title, ButtonText, Button } from "./styles";

interface Props {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {
  return (
    <Container>
      <Title>{name}</Title>

      <Button onPress={onRemove}>
        <ButtonText>-</ButtonText>
      </Button>
    </Container>
  );
}
