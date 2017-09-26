import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import HttpExample from '../Components/Get.js'
import About from '../Components/About.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {HttpExample} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
      </Scene>
   </Router>
)
export default Routes