import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};

  min-height: 100%;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: #fafafa;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 20px 5px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.typography.mediumItalic};

  font-size: 20px;
`;
