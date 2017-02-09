/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS,
  ActivityIndicator,
  SegmentedControlIOS
} from 'react-native';

import ProductItem from './ProductItem' //cell
var ProductView = require('./ProductView'); //detail view controller

export default class BuyersGuide extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ProductList,
          title: '来自 MacRumors 的购买指南',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class ProductList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      isLoading: true,
      selectedIndex: 0,
      buyersProducts: [],
    };
    this.loadData();
  }
  loadData() {
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fbuyersguide.macrumors.com%2F%22%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22contentContainer%22%5D'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
      .then((response) => response.json())
      .then((responseJSON) => {
        var buyersProducts = responseJSON.query.results.div.div[2].div;
        console.log(buyersProducts[0].ul);
        this.setState({buyersProducts: buyersProducts, dataSource: this.state.dataSource.cloneWithRows(buyersProducts[0].ul.li), isLoading: false});
      });
  }
  _renderRow(rowData) {
    var suggestion = '';
    var style = {};
    switch(rowData.class) {
      case 'neutral':
        suggestion = '可以买';
        break;
      case 'yellow':
        suggestion = '谨慎购买';
        style = {
          color: '#FFC125',
        }
        break;
      case 'red':
        suggestion = '别买';
        style = {
          color: '#AA0D23',
        }
        break;
      case 'green':
        suggestion = '快买';
        style = {
          color: '#66BC00',
        }
        break;
      default:
        suggestion = rowData.class;
        break;
    }
    return <ProductItem imageURL={'https:'+ rowData.a.img.src}
    content={rowData.a.content}
    suggestion={suggestion}
    specificStyle={style}/>;
  }
  _renderHeader() {
    var header = this.state.isLoading ? ( <ActivityIndicator
      size='large'
      color="gray"
      style={styles.top}/> ) : (<SegmentedControlIOS
        values={['iPhone / iPad / iPod', 'Mac', '其它']}
        selectedIndex={this.state.selectedIndex}
        onChange={(event) => {
          this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex, dataSource: this.state.dataSource.cloneWithRows(this.state.buyersProducts[event.nativeEvent.selectedSegmentIndex].ul.li)});
        }}
        style={{marginLeft: 20,
        marginRight: 20,marginTop: 10}}
      />) ;
    return header;
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderHeader={this._renderHeader.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },top: {
    marginTop: 20,
  }, yellow: {
    color: '#FFC125',
  }
});

AppRegistry.registerComponent('BuyersGuide', () => BuyersGuide);
