import {StyleSheet, TextInput, Text, TouchableHighlight, View} from 'react-native';
import  React, {Component} from 'react';

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
    this.props.handlePress(this.state.value);
    this.setState({
      value: ''
    })
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
  container: {

  },
  input: {
    height: 20,
    width: 100
  }
});
