import React, { FC } from 'react';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { useFonts } from '@expo-google-fonts/ubuntu';
import { fontFamily } from './fontFamily';

interface ThemeProps {
  children?: JSX.Element | JSX.Element[];
}

const Theme: FC<ThemeProps> = ({ children }): JSX.Element => {
  let [fontsLoaded] = useFonts(fontFamily);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
