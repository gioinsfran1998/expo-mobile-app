import React, { FC } from 'react';
import { useController } from 'react-hook-form';

import * as S from './style';

interface InputProps {
  error?: string;
  label?: string;
  name: string;
  control: any;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  name,
  label,
  control,
  placeholder,
  error
}) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name
  });
  return (
    <S.GroupInput>
      {!!label && <S.InputTitle>{label}</S.InputTitle>}
      <S.Input
        onBlur={field.onBlur}
        placeholder={placeholder}
        onChangeText={field.onChange}
        value={field.value}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </S.GroupInput>
  );
};

export default Input;
