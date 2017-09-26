import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class UpdateForm extends Component {
  state = {
      name: '',
      price: ''
   }
   handleName = (text) => {
      this.setState({ name: text })
   }
   handlePrice = (text) => {
      this.setState({ price: text })
   }

   onButtonPressUpdate = (id, name, price) => {
      var data = {
         "name": name,
         "price": price
      }
      updateProduct(id, data)
      Alert.alert("You have updated this Product!")
   };

   render(){
      return (
         <View style = {styles.container}>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Price"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePrice}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.onButtonPressUpdate(this.props._id, this.state.name, this.state.price) 
               }>
               <Text style = {styles.submitButtonText}> Edit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default UpdateForm

const styles = StyleSheet.create({
   container: {
      paddingTop: 15,
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
   }
})

var ao = StyleSheet.create({
   touch : {flex:1, alignItems:"center", borderWidth:2, borderColor: "red"},
   view :{flex:1, backgroundColor:"white", alignItems:"center"},
   id :{color:"red", fontSize:10},
   title :{color:"blue", fontSize:25},
   body :{color:"black", fontSize:15},
   back:{backgroundColor:"blue", color:"white", width:100, padding:15}
});