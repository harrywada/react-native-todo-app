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
            buttonText='+'
            handlePress={this.props.addTodo}
          />
          <List />
        </View>
      </View>
    )
  }
}

//color scheme: d7cdcc-456990-e4fde1-f45b69-ffffff
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4fde1',
    flex: 1,
    padding: 25,
    paddingTop: 40
  },
  content: {
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
