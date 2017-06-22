import  React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import {deleteTodo} from '../actions/actionCreators';

import {Item} from './Item';

export class Container extends Component {
  static defaultProps = {
    items: []
  }

  render() {
    console.log(this.props.items);
    return (
      <View style={styles.container}>
        {this.props.items.map((item, i) => (
          <Item key={i} id={item.id} content={item.todo} handleDelete={this.props.deleteTodo} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  }
});

const mapActionsToProps = (dispatch) => ({
  deleteTodo(i) {
    console.log('i: ' + i);
    return dispatch(deleteTodo(i));
  }
});

const mapStateToProps = (state) => ({
  items: state.todos
});

export const List = connect(mapStateToProps, mapActionsToProps)(Container);
