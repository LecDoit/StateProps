import React,{Component} from 'react'
import {SubButt} from './components/Overview.js'
import {InputField} from './components/Overview.js'


class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div>

          <InputField/>
          <SubButt/>
      
        </div>
    );
  }
}



export default App;
