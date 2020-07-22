import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';

class FlatListComponent extends Component {
  state = {
    students: [
      {name: 'Muhammad'},
      {name: 'Zeeshan'},
      {name: 'Kamran'},
      {name: 'Faizan'},
      {name: 'Rizwan'},
    ],
    refreshing: false,
  };

  handleRefresh() {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.setState({
          students: [...this.state.students, {name: 'Saim'}],
          refreshing: false,
        });
      },
    );
  }

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item) => item.name}
          data={this.state.students}
          renderItem={({item}) => {
            return <Text style={{fontSize: 20}}>{item.name}</Text>;
          }}
          onRefresh={() => this.handleRefresh()}
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }
}
export default FlatListComponent;
