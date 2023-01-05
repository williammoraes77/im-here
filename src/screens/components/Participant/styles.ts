import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: "1F1E25";
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.MAIN};
  margin-left: 16px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.MAIN};
`;

export const Button = styled.TouchableOpacity`
  min-width: 56px;
  min-height: 56px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.ALERT};
  align-items: center;
  justify-content: center;
`;
