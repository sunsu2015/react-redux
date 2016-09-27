/**
 * Created by sunsu on 2016/9/14.
 */
import React ,{Component} from 'react'

export  default class Todo extends Component{
    render(){
        return (
            <li onClick={()=>this.props.onClick()}
                style={{
                    textDecoration:this.props.completed?'line-through':'none'
                }}
            >
                {this.props.text}
            </li>
        )
    }
}