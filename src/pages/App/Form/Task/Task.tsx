import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/shared/Button/Button';
import * as S from './style';

const Task = () => {
  const { getValues } = useForm();
  const [value, setValues] = useState({});

  useEffect(() => {
    setValues(getValues('name'));
  });
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Task</S.Title>
      </S.Header>
      <Button mt={10} title='OnPress' onPress={() => console.log(value)} />
    </S.Wrapper>
  );
};

export default Task;
