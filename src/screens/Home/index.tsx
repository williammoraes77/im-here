import { useState } from "react";
import { Alert, FlatList, useColorScheme } from "react-native";

import { Participant } from "../components/Participant";

import {
  Container,
  EventName,
  EventDate,
  Form,
  InputText,
  Button,
  ButtonText,
  ListEmptyText,
} from "./style";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  const deviceTheme = useColorScheme();
  console.log(deviceTheme);

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <Container>
      <EventName>Nome do evento</EventName>

      <EventDate>Sexta, 4 de Novembro de 2022.</EventDate>

      <Form>
        <InputText
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <Button onPress={handleParticipantAdd}>
          <ButtonText>+</ButtonText>
        </Button>
      </Form>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmptyText>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </ListEmptyText>
        )}
      />
    </Container>
  );
}
