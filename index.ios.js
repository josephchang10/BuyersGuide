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
  SegmentedControlIOS,
  TouchableHighlight
} from 'react-native';

import ProductItem from './ProductItem' //cell
import ProductView from './ProductView' //detail view controller

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
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fbuyersguide.macrumors.com%2F%22%20and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22guide%20ios%22%5D%7C%2F%2Fdiv%5B%40class%3D%22guide%20mac%22%5D%7C%2F%2Fdiv%5B%40class%3D%22guide%20other%22%5D'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
      .then((response) => response.json())
      .then((responseJSON) => {
        var allDiv = responseJSON.query.results.div;
        var buyersProducts = [];
        for (i=0;i<3;i++) {
          buyersProducts.push([]);
        }
        for (i in allDiv) {
          var div = allDiv[i];
          console.log('div class', div);
          switch(div.class){
            case 'guide ios':
            buyersProducts[0].push(div);
            break;
            case 'guide mac':
            buyersProducts[1].push(div);
            break;
            case 'guide other':
            buyersProducts[2].push(div);
            break;
            default:
            break;
          }
        }
        this.setState({buyersProducts: buyersProducts, dataSource: this.state.dataSource.cloneWithRows(buyersProducts[0]), isLoading: false});
      });
  }
  translateSuggestion(origin) {
    var suggestion = '';
    var color = '#333333';
    switch(origin) {
      case 'Neutral':
        suggestion = '可以买';
        break;
      case 'Caution':
        suggestion = '谨慎购买';
        color= '#FFC125';
        break;
      case "Don't Buy":
        suggestion = '别买';
        color= '#AA0D23';
        break;
      case 'Buy Now':
        suggestion = '快买';
        color= '#66BC00';
        break;
      default:
        suggestion = rowData.class;
        break;
    }
    return [suggestion, color];
  }
  _renderRow(rowData) {
    var [suggestion, color] = this.translateSuggestion(rowData.div[0].div.div[0].div[1].div.strong);
    return (<TouchableHighlight onPress={() => this.rowPressed(rowData)}
        underlayColor='#dddddd'>
            <ProductItem imageURL={'https:'+ rowData.div[0].div.div[0].div[0].div.img.src}
              content={rowData.div[0].div.div[0].div[1].h2.a.content}
              suggestion={suggestion}
              specificStyle={{color: color}}/>
            </TouchableHighlight>);
  }
  _renderHeader() {
    var header = this.state.isLoading ? ( <ActivityIndicator
      size='large'
      color="gray"
      style={styles.top}/> ) : (<SegmentedControlIOS
        values={['iPhone / iPad / iPod', 'Mac', '其它']}
        selectedIndex={this.state.selectedIndex}
        onChange={(event) => {
          this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex, dataSource: this.state.dataSource.cloneWithRows(this.state.buyersProducts[event.nativeEvent.selectedSegmentIndex])});
        }}
        style={{marginLeft: 20,
        marginRight: 20,marginTop: 10}}
      />) ;
    return header;
  }
  rowPressed(rowData) {
    var [suggestion, color] = this.translateSuggestion(rowData.div[0].div.div[0].div[1].div.strong);
    var rightReleaseCount = rowData.div[0].div.div[1].div[1].div.div[0].span.content;
    var rightReleaseDate = rowData.div[0].div.div[1].div[1].div.div[1].a.content;
    var rightReleaseProgress = parseFloat(rowData.div[0].div.div[1].div[1].div.div[2].div.style.replace( /[^\d\.]*/g, ''));
    var rightRelease = [rightReleaseCount, rightReleaseProgress, rightReleaseDate];
    var rightAverageCount = rowData.div[0].div.div[2].div[1].div[1].span.content;
    var rightAverageProgress = parseFloat(rowData.div[0].div.div[2].div[1].div[0].div.style.replace( /[^\d\.]*/g, ''));
    var rightAverage = [rightAverageCount, rightAverageProgress];
    var recentReleasesDiv = rowData.div[0].div.div[3].div[1].div;
    var recentReleases = [];
    for(i in recentReleasesDiv) {
      var div = recentReleasesDiv[i];
      recentReleases.push([div.div[0].content,div.div[2].div.style.replace( /[^\d\.]*/g, ''),div.div[1].a.content]);
    }
    console.log('recent', recentReleases);
    this.props.navigator.push({
      title: rowData.div[0].div.div[0].div[1].h2.a.content,
      component: ProductView,
      passProps: {imageURL: 'https:'+ rowData.div[0].div.div[0].div[0].div.img.src, name:rowData.div[0].div.div[0].div[1].h2.a.content, suggestion:suggestion, circle:rowData.div[0].div.div[0].div[1].div.content, suggestionColor: color, productDescription:rowData.div[0].div.div[0].div[1].ul.li, rightRelease: rightRelease, rightAverage: rightAverage, recentReleases: recentReleases}
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
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
