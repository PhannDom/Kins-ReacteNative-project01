import React, {Component} from "react";
import {Text, View, ListView, Image, StyleSheet, TouchableOpacity} from "react-native";

export default class DanhSach extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource: new ListView.DataSource({
        rowHasChanged:(r1, r2) => r1!==r2
      }),
    }
  }
  render(){
    return(
      <ListView
        dataSource = {this.state.dataSource}
        renderRow  = {(row)=>
          <View style={ao.dong}>
            <TouchableOpacity onPress={()=>{this.props.chonCaSi(row.Ten, row.Hinh)}}>
            <Image style={ao.hinh} source={{uri:row.Hinh}} />
            </TouchableOpacity>
            <Text>{row.Ten}</Text>
          </View>
        }
      />
    )
  }
  componentDidMount(){
    var mang = [
      	new Products("Danh Sach San Pham", "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/13269296_682397885231696_4733766910655238765_n.jpg?oh=44d8ed07f52845720664c7cbdfaaca0e&oe=5A570C56"),
        new Products("Them San Pham", "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/13269296_682397885231696_4733766910655238765_n.jpg?oh=44d8ed07f52845720664c7cbdfaaca0e&oe=5A570C56"),

    ];
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(mang)
    });
  }
}

function Products(ten, hinh){
  this.Ten = ten;
  this.Hinh = hinh;
}

var ao = StyleSheet.create({
  dong:{justifyContent:"center", alignItems:"center", margin:20},
  hinh:{width:150, height:150}
});
