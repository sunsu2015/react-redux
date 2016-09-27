import React,{Component,PropTypes} from 'react';

export default class AddTodo extends Component{
    render(){
        return(
            <div>
                <input type="text" ref="input"/>
                <button onClick={e=> this.handleClick(e)}>
                    Add
                </button>   
            </div>
        );
    }

    handleClick(e){
        console.log(1);
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick : React.PropTypes.func.isRequired
}