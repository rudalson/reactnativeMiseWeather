/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

class MyImage extends Component {
  render() {
    let img = '';
    if (this.props.type === 'one') {
      img = require('./assets/son.jpg');
    } else if (this.props.type === 'two') {
      img = require('./assets/samgyeopsal.jpg');
    }

    return (
      <View>
        <Image source={img} style={{width: 100, height: 200}} />
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '손흥민',
    };
  }

  writeTitle = () => {
    this.setState({
      title: '손흥민 부상 심각',
    },function() {
      alert('그래서 큰일입니다')
    });
  };

  writeKeyword = () => {
    this.setState({
      title: '손흥민',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World</Text>
        <MyImage type="one" />

        <Text>{this.state.title}</Text>
        <Button title={'제목 출력'} onPress={this.writeTitle} />
        <Button title={'키워드 출력'} onPress={this.writeKeyword} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: 'red',
  },
});

export default App;
