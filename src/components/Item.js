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
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.content}</Text>
        <TouchableHighlight style={styles.deleteButton} onPress={() => (this.props.handleDelete(this.props.id))}>
          <Text style={styles.deleteButtonLabel}>X</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#d7dcdd',
    borderRadius: 30,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    padding: 5,
    paddingLeft: 20,
    marginBottom: 10
  },
  deleteButtonLabel: {
    color: '#fff'
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: '#f45b69',
    borderRadius: 30,
    flex: 1,
    height: 40,
    justifyContent: 'center'
  },
  label: {
    flex: 5
  }
});
