import  React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import {Item} from './Item';

export class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.items.map((item, i) => (
<<<<<<< HEAD
            <Item key={i} id={item.id} content={item.todo} handleDelete={this.props.deleteTodo} />
=======
            <Item key={i} id={item.id} complete={item.complete} content={item.todo} />
>>>>>>> master
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

const mapStateToProps = (state) => ({
  items: state.todos
});

export const List = connect(mapStateToProps, null)(Container);
