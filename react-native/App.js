import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import { store } from './src/store';
import { AppContainer, SnackBar } from './src/containers';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <AppContainer />
          <SnackBar />
        </View>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
