import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const {height, width} = Dimensions.get('window');

export class Item extends Component {
  static defaultProps = {
    content: '',
    handleDelete: null,
    id: -1
  }

  render() {
    return (
      <View>
        <Text>{this.props.content}</Text>
        <TouchableHighlight onPress={() => (this.props.handleDelete(this.props.id))}>
          <Text>X</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flex: 1
  },
  label: {
    flex: 5
  }
});
