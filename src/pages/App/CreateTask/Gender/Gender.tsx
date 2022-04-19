import React, { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Text, Modal, Alert } from 'react-native';
import Button from '../../../../components/shared/Button/Button';
import Input from '../../../../components/shared/Input/Input';
import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';

import * as S from './style';

const Gender = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    getValues,
    control,
    formState: { errors },
    trigger
  } = useFormContext();

  const saveFormToRight = () => {
    navigation.navigate('Measures');
    trigger('Gender');
  };

  const saveFormToLeft = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <S.Overlay>
          <S.ModalWrapper>
            <Input
              type='Default'
              placeholder='Gender'
              name='gender'
              label='Gender:'
              control={control}
              error={errors.gender?.message}
            />
            <Button
              title='Close Modal'
              onPress={() => setModalVisible((prev) => !prev)}
            />
          </S.ModalWrapper>
        </S.Overlay>
      </Modal>
      <NavigationBar
        title='Go back to Address'
        onPressRight={saveFormToRight}
        onPressLeft={saveFormToLeft}
      />
      <S.Description>Add your gender</S.Description>

      <Button
        title='Open Modal'
        onPress={() => setModalVisible((prev) => !prev)}
      />

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Gender;
