'use strict';

import React, { Component, PropTypes } from 'react'

import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';

export default class ProductImageRow extends Component {
  
  translate(origin) {
    switch(origin){
      case ' Just Updated':
        return '刚刚更新';
        break;
      case ' Mid-product Cycle':
        return '产品周期中段';
        break;
      case ' Approaching End of Cycle':
        return '接近周期结束';
        break;
      case ' Updates Soon':
        return '即将更新';
        break;
      case "Apple's 13 and 15-inch Retina MacBook Pros are the company's top-tier portable machines, and a major update arrived Thursday, October 27, 2016 with a thinner body and a OLED touch panel with Touch ID functionality.":
        return '苹果的 13 和 15 英寸 Retina MacBook Pro 是公司的顶级便携式机器，并且在 2016年 10 月 27 日发布了一次重大更新，一个更薄的机身和带有 Touch ID 功能的 OLED触摸面板。';
        break;
      case "The 12-inch MacBook is Apple's newest notebook, even thinner than the MacBook Air, with an Intel Core M processor, a Retina display, USB-C, and a revamped trackpad. The MacBook was updated with Intel's Skylake processors and a new Rose Gold color option on April 19, 2016.":
        return '12 英寸的 MacBook 是苹果最新的笔记本，甚至比 MacBook Air 还要薄，带有一颗 Intel Core M 处理器，一块视网膜屏幕，USB-C，以及一块改进版的触摸板。MacBook 已于 2016 年 4 月 19 日更新为英特尔的 Skylake 处理器和增加了全新的玫瑰金颜色。';
        break;
      case "Apple Watch Series 2 launched on September 16, 2016 with GPS, 50-meter water resistance with swimming support, a brighter display, and a faster processor. New band options could arrive in the spring of 2017, but a more substantial upgrade isn't expected until the fall.":
        return 'Apple Watch Series 于 2016 年 9 月 16 日推出，带有GPS、50米防水性游泳支持、更亮的显示屏和更快的处理器。新的表带选择可能在 2017 年春季推出，但是在秋天之前不会有更大幅度的升级。';
        break;
      case "Apple's long-awaited fourth-generation Apple TV features an A8 processor and 32 to 64GB of storage, along with a touch-based remote control that doubles as a gaming controller. It has a brand new operating system, \"tvOS,\" which includes deep Siri integration and a full App Store.":
        return '苹果期待已久的第四代 Apple TV 配备A8处理器和32到64GB的存储空间，以及一个触摸式遥控器，可兼作游戏控制器。它有一个全新的操作系统“tvOS”，其中包括深度Siri集成和一个完整的App Store。';
        break;
      default:
        return origin;
        break;
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: this.props.imageURL}}/>
        <Text style={[styles.suggestion, styles.centerText, {color: this.props.suggestionColor}]}>{this.props.suggestion}</Text>
        <Text style={[styles.centerText, styles.circle, {color: this.props.suggestionColor}]}>{this.translate(this.props.circle)}</Text>
        <Text style={[styles.centerText, styles.description]}>{this.translate(this.props.description)}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
//     alignItems: 'center'
  },
  image: {
    flex: 1,
    height: 200,
    resizeMode: 'contain',
  }, suggestion: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
  }, centerText: {
    alignSelf: 'center',
  }, description: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#999999',
    fontSize: 12,
    lineHeight: 20,
  }, circle: {
    fontSize: 14,
  }
});

ProductImageRow.propTypes = {
  imageURL: PropTypes.string.isRequired,
}
module.exports = ProductImageRow;
