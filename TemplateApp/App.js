import React from 'react';
import Home from './src/screens/Home';
import { StatusBar, SafeAreaView } from 'react-native';
import Header from './src/component/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as NativeThemeProvider} from 'react-native-paper';

function App() {
  return (
    <NativeThemeProvider>
      <SafeAreaProvider style={{ backgroundColor: "white" }}>
        <SafeAreaView>
          <StatusBar
            barStyle={'default'}
          />
          <Header />
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeThemeProvider>
  );
};

export default App;
