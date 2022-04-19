import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import { Alert, Modal, Text } from 'react-native';
import { useTaskStore } from '../../../../store/useTaskStore';

import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';
import Button from '../../../../components/shared/Button/Button';
import * as Yup from 'yup';

import * as S from './style';

const Priority = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { getValues, control, setValue, trigger } = useFormContext();

  const saveFormToRight = () => {
    navigation.navigate('Extra');
    trigger('priority');
  };

  const saveFormToLeft = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go to Extra'
        onPressRight={saveFormToRight}
        onPressLeft={saveFormToLeft}
      />
      <S.Description>Enter task priority</S.Description>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        style={{ position: 'relative' }}
      >
        <S.Overlay>
          <S.ModalWrapper>
            <Controller
              control={control}
              render={() => (
                <Picker
                  itemStyle={{
                    color: '#fafafa'
                  }}
                  selectedValue={getValues().priority}
                  onValueChange={(itemValue) => {
                    setValue('priority', itemValue);
                    setModalVisible((prev) => !prev);
                  }}
                >
                  <Picker.Item label='Hight' value='hight' />
                  <Picker.Item label='Low' value='low' />
                  <Picker.Item label='Regular' value='regular' />
                </Picker>
              )}
              name='priority'
            />
          </S.ModalWrapper>
        </S.Overlay>
      </Modal>

      <Button title='Select' onPress={() => setModalVisible((prev) => !prev)} />

      <Text style={{ padding: 10, color: '#fafafa' }}>
        {JSON.stringify(getValues(), null, 2)}
      </Text>
    </S.Wrapper>
  );
};

export default Priority;
