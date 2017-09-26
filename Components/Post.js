import React, {Component} from "react";
import {Text, View, Button} from "react-native";
import Inputs from '../Components/Inputs.js'

class HttpExample02 extends Component {
/*   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
         body: JSON.stringify({
            title: 'yourValue',
            body: 'yourOtherValue',
         })
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }*/
   render() {
      return (
         <Inputs />
      )
   }
}
export default HttpExample02