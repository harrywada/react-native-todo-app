import {StyleSheet, TextInput, Text, TouchableHighlight, View} from 'react-native';
import  React, {Component} from 'react';

export class Search extends Component {
  static defaultProps = {
    buttonText: 'SEARCH',
    handlePress: null,
    value: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.props.value} />
        <TouchableHighlight onPress={this.props.handlePress.bind(this)}>
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
    height: 20
  }
});
