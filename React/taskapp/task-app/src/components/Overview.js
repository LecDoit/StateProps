import React , { Component}from "react" ;



//create new component and logic

class OverviewList extends Component{
    constructor(props){
        super();

    }




    render(){

      
        return (
            <div>
                <p>
                    {this.props.tasksArr.map((items,i)=> <li key={i}> {items} </li>)}
                </p>

            </div>
        )
    }

}

export default OverviewList