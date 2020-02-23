/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class MyImage extends Component {
  render () {
    let img = '';
    if (this.props.type === 'one') {
      img = require('./assets/son.jpg');
    } else if (this.props.type === 'two') {
      img = require('./assets/samgyeopsal.jpg');
    }

    return (
      <View>
        <Image source = {img} style={{width:100, height:200}}/>
      </View>
    )
  }
}

const App: () => React$Node = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.hello}>Hello World</Text>
      <MyImage type = 'one'/>
      <MyImage type = 'two'/>
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
