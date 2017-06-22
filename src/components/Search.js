import {Dimensions, StyleSheet, TextInput, Text, TouchableHighlight, View} from 'react-native';
import React, {Component} from 'react';

const {height, width} = Dimensions.get('window');

export class Search extends Component {
  static defaultProps = {
    buttonText: 'SEARCH',
    handlePress: null
  }

  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handlePress(){
    if(this.state.value){
      this.props.handlePress(this.state.value);
      this.setState({
        value: ''
      })
    }
  }

  setValue(text) {
    this.setState({
      value: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          onChangeText={(text) => this.setValue(text)}
          value={this.state.value}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handlePress.bind(this)}
        >
          <Text style={styles.buttonLabel}>{this.props.buttonText}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonLabel: {
    color: '#e4fde1'
  },
  button: {
    backgroundColor: '#6b2737',
    flex: 2,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: '#f45b69',
    flexDirection: 'row',
    flex: 1,
    padding: 10
  },
  input: {
    flex: 3
  }
});
