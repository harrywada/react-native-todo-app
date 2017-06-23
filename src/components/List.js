import  React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import {deleteTodo} from '../actions/actionCreators';

import {Item} from './Item';

export class Container extends Component {
  static defaultProps = {
    items: []
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.items.map((item, i) => (
            <Item key={i} id={item.id} content={item.todo} handleDelete={this.props.deleteTodo} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#456990',
    borderRadius: 20,
    flex: 9,
    flexDirection: 'column',
    padding: 10
  }
});

const mapActionsToProps = (dispatch) => ({
  deleteTodo(i) {
    return dispatch(deleteTodo(i));
  }
});

const mapStateToProps = (state) => ({
  items: state.todos
});

export const List = connect(mapStateToProps, mapActionsToProps)(Container);
