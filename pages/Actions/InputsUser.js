import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import createUser from './CreateUser.js'

class InputsUser extends Component {
    state = {
      name: '',
   }
   handleName = (text) => {
      this.setState({ name: text })
   }

   login = (name) => {

      var data = {
         "name": name
      };

      createUser(data)
      //alert(data)
      alert('name: ' + name)
   }

   render(){
      return (
         <View style = {styles.container}>
            <Text style={styles.id}>   Add User</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.name) 
               }>
               <Text style = {styles.submitButtonText}> Add </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default InputsUser

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