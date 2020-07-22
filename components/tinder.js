import React, {Component} from 'react';
import {
  View,
  PanResponder,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';

const screen_width = Dimensions.get('window').width;

const swipe_limit = screen_width / 3;

class Tinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateIndex: 0,
    };

    const position = new Animated.ValueXY();

    this.mypanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gstur) => {
        position.setValue({x: gstur.dx, y: gstur.dy});
      },
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx > swipe_limit) {
          this.swiped('right');
        } else if (gesture.dx < -swipe_limit) {
          this.swiped('left');
        } else {
          this.resetPosition();
        }
      },
    });

    this.position = position;
  }

  swiped(diraction) {
    const X = diraction === 'right' ? screen_width * 3 : -screen_width * 3;
    Animated.timing(this.position, {
      toValue: {x: X, y: 0},
    }).start(() => {
      this.position.setValue({x: 0, y: 0});
      this.setState({stateIndex: this.state.stateIndex + 1});
    });
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
    if (this.state.stateIndex >= this.props.data.length) {
      return this.props.renderNoCard();
    }

    return this.props.data
      .map((item, index) => {
        if (index < this.state.stateIndex) {
          return null;
        }

        if (index === this.state.stateIndex) {
          return (
            <Animated.View
              style={[this.myCardStyle(), styles.cardstyle]}
              {...this.mypanResponder.panHandlers}>
              {this.props.renderCard(item)}
            </Animated.View>
          );
        }
        return (
          <View style={[styles.cardstyle, {top: 10 * index}]}>
            {this.props.renderCard(item)}
          </View>
        );
      })
      .reverse();
  }

  render() {
    return <View>{this.rendercard()}</View>;
  }
}

const styles = StyleSheet.create({
  cardstyle: {
    position: 'absolute',
    zIndex: 1,
    width: screen_width,
  },
});

export default Tinder;
