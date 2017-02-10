'use strict';

import React, { Component, PropTypes } from 'react'

import {
  View,
  Text
} from 'react-native';

export default class ProductRow extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

module.exports = ProductRow;
