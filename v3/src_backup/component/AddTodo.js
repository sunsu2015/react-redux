/**
 * Created by sunsu on 2016/9/14.
 */
import React ,{Component} from 'react'

export default class AddTodo extends Component{

    render(){
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={()=>this.handle()}>Add</button>
            </div>
        );
    }
    handle(){
        const node = this.refs.input;
        const text =  node.value.trim();
        this.props.onAddClick(text);
        node.value="";
    }
}