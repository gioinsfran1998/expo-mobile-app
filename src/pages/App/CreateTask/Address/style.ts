import styled, { css } from 'styled-components/native';

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

export const Color = styled.View`
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #fafafa;
  border-radius: 3px;

  ${({ color }) => {
    switch (color) {
      case 'red':
        return css`
          background: #ff0000;
        `;
      case 'green':
        return css`
          background: #00ff2f;
        `;
      case 'blue':
        return css`
          background: #0116ff;
        `;
      case 'orange':
        return css`
          background: #ff9100;
        `;
      case 'beige':
        return css`
          background: #979c43;
        `;
      case 'pink':
        return css`
          background: #fa93c3;
        `;
      case 'purple':
        return css`
          background: #7317e4;
        `;
      default:
        return css`
          background-color: #fafafa;
        `;
    }
  }};
`;

export const ColorText = styled.Text`
  color: ${({ theme }) => theme.palette.common.white};

  font-size: 20px;

  font-family: ${({ theme }) => theme.typography.boldItalic};
`;
