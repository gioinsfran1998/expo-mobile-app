import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};

  min-height: 100%;
`;

export const TextArea = styled.TextInput`
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 10px;
  border-radius: 5px;
  height: 100px;

  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.boldItalic};

  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 20px;

  text-align: center;
`;

export const Overlay = styled.View`
  height: 100%;
  justify-content: flex-end;
`;

export const ModalWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.15);
`;
