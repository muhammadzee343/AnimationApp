import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

class StateManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: 'dum',
      sname: 'def',
      email: '',
      fname1: 'ali',
      sname1: '',
    };
  }

  changestate = () => {
    this.setState({
      fname1: this.state.fname,
      sname: this.state.sname1,
    });
  };
  render() {
    return (
      <View>
        <Text>{this.state.fname1}</Text>
        <Text>{this.state.sname}</Text>
        <TextInput
          placeholder="Fname"
          onChangeText={(value) => this.setState({fname: value})}
        />
        <TextInput
          placeholder="Lname"
          onChangeText={(val) => this.setState({sname1: val})}
        />
        <Button onPress={this.changestate}>Change Done</Button>
      </View>
    );
  }
}

export default StateManage;
