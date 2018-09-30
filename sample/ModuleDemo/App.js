import React from 'react';
import { StyleSheet, View } from 'react-native';
import CodeView from 'react-native-component-kit';

export default class App extends React.Component {
  render() {
    const code = "console.log('This is a module usage demo');";

    return (
      <View style={styles.container}>
        <CodeView code={code} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
