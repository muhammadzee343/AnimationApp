import React, {Component} from 'react';
import {View, PanResponder, Animated} from 'react-native';

class Tinder extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    this.mypanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gstur) => {
        position.setValue({x: gstur.dx, y: gstur.dy});
      },
      onPanResponderRelease: () => {},
    });

    this.position = position;
  }

  rendercard() {
    return this.props.data.map((item) => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <Animated.View
        style={this.position.getLayout()}
        {...this.mypanResponder.panHandlers}>
        {this.rendercard()}
      </Animated.View>
    );
  }
}

export default Tinder;
