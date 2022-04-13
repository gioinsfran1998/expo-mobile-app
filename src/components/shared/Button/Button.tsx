import React, { FC } from 'react';

import * as S from './style';

interface ButtonProps {
  onPress: () => void;
  title: string;
  mt?: number;
  mb?: number;
}

const Button: FC<ButtonProps> = ({ onPress, title, mt = 0, mb = 0 }) => {
  return (
    <S.Wrapper mt={mt} mb={mb} onPress={onPress}>
      <S.TextButton>{title}</S.TextButton>
    </S.Wrapper>
  );
};

export default Button;
