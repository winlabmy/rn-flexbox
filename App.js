import React, { Component } from "react";
import { StyleSheet, View} from 'react-native';

export default class FlextDirectionBasic extends Component{
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.powderblue}></View>
        <View style={styles.skyblue}></View>
        <View style={styles.steelblue}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'space-between'
  },
  powderblue: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },
  skyblue: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue'
  },
  steelblue: {
    width: 50,
    height: 50,
    backgroundColor: 'steelblue'
  }
});