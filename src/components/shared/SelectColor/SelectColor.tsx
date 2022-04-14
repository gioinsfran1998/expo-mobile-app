import React, { FC } from 'react';
import { useController } from 'react-hook-form';

import * as S from './style';

interface SelectColorProps {
  data: Record<string, string>[];
  checked: string;
  handleSelect: () => void;
}

const SelectColor: FC<SelectColorProps> = ({ data, handleSelect, checked }) => {
  return (
    <S.Wrapper>
      {data.map((select, idx) => {
        return (
          <S.Animated
            key={idx}
            animate={{ opacity: checked === select.value ? 0.4 : 1 }}
          >
            <S.Circle
              onPress={() => handleSelect(select.value)}
              color={select.color}
            />
          </S.Animated>
        );
      })}
    </S.Wrapper>
  );
};

export default SelectColor;
