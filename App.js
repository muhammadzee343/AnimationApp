import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, Easing} from 'react-native';
import Tinder from './components/tinder';
import {Avatar, Button, Card} from 'react-native-paper';

const mydata = [
  {
    id: 1,
    text: 'card 1',
    uri: 'https://source.unsplash.com/RDcEWH5hS...',
  },
  {id: 2, text: 'card 2', uri: 'https://source.unsplash.com/pJqfhKUpCh8'},
  {
    id: 3,
    text: 'card 3',
    uri: 'https://source.unsplash.com/H601tyBZy...',
  },
  {id: 4, text: 'card 4', uri: 'https://source.unsplash.com/CE9YG0_Mzlw'},
  {id: 5, text: 'card 5', uri: 'https://source.unsplash.com/-_C4UZRpoQc'},
  {id: 6, text: 'card 6', uri: 'https://source.unsplash.com/RfoISVdKM4U'},
];

class App extends Component {
  renderCard(item) {
    return (
      <View>
        <Card>
          <Card.Title title={item.text} />
          <Card.Cover source={{uri: item.uri}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  }

  myRotation() {
    rotate = this.position.x.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    });
    return {
      ...this.position.getLayout(),
      transform: [{rotate: rotate}],
    };

    //use this in constructor
    {
      this.position = new Animated.ValueXY({x: 0, y: 200});
      Animated.timing(this.position, {
        toValue: {x: 300, y: 200},
        duration: 2000,
      }).start();
    }

    // in render function and return
    {
      <Animated.View style={this.myRotation()}>
        <View style={styles.ball}></View>
      </Animated.View>;
    }
  }

  render() {
    return (
      <View>
        <Tinder data={mydata} renderCard={this.renderCard} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 80,
    width: 80,
    backgroundColor: '#403a3a',
    borderRadius: 40,
  },
});

export default App;
