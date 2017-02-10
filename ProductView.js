'use strict';

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  PixelRatio,
  ListView
} from 'react-native';

import ProductRow from './ProductRow';
import ProductImageRow from './ProductImageRow';
import ProductProgressRow from './ProductProgressRow';

class ProductView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var rows = [0,1,2];
      for(var i=0;i<this.props.recentReleases.length;i++){
        rows.push(i+3);
      }
    this.state = {
      dataSource: ds.cloneWithRows(rows),
    };
  }

  _renderRow(rowData) {
    
    switch(rowData){
      case 0:
        return(
          <ProductImageRow imageURL = {this.props.imageURL} suggestion = {this.props.suggestion} circle = {this.props.circle} description = {this.props.productDescription} 
            suggestionColor = {this.props.suggestionColor}/>
        );
        break;
      case 1:
        return(
          <ProductProgressRow data = {this.props.rightRelease} startString='最近一次发布于' secondString='已经过去'/>
        );
        break;
      case 2:
        return(
          <ProductProgressRow data = {this.props.rightAverage} startString='平均发布周期'/>
        );
        break;
      default:
        return(
          <ProductProgressRow data = {this.props.recentReleases[rowData-3]} startString='历史发布于' secondString='历时'/>
        );
        break;
    }
  }

  render(){
    return(
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow.bind(this)}
        style= {{marginBottom: 20}}
      />
  )}
}

var styles = StyleSheet.create({
  image: {
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
