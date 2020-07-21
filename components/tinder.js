import React, {Component} from 'react';
import {View, PanResponder, Animated, Dimensions} from 'react-native';

const screen_width = Dimensions.get('window').width;

class Tinder extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    this.mypanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gstur) => {
        position.setValue({x: gstur.dx, y: gstur.dy});
      },
      onPanResponderRelease: () => {
        this.resetPosition();
      },
    });

    this.position = position;
  }

  resetPosition() {
    Animated.spring(this.position, {
      toValue: {x: 0, y: 0},
    }).start();
  }

  myCardStyle() {
    const myrotate = this.position.x.interpolate({
      inputRange: [-screen_width, 0, screen_width],
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {
      ...this.position.getLayout(),
      transform: [{rotate: myrotate}],
    };
  }

  rendercard() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            style={this.myCardStyle()}
            {...this.mypanResponder.panHandlers}>
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.rendercard()}</View>;
  }
}

export default Tinder;
