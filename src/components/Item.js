import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';

import {completeTodo, deleteTodo, incompleteTodo} from '../actions/actionCreators';

class Container extends Component {
  toggleComplete() {
    if(this.props.complete) {
      this.props.incompleteTodo(this.props.id);
    } else {
      this.props.completeTodo(this.props.id);
    }
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.complete ? '#7fd8be' : '#d7dcdd'}]}>
        <Text style={styles.label}>{this.props.content}</Text>
        <TouchableHighlight
          style={[styles.button, {backgroundColor: this.props.complete ? '#fff' : '#7fd8be'}]}
          onPress={this.toggleComplete.bind(this)}
        >
          <Text style={[styles.completeButtonLabel, {color: this.props.complete ? '#7fd8be' : '#fff'}]}>✓</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, styles.deleteButton]}
          onPress={() => (this.props.deleteTodo(this.props.id))}
        >
          <Text style={styles.deleteButtonLabel}>X</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 30,
    flex: 1,
    height: 40,
    justifyContent: 'center',
    marginLeft: 5
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'green',
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
    backgroundColor: '#f45b69',
  },
  label: {
    flex: 5
  }
});

const mapActionsToProps = (dispatch) => ({
  completeTodo(i) {
    return dispatch(completeTodo(i));
  },
  deleteTodo(i) {
    return dispatch(deleteTodo(i));
  },
  incompleteTodo(i) {
    return dispatch(incompleteTodo(i));
  }
});

export const Item = connect(null, mapActionsToProps)(Container);
