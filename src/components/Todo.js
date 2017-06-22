import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {createTodo} from '../actions/actionCreators';

import {List} from './List';
import {Search} from './Search';

class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Search
            buttonText='ADD'
            handlePress={this.props.addTodo}
          />
          <List />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4fde1',
    flex: 1,
    padding: 25
  },
  content: {
    backgroundColor: 'green',
    flex: 1
  }
});

const mapActionsToProps = (dispatch) => ({
  addTodo(todo) {
    return dispatch(createTodo(todo));
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
});

export const Todo = connect(mapStateToProps, mapActionsToProps)(Container);
