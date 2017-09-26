import React, {Component} from "react";
import {Text, View, TouchableOpacity, StyleSheet, Image, Navigator} from "react-native";
import HttpExample from "../Components/Get.js";
import HttpExample02 from "../Components/Post.js";

export default class ChiTiet extends Component{
	renderScene(route, navigator){
    switch(route.name){
      case "get": return(
        <HttpExample clickBack={()=>{
                  navigator.pop()
                 }}
        />
      );
      case "post": return(
        <HttpExample02 clickBack={()=>{
                  navigator.pop()
                 }}
        />
      );

    }
  }

  render(){
    return(
	    	<Navigator
	        	initialRoute={{name:"get"}}
	        	renderScene={this.renderScene}
	        	
	    	/>


    )
  }
}

var ao = StyleSheet.create({
  bao:{flex:1, backgroundColor:"yellow", justifyContent:"center", alignItems:"center"},
  hinh:{width:150, height:150},
  ten:{color:"blue", padding:10},
  back:{backgroundColor:"blue", color:"white", width:100, padding:15}
});
