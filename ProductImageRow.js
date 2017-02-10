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
    console.log('is going to translate' + origin);
    switch(origin){
      case ' Just Updated':
        return '刚刚更新';
        break;
      case ' Mid-product Cycle':
        return '产品周期中段';
        break;
      case ' Price Cut Only':
        return '只是降价';
        break;
      case ' Storage Bump Only':
        return '只是容量加大';
        break;
      case ' Approaching End of Cycle':
        return '接近周期结束';
        break;
      case ' Updates Soon':
        return '即将更新';
        break;
      case ' Old, But Updates Unlikely':
        return '老款，应该不会再更新了';
        break;
      case "The iPhone 7 and 7 Plus are Apple's newest iPhones, with significant camera improvements, a new glossy black color, better battery life, faster processors, and improved water resistance implemented through a click-less haptic home button and no headphone jack. The new iPhones launched on September 16, 2016.":
        return 'iPhone 7 和 7 plus 是苹果最新的 iPhone，带来显著的相机改进，新的亮黑色，更佳的电池寿命，更快的处理器，通过采用不用点击的触摸 home 键和取消耳机插孔实现了更好的防水性。';
        break;
      case "Apple introduced a new 9.7-inch iPad Pro at its media event on March 21, 2016, wth a launch following on March 31. The smaller iPad Pro replaces the previous iPad Air line and adopts many of the features from the larger iPad Pro such as Apple Pencil and Smart Keyboard support, a four-speaker design, and more. On September 7, 2016, Apple reduced prices by up to $100 on 128 GB and 256 GB models.":
        return '苹果在 2016 年 3 月 21 日的媒体活动上推出了一款新的 9.7 英寸 iPad Pro，并于 3 月 31 日发售。较小的 iPad Pro 取代了以前的 iPad Air 系列，并采用了大款的 iPad Pro 的许多特色，如支持 Apple Pencil 和 Smart Keyboard，四扬声器设计等。2016 年 9 月 7 日，苹果在 128 GB 和 256 GB 机型上降价高达 100 美元。';
        break;
      case "The iPad mini 4 launched in September 2015 and features an iPad Air 2-style redesign, making it thinner and lighter. It includes an A8 processor and improved rear and front-facing cameras. Pricing starts at $399 with both Wi-Fi and LTE models available. Apple increased storage capacities on September 7, 2016, but no other changes were made.":
        return 'iPad mini 4 于 2015 年 9 月推出，具有 iPad Air 2 风格的新设计，使其更薄更轻。它包括一个 A8 处理器和改进的后置和前置摄像头。 Wi-Fi 和 LTE 型号的售价均为 399 美元。苹果在 2016 年 9 月 7 日增加了存储容量，但没有进行其他更改。';
        break;
      case "The 12.9-inch iPad Pro is Apple's largest iPad yet, with a 2732 x 2048 resolution display, a powerful A9X processor, a super slim design, and a four-speaker audio system. The iPad Pro also introduces support for the Apple Pencil stylus and includes a magnetic Smart Connector for interfacing with keyboards and other accessories. On September 7, 2016, Apple reduced prices by up to $100 on 128 GB and 256 GB models.":
        return '12.9 英寸 iPad Pro 是苹果目前最大的 iPad，拥有 2732 x 2048 分辨率的显示屏，强大的 A9X 处理器，超薄设计和四扬声器音频系统。iPad Pro 还加入了对 Apple Pencil 触控笔的支持，并包括一个磁性智能连接器，用于连接键盘和其他配件。2016 年 9 月 7 日，苹果在 128 GB 和 256 GB 机型上降价高达 100 美元。';
        break;
      case "The iPod touch is Apple's only iPod running iOS, offering access to the App Store and the same 4-inch Retina display found on the company's iPhone 5 and 5s. The iPod touch was updated on July 15, 2015 with new colors, an A8 chip with M8 motion coprocessor for fitness tracking, a new 128 GB storage tier, and an improved 8-megapixel rear camera.":
        return 'iPod touch 是苹果公司唯一运行 iOS 的 iPod，可以访问 App Store，和 iPhone 5 和 5s 上的 4 英寸 Retina 显示屏相同。iPod touch 于 2015 年 7 月 15 日更新了颜色，配备 M8 运动协处理器的 A8 芯片、用于健身跟踪，新的 128 GB 存储空间和改进的 800 万像素后置摄像头。';
        break;
      case "The iPod nano saw its last significant update in September 2012, with several color updates since that time. The most recent color update came on July 15, 2015, with the iPod nano now available in space gray, silver, gold, pink, blue, and red.":
        return 'iPod nano 在 2012 年 9 月进行了最后一次重大更新，带有多个新颜色。最新的颜色于 2015 年 7 月 15 日发布，iPod nano 现在提供太空灰，银色，金色，粉红色，蓝色和红色。';
        break;
      case "At $49, the clip-on 2 GB iPod shuffle is Apple's cheapest and smallest iPod model. Aside from changes to color options, the iPod shuffle has not been updated since September 2010, with the most recent color update coming on July 15, 2015.":
        return '夹式 2 GB iPod shuffle 是苹果的最便宜和最小的 iPod型号，只要 49 美元。除了增加颜色选择，iPod shuffle 自 2010 年 9 月以来从未更新，最新的颜色更新将于 2015 年 7 月 15 日更新。';
        break;
      case "Apple's 13 and 15-inch Retina MacBook Pros are the company's top-tier portable machines, and a major update arrived Thursday, October 27, 2016 with a thinner body and a OLED touch panel with Touch ID functionality.":
        return '苹果的 13 和 15 英寸 Retina MacBook Pro 是公司的顶级便携式机器，并且在 2016年 10 月 27 日发布了一次重大更新，一个更薄的机身和带有 Touch ID 功能的 OLED触摸面板。';
        break;
      case "The 12-inch MacBook is Apple's newest notebook, even thinner than the MacBook Air, with an Intel Core M processor, a Retina display, USB-C, and a revamped trackpad. The MacBook was updated with Intel's Skylake processors and a new Rose Gold color option on April 19, 2016.":
        return '12 英寸的 MacBook 是苹果最新的笔记本，甚至比 MacBook Air 还要薄，带有一颗 Intel Core M 处理器，一块视网膜屏幕，USB-C，以及一块改进版的触摸板。MacBook 已于 2016 年 4 月 19 日更新为英特尔的 Skylake 处理器和增加了全新的玫瑰金颜色。';
        break;
      case "Apple's iMac is an ultra-thin all-in-one desktop computer, available in 21.5- and 27-inch sizes with an array of build-to-order upgrades. The iMac family was updated on October 13, 2015 to an all-Retina lineup for the 27-inch models, while the 21.5-inch lineup received its first 4K Retina display as a high-end option.":
        return '苹果的 iMac 是一款超薄的一体机，有 21.5 和 27 英寸，并可在订购时单独升级某个硬件。iMac 27 寸系列在 2015 年 10 月 13 日更新为全视网膜屏，而 21.5 英寸系列产品的高配版首次获得 4K Retina 显示屏。';
        break;
      case "With the introduction of new MacBook Pro models on October 27, 2016, the MacBook Air lineup has been reduced to only 13-inch models that have not been significantly updated since March 2015. The  ultra-portable notebook computers offer Intel Broadwell processors and Thunderbolt 2 connectivity. On April 19, 2016, the base 13-inch model was updated with 8GB RAM as a standard option.":
        return '在 2016 年 10 月 27 日推出新 MacBook Pro 机型的同时，MacBook Air 系列已经缩减到仅有 13 寸机型，自 2015 年 3 月以来就没有大幅更新了。这个超便携式笔记本电脑提供英特尔 Broadwell 处理器和 Thunderbolt 2 连接。 2016年4月19日，13 英寸标配型号更新为 8GB 内存。';
        break;
      case "Less powerful than other Apple desktop offerings like the iMac and the Mac Pro, the Mac mini is Apple's most affordable and compact desktop computer that's billed as a \"bring your own display, keyboard, and mouse\" device. It was updated on October 16, 2014, adding Haswell processors, 802.11ac Wi-Fi, PCIe-based flash storage in some models, and Thunderbolt 2. ":
        return '比起其他苹果功能更为强大的桌面产品（如 iMac 和 Mac Pro ），Mac mini 是苹果最实惠，紧凑的台式电脑，它被称为“需要自己准备显示屏，键盘和鼠标”的设备。它于 2014 年 10 月 16 日更新，增加了 Haswell 处理器，802.11ac Wi-Fi，某些型号的 PCIe-based 闪存存储器和 Thunderbolt 2。';
        break;
      case "Apple's radically redesigned pro desktop launched on December 19, 2013, bringing Intel's Ivy Bridge E Xeon processors, dual AMD FirePro graphics chips, and fast PCI Express-based flash storage. ":
        return '苹果彻底重新设计的专业台式机在 2013 年 12 月 19 日推出，带来了英特尔的 Ivy Bridge E Xeon 处理器，双 AMD FirePro 显卡芯片和快速的 PCI Express-based 的闪存存储。';
        break;
      case "Apple Watch Series 2 launched on September 16, 2016 with GPS, 50-meter water resistance with swimming support, a brighter display, and a faster processor. New band options could arrive in the spring of 2017, but a more substantial upgrade isn't expected until the fall.":
        return 'Apple Watch Series 于 2016 年 9 月 16 日推出，带有GPS、50米防水性游泳支持、更亮的显示屏和更快的处理器。新的表带选择可能在 2017 年春季推出，但是在秋天之前不会有更大幅度的升级。';
        break;
      case "Apple's long-awaited fourth-generation Apple TV features an A8 processor and 32 to 64GB of storage, along with a touch-based remote control that doubles as a gaming controller. It has a brand new operating system, \"tvOS,\" which includes deep Siri integration and a full App Store. ":
        return '苹果备受瞩目的第四代 Apple TV 配备了 A8 处理器和 32 到 64GB 的存储空间，以及一个触摸式遥控器，可兼作游戏控制器。它有一个全新的操作系统 “tvOS”，其中包括深度 Siri 集成和一个完整的 App Store。';
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
    marginLeft: 20,
    marginRight: 20,
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
