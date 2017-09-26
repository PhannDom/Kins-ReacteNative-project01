import React, {Component} from "react";
import {Text, View, Navigator} from "react-native";
import DanhSach from "../Components/DanhSach.js";
import ChiTiet from "../Components/ChiTiet.js";
import HttpExample from "../Components/Get.js";
import HttpExample02 from "../Components/Post.js";
import HttpExample04 from "../Components/Delete.js";

export default class App extends Component{
	 state = {
      pass: ''
   }
  renderScene(route, navigator){
    switch(route.name){
      case "danhsach": return(
        <DanhSach chonCaSi={(a,b,c)=>{
              navigator.push({
                name:"chitiet",
                thamso:{hoten:a, hinh:b, mota:c}
              })
        }} />
      );
      case "chitiet": return(
        <ChiTiet clickBack={()=>{
                  navigator.pop()
                 }}
                 
        />
      );
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
      case "delete": return(
        <HttpExample04 clickBack={()=>{
                  navigator.pop()
                 }}
        />
      );
    }
  }
  render(){
    return(
    
	    	<Navigator 
				initialRoute={{name:danhsach}}
        		renderScene={this.renderScene}
	   		/>
    )
  }
}
