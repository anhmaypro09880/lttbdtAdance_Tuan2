import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Home extends Component {
   state = {
      myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed '
         
   }
   render() {
      return (
         <View>
            <Text >
               {this.state.myState}
               a
            </Text>
         </View>
      );
   }
}
export default Home;