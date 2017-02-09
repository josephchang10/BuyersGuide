import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  PixelRatio
} from 'react-native';
import FitImage from 'react-native-fit-image';

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1 / PixelRatio.get(),
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'center',
    margin: 20,
  },
  info: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20,
  },
  suggestion: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333333',
    fontWeight: "100",
  },
  content: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#999999',
    fontWeight: "100",
  }
});

export default class ProductItem extends Component {
  render() {
    return (
      <View style={styles.productItem}>
        <FitImage style={styles.image} source={{uri: this.props.imageURL}}/>
        <View style={styles.info}>
          <Text style={[styles.suggestion, this.props.specificStyle]}>{this.props.suggestion}</Text>
          <Text style={styles.content}>{this.props.content}</Text>
        </View>
      </View>
    )
  }
}

ProductItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  suggestion: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

module.exports = ProductItem;
