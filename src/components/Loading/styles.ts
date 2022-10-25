import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
}))``;
