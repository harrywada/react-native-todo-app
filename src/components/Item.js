import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

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

  }
});
