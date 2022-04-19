import React, { FC } from 'react';

import { useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';

import Button from '../../../../components/shared/Button/Button';
import NavigationBar from '../../../../components/shared/NavigationBar/NavigationBar';

import * as S from './style';

type ErrorFieldType = string | Record<string, string[]>;

const findPageKey = (key: string) => {
  if (['firstName', 'lastName'].includes(key)) {
    return ['User', 'User'];
  }

  if (['task'].includes(key)) {
    return ['Task', 'Task'];
  }

  if (['priority'].includes(key)) {
    return ['Priority', 'Priority'];
  }

  if (['color'].includes(key)) {
    return ['Extra', 'Extra'];
  }

  if (['phoneNumber', 'documentNumber'].includes(key)) {
    return ['Phone', 'Phone'];
  }

  if (['country', 'city', 'address'].includes(key)) {
    return ['Address', 'Address'];
  }

  if (['twitter', 'instagram', 'facebook'].includes(key)) {
    return ['SocialMedia', 'SocialMedia'];
  }

  if (['gender'].includes(key)) {
    return ['Gender', 'Gender'];
  }

  if (['height', 'weight'].includes(key)) {
    return ['Measures', 'Measures'];
  }

  return ['other', 'other'];
};

const Errors = ({ navigation }) => {
  const {
    formState: { errors }
  } = useFormContext();

  const errorList = Object.keys(errors).reduce(
    (errorList, errorKey: string) => {
      const obj = (errors as Record<string, string>)[errorKey];

      const [pageKey, navigationName] = findPageKey(errorKey);

      if (!(pageKey in errorList)) {
        errorList[pageKey] = { navigationName, fields: [] };
      }

      if (typeof obj === 'object') {
        if (!Array.isArray(obj)) {
          errorList[pageKey].fields.push({ [errorKey]: Object.keys(obj) });
        }
      } else {
        errorList[pageKey].fields.push(errorKey);
      }

      return errorList;
    },
    {} as Record<
      string,
      {
        navigationName: string;
        fields: ErrorFieldType[];
      }
    >
  );

  const RedirectToPage = errorList[Object.keys(errorList)[0]].navigationName;

  return (
    <S.Wrapper>
      <NavigationBar
        title='Go back to Measures'
        onPressLeft={() => navigation.goBack()}
      />
      <S.Description>Errors:</S.Description>

      {Object.keys(errorList).map((key, idx) => {
        return (
          <S.Group key={idx}>
            <S.TitleError>* {key}</S.TitleError>

            {errorList[key].fields.map((field, idx) => {
              return (
                <S.TextError key={idx}>- {Object.keys(field)[0]}</S.TextError>
              );
            })}
          </S.Group>
        );
      })}

      <Button
        mt={30}
        title='GoBack to:'
        variantText={`(${errorList[Object.keys(errorList)[0]].navigationName})`}
        onPress={() => navigation.navigate(RedirectToPage)}
      />
    </S.Wrapper>
  );
};

export default Errors;
