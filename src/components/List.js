import  React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import {Item} from './Item';

export class Container extends Component {
  render() {
    console.log(this.props.items);
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.items.map((item, i) => (
            <Item key={i} id={item.id} complete={item.complete} content={item.todo} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#456990',
    flex: 5
  }
});

const mapStateToProps = (state) => ({
  items: state.todos
});

export const List = connect(mapStateToProps, null)(Container);
