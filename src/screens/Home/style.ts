import { FlatList } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 24px;
`;

export const EventName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.MAIN};
  font-weight: bold;
  margin-top: 48px;
`;

export const EventDate = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.MAIN};
`;

export const Button = styled.TouchableOpacity`
  min-width: 56px;
  min-height: 56px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.ADD_BUTTON};
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.INPUT};
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.MAIN};
  padding: 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-right: 12px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 36px;
  margin-bottom: 42px;
`;

export const ListEmptyText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.MAIN};
  text-align: center;
`;
