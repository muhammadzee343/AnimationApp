import React, {Component} from 'react';
import {View} from 'react-native';

class Tinder extends Component {
  rendercard() {
    return this.props.data.map((item) => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.rendercard()}</View>;
  }
}

export default Tinder;
