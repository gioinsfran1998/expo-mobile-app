import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};

  min-height: 100%;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 10px;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const InputTitle = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.mediumItalic};
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.typography.bold};
  color: ${({ theme }) => theme.palette.error.light};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.boldItalic};

  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 20px;

  text-align: center;
`;

export const GroupInput = styled.View`
  margin-bottom: 10px;
  height: 72px;
`;
