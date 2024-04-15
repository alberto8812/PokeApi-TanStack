import {PropsWithChildren, createContext} from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {PaperProvider, adaptNavigationTheme} from 'react-native-paper';

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const ThemeContext = createContext({
  isDark: false,
  theme: LightTheme,
});

export const ThemeContextProvider = ({children}: PropsWithChildren) => {
  const colorSchema = useColorScheme();
  const isDarkThema = colorSchema === 'dark';
  const theme = isDarkThema ? DarkTheme : LightTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <ThemeContext.Provider
        value={{
            isDark:isDarkThema,
            theme:theme
        }}
        
        >
            {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};
