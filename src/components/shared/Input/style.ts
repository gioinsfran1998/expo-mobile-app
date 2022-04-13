import styled from 'styled-components/native';

export const GroupInput = styled.View`
  margin-bottom: 10px;
  height: 72px;
`;

export const InputTitle = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.mediumItalic};
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 10px;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.typography.bold};
  color: ${({ theme }) => theme.palette.error.light};
`;
