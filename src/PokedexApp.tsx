import 'react-native-gesture-handler';

import {StackNavigator} from './presentation/navigator/StackNavigator';
import {ThemeContextProvider} from './presentation/context/TthemeContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();

export const PokedexApp = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
