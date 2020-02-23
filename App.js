/**
 * Sample React Native App
 * https://github.com/rudalson/reactnativeMiseWeather
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
    });
  };

  writeKeyword = () => {
    this.setState({
      title: '손흥민',
    });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <MyImage type="one" />
          <View style={{flexDirection: 'column'}}>
            <Text>{this.state.title}</Text>
          </View>
        </View>
        <View style={{margin: 10, flexDirection: 'row'}}>
          <Button title={'제목 출력'} onPress={this.writeTitle} />
          <Button title={'키워드 출력'} onPress={this.writeKeyword} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
  },
});

export default App;
