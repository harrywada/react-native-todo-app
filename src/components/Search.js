import {StyleSheet, TextInput, Text, TouchableHighlight, View} from 'react-native';
import React, {Component} from 'react';

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
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonLabel: {
    color: '#fff',
    fontSize: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#7fd8be',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: '#f45b69',
    borderRadius: 20,
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
    padding: 10
  },
  form: {
    backgroundColor: '#d7dcdd',
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10
  },
  input: {
    borderWidth: 0,
    flex: 5,
    fontSize: 20
  }
});
