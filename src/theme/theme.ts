import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    typography: Typography;
  }

  export interface Palette {
    common: CommonOptions;
    primary: PaletteOptions;
    secondary: PaletteOptions;
    error: PaletteOptions;
    text: TextOptions;
  }

  export interface PaletteOptions {
    main: string;
    light: string;
    dark: string;
  }
  export interface CommonOptions {
    black: string;
    white: string;
  }

  export interface TextOptions {
    primary: string;
    secondary: string;
    disabled: string;
  }

  export interface Typography {
    light: string;
    lightItalic: string;
    regular: string;
    regularItalic: string;
    medium: string;
    mediumItalic: string;
    bold: string;
    boldItalic: string;
  }
}

export const theme: DefaultTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fafafa'
    },
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0'
    },

    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2'
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828'
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)'
    }
  },
  typography: {
    light: 'Ubuntu_300Light',
    lightItalic: 'Ubuntu_300Light_Italic',
    regular: 'Ubuntu_400Regular',
    regularItalic: 'Ubuntu_400Regular_Italic',
    medium: 'Ubuntu_500Medium',
    mediumItalic: 'Ubuntu_500Medium_Italic',
    bold: 'Ubuntu_700Bold',
    boldItalic: 'Ubuntu_700Bold_Italic'
  }
};
