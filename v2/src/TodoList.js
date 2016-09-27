import React,{Component,PropTypes} from 'react';
import Todo from './Todo';

export default class TodoList extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.todos.map((todo,index)=>
                        <Todo {...todo}
                        key={index}
                        onClick = {()=>this.props.onClick(index)} />
                    )
                }
            </ul>
        )
    }
}

TodoList.propTypes = {
    onClick:React.PropTypes.func.isRequired,
    todos:React.PropTypes.arrayOf(
        React.PropTypes.shape(
            {
                text:React.PropTypes.string.isRequired,
                completed:React.PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired    
}