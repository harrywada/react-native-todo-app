import {Dimensions, StyleSheet, TextInput, Text, TouchableHighlight, View} from 'react-native';
import  React, {Component} from 'react';

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
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>{this.props.buttonText}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow'
  },
  container: {
    backgroundColor: 'red',
    borderRadius: 5,
    height: height / 8,
    justifyContent: 'center'
  },
  input: {
    height: 20,
    width: 100
  }
});
