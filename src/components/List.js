import  React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class List extends Component {
  static defaultProps = {
    items: []
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.items.map((item, i) => (<Text key={i}>{item}</Text>))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});
