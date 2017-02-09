'use strict';

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  PixelRatio
} from 'react-native';

class ProductView extends Component {

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.above}>
        <Image source={{uri: this.props.imageURL}} style={styles.image}/>
        <View style={styles.info}>
          <View style={[styles.aroundSuggestion, {borderColor: this.props.suggestionColor}]}>
            <Text>{this.props.suggestion}</Text>
            <Text>{this.props.circle}</Text>
          </View>
          <Text>
            {this.props.productDescription}
          </Text>
        </View>
      </View>
      <View style={styles.flow}>
        <Text>自从上次发布已经</Text>
        <Text>{this.props.rightRelease[0]}天</Text>
      </View>
      <View style={styles.flow}>
        <Text>平均发布时长</Text>
        <Text>{this.props.rightAverage[0]}天</Text>
      </View>
    </View>)
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },image: {
    flex: 1,
    resizeMode: 'contain',
    margin: 10
  },info: {
    flex: 2,
  },above: {
    flex: 1,
    // flexDirection: 'row',
    // overflow: 'hidden',
    margin: 20
  },aroundSuggestion: {
    flexDirection: 'row',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1 / PixelRatio.get(),
    padding: 5,
    // borderWidth: 1,
  },flow: {
    flexDirection: 'row',
    flex: 1,
  }
});

ProductView.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  suggestion: PropTypes.string.isRequired,
  circle: PropTypes.string.isRequired,
  suggestionColor: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
};

module.exports = ProductView;
