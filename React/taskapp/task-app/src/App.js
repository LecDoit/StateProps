import React,{Component} from 'react'
import OverviewList from './components/Overview.js'



class App extends Component {
  constructor(props){
      super();
      this.state = {
        tasks: [11,22]
      }

  }

  gatherContent(){
  let content = document.getElementById('content').value
  this.setState({
    tasks:[...this.state.tasks,content]
  })

}

  render(){
    return (
        <div>
            <div>
              <input id = 'content'></input>
              <button id='submit--button' onClick ={()=>this.gatherContent()}  >Submit</button>
            </div>
            {<OverviewList tasksArr={this.state.tasks} />}
        </div>
    );

  }



  
}


export default App;


