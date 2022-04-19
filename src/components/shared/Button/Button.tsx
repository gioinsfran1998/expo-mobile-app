import React, { FC } from 'react';

import * as S from './style';

interface ButtonProps {
  onPress: () => void;
  title: string;
  mt?: number;
  mb?: number;
  loading?: boolean;
  variantText?: string;
}

const Button: FC<ButtonProps> = ({
  loading = false,
  onPress,
  title,
  mt = 0,
  mb = 0,
  variantText
}) => {
  return (
    <S.Wrapper mt={mt} mb={mb} onPress={onPress}>
      {loading ? (
        <S.TextButton> loading... </S.TextButton>
      ) : (
        <S.TextButton>
          {!!variantText ? `${title} ${variantText}` : title}
        </S.TextButton>
      )}
    </S.Wrapper>
  );
};

export default Button;
