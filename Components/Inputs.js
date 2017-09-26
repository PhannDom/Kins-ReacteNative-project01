import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      title: '',
      body: '',

      data: ''
   }
   handleTitle = (text) => {
      this.setState({ title: text })
   }
   handleBody = (text) => {
      this.setState({ body: text })
   }
   login = (title, body) => {
      alert('title: ' + title + ' body: ' + body)
   }
   componentDidMount = (title, body) => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
            userId: 10,
            id: 100,
            title: title,
            body: body
         })
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         
         this.setState({
            data: responseJson,

         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render(){
      return (
         <View style = {styles.container}>
            <Text style={styles.id}>    Add Product</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Title"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleTitle}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Body"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleBody}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {this.componentDidMount(this.state.title, this.state.body), this.login(this.state.title, this.state.body)} 
               }>
               <Text style = {styles.submitButtonText}> Add </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      alignItems:"center"
   },
   id :{color:"blue", fontSize:50, alignItems:"center"},
})

var ao = StyleSheet.create({
   touch : {flex:1, alignItems:"center", borderWidth:2, borderColor: "red"},
   view :{flex:1, backgroundColor:"white", alignItems:"center"},
   id :{color:"red", fontSize:20},
   title :{color:"blue", fontSize:25},
   body :{color:"black", fontSize:15},
   back:{backgroundColor:"blue", color:"white", width:100, padding:15}
});