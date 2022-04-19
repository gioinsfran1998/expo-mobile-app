import styled from 'styled-components/native';

interface WrapperProps {
  mb?: number;
  mt?: number;
}

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  padding: 15px 5px;

  ${({ mt }) => `margin-top: ${mt}px;`};
  ${({ mb }) => `margin-bottom: ${mb}px;`};
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.typography.mediumItalic};

  font-size: 14px;

  color: ${({ theme }) => theme.palette.common.white};
`;
