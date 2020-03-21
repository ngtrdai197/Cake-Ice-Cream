import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, Snackbar } from 'react-native-paper';

import { store } from './src/store';
import { AppContainer } from './src/containers';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  store.subscribe(() => {
    setVisible(store.getState().snackBar.visible);
    setText(store.getState().snackBar.text);
  });

  return (
    <Provider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <AppContainer />
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            duration={1000}
            action={{
              label: 'Close',
              onPress: () => {
                // Do something
                setVisible(false);
              }
            }}
          >
            {text}
          </Snackbar>
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
