/**
 * Created by sunsu on 2016/9/18.
 */
import React,{Component} from 'react'

export default class Todo extends Component{
    render(){
        return(
            <li style={{textDecoration:this.props.completed?'line-through':'none'}}
                onClick={()=>this.props.onClick()}
            >
                {this.props.text}
            </li>
        )
    }
}