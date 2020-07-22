import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, Easing, Image} from 'react-native';
import Tinder from './components/tinder';
import {Avatar, Button, Card} from 'react-native-paper';
import StateMan from './components/stateManagement';

const mydata = [
  {id: 1, text: 'card 1', uri: 'https://source.unsplash.com/pJqfhKUpCh8'},
  {id: 2, text: 'card 2', uri: 'https://source.unsplash.com/pJqfhKUpCh8'},
  {id: 3, text: 'card 3', uri: 'https://source.unsplash.com/pJqfhKUpCh8'},
  {id: 4, text: 'card 4', uri: 'https://source.unsplash.com/pJqfhKUpCh8'},
  {id: 5, text: 'card 5', uri: 'https://source.unsplash.com/pJqfhKUpCh8'},
  {id: 6, text: 'card 6', uri: 'https://source.unsplash.com/pJqfhKUpCh8'},
];

class App extends Component {
  renderCard(item) {
    return (
      <View key={item.id}>
        <Card style={{marginBottom: 15}}>
          <Card.Title title={item.text} />
          <Image source={{uri: item.uri}} style={{height: 200}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  }

  renderNoCard() {
    return (
      <View>
        <Card style={{marginBottom: 15}}>
          <Card.Title title="there is no card in list" />
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
      <Tinder
        data={mydata}
        renderCard={this.renderCard}
        renderNoCard={this.renderNoCard}
      />
      //<StateMan />
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
  cardstyle: {
    position: 'absolute',
  },
});

export default App;
