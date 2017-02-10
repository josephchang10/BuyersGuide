import React, { Component, } from 'react'
import { View,ProgressViewIOS,Text } from 'react-native'

class ProductProgressRow extends Component {

  render() {
    var dateString = this.props.startString;
    if(this.props.data[2]){
      dateString = dateString + ' ' + this.props.data[2] + ' ' + this.props.secondString;
    }
    
    return (
      <View style={{marginTop: 20,marginLeft: 40,marginRight: 40}}>
        <ProgressViewIOS progress = {this.props.data[1]/100} progressTintColor='#20ADE5' />
        <Text style={{fontSize: 13, color:'#666666', marginTop: 10}}>{dateString + ' ' + this.props.data[0] + ' 天'}</Text>
      </View>
    )
  }
}

export default ProductProgressRow