/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.hello}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center'
  },
  hello : {
    color : 'red'
  }
});

export default App;
