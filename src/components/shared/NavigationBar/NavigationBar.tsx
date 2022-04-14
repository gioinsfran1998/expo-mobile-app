import React, { FC } from 'react';

import * as S from './style';

interface NavigationBarProps {
  title: String;
  onPressRight: () => void;
  onPressLeft?: () => void;
}
const NavigationBar: FC<NavigationBarProps> = ({
  title = 'Title',
  onPressLeft,
  onPressRight
}) => {
  return (
    <S.Header>
      {!!onPressLeft && (
        <S.TouchableArrow onPress={onPressLeft}>
          <S.ArrowLeft />
        </S.TouchableArrow>
      )}

      <S.Title>{title}</S.Title>

      {!!onPressRight && (
        <S.TouchableArrow onPress={onPressRight}>
          <S.ArrowRight />
        </S.TouchableArrow>
      )}
    </S.Header>
  );
};

export default NavigationBar;
