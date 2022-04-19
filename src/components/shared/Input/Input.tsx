import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { thousandsSeparator } from '../../../utils/thousandsSeparator';

import * as S from './style';

interface InputProps {
  error?: string;
  label?: string;
  name: string;
  control: any;
  placeholder?: string;
  type: 'TextArea' | 'Default' | 'Number';
}

const Input: FC<InputProps> = ({
  name,
  label,
  control,
  placeholder,
  error,
  type
}) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name
  });

  if (type === 'Number') {
    return (
      <S.GroupInput>
        {!!label && <S.InputTitle>{label}</S.InputTitle>}
        <S.Input
          onBlur={field.onBlur}
          placeholder={placeholder}
          onChangeText={field.onChange}
          value={thousandsSeparator(field.value)}
          keyboardType='numeric'
        />
        {!!error && <S.Error>{error}</S.Error>}
      </S.GroupInput>
    );
  }
  return (
    <S.GroupInput>
      {!!label && <S.InputTitle>{label}</S.InputTitle>}
      <S.Input
        type={type}
        multiline={type === 'TextArea'}
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
