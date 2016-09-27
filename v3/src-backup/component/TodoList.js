/**
 * Created by sunsu on 2016/9/14.
 */
import React ,{Component} from 'react'
import Todo from './Todo'
export default class TodoList extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.todos.map((todo,index)=>
                        <Todo {...todo} key={index} onClick={()=>this.props.onClick(index)}></Todo>
                    )
                }
            </ul>
        )
    }
}