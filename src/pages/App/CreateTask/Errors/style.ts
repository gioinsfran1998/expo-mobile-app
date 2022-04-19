import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};

  min-height: 100%;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.boldItalic};

  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 20px;

  text-align: center;
`;

export const Group = styled.View`
  align-items: flex-start;
`;

export const TitleError = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.regular};

  line-height: 30px;

  font-size: 20px;
`;

export const TextError = styled.Text`
  padding-left: 20px;
  color: #ffa5a5;
  font-family: ${({ theme }) => theme.typography.bold};
`;
